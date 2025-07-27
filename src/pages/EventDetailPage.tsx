import { useEffect, useMemo, useState } from "react";
import { useParams, NavLink } from "react-router";
import {
  CalendarDays,
  Clock,
  ArrowLeft,
  ExternalLink,
  Loader2,
  Play,
  User,
  Eye,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useEventMedia, useEvents } from "@/lib/swr";
import { formatDate, formatFullDate } from "@/lib/utils";

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
  author: number;
}

export default function EventDetailPage() {
  const params = useParams();
  const slug = params.slug as string;

  const { events, eventsError, eventsLoading } = useEvents();
  const event = (events || []).find((e: Event) => e.slug === slug);

  // Fetch media for thumbnails
  const { media } = useEventMedia();

  // Build media map
  const mediaMap = useMemo(() => {
    if (!media) return {};
    const map: Record<number, string> = {};
    for (const item of media) {
      if (item.id && item.source_url) {
        map[item.id] = item.source_url;
      }
    }
    return map;
  }, [media]);

  useEffect(() => {
    window.scrollTo(0, 0)
  },[])

  if (eventsLoading || !event) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center">
        <div className="flex items-center">
          <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
          <span className="ml-3 text-gray-600">Caricamento evento...</span>
        </div>
      </div>
    );
  }

  if (eventsError || !event) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center">
        <div className="text-center">
          <div className="bg-red-50 border border-red-200 rounded-lg p-8 max-w-md mx-auto">
            <h3 className="text-red-800 font-semibold mb-2">
              Evento non trovato
            </h3>
            <p className="text-red-600 mb-4">{eventsError}</p>
            <NavLink to="/eventi">
              <Button
                variant="outline"
                className="border-red-300 text-red-700 hover:bg-red-100"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Torna agli eventi
              </Button>
            </NavLink>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Breadcrumbs */}
      {/* <nav className="flex items-center space-x-2 text-sm text-gray-600">
        <NavLink to="/" className="hover:text-blue-600 transition-colors">
          Home
        </NavLink>
        <span>/</span>
        <NavLink to="/eventi" className="hover:text-blue-600 transition-colors">
          Eventi
        </NavLink>
        <span>/</span>
        <span className="text-gray-800 font-medium">Dettaglio evento</span>
      </nav> */}

      {/* Hero Section */}
      <section >
        <NavLink
          to="/eventi"
          className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Torna agli eventi
        </NavLink>

        {/* Event Header */}
        <div className="mb-8">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <Badge className="bg-blue-100 text-blue-700 border-blue-200">
              <CalendarDays className="w-4 h-4 mr-1" />
              {formatDate(event.date)}
            </Badge>
            <Badge variant="outline">
              <User className="w-4 h-4 mr-1" />
              DevMarche
            </Badge>
          </div>

          <h1
            className="text-3xl md:text-5xl font-bold mb-6 text-gray-800 leading-tight"
            dangerouslySetInnerHTML={{ __html: event.title.rendered }}
          />

          <div
            className="text-xl text-gray-600 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: event.excerpt.rendered }}
          />
        </div>

        {/* Featured Image */}
        <div className="mb-12">
          {/* <div className="h-64 md:h-96 bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-600 rounded-lg relative overflow-hidden"> */}
          <div className="h-64 md:h-96 rounded-lg relative overflow-hidden">
            {/* <div className="absolute inset-0 bg-black/20" /> */}
            {event.featured_media && mediaMap[event.featured_media] ? (
              <img
                src={mediaMap[event.featured_media]}
                alt={event.title.rendered}
                className="object-contain"
                // className=" bg-black/20 h-full w-full object-cover"
              />
            ) : (
              <div className="absolute inset-0 bg-black/20" />
            )}

            {/* <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 mb-1">
                  Evento DevMarche
                </h3>
                <p className="text-gray-600 text-sm">
                  {formatFullDate(event.date)}
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-20 px-4">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-800">
                  Dettagli dell'evento
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div
                  className="prose prose-lg max-w-none prose-headings:text-gray-800 prose-p:text-gray-600 prose-a:text-blue-600 prose-strong:text-gray-800"
                  dangerouslySetInnerHTML={{ __html: event.content.rendered }}
                />
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Event Info */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg">Informazioni Evento</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CalendarDays className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="font-medium text-gray-800">Data</p>
                    <p className="text-sm text-gray-600">
                      {formatFullDate(event.date)}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <User className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="font-medium text-gray-800">Organizzatore</p>
                    <p className="text-sm text-gray-600">DevMarche Community</p>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Link Evento Originale
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Video Notice */}
            <Card className="border-0 shadow-lg bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <Play className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-amber-800 mb-2">
                      Video e Materiali
                    </h3>
                    <p className="text-amber-700 text-sm mb-3">
                      Video e slide di questo evento potrebbero essere
                      disponibili su Vimeo.
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-amber-300 text-amber-700 hover:bg-amber-100"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Visualizza su Vimeo
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Share */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg">Condividi</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Condividi questo evento con la tua rete
                </p>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full justify-start">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    LinkedIn
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Twitter
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
