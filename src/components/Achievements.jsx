export const Achievements = () => {
  const achievements = [
    {
      id: 1,
      title: "TEXT",
      description: "Text text text text text text text text",
      image: "/images/achievement-1.png",
    },
    {
      id: 2,
      title: "TEXT",
      description: "Text text text text text text text text",
      image: "/images/achievement-2.png",
    },
    {
      id: 3,
      title: "TEXT",
      description: "Text text text text text text text text",
      image: "/images/achievement-3.png",
    },
  ];

  return (
    <section id="achievements" className="py-12 sm:py-16 md:py-20 lg:py-32 px-4 sm:px-6 relative bg-gradient-to-b from-transparent via-[#0a0f1c]/50 to-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Title с линиями до края */}
        <div className="flex items-center justify-center mb-8 sm:mb-12 md:mb-16 lg:mb-20 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
          <div className="flex-1 h-px bg-white" />
          <h2 className="px-4 sm:px-6 md:px-8 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-multiround text-center whitespace-nowrap">
            НАШИ ДОСТИЖЕНИЯ
          </h2>
          <div className="flex-1 h-px bg-white" />
        </div>

        {/* Achievements Grid с увеличенными карточками */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {achievements.map((achievement) => (
            <div
              key={achievement.id}
              className="group relative bg-[#0a1f3d]/30 border border-white/30 rounded-[15px] sm:rounded-[20px] overflow-hidden hover:bg-[#0a1f3d]/50 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10"
            >
              {/* Image - увеличенная */}
              <div className="relative h-48 sm:h-56 md:h-64 lg:h-72 overflow-hidden">
                <img
                  src={achievement.image}
                  alt={achievement.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070910] via-[#070910]/50 to-transparent" />
              </div>

              {/* Content - увеличенный */}
              <div className="p-5 sm:p-6 md:p-7 lg:p-8">
                <div className="flex items-start justify-between mb-3 sm:mb-4">
                  <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold font-multiround text-white">
                    {achievement.title}
                  </h3>
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0 ml-2 sm:ml-3 group-hover:bg-white/20 transition-colors duration-300">
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                      />
                    </svg>
                  </div>
                </div>
                <p className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
                  {achievement.description}
                </p>
              </div>

              {/* Декоративный элемент при наведении */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500/20 rounded-[15px] sm:rounded-[20px] transition-all duration-300 pointer-events-none" />
            </div>
          ))}
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