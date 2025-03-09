import './App.css';
import { Routes, Route } from 'react-router-dom';
import About from './components/About/About';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Products from './components/Products/Products';
import Cookies from './components/SideComponents/Cookies/Cookies';
import Cakes from './components/SideComponents/Cakes/Cakes';
import Chocolate from './components/SideComponents/Chocolate/Chocolate';
import Gifts from './components/SideComponents/Gifts/Gifts';
import Contact from './components/SideComponents/Contact/Contact';
import AllProducts from './components/SideComponents/AllProducts/AllProducts';

function App() {
  return (
    <div>
      <Navbar />
      

      <Routes>
        {/* Ana sayfa ("/") */}
        <Route path='/' element={
          <>
            <Hero />
            <Products />
            <Banner />
            <About />
          </>
        } />

        {/* /cookies sayfası için sadece Cookies bileşeni gösterilir */}
        <Route path='/cookies' element={<Cookies />} />        
        <Route path='/cakes' element={<Cakes />} />
        <Route path='/chocolate' element={<Chocolate />} />
        <Route path='/gifts' element={<Gifts />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/allproducts' element={<AllProducts />} />
      </Routes>

      {/* Footer her sayfada görünür */}
      <Footer />
    </div>
  );
}

export default App;
