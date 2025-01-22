import card from "../../assets/products/card.png";
import cookie from "../../assets/products/cookie.png";

const Products = () => {
  return (
    <div className="container mx-auto pt-6 relative flex">
     
      <img src={card} alt="Card"  />

     
      <img src={cookie} alt="" className="absolute top-14 left-4" />
      <h1 className="text-white text-4xl font-bold absolute top-14 left-80 ">
        Kurabiye
      </h1>
      <p className="absolute bottom-32 left-40">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio, saepe.</p>
    </div>
  );
};

export default Products;
