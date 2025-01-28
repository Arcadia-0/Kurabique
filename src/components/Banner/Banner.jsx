import banner from "../../assets/banner/banner.png";


const Banner = () => {
  return (
    <div className="relative w-full h-full mt-8">
      
      <img 
        src={banner} 
        alt="Background" 
        className="w-full h-auto object-contain"
      />
      
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white ">
        <h1 className="text-[10px] sm:text-sm md:text-lg lg:text-2xl xl:text-4xl font-bold text-center">
          TÜRKİYE’NİN EN LEZZETLİ <br /> ANNE KURABİYELERİNİ DENEMEDİNİZ Mİ?
        </h1>
        <button className=" bg-secondary text-primary rounded-lg hover:bg-primary hover:text-secondary focus:outline-none  p-2  text-[10px] sm:text-sm md:text-lg lg:text-2xl lg:mt-8 font-bold">
          Hemen Dene
        </button>
      </div>
    </div>
  );
};

export default Banner;
