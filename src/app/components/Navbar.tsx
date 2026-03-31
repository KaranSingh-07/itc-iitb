import { useState } from "react";
import { NavLink } from "react-router";
import { Menu, X } from "lucide-react";
import { ImageWithFallback } from "./common/ImageWithFallback";
import iitbLogo from "../../assets/IITBlogo.png";
import logoImg from "../../assets/ITCLogo.png";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Tech Teams", path: "/events" },
    { name: "Cabinet", path: "/team" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-[#1e293b]/90 backdrop-blur-md sticky top-0 z-50 border-b border-slate-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* <div className="flex items-center gap-2">
            <ImageWithFallback 
              src={logoImg} 
              alt="ITC Logo" 
              className="h-10 w-auto object-contain" 
            />
          </div> */}
          <div className="flex items-center gap-3">
            <ImageWithFallback 
              src={iitbLogo} 
              alt="IITB Logo" 
              className="h-9 w-auto object-contain mix-blend-screen opacity-90" 
            />
            
            {/* Vertical Divider Line */}
            <div className="h-6 w-[1px] bg-slate-700" />

            <ImageWithFallback 
              src={logoImg} 
              alt="ITC Logo" 
              className="h-10 w-auto object-contain" 
            />
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-sm font-medium transition-colors hover:text-blue-400 ${
                      isActive ? "text-blue-400" : "text-slate-300"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </div>
          
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-700 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#1e293b] border-b border-slate-700">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium ${
                    isActive
                      ? "bg-slate-800 text-blue-400"
                      : "text-slate-300 hover:bg-slate-700 hover:text-white"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
