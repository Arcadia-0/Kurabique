import product_1 from "../../../assets/SideAssets/chocolate/product_1.png";
import product_2 from "../../../assets/SideAssets/chocolate/product_2.png";
import product_3 from "../../../assets/SideAssets/chocolate/product_3.png";
import product_4 from "../../../assets/SideAssets/chocolate/product_4.png";
import product_5 from "../../../assets/SideAssets/chocolate/product_5.png";
import product_6 from "../../../assets/SideAssets/chocolate/product_6.png";
import product_7 from "../../../assets/SideAssets/chocolate/product_7.png";
import product_8 from "../../../assets/SideAssets/chocolate/product_8.png";
import button from "../../../assets/SideAssets/chocolate/button.png";


const products = [
  {
    id: 1,
    image: product_1,
    title: "Chocolatier's Selection Praline",
    description:
      "Zengin çikolata ve kremsi pralin dolgusu ile özel olarak seçilmiş tatlar. Her bir parça, çikolata tutkunları için unutulmaz bir lezzet deneyimi sunuyor.",
    button: button,
  },
  {
    id: 2,
    image: product_2,
    title: "The Dark Collection Praline",
    description:
      "Bitter çikolatanın derin tadı ve pralin dolgusunun mükemmel uyumu. Kararmış çikolata severler için ideal bir seçenek!",
    button: button,
  },
  {
    id: 3,
    image: product_3,
    title: "Australian Native Praline",
    description:
      "Avustralya'nın yerel lezzetlerinden ilham alarak hazırlanan bu pralin, egzotik tatlarla çikolatanın buluştuğu benzersiz bir deneyim sunuyor.",
    button: button,
  },
  {
    id: 4,
    image: product_4,
    title: "Four Pillars Gin Collection",
    description:
      "Four Pillars cinin eşsiz aromalarıyla harmanlanmış çikolatalar. Alkol ve çikolatanın mükemmel birleşimiyle sofistike bir tat deneyimi!",
    button: button,
  },
  {
    id: 5,
    image: product_5,
    title: "Chocolatier's Milk Selection Praline",
    description:
      "Süt çikolatanın kremamsı dokusu ve pralin dolgusu ile her ısırıkta zarif bir tat deneyimi. Süt çikolata severler için mükemmel bir seçenek!",
    button: button,
  },
  {
    id: 6,
    image: product_6,
    title: "Classic Belgian Bonbon Collection",
    description:
      "Belçika çikolatasının zarif lezzetleriyle dolu, her biri özenle hazırlanmış bonbon koleksiyonu. Çikolata tutkunlarına özel bir hediye!",
    button: button,
  },
  {
    id: 7,
    image: product_7,
    title: "Assorted Truffle Box",
    description:
      "Farklı dolgularla hazırlanan trüf çikolataların mükemmel karışımı. Her biri eşsiz bir lezzet sunuyor!",
    button: button,
  },
  {
    id: 8,
    image: product_8,
    title: "Dark Fruit Mini Truffle Box",
    description:
      "Bitter çikolata ve taze meyve dolgularının mükemmel uyumu. Küçük trüf kutusu, yoğun ve meyvemsi bir çikolata deneyimi sunuyor.",
    button: button,
  },
];





const Chocolate = () => {
  return (
    <div className="my-6 container mx-auto">
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

export default Chocolate