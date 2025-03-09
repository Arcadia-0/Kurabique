import BackButton from "../BackButton/BackButton"
import Cakes from "../Cakes/Cakes"
import Chocolate from "../Chocolate/Chocolate"
import Cookies from "../Cookies/Cookies"
import Gifts from "../Gifts/Gifts"







const AllProducts = () => {
  return (
    <div className="container mx-auto my-6">
      <BackButton/>
      <Cakes showBackButton={false}/>
      <Chocolate showBackButton={false}/>
      <Cookies showBackButton={false}/>
      <Gifts showBackButton={false}/>
    </div>
  )
}

export default AllProducts