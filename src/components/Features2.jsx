import { motion } from "framer-motion";

import bagOffset from "../assets/images/bags-offset.webp";
import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";

export const Features2 = () => (
  <section
    className="mb-10 mt-12 w-full bg-customDarkBg2 pt-4 sm:mt-20 lg:my-20"
    id="features"
  >
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <div className="mx-auto flex w-11/12 flex-wrap items-center md:pl-4 xl:w-[1300px] xl:pl-16 xl:pr-16 2xl:w-[1450px]">
        <div className="order-last mx-auto flex w-11/12 flex-wrap justify-center sm:w-3/4 sm:pr-8 lg:order-first lg:-mx-4 lg:w-1/2">
          <div className="mb-8 flex w-full flex-col justify-center px-2 md:pl-8 lg:mb-0 lg:pl-16">
            <div className="lg:mb-12">
              <img
                src={bagOffset}
                alt="Sacola de Papel Personalizada Offset"
                className="h-64 w-full object-cover sm:h-full"
              />
            </div>
          </div>
        </div>

        <div className="mb-12 w-full lg:mb-0 lg:w-1/2 xl:pl-8">
          <div className="lg:w-unset mx-auto w-11/12 sm:w-4/5 md:w-3/4 lg:mx-auto">
            <span className="custom-block-subtitle">ECÔNOMICA</span>
            <h2 className="custom-block-big-title mb-8 mt-6 text-4xl lg:text-5xl">
              Sacolas de Papel Offset
            </h2>
            <p className="mb-12 text-lg leading-normal text-customGrayText">
              As sacolas de papel offset são as preferidas dos lojistas e
              agências. Bonito e versátil, permite diversos tipos de acabamentos
              e alças.
            </p>
            <ul className="mb-6 text-white">
              <li className="mb-4 flex">
                <CheckArrowIcon />
                <span>A mais utilizada no mercado</span>
              </li>
              <li className="mb-4 flex">
                <CheckArrowIcon />
                <span>Gramatura de 150g ou 180g</span>
              </li>
              <li className="mb-4 flex">
                <CheckArrowIcon />
                <span>Impressão Colorida em ambos lados</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);
