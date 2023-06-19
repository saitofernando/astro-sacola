import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { ConservareLogo } from "../assets/logos/ConservareLogo";
import { WhatsappIcon } from "../assets/icons/WhatsappIcon";

const navbarLinks = [
  { label: "Início", href: "#home", ariaLabel: "Início" },
  {
    label: "Modelos de Sacola",
    href: "#features",
    ariaLabel: "Modelos de Sacola",
  },
  { label: "Clientes", href: "#feedback", ariaLabel: "Clientes" },
  { label: "Sobre", href: "#about", ariaLabel: "Sobre Nós" },
  { label: "Dúvidas", href: "#FAQ", ariaLabel: "Dúvidas" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed z-40 flex h-20 w-full flex-col items-center justify-center bg-customDarkBg1 bg-customDarkBgTransparent backdrop-blur-xl">
      <div className="relative flex w-11/12 items-center justify-between xl:w-10/12 2xl:w-[1280px]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          exit={{ opacity: 0 }}
        >
          <a className="navbar-link" href="#home" aria-label="Home">
            <div className="flex grow basis-0 items-center justify-start">
              <ConservareLogo />
            </div>
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          exit={{ opacity: 0 }}
        >
          <div className="hidden h-full pb-2 pl-12 lg:flex">
            {navbarLinks.map(({ href, label, ariaLabel }) => (
              <a
                className="navbar-link"
                href={href}
                aria-label={ariaLabel}
                key={label}
              >
                {label}
              </a>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          exit={{ opacity: 0 }}
        >
          <div className="hidden grow basis-0 justify-end lg:flex">
            <a
              className="custom-border-gray flex items-center
           gap-1 rounded-xl  border-gray-700 bg-customDarkBg2 pb-2 pl-6 pr-8 pt-2 text-sm text-white hover:bg-customDarkBg3"
              href="https://wa.me/556732539212?text=Ol%C3%A1%2C+gostaria+de+um+or%C3%A7amento+de+sacolas+personalizadas."
              target="_blank"
              aria-label="WhatsApp"
            >
              <span className="font-bold">WhatsApp</span>
              <WhatsappIcon />
            </a>
          </div>
        </motion.div>
        <div
          className="flex cursor-pointer flex-col  rounded-md border border-solid border-gray-300 px-2 py-3 hover:bg-customDarkBg2 lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="mb-1 h-0.5 w-5  bg-gray-300"></div>
          <div className="mb-1 h-0.5 w-5  bg-gray-300"></div>
          <div className="h-0.5 w-5 bg-gray-300 "></div>
        </div>
      </div>
      {/* Mobile navbar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute left-0 top-4 z-50 mt-16 flex w-full  flex-col items-center gap-10 
        border-y border-solid border-customDarkBg3 bg-customDarkBg1 pb-10 pt-10 lg:hidden
        "
            >
              {navbarLinks.map(({ label, href, ariaLabel }) => (
                <a
                  key={href}
                  className="navbar-link"
                  href={href}
                  onClick={() => setIsOpen(false)}
                  aria-label={ariaLabel}
                >
                  {label}
                </a>
              ))}
              <a
                className="custom-border-gray flex gap-2
           rounded-xl border-gray-700  bg-customDarkBg2 pb-2 pl-6 pr-8 pt-2 text-sm text-white hover:bg-customDarkBg3"
                href="https://wa.me/556732539212?text=Ol%C3%A1%2C+gostaria+de+um+or%C3%A7amento+de+sacolas+personalizadas."
                target="_blank"
              >
                <span className="font-bold">WhatsApp</span>
                <WhatsappIcon />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
