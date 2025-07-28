import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Badge } from "../components/ui/badge";
import {
  CalendarDays,
  Users,
  MessageSquare,
  Github,
  Mail,
  ExternalLink,
  Zap,
  Heart,
  Building,
  ArrowRight,
} from "lucide-react";
import { NavLink } from "react-router";

export default function HomePage() {
  return (
    <>
      <section className="py-12">
        <div className="text-center">
          <Badge className="mb-6 bg-blue-100 text-blue-700 border-blue-200">
            <Zap className="w-4 h-4 mr-1" />
            Community Tech delle Marche
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent leading-tight">
            DevMarche
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            La community marchigiana dedicata allo sviluppo software.
            Organizziamo eventi di{" "}
            <span className="font-semibold text-blue-600">
              rilevanza locale e nazionale
            </span>
            per sviluppatori e tech enthusiast.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <NavLink to="https://github.com/DevMarche/eventi" target="_blank">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3 text-lg"
              >
                <Github className="w-5 h-5 mr-2" />
                Proponi un Talk
              </Button>
            </NavLink>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-blue-200 text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg"
            >
              <Users className="w-5 h-5 mr-2" />
              Unisciti alla Community
            </Button>
          </div>
        </div>
      </section>

      <div className=" px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12 order-last lg:order-first">
            {/* Newsletter Section */}
            <Card className="border-0 shadow-xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <Mail className="w-6 h-6 mr-3" />
                  Newsletter DevMarche
                </CardTitle>
                <CardDescription className="text-blue-100 text-lg">
                  Rimani aggiornato su tutti gli eventi in programma!
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Input
                    type="email"
                    placeholder="Il tuo indirizzo e-mail"
                    className="bg-white/20 border-white/30 placeholder:text-blue-100 text-white flex-1"
                  />
                  <Button
                    variant="secondary"
                    className="bg-white text-blue-600 hover:bg-blue-50 whitespace-nowrap"
                  >
                    Iscriviti Ora
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Social Networks */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-800">
                  Seguici sui nostri social network
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <a
                    href="https://t.me/+j-h3ljrMZV8zZmVk"
                    target="_blank"
                    className="group"
                  >
                    <Card className="h-full border-2 border-blue-100 hover:border-blue-300 transition-all duration-300 hover:shadow-lg">
                      <CardContent className="p-6 text-center">
                        <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <MessageSquare className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="font-semibold text-gray-800 mb-2">
                          Telegram
                        </h3>
                        <p className="text-gray-600 text-sm">
                          Il cuore pulsante della nostra community
                        </p>
                      </CardContent>
                    </Card>
                  </a>

                  <a
                    href="https://www.linkedin.com/company/devmarche/"
                    target="_blank"
                    className="group"
                  >
                    <Card className="h-full border-2 border-blue-100 hover:border-blue-300 transition-all duration-300 hover:shadow-lg">
                      <CardContent className="p-6 text-center">
                        <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <div className="w-8 h-8 bg-white rounded text-blue-600 flex items-center justify-center font-bold text-sm">
                            in
                          </div>
                        </div>
                        <h3 className="font-semibold text-gray-800 mb-2">
                          LinkedIn
                        </h3>
                        <p className="text-gray-600 text-sm">
                          Tutte le nostre iniziative in tempo reale
                        </p>
                      </CardContent>
                    </Card>
                  </a>

                  <a
                    href="https://www.facebook.com/groups/developermarche"
                    target="_blank"
                    className="group "
                  >
                    <Card className="h-full border-2 border-blue-100 hover:border-blue-300 transition-all duration-300 hover:shadow-lg">
                      <CardContent className="p-6 text-center">
                        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <span className="text-white font-bold text-xl">
                            f
                          </span>
                        </div>
                        <h3 className="font-semibold text-gray-800 mb-2">
                          Facebook
                        </h3>
                        <p className="text-gray-600 text-sm">
                          Unisciti al nostro gruppo Facebook
                        </p>
                      </CardContent>
                    </Card>
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Speaker CTA */}
            <Card className="border-0 shadow-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-4">
                  Vuoi partecipare come speaker?
                </h2>
                <p className="text-lg mb-6 text-purple-100">
                  Invia la tua proposta con una nuova issue nel repository
                  DevMarche!
                </p>
                <p className="text-sm mb-6 text-purple-200">
                  ... sì, lo sappiamo, è piuttosto nerd come strumento per
                  gestire una Call for Sessions 😉
                </p>
                <NavLink
                  to="https://github.com/DevMarche/eventi"
                  target="_blank"
                >
                  <Button
                    variant="secondary"
                    size="lg"
                    className="bg-white text-purple-600 hover:bg-purple-50"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    Apri una Issue
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </NavLink>
              </CardContent>
            </Card>

            {/* Sponsors Section */}
            <section id="sponsor">
              <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
                SPONSOR & SUPPORTERS
              </h2>

              {/* Platinum */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-center mb-8 text-gray-700">
                  PLATINUM
                </h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <Card className="border-2 border-yellow-200 bg-gradient-to-br from-yellow-50 to-orange-50 hover:shadow-lg transition-shadow">
                    <CardContent className="p-8 text-center">
                      <img
                        src="https://ext.same-assets.com/440214517/1690386020.png"
                        alt="Blexin"
                        className="max-h-20 mx-auto mb-4"
                      />
                      <h4 className="font-semibold text-gray-800">Blexin</h4>
                    </CardContent>
                  </Card>
                  <Card className="border-2 border-yellow-200 bg-gradient-to-br from-yellow-50 to-orange-50 hover:shadow-lg transition-shadow">
                    <CardContent className="p-8 text-center">
                      <img
                        src="https://ext.same-assets.com/440214517/581229715.png"
                        alt="EllyCode"
                        className="max-h-20 mx-auto mb-4"
                      />
                      <h4 className="font-semibold text-gray-800">EllyCode</h4>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Silver */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-center mb-8 text-gray-700">
                  SILVER
                </h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <Card className="border-2 border-gray-200 bg-gradient-to-br from-gray-50 to-slate-50 hover:shadow-lg transition-shadow">
                    <CardContent className="p-8 text-center">
                      <img
                        src="https://ext.same-assets.com/440214517/3595315307.png"
                        alt="APRA"
                        className="max-h-20 mx-auto mb-4"
                      />
                      <h4 className="font-semibold text-gray-800">APRA</h4>
                    </CardContent>
                  </Card>
                  <Card className="border-2 border-gray-200 bg-gradient-to-br from-gray-50 to-slate-50 hover:shadow-lg transition-shadow">
                    <CardContent className="p-8 text-center">
                      <img
                        src="https://ext.same-assets.com/440214517/309159466.png"
                        alt="LowCode Italia"
                        className="max-h-20 mx-auto mb-4"
                      />
                      <h4 className="font-semibold text-gray-800">
                        LowCode Italia
                      </h4>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <Card className="border-2 border-green-200 bg-gradient-to-br from-green-50 to-emerald-50">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-gray-800 flex items-center">
                      <Building className="w-5 h-5 mr-2 text-green-600" />
                      Sei un'azienda?
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Diventa sponsor e supporta la community tech delle Marche
                    </p>
                    <Button className="w-full bg-green-600 hover:bg-green-700">
                      Sponsorizzazioni
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-2 border-pink-200 bg-gradient-to-br from-pink-50 to-rose-50">
                  <CardContent className="p-6 h-full flex flex-col justify-between">
                    <h3 className="text-xl font-semibold mb-3 text-gray-800 flex items-center">
                      <Heart className="w-5 h-5 mr-2 text-pink-600" />
                      Sei un privato?
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Supporta la community con una donazione
                    </p>
                    <Button className="w-full bg-pink-600 hover:bg-pink-700">
                      Donazioni
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Upcoming Events */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <CalendarDays className="w-5 h-5 mr-2 text-blue-600" />
                  Prossimi eventi
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 text-center py-8">
                  Nessun evento in arrivo
                </p>
              </CardContent>
            </Card>

            {/* Recent Events */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <CalendarDays className="w-5 h-5 mr-2 text-green-600" />
                  Eventi recenti
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <NavLink to="/eventi/summer-ai-afternoon" className="block">
                  <div className="border-l-4 border-blue-500 pl-4 hover:bg-blue-50 p-3 rounded-r transition-colors">
                    <h4 className="font-semibold text-gray-800">
                      Summer AI Afternoon
                    </h4>
                    <p className="text-sm text-gray-600">10 Luglio 2025</p>
                  </div>
                </NavLink>
                <NavLink to="/eventi/pomeriggio-frontend" className="block">
                  <div className="border-l-4 border-green-500 pl-4 hover:bg-green-50 p-3 rounded-r transition-colors">
                    <h4 className="font-semibold text-gray-800">
                      Pomeriggio Frontend
                    </h4>
                    <p className="text-sm text-gray-600">2 Luglio 2025</p>
                  </div>
                </NavLink>
                <NavLink
                  to="/eventi/gaming-day-2-progettare-e-sviluppare-videogiochi"
                  className="block"
                >
                  <div className="border-l-4 border-purple-500 pl-4 hover:bg-purple-50 p-3 rounded-r transition-colors">
                    <h4 className="font-semibold text-gray-800">
                      Gaming Day 2
                    </h4>
                    <p className="text-sm text-gray-600">8 Maggio 2025</p>
                  </div>
                </NavLink>
                <div className="pt-4 border-t">
                  <NavLink to="/eventi">
                    <Button
                      variant="outline"
                      className="w-full text-blue-600 border-blue-200 hover:bg-blue-50"
                    >
                      <CalendarDays className="w-4 h-4 mr-2" />
                      Vedi tutti gli eventi
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </NavLink>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Supporters List */}
        <Card className="mt-12 border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-center">
              ELENCO DONATORI STAGIONE 2024/25
            </CardTitle>
            <CardDescription className="text-center">
              Lista in ordine alfabetico dei supporter che hanno fornito il
              consenso alla pubblicazione
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 text-sm">
              {[
                "Alessandro Attene",
                "Alessandro D'Angelo",
                "Alessandro Giorgetti",
                "Alessio Caldarigi",
                "Andrea Cognini",
                "Antonio Liccardi",
                "Carlo Bertini",
                "Carlo Pagliei",
                "Christian Lillini",
                "Daniela Bonvini",
                "Daniele Agosti",
                "Daniele Scarinci",
                "Danilo Dominici",
                "Diego Bonura",
                "Diego Guidi",
                "Diego Santinelli",
                "Emanuele Bellini",
                "Fabio Del Bene",
                "Fabio Organtini",
                "Fabrizio Monti",
                "Federica Ramazzotti",
                "Filippo Amaduzzi",
                "Gianni Bortolo Bossini",
                "Giordano Contigiani",
                "Giorgio Mandolini",
                "Giovanni Crudo",
                "Giulia Leonardi",
                "Giuliano Latini",
                "Giuseppe Vallesi",
                "Guido Buldrighini",
                "Leonardo Montini",
                "Lorenzo Massacci",
                "Lorenzo Pomili",
                "Luca Bucari",
                "Luca Petrini",
                "Marco Bramucci",
                "Marco Gentilozzi",
                "Marco Mancinelli",
                "Massimo Di Giulio",
                "Matteo Galletti",
                "Matteo Pierangeli",
                "Mauro Morici",
                "Mauro Piccotti",
                "Michele Aponte",
                "Michele Focanti",
                "Mirco Damiani",
                "Moreno Gentili",
                "Nicola Bellagamba",
                "Paolo Compieta",
                "Riccardo Mancinelli",
                "Roberto Rossi",
                "Roberto Sileoni",
                "Samuele Pacioni",
                "Stefano Ottaviani",
                "Valerio Narcisi",
                "William Verdolini",
              ].map((name, index) => (
                <div
                  key={index}
                  className="p-2 bg-gray-50 rounded text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  {name}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
