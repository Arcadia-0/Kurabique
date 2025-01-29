import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import logo from "../../assets/logo.png"; // Logo'yu import ettik

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12 mt-8">
  <div className='container mx-auto py-14 px-6'>
    <div className='grid md:grid-cols-12 grid-cols-1 gap-7'>
      <div className='lg:col-span-4 col-span-12'>
        <a href="/">
        <img src={logo} alt="" className='h-12' />
        </a>
        <p className='mt-6 '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem aliquid quas totam autem voluptatem dolorem deleniti, accusantium impedit mollitia illum!</p>
      </div>
      <div className='lg:col-span-2 md:col-span-4 col-span-12'>
        <h5 className='tracking-wide font-semibold'>ÜRÜNLER</h5>
        <ul className='mt-6 space-y-2'>
          <li><a href="#">Kurabiyeler</a></li>
          <li><a href="#">Kekler</a></li>
          <li><a href="#">Çikolatalar</a></li>
          <li><a href="#">Hediyelikler</a></li>
        </ul>
      </div>
      <div className='lg-col-span-3 md:col-span-4 col-span-12'>
        <h5 className='tracking-wide font-semibold'>KURUMSAL</h5>
        <ul className='mt-6 space-y-2'>
          <li><a href="#">Hakkımızda</a></li>
          <li><a href="#">Kurumsal Satış</a></li>
        </ul>
      </div>
    </div>
  </div>
    </footer>
  );
};

export default Footer;
