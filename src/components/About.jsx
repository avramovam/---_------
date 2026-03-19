export const About = () => {
  const services = [
    {
      id: 1,
      title: "НИР, ОКР",
      description: [
        "Разработка аппаратуры бортовых и наземных специализированных комплексов.",
        "Разработка и производство систем автономного электропитания.",
      ],
      icon: "/images/icon-niokr.svg",
    },
    {
      id: 2,
      title: "МЕДИЦИНСКИЕ И СПЕЦИАЛЬНЫЕ СИСТЕМЫ",
      description: [
        "Разработка имплантируемого управляемого нейростимулятора для «умных» протезов.",
        "Разработка, конструирование и изготовление образца комплексной досмотровой системы реального времени «Портал».",
      ],
      icon: "/images/icon-med.svg",
    },
  ];

  const supplyService = {
    id: 3,
    title: "ПОСТАВКИ",
    description:
      "Комплексные поставки электронных компонентов, включая подбор аналогов, входной контроль и сертификационные испытания.",
    icon: "/images/icon-postavki.svg",
  };

  const ServiceCard = ({ service, index }) => (
    <div
      className="group relative bg-[#0a1f3d]/30 border border-white/20 rounded-[15px] sm:rounded-[20px] p-6 sm:p-8 md:p-10 hover:bg-[#0a1f3d]/50 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10 animate-fade-in h-full flex flex-col"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      {/* Иконка - одинаковый размер для всех */}
      <div className="mb-5 sm:mb-6 flex justify-center">
        <img
          src={service.icon}
          alt={service.title}
          className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 object-contain group-hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* Title - одинаковый размер для всех */}
      <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-5 font-multiround text-center text-white">
        {service.title}
      </h3>

      {/* Description - одинаковый размер для всех */}
      <div className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed flex-grow font-sans">
        {Array.isArray(service.description) ? (
          <ul className="space-y-3 sm:space-y-4 text-left">
            {service.description.map((item, i) => (
              <li key={i} className="flex items-start gap-2 sm:gap-3">
                <span className="text-blue-400 text-xl sm:text-2xl mt-0.5 flex-shrink-0 font-sans">•</span>
                <span className="font-sans">{item}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center font-sans">{service.description}</p>
        )}
      </div>
    </div>
  );

  const SupplyCard = ({ service }) => (
    <div
      className="group relative bg-[#0a1f3d]/30 border border-white/20 rounded-[15px] sm:rounded-[20px] p-6 sm:p-8 md:p-10 lg:p-12 hover:bg-[#0a1f3d]/50 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10 animate-fade-in"
      style={{ animationDelay: '300ms' }}
    >
      <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12">
        {/* Иконка - ТАКОЙ ЖЕ размер как в ServiceCard */}
        <div className="flex-shrink-0">
          <img
            src={service.icon}
            alt={service.title}
            className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 object-contain group-hover:scale-110 transition-transform duration-300"
          />
        </div>

        {/* Контент */}
        <div className="flex-1 text-center md:text-left">
          {/* Title - ТАКОЙ ЖЕ размер как в ServiceCard */}
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-5 md:mb-6 font-multiround text-white">
            {service.title}
          </h3>

          {/* Description - ТАКОЙ ЖЕ размер как в ServiceCard */}
          <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed font-sans">
            {service.description}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 lg:py-32 px-4 sm:px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Title с линиями до края */}
        <div className="flex items-center justify-center mb-8 sm:mb-12 md:mb-16 lg:mb-20 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
          <div className="flex-1 h-px bg-white" />
          <h2 className="px-4 sm:px-6 md:px-8 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-multiround text-center whitespace-nowrap">
            О КОМПАНИИ
          </h2>
          <div className="flex-1 h-px bg-white" />
        </div>

        {/* Вводный текст */}
        <div className="max-w-5xl mx-auto mb-12 sm:mb-16 md:mb-20 lg:mb-24 text-center animate-fade-in px-4 sm:px-6">
          <p className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed font-light font-sans">
            С 2012 года компания осуществляет комплексные поставки радиоэлектронных комплектующих 
            для государственных и частных предприятий электронной промышленности.
          </p>
        </div>

        {/* Первый ряд - НИР, ОКР и Медицинские системы */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 mb-8 sm:mb-10 md:mb-12">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* Второй ряд - Поставки во всю ширину */}
        <div className="w-full">
          <SupplyCard service={supplyService} />
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
      `}</style>
    </section>
  );
};