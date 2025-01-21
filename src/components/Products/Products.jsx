import cookie from "../../assets/products/cookie.png";

const Products = () => {
  return (
    <div className="container mx-auto my-8">
      <div className="flex flex-wrap gap-6">
        {/* Card 1 */}
        <div className="bg-primary rounded-lg p-6 flex flex-col md:flex-row items-center md:items-start w-full md:w-1/2">
          {/* Resim */}
          <img src={cookie} alt="Cookie" className="h-40 w-auto mb-4 md:mb-0" />
          
          {/* Yazılar */}
          <div className="flex flex-col justify-start w-full md:w-2/3">
            <h1 className="text-lg font-semibold">KURABİYE</h1>
            <p className="text-sm mt-2 mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
              qui provident repudiandae fugit id recusandae sunt dolorum
              dignissimos, quo ad.
            </p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4">
              İncele
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-primary rounded-lg p-6 flex flex-col md:flex-row items-center md:items-start w-full md:w-1/2">
          {/* Resim */}
          <img src={cookie} alt="Cookie" className="h-40 w-auto mb-4 md:mb-0" />
          
          {/* Yazılar */}
          <div className="flex flex-col justify-start w-full md:w-2/3">
            <h1 className="text-lg font-semibold">KURABİYE</h1>
            <p className="text-sm mt-2 mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
              qui provident repudiandae fugit id recusandae sunt dolorum
              dignissimos, quo ad.
            </p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4">
              İncele
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
