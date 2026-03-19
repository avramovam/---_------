import { useState, useEffect } from "react";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showLogo, setShowLogo] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const navItems = [
    { label: "ГЛАВНАЯ", href: "#home" },
    { label: "О КОМПАНИИ", href: "#about" },
    { label: "ДОСТИЖЕНИЯ", href: "#achievements" },
    { label: "КОНТАКТЫ", href: "#contacts" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);
      
      const heroHeight = window.innerHeight;
      setShowLogo(window.scrollY > heroHeight * 0.8);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-[#0B0E17]/95 backdrop-blur-md shadow-lg border-b border-white/10" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 sm:h-24 lg:h-28">
          {/* Logo - появляется только при скролле */}
          <div 
            className={`flex-shrink-0 flex items-center gap-3 sm:gap-4 lg:gap-5 transition-all duration-500 ${
              showLogo 
                ? "opacity-100 translate-x-0" 
                : "opacity-0 -translate-x-4 pointer-events-none"
            }`}
          >
            <img
              src="/images/logo-icon.svg"
              alt="Chip Logic Plus"
              className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16"
            />
            <span className="text-white font-bold text-base sm:text-lg lg:text-xl xl:text-2xl tracking-wide whitespace-nowrap font-multiround">
              ЧИП ЛОГИК ПЛЮС
            </span>
          </div>

          {/* Пустой div для центровки */}
          <div className={`hidden md:block flex-shrink-0 transition-all duration-500 ${
            showLogo ? "opacity-0 w-0" : "opacity-100 w-[180px] lg:w-[220px] xl:w-[260px]"
          }`} />

          {/* Desktop Navigation с анимациями */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-2 lg:space-x-3 xl:space-x-5">
              {navItems.map((item, index) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  onMouseEnter={() => setActiveIndex(index)}
                  onMouseLeave={() => setActiveIndex(null)}
                  className="group relative px-4 lg:px-5 xl:px-6 py-2 lg:py-2.5 text-sm lg:text-base xl:text-lg font-medium text-gray-300 transition-all duration-300 tracking-wide whitespace-nowrap overflow-hidden"
                >
                  {/* Анимированная нижняя линия */}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 via-white to-blue-400 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                  
                  {/* Текст с эффектом свечения */}
                  <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                    {item.label}
                  </span>

                  {/* Блики при наведении */}
                  <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                  
                  {/* Эффект пульсации фона */}
                  <span className={`absolute inset-0 bg-white/0 group-hover:bg-white/5 rounded-lg transition-all duration-300 transform scale-0 group-hover:scale-100`} />
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button с анимацией */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="relative group text-white p-2 sm:p-2.5 hover:bg-white/10 rounded-lg transition-all duration-300 overflow-hidden"
              aria-label="Toggle menu"
            >
              {/* Анимированный фон */}
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Иконка с анимацией вращения */}
              <svg
                className={`w-7 h-7 sm:w-8 sm:h-8 relative z-10 transition-transform duration-300 ${
                  isMobileMenuOpen ? "rotate-90" : "group-hover:scale-110"
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation с анимацией появления */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#0B0E17]/95 backdrop-blur-md border-t border-white/10 animate-slide-down">
          <div className="px-5 py-4 space-y-2">
            {navItems.map((item, index) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="group relative block w-full text-left px-5 py-4 text-lg font-medium text-gray-300 hover:text-white rounded-lg transition-all duration-300 overflow-hidden"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Анимированный фон при наведении */}
                <span className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Блик */}
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                
                {/* Текст со сдвигом */}
                <span className="relative z-10 inline-block transform group-hover:translate-x-2 transition-transform duration-300 font-multiround">
                  {item.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}

      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-slide-down {
          animation: slideDown 0.3s ease-out forwards;
        }
      `}</style>
    </nav>
  );
};