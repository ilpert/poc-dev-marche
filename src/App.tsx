import { useCallback, useEffect, useState } from "react";
import { Routes, Route, NavLink } from "react-router";
import HomePage from "./pages/HomePage";
import EventiPage from "./pages/EventiPage";
import EventDetailPage from "./pages/EventDetailPage";
import { cn } from "./lib/utils";
import { useMediaQuery } from "@uidotdev/usehooks";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");

  useEffect(() => {
    document.body.className =
      "antialiased min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50";
  }, []);


  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
    document.body.style.overflow = "auto";
  }, []);

  const openMenu = useCallback(() => {
    setIsMenuOpen(true)
     document.body.style.overflow = "hidden"
  },[])

  useEffect(() => {
    
    if (!isSmallDevice && isMenuOpen) {
      closeMenu();
    }
  }, [isSmallDevice]);

  

  return (
    <>
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-white/20 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between flex-wrap">
            <NavLink
              to="/"
              className="flex items-center space-x-2"
              onClick={() => closeMenu()}
            >
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">D</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                DevMarche
              </span>
            </NavLink>

            <button
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700 "
              aria-controls="navbar-default"
              aria-expanded="false"
              onClick={() => isMenuOpen ? closeMenu() : openMenu()}
            >
              {isMenuOpen ? (
                <>
                  <span className="sr-only">Close main menu</span>
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </>
              ) : (
                <>
                  <span className="sr-only">Open main menu</span>
                  <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 17 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 1h15M1 7h15M1 13h15"
                    />
                  </svg>
                </>
              )}
            </button>
            <div
              className={cn(
                "w-full md:block md:w-auto h-screen md:h-full ",
                !isMenuOpen && "hidden"
              )}
              id="navbar-default"
            >
              <div className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <NavLink
                 onClick={() => closeMenu()}
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-600 border-b-2 border-blue-600"
                      : "text-gray-600 hover:text-blue-600 transition-colors"
                  }
                  to="/eventi"
                >
                  Eventi Passati
                </NavLink>
              </div>
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

      {/* Scroll to Top Button */}
      <div className="flex justify-center py-8 ">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center justify-center w-12 h-12 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white rounded transition-all duration-300 hover:scale-110 hover:shadow-lg border border-gray-700 hover:border-gray-600"
          aria-label="Scroll to top"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      </div>

            {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">D</span>
              </div>
              <span className="text-xl font-bold">DevMarche</span>
            </div>
            <div className="text-sm text-gray-400 text-center md:text-right">
              <p>Copyright © {new Date().getFullYear()} DevMarche</p>
              <p>Powered by the community, for the community</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
