import hero from "../../assets/hero/hero.png";
import herobutton from "../../assets/hero/herobutton.png"

const Hero = () => {
  return (
    <div className="bg-primary py-8">
      <div className="container mx-auto flex justify-between items-center px-4 lg:px-0 flex-col lg:flex-row ">
        {/* Sol taraf - Metin */}
        <div className="text-secondary lg:w-1/2">
          <h1 className="text-3xl font-semibold">Kurabiye var pasta var</h1>
          <p className="max-w-[700px] mt-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. At iure
            numquam aliquam commodi maiores voluptates exercitationem magni
            ducimus aut a dolore excepturi ex, adipisci nostrum. Quidem
            perferendis quod error hic nobis placeat doloremque libero labore
            cumque, accusantium, ipsum officiis dolorem cupiditate nam, corporis
            ut alias voluptatibus optio vero eveniet eum minus voluptas iusto.
            Vitae quibusdam minus consequuntur, magni eos, repellat doloremque
            qui distinctio voluptate aut ut quas deleniti quaerat, iusto
            cupiditate repudiandae! Quod, id minima. Officiis molestiae
            consequatur vero. Quos possimus aspernatur autem illo obcaecati
            voluptatem, eos necessitatibus facere tempora veniam assumenda,
            architecto sit eius inventore nemo laborum quae quod.
          </p>
          <button 
  
  className="bg-transparent border-0 p-0" 
  aria-label="Hero Butonu"
>
  <img src={herobutton} alt="Hero buton" className="w-48 h-auto cursor-pointer pt-4" />
</button>
        </div>

        {/* Sağ taraf - Resim */}
        <div className="lg:w-1/2 mt-8 lg:mt-0">
          <img src={hero} alt="Hero" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
