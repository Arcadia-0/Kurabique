import about from "../../assets/about/about.png";

const About = () => {
  return (
    <div className="container mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      {/* Text Section */}
      <div className="text-center md:text-left">
        <h1 className="text-4xl text-center font-bold text-primary mb-6">Hakkımızda</h1>
        <p className="text-lg text-primary leading-relaxed">
          1962 yılından bu yana ailemizin sıcacık tarifleriyle lezzetli anlar biriktiriyoruz. Kadıköy’ün kalbinde yer alan butik pastanemiz, size anne elinden çıkmıs gibi taze ve özenle hazırlanmıs tatlar sunmak için var. Kurabiyelerimiz, keklerimiz, çikolatalarımız ve hediyeliklerimiz, yıllardır aynı sevgiyle ve titizlikle hazırlanan tariflerle, her lokmada geçmisin izlerini tasıyor. Müsterilerimize sadece lezzetli tatlar sunmakla kalmıyor, aynı zamanda her birine kendilerini özel hissettirecek sıcak bir ortam sunmayı amaçlıyoruz. Güler yüzlü personelimizle, her ziyaretinizde size sadece bir tat değil, aynı zamanda bir deneyim yasatıyoruz. Bizim için en önemli sey, geleneksel tariflerle yenilikçi bir yaklasımı birlestirerek her zaman taze, kaliteli ve samimi bir hizmet sunmaktır. Sizi de butik pastanemizde, lezzetli bir yolculuğa çıkmaya davet ediyoruz!
        </p>
      </div>

      {/* Image Section */}
      <div className="flex justify-center md:justify-end">
        <img
          src={about}
          alt="Pastane Görseli"
          className="w-full md:w-3/4 lg:w-2/3"
        />
      </div>
    </div>
  );
};

export default About;
