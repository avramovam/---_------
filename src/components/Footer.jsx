import { useState } from "react";

export const Footer = () => {
  const [copied, setCopied] = useState(false);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <footer className="relative bg-[#0a1f3d]/30 py-10 sm:py-14 md:py-18 lg:py-20 px-4 sm:px-6 overflow-hidden">
      {/* Фоновое изображение с центрированием */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/bg-footer.svg"
          alt=""
          className="w-full h-full object-cover"
          style={{
            objectPosition: 'center',
          }}
        />
        {/* Затемнение сверху */}
        <div 
          className="absolute top-0 left-0 right-0 bg-gradient-to-b from-[#070910] via-[#070910]/80 to-transparent"
          style={{ height: '15%' }}
        />
      </div>

      {/* Контент поверх фона */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 md:gap-14">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 sm:gap-4 mb-5">
              <img
                src="/images/logo-icon.svg"
                alt="Logo"
                className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16"
              />
              <span className="text-lg sm:text-xl md:text-2xl font-bold font-multiround text-white">
                ЧИП ЛОГИК ПЛЮС
              </span>
            </div>
            <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
              Научно-исследовательские и опытно-конструкторские работы по
              разработке новых изделий и технологий.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-5 font-multiround text-white">
              КОМПАНИЯ
            </h3>
            <ul className="space-y-3">
              {[
                { label: "Главная", href: "#home" },
                { label: "О компании", href: "#about" },
                { label: "Достижения", href: "#achievements" },
                { label: "Контакты", href: "#contacts" },
              ].map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base md:text-lg hover:translate-x-1 transform transition-transform duration-300"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-5 font-multiround text-white">
              КОНТАКТЫ
            </h3>
            <ul className="space-y-4 text-sm sm:text-base md:text-lg text-gray-300">
              {/* Address - кликабельный для копирования */}
              <li className="flex items-start gap-3 group">
                <img
                  src="/images/icon-location-footer.svg"
                  alt="Address"
                  className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 flex-shrink-0 mt-0.5 object-contain group-hover:scale-110 transition-transform duration-300"
                />
                <div className="relative flex-1">
                  <button
                    onClick={() => copyToClipboard("Санкт-Петербург, ул. Аэродромная, д. 8, лит. А")}
                    className="text-left text-gray-300 hover:text-white transition-colors hover:underline cursor-pointer"
                  >
                    Санкт-Петербург, ул. Аэродромная, д. 8, лит. А
                  </button>
                  
                  {/* Всплывающая подсказка при копировании */}
                  {copied && (
                    <span className="absolute -top-8 left-0 bg-green-500 text-white text-xs px-2 py-1 rounded-md animate-fade-in shadow-lg whitespace-nowrap">
                      Адрес скопирован!
                    </span>
                  )}
                </div>
              </li>
              
              {/* Email */}
              <li className="flex items-center gap-3 group">
                <img
                  src="/images/icon-mail-footer.svg"
                  alt="Email"
                  className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 flex-shrink-0 object-contain group-hover:scale-110 transition-transform duration-300"
                />
                <a 
                  href="mailto:info@chiplogicplus.com" 
                  className="text-gray-300 hover:text-white transition-colors hover:underline"
                >
                  info@chiplogicplus.com
                </a>
              </li>
              
              {/* Phone */}
              <li className="flex items-center gap-3 group">
                <img
                  src="/images/icon-phone-footer.svg"
                  alt="Phone"
                  className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 flex-shrink-0 object-contain group-hover:scale-110 transition-transform duration-300"
                />
                <a 
                  href="tel:+78123341218" 
                  className="text-gray-300 hover:text-white transition-colors hover:underline"
                >
                  +7 (812) 334-12-18
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-8 border-t border-white/10 text-center text-gray-400 text-sm sm:text-base">
          <p>&copy; {new Date().getFullYear()} ЧИП ЛОГИК ПЛЮС. Все права защищены.</p>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(5px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.2s ease-out forwards;
        }
      `}</style>
    </footer>
  );
};