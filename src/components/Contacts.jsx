import { useState } from "react";

export const Contacts = () => {
  const [copied, setCopied] = useState(false);

  const contactItems = [
    {
      id: "address",
      label: "АДРЕС:",
      value: "197348, Россия, г. Санкт-Петербург, ул. Аэродромная, д. 8, лит. А",
      icon: "/images/icon-location.svg",
    },
    {
      id: "email",
      label: "E-MAIL:",
      value: "info@chiplogicplus.com",
      href: "mailto:info@chiplogicplus.com",
      icon: "/images/icon-email.svg",
    },
    {
      id: "phone",
      label: "ТЕЛЕФОН:",
      value: "+7 (812) 334-12-18",
      href: "tel:+78123341218",
      icon: "/images/icon-phone.svg",
    },
    {
      id: "website",
      label: "САЙТ:",
      value: "www.chiplogicplus.com",
      href: "https://www.chiplogicplus.com",
      icon: "/images/icon-website.svg",
    },
  ];

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <section id="contacts" className="py-12 sm:py-16 md:py-20 lg:py-32 px-4 sm:px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Title с линиями до края */}
        <div className="flex items-center justify-center mb-8 sm:mb-12 md:mb-16 lg:mb-20 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
          <div className="flex-1 h-px bg-white" />
          <h2 className="px-4 sm:px-6 md:px-8 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-multiround text-center whitespace-nowrap">
            КОНТАКТЫ
          </h2>
          <div className="flex-1 h-px bg-white" />
        </div>

        {/* Яндекс.Карта - более узкая, с увеличенными размерами */}
        <div className="flex justify-center mb-12 sm:mb-16 md:mb-20 lg:mb-24">
          <div className="w-full max-w-4xl rounded-[20px] sm:rounded-[25px] overflow-hidden border border-white/20 shadow-2xl">
            <div className="relative w-full h-56 sm:h-72 md:h-96 lg:h-[450px]">
              <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                <iframe 
                  src="https://yandex.ru/map-widget/v1/?ll=30.293671%2C59.996835&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1NzM5MjQ4MxJR0KDQvtGB0YHQuNGPLCDQodCw0L3QutGCLdCf0LXRgtC10YDQsdGD0YDQsywg0JDRjdGA0L7QtNGA0L7QvNC90LDRjyDRg9C70LjRhtCwLCA4IgoNclnyQRXC_G9C&z=17.27" 
                  width="100%" 
                  height="100%" 
                  frameBorder="0" 
                  allowFullScreen={true} 
                  style={{ position: 'relative' }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Contact Info - увеличенное */}
        <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
          {contactItems.map((item) => (
            <div
              key={item.id}
              className="flex items-start gap-5 sm:gap-7 md:gap-8 group"
            >
              {/* Иконка - увеличенная */}
              <div className="flex-shrink-0">
                <img
                  src={item.icon}
                  alt={item.label}
                  className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              <div className="flex-1 border-b border-white/30 pb-5 sm:pb-6">
                {/* Заголовок - увеличенный */}
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 font-multiround text-white">
                  {item.label}
                </h3>
                
                {item.id === "address" ? (
                  <div className="relative">
                    <button
                      onClick={() => copyToClipboard(item.value)}
                      className="text-gray-300 hover:text-white transition-colors text-base sm:text-lg md:text-xl lg:text-2xl text-left group/address hover:scale-105 transform origin-left transition-transform duration-300"
                    >
                      {item.value}
                    </button>
                    
                    {/* Всплывающая подсказка при копировании - увеличенная */}
                    {copied && (
                      <span className="absolute -top-10 left-0 bg-green-500 text-white text-sm sm:text-base px-3 py-1.5 rounded-md animate-fade-in shadow-lg">
                        Скопировано!
                      </span>
                    )}
                  </div>
                ) : item.href ? (
                  <a
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors text-base sm:text-lg md:text-xl lg:text-2xl inline-block hover:scale-105 transform origin-left transition-transform duration-300"
                    target={item.id === "website" ? "_blank" : undefined}
                    rel={item.id === "website" ? "noopener noreferrer" : undefined}
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-gray-300 text-base sm:text-lg md:text-xl lg:text-2xl">{item.value}</p>
                )}
              </div>
            </div>
          ))}
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
    </section>
  );
};