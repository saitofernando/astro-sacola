import { motion } from "framer-motion";

import bags from "../assets/images/bags-hero.png";
import { WhatsappIcon } from "../assets/icons/WhatsappIcon";

export const Hero = () => {
  return (
    <section
      className="hero-bg-gradient flex w-full items-center justify-center"
      id="home"
    >
      <div className="flex w-full flex-col items-center justify-center pt-16 text-center md:w-[800px] md:pt-16 lg:pt-20 xl:w-[1280px]">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-6 mt-16 text-sm font-bold text-customOrange sm:mt-32 sm:text-base  lg:text-2xl">
            NÃO PERCA ESSA OPORTUNIDADE !
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          <div className="px-8 text-4xl font-bold  text-white  sm:text-5xl  lg:text-6xl">
            <span>Sacolas de Papel Personalizadas</span>
          </div>
          <div className="mt-2 px-8 text-lg font-bold tracking-wide text-white sm:mt-2 sm:px-20  sm:text-3xl  md:px-24 lg:px-24 lg:text-5xl xl:text-5xl">
            em até 4x sem juros.
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="mt-10 px-12 text-lg text-white sm:px-48 sm:text-base lg:text-xl xl:text-xl ">
            Aproveite agora a nossa promoção especial e adquira suas sacolas de
            papel personalizadas com até 4x sem juros no cartão de crédito!
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div className="sm:mb-22 mb-4 mt-14 flex flex-col justify-center gap-2 sm:flex-row">
            <a
              className="custom-button-colored mb-2 mr-0 h-12 w-64 gap-2 px-5 sm:mb-0 sm:mr-1"
              href="https://wa.me/556732539212?text=Ol%C3%A1%2C+gostaria+de+um+or%C3%A7amento+de+sacolas+personalizadas."
              target="_blank"
            >
              Falar com um atendente
              <WhatsappIcon />
            </a>
            <a
              className="flex  h-12 w-64 cursor-pointer items-center justify-center rounded-xl  border border-solid border-customPrimary bg-customDarkBg2 font-bold text-white transition hover:bg-customDarkBg3"
              href="#features"
            >
              Ver modelos de sacolas
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10, zIndex: 20 }}
          animate={{ opacity: 1, y: 0, zIndex: 20 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div className="sm:mr-20 lg:mb-12">
            <img
              src={bags}
              alt="123"
              className="object-cover pr-7 lg:h-[40rem] lg:pr-0 "
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
