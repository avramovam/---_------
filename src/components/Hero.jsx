export const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative w-full h-screen overflow-hidden"
    >
      {/* Фоновое изображение */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="/images/hero-bg-1.svg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover
                     sm:scale-100
                     md:scale-110
                     lg:scale-125
                     xl:scale-110
                     2xl:scale-100"
          style={{
            transformOrigin: 'center center',
            transition: 'transform 0.3s ease',
          }}
        />
      </div>
      
      {/* Контейнер для логотипа */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative
                      w-[40%] h-[100%] 
                      sm:w-[40%] sm:h-[80%]
                      md:w-[40%] md:h-[70%]
                      lg:w-[40%] lg:h-[60%]
                      xl:w-[40%] xl:h-[50%]
                      2xl:w-[40%] 2xl:h-[40%]">
          <img
            src="/images/logo-with-name.svg"
            alt="Chip Logic Plus"
            className="absolute inset-0 w-full h-full"
            style={{
              objectFit: 'contain',
              transform: 'scale(2.3)', // Увеличиваем само изображение на 20%
            }}
          />
        </div>
      </div>
      
      {/* Затемнение */}
      <div 
        className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#070910] via-[#070910]/80 to-transparent"
        style={{ height: '5%' }}
      />
    </section>
  );
};