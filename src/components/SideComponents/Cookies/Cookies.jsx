import product_1 from "../../../assets/SideAssets/cookies/product_1.png";
import product_2 from "../../../assets/SideAssets/cookies/product_2.png";
import product_3 from "../../../assets/SideAssets/cookies/product_3.png";
import product_4 from "../../../assets/SideAssets/cookies/product_4.png";
import product_5 from "../../../assets/SideAssets/cookies/product_5.png";
import product_6 from "../../../assets/SideAssets/cookies/product_6.png";
import product_7 from "../../../assets/SideAssets/cookies/product_7.png";
import product_8 from "../../../assets/SideAssets/cookies/product_8.png";
import button from "../../../assets/SideAssets/cookies/button.png";

// Ürün verisi
const products = [
  {
    id: 1,
    image: product_1,
    title: "Milk Chocolate Chip",
    description:
      "Kremamsı süt çikolata damlalarıyla zenginleşen, dışı hafif gevrek, içi ise yumuşacık bu kurabiye, çikolata tutkunları için vazgeçilmez bir lezzet!",
    button: button,
  },
  {
    id: 2,
    image: product_2,
    title: "Dark Chocolate Chip",
    description:
      "Bitter çikolata damlalarıyla yoğun bir tat sunan bu kurabiye, klasik tatlardan farklı bir deneyim arayanlar için ideal.",
    button: button,
  },
  {
    id: 3,
    image: product_3,
    title: "Peanut Butter Chip",
    description:
      "Yer fıstığı ezmesiyle zenginleştirilen bu kurabiye, tatlı ve tuzlu karışımını sevenler için mükemmel bir seçenek.",
    button: button,
  },
  {
    id: 4,
    image: product_4,
    title: "Oatmeal Raisin",
    description:
      "Yulaf ve kuru üzümle yapılan bu kurabiye, hem sağlıklı hem de leziz bir atıştırmalık.",
    button: button,
  },
  {
    id: 5,
    image: product_5,
    title: "White Chocolate Macadamia",
    description:
      "Beyaz çikolata ve makademya fıstığı ile tatlandırılmış bu kurabiye, yumuşak iç yapısı ve zengin aromasıyla dikkat çeker.",
    button: button,
  },
  {
    id: 6,
    image: product_6,
    title: "Coconut Almond",
    description:
      "Hindistancevizi ve bademle yapılan bu kurabiye, tropikal bir tat sunar ve oldukça besleyicidir.",
    button: button,
  },
  {
    id: 7,
    image: product_7,
    title: "Chocolate Brownie",
    description:
      "Yoğun çikolata tadı ve kahverengi kek kıvamı ile bu kurabiye, klasik brownie tutkunları için mükemmel bir alternatif.",
    button: button,
  },
  {
    id: 8,
    image: product_8,
    title: "Lemon Shortbread",
    description:
      "Limonlu, tereyağlı ve gevrek bu kurabiye, hafif asidik tadı ile tatlılardan farklı bir seçenek sunar.",
    button: button,
  },
];

const Cookies = () => {
  return (
    <div className="my-6 container mx-auto">
      {/* Grid yapılandırması */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-primary rounded-lg shadow-lg transition-transform transform hover:shadow-2xl hover:scale-105 flex flex-col justify-between h-[500px]"
          >
            {/* Resim kısmı */}
            <div className="flex-shrink-0 w-full h-56">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-contain rounded-t-lg"
              />
            </div>

            {/* İçerik kısmı */}
            <div className="flex flex-col justify-between p-4 h-full">
              <h1 className="text-xl font-semibold text-secondary mb-2 text-center">
                {product.title}
              </h1>
              <p className="text-secondary text-sm text-center mb-4 flex-grow-0">
                {product.description}
              </p>

              {/* Buton kısmı */}
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

export default Cookies;
