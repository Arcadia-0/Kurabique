import product_1 from "../../../assets/SideAssets/gifts/product_1.png";
import product_2 from "../../../assets/SideAssets/gifts/product_2.png";
import product_3 from "../../../assets/SideAssets/gifts/product_3.png";
import product_4 from "../../../assets/SideAssets/gifts/product_4.png";
import product_5 from "../../../assets/SideAssets/gifts/product_5.png";
import product_6 from "../../../assets/SideAssets/gifts/product_6.png";
import product_7 from "../../../assets/SideAssets/gifts/product_7.png";
import product_8 from "../../../assets/SideAssets/gifts/product_8.png";
import button from "../../../assets/SideAssets/gifts/button.png";
import { useEffect } from "react";
import BackButton from "../BackButton/BackButton";

const products = [
  {
    id: 1,
    image: product_1,
    title: "Milkybar Belgian Heaven Box",
    description:
      "Beyaz ve Belçika çikolatasının eşsiz birleşimi, tatlı bir cennet deneyimi sunuyor.",
    button: button,
  },
  {
    id: 2,
    image: product_2,
    title: "Belgian & White Choco - Mixed Box",
    description:
      "Belçika ve beyaz çikolatanın mükemmel karışımıyla, her ısırıkta çikolata severleri mutlu eden bir kutu.",
    button: button,
  },
  {
    id: 3,
    image: product_3,
    title: "Classic Cookie 4 Box - Mix & Match",
    description:
      "Klasik kurabiye çeşitlerini bir araya getirerek, dilediğiniz lezzetleri kombinlemenin keyfini çıkarın!",
    button: button,
  },
  {
    id: 4,
    image: product_4,
    title: "Cookie 4 Box - Heaven Smarties",
    description:
      "Renkli Smarties'lerle süslenmiş, her lokmada neşeli ve tatlı bir deneyim!",
    button: button,
  },
  {
    id: 5,
    image: product_5,
    title: "Classic Cookie 4 Box - Milkybar",
    description:
      "Klasik kurabiyelerin içine beyaz çikolatanın yumuşak ve tatlı dokunuşu ekleniyor.",
    button: button,
  },
  {
    id: 6,
    image: product_6,
    title: "Classic Cookie 4 Box - Kinder",
    description:
      "Kinder çikolatanın o eşsiz lezzeti, klasik kurabiyelerle buluşuyor. Hem tatlı hem eğlenceli!",
    button: button,
  },
  {
    id: 7,
    image: product_7,
    title: "Birthday Treat Hamper Box",
    description:
      "Doğum günü kutlamalarına özel, rengarenk ve lezzet dolu bir hediye kutusu! Tatlı sürprizlerle dolu.",
    button: button,
  },
  {
    id: 8,
    image: product_8,
    title: "Sweet Treat Hamper Box",
    description:
      "Tatlı severler için hazırlanan bu kutu, her lokmada mutluluk verecek lezzetlerle dolu!",
    button: button,
  },
];




const Gifts = ({showBackButton = true}) => {
  

  useEffect (()=> {
    scrollTo(0,0);
  })
  return (
  <div className="my-6 container mx-auto">
    {showBackButton && <BackButton/>}
            {/* Grid layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="bg-primary rounded-lg shadow-lg transition-transform transform hover:shadow-2xl hover:scale-105 flex flex-col justify-between h-[500px]"
                >
                  {/* Image section */}
                  <div className="flex-shrink-0 w-full h-56 mt-6 flex justify-center items-center">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-36 h-36 object-cover rounded-full"
                    />
                  </div>
      
                  {/* Content section */}
                  <div className="flex flex-col justify-between p-4 h-full">
                    <h1 className="text-xl font-semibold text-secondary mb-2 text-center">
                      {product.title}
                    </h1>
                    <p className="text-secondary text-sm text-center mb-4 flex-grow-0">
                      {product.description}
                    </p>
      
                    {/* Button section */}
                    <div className="w-full flex justify-center mt-2">
                      <button>
                        <img
                          src={product.button}
                          alt="Button"
                          className="w-32 mx-auto"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
  )
}

export default Gifts