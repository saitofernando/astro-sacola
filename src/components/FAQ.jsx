import { useState } from "react";
import { motion } from "framer-motion";

const FAQData = [
  {
    question: "Vocês fazem a criação de arte?",
    answer:
      "Não, realizamos algumas edições de arte, correções de cores e finalização mas não trabalhamos com criação do zero.",
  },
  {
    question: "Vocês entregam para todo o Brasil?",
    answer:
      "Sim, entregamos para todo o Brasil, através de contrato com o correios e transportadoras.",
  },
];

export const FAQ = () => (
  <section className="bg-blueGray-50 relative overflow-hidden pb-16 pt-16">
    <div className="absolute -top-10" id="FAQ" />
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="container relative z-10 mx-auto w-11/12 px-2 sm:w-full sm:px-8 lg:px-4">
        <div className="mx-auto md:max-w-4xl">
          <p className="custom-block-subtitle mb-7 text-center">
            Você tem alguma pergunta?
          </p>
          <h2 className="custom-block-big-title mb-16 text-center">
            Dúvidas Frequentes
          </h2>
          <div className="-m-1 mb-11 flex flex-wrap">
            {FAQData.map((item, index) => (
              <div
                className="w-full p-1"
                key={`${item.question}-${item.answer}`}
              >
                <FAQBox
                  title={item.question}
                  content={item.answer}
                  defaultOpen={index === 0}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);

const FAQBox = ({ defaultOpen, title, content }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div
      className="custom-border-gray-darker relative mb-4 cursor-pointer rounded-3xl  bg-customDarkBg3 px-3 pb-2 pt-2 hover:bg-customDarkBg3Hover sm:px-8 sm:pt-6"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex flex-col items-start  justify-center p-2">
        <h3 className=" custom-content-title pr-8 pt-3 sm:pr-0 sm:pt-0">
          {title}
        </h3>
        <p
          className={`overflow-hidden pt-4 text-customGrayText transition-all duration-300 ${
            isOpen ? "max-h-96" : "max-h-0"
          }`}
        >
          {content}
        </p>
      </div>
      <div className="absolute right-4 top-6 sm:right-8 sm:top-8">
        <svg
          width="28px"
          height="30px"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`transition-all duration-500  ${
            isOpen ? "rotate-[180deg]" : "rotate-[270deg]"
          }`}
        >
          <path
            d="M4.16732 12.5L10.0007 6.66667L15.834 12.5"
            stroke="rgb(0, 126, 204)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </div>
    </div>
  );
};
