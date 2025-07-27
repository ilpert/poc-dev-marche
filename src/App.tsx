import { useEffect } from "react";
import { Routes, Route, NavLink } from "react-router";
import HomePage from "./pages/HomePage";
import EventiPage from "./pages/EventiPage";
import EventDetailPage from "./pages/EventDetailPage";

export default function App() {
  useEffect(() => {
    // This runs only on the client after hydration
    document.body.className =
      "antialiased min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50";
  }, []);

  return (
    <>
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-white/20 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <NavLink to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">D</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                DevMarche
              </span>
            </NavLink>
            <div className="hidden md:flex items-center space-x-8">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-600 hover:text-blue-600 transition-colors"
                }
                to="/eventi"
              >
                Eventi Passati
              </NavLink>
              {/* <NavLink
                to="/organizza"
                className={({ isActive, isPending }) =>
                    isActive
                      ? "text-blue-600 border-b-2 border-blue-600"
                      : "text-gray-600 hover:text-blue-600 transition-colors"
                  }
              >
                Organizza Evento
              </NavLink>
              <NavLink
                to="/sponsor"
                className={({ isActive, isPending }) =>
                    isActive
                      ? "text-blue-600 border-b-2 border-blue-600"
                      : "text-gray-600 hover:text-blue-600 transition-colors"
                  }
              >
                Sponsor & Supporter
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive, isPending }) =>
                    isActive
                      ? "text-blue-600 border-b-2 border-blue-600"
                      : "text-gray-600 hover:text-blue-600 transition-colors"
                  }
              >
                About
              </NavLink> */}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/eventi" element={<EventiPage />} />
          <Route path="/eventi/:slug" element={<EventDetailPage />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">D</span>
              </div>
              <span className="text-xl font-bold">DevMarche</span>
            </div>
            <div className="text-sm text-gray-400 text-center md:text-right">
              <p>Copyright © 2019 DevMarche</p>
              <p>Powered by the community, for the community</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
