import hero from "../../assets/hero/hero.png";
import herobutton from "../../assets/hero/herobutton.png";

const Hero = () => {
  return (
    <div className="bg-primary py-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center justify-center">
          
          {/* Left Side */}
          <div className="text-secondary text-center sm:text-start">
            <h1 className="text-3xl lg:text-4xl font-semibold">Kurabique Hoş Geldiniz!</h1>
            <p className="text-lg">
              Lezzetli tatların ve özenle hazırlanmış hediyeliklerin buluşma noktası olan dükkanımıza hoş geldiniz!
              Kurabiyelerimizden keklerimize, enfes çikolatalarımızdan özel hediyeliklerimize kadar her ürünümüz,
              en taze ve kaliteli malzemelerle, sevgiyle hazırlanmaktadır. Sizin ve sevdiklerinizin mutlu anlarına tat katmak
              için buradayız. Bir yudum mutluluk arayanlar, özel günlerini daha da güzelleştirmek isteyenler ve sevdiklerine unutulmaz
              hediyeler almak isteyenler için farklı ve yaratıcı seçenekler sunuyoruz. Her bir ürünümüz, hem gözünüzü hem de damak tadınızı
              şenlendirecek. Dükkanımıza göz atın, sevdiklerinize özel tatlar keşfedin!
            </p>
            <button className="mt-4">
              <img
                src={herobutton}
                alt="Hero buton"
                className="w-48 h-auto cursor-pointer"
              />
            </button>
          </div>

          {/* Right-Side */}
          <div className="flex justify-center lg:justify-end">
            <img
              src={hero}
              alt="Hero"
              className="w-full h-auto object-cover lg:max-w-[600px] rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
