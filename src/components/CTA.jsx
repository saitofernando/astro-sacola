import { motion } from "framer-motion";

import { WhatsappIcon } from "../assets/icons/WhatsappIcon";

export const Cta = () => (
  <section className="bg-customDarkBg1 py-10 sm:py-16 lg:py-12">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Orçamento sem compromisso
          </h2>
          <p className="mt-4 text-lg font-medium text-customGrayText">
            Faça sua marca se destacar com sacolas de papel personalizadas
            exclusivas
          </p>

          <div className="sm:mb-22 mb-3 mt-6 flex flex-col items-center gap-2 sm:flex-row sm:justify-center">
            <a
              className="custom-button-colored mb-2 mr-0 h-12 w-64 gap-2 px-5 sm:mb-0 sm:mr-1"
              href="https://wa.me/556732539212?text=Ol%C3%A1%2C+gostaria+de+um+or%C3%A7amento+de+sacolas+personalizadas."
              target="_blank"
            >
              Falar com um atendente
              <WhatsappIcon />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);
