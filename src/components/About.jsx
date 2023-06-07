import { motion } from "framer-motion";

import conservarePredio from "../assets/images/conservare-predio.webp";

export const About = () => {
  return (
    <section
      className="flex w-full flex-col items-center justify-center bg-customDarkBg1 lg:mb-16"
      id="about"
    >
      <div className="custom-shape-divider-bottom-1665696614">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="custom-bg-dark2"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            className="custom-bg-dark1"
          ></path>
        </svg>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className=" mx-auto flex  flex-col justify-center bg-customDarkBg1 pb-8 pt-12 md:w-4/5 lg:flex-row lg:pb-20 lg:pt-24 xl:w-[1050px] 2xl:w-[1150px]">
          <div className="lg:mx-unset mx-auto flex w-3/4 flex-col lg:w-1/2">
            <span className="custom-block-subtitle">
              IMPRESSÕES QUE PRESERVAM SUA MARCA.
            </span>
            <h2 className="custom-block-big-title mb-8 mt-10 text-4xl lg:text-5xl">
              A Conservare Gráfica
            </h2>
            <p className="mb-6 leading-relaxed text-customGrayText lg:mb-12 lg:text-lg">
              A Gráfica Conservare é a escolha certa para que suas impressões
              sejam de alta qualidade e precisão. Somos uma empresa de Campo
              Grande - MS desde 2015 no mercado gráfico.
            </p>
            <a
              className="custom-button-colored mr-10 h-12 w-[210px] "
              href="https://goo.gl/maps/ZHGGhF6r8XpzDTiU7"
              target="_blank"
            >
              Ver localização
            </a>
          </div>
          <div className="mx-auto flex w-4/5 justify-center pt-16 lg:w-1/2 lg:pl-16 lg:pt-0">
            <img
              src={conservarePredio}
              alt="f1"
              className="custom-border-gray rounded-xl object-cover object-left"
            />
          </div>
        </div>
      </motion.div>
      <div className="custom-shape-divider-top-1665696661 w-full">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="custom-bg-dark2"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            className="custom-bg-dark1"
          ></path>
        </svg>
      </div>
    </section>
  );
};
