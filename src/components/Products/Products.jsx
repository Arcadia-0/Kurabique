import cookie from "../../assets/products/cookie.png";
import cake from "../../assets/products/cake.png";
import chocolate from "../../assets/products/chocolate.png";
import gift from "../../assets/products/gift.png";
import button from "../../assets/products/button.png";


const products = [
  {
    id: 1,
    image: cookie,
    title: "KURABİYE",
    description: "Farklı tatlar ve şekillerde özenle hazırlanan, her lokması mutluluk dolu taptaze kurabiyeler.",
    button: button,
    
  },
  {
    id: 2,
    image: cake,
    title: "KEK",
    description: "Yumuşacık dokusu ve zengin tatlarıyla her anınıza lezzet katacak ev yapımı kekler.",
    button: button,
    
  },
  {
    id: 3,
    image: chocolate,
    title: "ÇİKOLATA",
    description: "Özel günlerinizi unutulmaz kılacak, şık ve zarif hediye seçenekleri. Sevdiklerinize tatlı sürprizler!",
    button: button,
   
  },
  {
    id: 4,
    image: gift,
    title: "HEDİYELİK",
    description: "Zengin kakao tadı ve kaliteli malzemelerle hazırlanan, damaklarda iz bırakan çikolatalar.",
    button: button,
   
  },
];

const ProductCard = ({ image, title, description, button}) => {
  return (
    <div
      className="bg-primary rounded-lg shadow-lg transition-transform transform hover:shadow-2xl hover:scale-105"
    >
      <div className="flex flex-col items-center justify-center pt-6">
       
        <div className="bg-primary rounded-full overflow-hidden mb-4">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
        <h1 className="text-xl font-semibold text-secondary mb-2">{title}</h1>
        <p className="text-secondary text-sm text-center mb-4">
          {description}
        </p>
        <button>
        <img src={button} alt="Button" className="w-32 mx-auto" />
        </button>
      </div>
    </div>
  );
};

const Products = () => {
  return (
    <div className="container mx-auto mt-8 ">
      {/* Grid container for the cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* render card */}
        {products.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            title={product.title}
            description={product.description}
            button={product.button}
            bgColor={product.bgColor}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
