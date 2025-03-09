import { useEffect } from "react";
import product_1 from "../../../assets/SideAssets/cakes/product_1.png";
import product_2 from "../../../assets/SideAssets/cakes/product_2.png";
import product_3 from "../../../assets/SideAssets/cakes/product_3.png";
import product_4 from "../../../assets/SideAssets/cakes/product_4.png";
import product_5 from "../../../assets/SideAssets/cakes/product_5.png";
import product_6 from "../../../assets/SideAssets/cakes/product_6.png";
import product_7 from "../../../assets/SideAssets/cakes/product_7.png";
import product_8 from "../../../assets/SideAssets/cakes/product_8.png";
import button from "../../../assets/SideAssets/cakes/button.png";
import BackButton from "../BackButton/BackButton";

const products = [
  {
    id: 1,
    image: product_1,
    title: "Sprinkle of Love Valentine's",
    description:
      "Sevgiyle hazırlanan, rengarenk şekerlemelerle süslenmiş bu cupkek, Sevgililer Günü’nün tatlı bir hediyesi!",
    button: button,
  },
  {
    id: 2,
    image: product_2,
    title: "Red Velvet",
    description:
      "Kırmızı kadife kekin yumuşak dokusu, kremsi peynirli frosting ile buluşuyor. Her lokmada zarif ve lezzetli bir deneyim!",
    button: button,
  },
  {
    id: 3,
    image: product_3,
    title: "Unicorn",
    description:
      "Canlı renkleri ve tatlı şekerlemeleriyle, hayal gücünüzü renklendirecek bir cupcake! Eğlenceli ve lezzetli bir sürpriz.",
    button: button,
  },
  {
    id: 4,
    image: product_4,
    title: "Assorted Classics",
    description:
      "Klasik cupcake lezzetlerinin bir araya geldiği bu çeşit kutusu, her damak zevkine hitap eden enfes tatlar sunuyor.",
    button: button,
  },
  {
    id: 5,
    image: product_5,
    title: "Chocolate Lovers Nationwide",
    description:
      "Çikolata severler için mükemmel bir seçim! Çeşit çeşit çikolatalarla dolu bu cupcake, her ısırıkta çikolata tutkunlarını mest edecek.",
    button: button,
  },
  {
    id: 6,
    image: product_6,
    title: "Magical Mermaid",
    description:
      "Denizlerin büyüsünü yansıtan renkli ve tatlı bir cupcake! Deniz kabukları ve parlak süslemelerle, her lokmada büyüleyici bir deneyim.",
    button: button,
  },
  {
    id: 7,
    image: product_7,
    title: "Victoria Sponge Number",
    description:
      "Klasik Victoria sponge kekin zarif bir versiyonu, istediğiniz sayıya şekil verilerek özel günlerinize tat katıyor. Yumuşacık kek ve kremsi dolgu bir arada!",
    button: button,
  },
  {
    id: 8,
    image: product_8,
    title: "Fruit Mini",
    description:
      "Taze meyvelerle süslenmiş minik, lezzetli cupcake’ler. Hem hafif hem de meyve dolu bir tatlı keyfi!",
    button: button,
  },
];

const Cakes = ({ showBackButton = true }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="my-6 container mx-auto">
      {/* Conditionally render BackButton based on showBackButton prop */}
      {showBackButton && <BackButton />}
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
  );
};

export default Cakes;
