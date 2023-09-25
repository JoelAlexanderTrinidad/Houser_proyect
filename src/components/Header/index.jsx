import { useState } from "react";

export const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="flex items-center justify-between border-b-2 py-4 px-10">
      <div>LOGO</div>
      <nav>
        <section className="MOBILE-MENU flex lg:hidden ">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-6 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-6 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-6 animate-pulse bg-gray-600"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}> 
            <div
              className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between gap-10">
              <li className="border-b border-gray-400 uppercase">
                <a href="/about">Venta</a>
              </li>
              <li className="border-b border-gray-400 uppercase">
                <a href="/portfolio">Alquiler</a>
              </li>
              <li className="border-b border-gray-400 uppercase">
                <a href="/contact">Acceder</a>
              </li>
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
          <li>
            <a href="/about">Venta</a>
          </li>
          <li>
            <a href="/portfolio">Alquiler</a>
          </li>
          <li>
            <a href="/contact">Acceder</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}