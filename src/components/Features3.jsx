import { motion } from "framer-motion";

import bagDuplex from "../assets/images/bags-duplex.webp";
import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";

export const Features3 = () => {
  return (
    <section className="xl:m mb-8 mt-20 w-full bg-customDarkBg2 pt-[2rem] sm:mb-16  sm:mt-16 md:pt-[12vw]  lg:pt-12 xl:mt-0">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="mx-auto flex w-11/12 flex-wrap items-center md:pl-4 xl:w-[1300px] xl:pl-16 xl:pr-16 2xl:w-[1450px]">
          <div className="mb-12 w-full lg:mb-0 lg:w-1/2">
            <div className="lg:w-unset mx-auto w-11/12 sm:w-4/5 md:w-3/4 lg:mx-auto">
              <span className="custom-block-subtitle">PREMIUM</span>
              <h2 className="custom-block-big-title mb-8 mt-6 text-4xl lg:text-5xl">
                Sacolas de Papel Duplex
              </h2>
              <p className="mb-10 text-lg leading-normal text-customGrayText">
                As sacolas de papel duplex são uma escolha sofisticada, com
                excelente acabamento interno e externo. Com gramatura de 190g,
                há diversas opções de acabamentos adicionais, alças e
                possibilidade de laminação brilho ou fosca.
              </p>
              <ul className="mb-6 text-white">
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>Sacolas mais elegantes</span>
                </li>
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>Mais opções de acabamentos</span>
                </li>
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>Maior durabilidade e resistência</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mx-auto flex w-3/4 flex-wrap justify-center sm:pr-8 lg:-mx-4 lg:w-1/2 lg:pl-4 lg:pt-10 xl:px-8">
            <div className="lg:mb-12">
              <img
                src={bagDuplex}
                alt="Sacola de Papel Personalizada Duplex Premium"
                className="h-52 w-full object-cover sm:h-full"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
