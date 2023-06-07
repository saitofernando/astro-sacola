import { motion } from "framer-motion";

import { QuoteIcon } from "../assets/icons/QuoteIcon";

const testimonialsData = [
  {
    customerName: "Mariá Pereira",
    customerTitle: "⭐⭐⭐⭐⭐",
    content:
      "Para mim não tem melhor lugar em atendimento, agilidade e qualidade em Campo Grande! Todos os serviços que fiz até hoje ficaram ótimos.",
    image:
      "https://lh3.googleusercontent.com/a-/AD_cMMQIZLRkfA_XIkw0JLPUAUUz-G66HsXqxSw-AVotiA=w60-h60-p-rp-mo-br100",
  },
  {
    customerName: "Bruna Ojeda",
    customerTitle: "⭐⭐⭐⭐⭐",
    content:
      "Experiência Maravilhosa! Atendimento incrível, solucionaram várias duvidas, fizeram testes, e me entregaram meus pedidos extremamente rápido e com uma qualidade perfeita!! Muito Obrigada a toda equipe!",
    image:
      "https://lh3.googleusercontent.com/a-/AD_cMMQ8JiVeCWBNJperRsuDtuQKZw41WZE9jLAUlr4y0Mg=w60-h60-p-rp-mo-br100",
  },
  {
    customerName: "Bruno Damasceno",
    customerTitle: "⭐⭐⭐⭐⭐",
    content:
      "Sempre sou muito bem atendido na Conservare! Equipe ágil e impressão de excelente qualidade, recomendo!",
    image:
      "https://lh3.googleusercontent.com/a-/AD_cMMQTCm3jxbUurjKOzV7uXYNRkE8SEdA60k9yw_r5ITc=w60-h60-p-rp-mo-br100",
  },
];

export const Testimonials = () => (
  <section className="relative mb-16 flex w-full justify-center bg-customDarkBg2 pt-10 lg:mb-32">
    <div className="absolute -top-16" id="feedback" />
    <div className="flex w-full flex-col justify-center lg:w-[1150px]">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <div className="custom-block-subtitle mb-6 text-center">Clientes</div>
        <div className="custom-block-big-title mb-16 px-8 text-center sm:px-24 md:px-48">
          O que os clientes dizem
        </div>

        <div className="flex flex-col items-center gap-8 px-6 lg:flex-row lg:gap-5 xl:gap-10 xl:px-0">
          {testimonialsData.map((testimonial, index) => (
            <div
              className="custom-border-gray-darker flex w-11/12 flex-col rounded-xl bg-customDarkBg3 px-6 py-4 sm:w-4/5 md:w-[560px] lg:w-1/3"
              key={`${testimonial.customerName}-${index}`}
            >
              <div className="mb-2 flex">
                <QuoteIcon />
              </div>
              <div className="custom-content-text-white">
                "{testimonial.content}"
              </div>
              <div className="mb-2 mt-4 flex xl:mb-4 xl:mt-8">
                <img
                  src={testimonial.image}
                  alt=""
                  width="50px"
                  height="40px"
                />
                <div className="ml-4 flex flex-col">
                  <div className="custom-content-text-white font-medium">
                    {testimonial.customerName}
                  </div>
                  <div className="custom-content-text-gray">
                    {testimonial.customerTitle}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);
