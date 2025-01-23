import banner from "../../assets/banner/banner.png";

const Banner = () => {
  return (
    <div className="relative w-full pt-8">
      <img 
        src={banner} 
        alt="Banner" 
        className="w-full h-auto object-cover" 
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-4 sm:px-8">
        <h1 className="font-bold text-center text-xl sm:text-3xl leading-tight">
          TÜRKİYE’NİN EN LEZZETLİ ANNE KURABİYELERİNİ DENEMEDİNİZ Mİ?
        </h1>
        <button className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300 mt-4 sm:mt-6">
          HEMEN DENE
        </button>
      </div>
    </div>
  );
};

export default Banner;
