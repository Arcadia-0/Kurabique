import './App.css'
import About from './components/About/About'
import Banner from './components/Banner/Banner'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Products from './components/Products/Products'

function App() {

  return (
    <div>
    <Navbar/>
    <Hero/>
    <Products/>
    <Banner/>
    <About/>
    <Footer/>
    </div>
  )
}

export default App
