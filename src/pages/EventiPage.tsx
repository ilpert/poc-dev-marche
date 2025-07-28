import { useEffect, useState } from "react";
import { NavLink } from "react-router";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import {
  ArrowLeft,
  CalendarDays,
  Clock,
  ExternalLink,
  Loader2,
  Play,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import React from "react";
import { useEventMedia, useEvents } from "@/lib/swr";
import { formatDate, stripHtml } from "@/lib/utils";

interface Event {
  id: number;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  date: string;
  link: string;
  slug: string;
  featured_media?: number;
  categories: number[];
}

export default function EventiPage() {
  // Fetch events as before
  const { events, eventsError, eventsLoading } = useEvents();

  // Fetch media for thumbnails
  const { media } = useEventMedia();

  // Build media map
  const mediaMap = React.useMemo(() => {
    if (!media) return {};
    const map: Record<number, string> = {};
    for (const item of media) {
      if (item.id && item.source_url) {
        map[item.id] = item.source_url;
      }
    }
    return map;
  }, [media]);

  return (
    <>
      <section className="mx-auto">
        <div className="text-center mb-12">
          <Badge className="mb-6 bg-blue-100 text-blue-700 border-blue-200">
            <CalendarDays className="w-4 h-4 mr-1" />
            Eventi Passati
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
            I Nostri Eventi
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Scopri tutti gli eventi che abbiamo organizzato per la community
            DevMarche. Talks, workshop e meetup dedicati al mondo dello sviluppo
            software.
          </p>
        </div>

        {/* Alert Box */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-lg p-6">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <Play className="w-3 h-3 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-amber-800 mb-2">
                  Video e Slide
                </h3>
                <p className="text-amber-700 mb-4">
                  Video e slide di alcuni vecchi eventi sono attualmente
                  disponibili solo su Vimeo.
                </p>
                <a href="https://vimeo.com/devmarche" target="_blank">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-amber-300 text-amber-700 hover:bg-amber-100"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Vai su Vimeo
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="pb-20 ">
        {eventsLoading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
            <span className="ml-3 text-gray-600">Caricamento eventi...</span>
          </div>
        ) : eventsError ? (
          <div className="text-center py-20">
            <div className="bg-red-50 border border-red-200 rounded-lg p-8 max-w-md mx-auto">
              <h3 className="text-red-800 font-semibold mb-2">Errore</h3>
              <p className="text-red-600">{eventsError}</p>
            </div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
            {events.map((event: any) => (
              <Card
                key={event.id}
                className="group border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm overflow-hidden flex flex-col  hover:scale-105"
              >
                <NavLink to={`/eventi/${event.slug}`}>
                  <div className="relative">
                    {/* Featured Image Placeholder */}
                    <div className="aspect-video bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-600 relative overflow-hidden rounded-t-lg">
                      {event.featured_media &&
                      mediaMap[event.featured_media] ? (
                        <img
                          loading="lazy"
                          src={mediaMap[event.featured_media]}
                          alt={event.title.rendered}
                          className="w-full h-full object-fill"
                        />
                      ) : (
                        <img
                          loading="lazy"
                          src="https://picsum.photos/1920/1800"
                          alt="Event placeholder"
                          className="w-full h-full object-fill"
                        />
                      )}
                      <div className="absolute bottom-4 left-4 right-4">
                        <Badge className="bg-white/90 text-gray-800 backdrop-blur-sm">
                          <Clock className="w-3 h-3 mr-1" />
                          {formatDate(event.date)}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </NavLink>

                <NavLink to={`/eventi/${event.slug}`}>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg leading-tight group-hover:text-blue-600 transition-colors">
                      <div
                        dangerouslySetInnerHTML={{
                          __html: event.title.rendered,
                        }}
                      />
                    </CardTitle>
                  </CardHeader>
                </NavLink>
                <CardContent className="pt-0 flex-1 flex flex-col">
                  <CardDescription className="text-gray-600 mb-4 line-clamp-3 flex-1">
                    {stripHtml(event.excerpt.rendered)}
                  </CardDescription>

                  <NavLink
                    to={`/eventi/${event.slug}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors mt-auto"
                  >
                    Leggi di più
                    <ArrowLeft className="w-4 h-4 ml-1 rotate-180" />
                  </NavLink>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
