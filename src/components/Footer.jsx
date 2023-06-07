import { FacebookIcon } from "../assets/icons/FacebookIcon";
import { InstagramIcon } from "../assets/icons/InstagramIcon";

import { ConservareLogo } from "../assets/logos/ConservareLogo";
import { WhatsappIcon } from "../assets/icons/WhatsappIcon";

const footerData = [
  {
    title: "Products",
    items: ["Services", "About Us", "News and Stories", "Roadmap"],
  },
  {
    title: "Important Links",
    items: [
      "Organization Team",
      "Our Journeys",
      "Pricing Plans",
      "Roadmap",
      "Terms & Conditions",
      "Privacy Policy",
    ],
  },
  {
    title: "Company",
    items: ["About Us", "Jobs", "Press", "Contact Us"],
  },
];

export const Footer = () => {
  return (
    <footer>
      <div className="radius-for-skewed bg-customDarkBg1 pb-6 pt-10 lg:pb-6 lg:pt-12 ">
        <div className="container mx-auto px-4 ">
          <div className="flex flex-wrap">
            <div className="w-full">
              <div className="flex grow basis-0 items-center justify-center">
                <ConservareLogo />
              </div>
              <p className="mb-10 mt-4 px-6 pt-6 text-center text-base leading-relaxed text-gray-400 lg:px-48 lg:text-lg ">
                Não deixe sua comunicação visual ser um problema para sua
                empresa. A Gráfica Conservare é a escolha certa para que suas
                impressões sejam de alta qualidade e precisão.
              </p>
              <div className="mx-auto flex w-36 gap-2">
                <a
                  className="custom-border-gray rounded-xl bg-customDarkBg2  p-2 hover:bg-customDarkBg3Hover"
                  href="https://www.facebook.com/conservaregrafica/"
                  target="_blank"
                  aria-label="Facebook"
                  title="Facebook"
                >
                  <FacebookIcon />
                </a>
                <a
                  className="custom-border-gray rounded-xl bg-customDarkBg2 p-2 hover:bg-customDarkBg3Hover"
                  href="https://wa.me/556732539212"
                  target="_blank"
                  aria-label="WhatsApp"
                  title="WhatsApp"
                >
                  <WhatsappIcon />
                </a>
                <a
                  className="custom-border-gray rounded-xl bg-customDarkBg2 p-2 hover:bg-customDarkBg3Hover"
                  href="https://www.instagram.com/conservaregrafica/"
                  target="_blank"
                  aria-label="Instagram"
                  title="Instagram"
                >
                  <InstagramIcon />
                </a>
              </div>
            </div>
          </div>
          <p className="mt-6 border-t border-[rgb(255,255,255,0.2)] pb-12 pt-6 text-center text-sm text-gray-400 lg:mt-12 lg:pb-0 lg:text-base">
            &copy; 2023 - Conservare Gráfica ® | CNPJ: 22.367.488/0001-22 |
            Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
