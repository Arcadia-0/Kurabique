import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-white mt-8">
      <div className="container mx-auto py-14">
        <div className="grid md:grid-cols-12 grid-cols-1 gap-7">
          {/* Logo and description */}
          <div className="lg:col-span-4 col-span-12">
            <a href="/">
              <img src={logo} alt="Logo" className="h-12" />
            </a>
            <p className="mt-6">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem aliquid quas totam autem
              voluptatem dolorem deleniti, accusantium impedit mollitia illum!
            </p>
          </div>

          {/* Products Section */}
          <div className="lg:col-span-2 md:col-span-4 col-span-12">
            <h5 className="tracking-wide font-semibold">ÜRÜNLER</h5>
            <ul className="mt-6 space-y-2">
              <li><Link to="cookies">Kurabiyeler</Link></li>
              <li><Link to="cakes">Kekler</Link></li>
              <li><Link to="chocolate">Çikolatalar</Link></li>
              <li><Link to="gifts">Hediyelikler</Link></li>
            </ul>
          </div>

          {/* Corporate Section */}
          <div className="lg:col-span-2 md:col-span-4 col-span-12">
            <h5 className="tracking-wide font-semibold">KURUMSAL</h5>
            <ul className="mt-6 space-y-2">
              <li><a href="#">Hakkımızda</a></li>
              <li><a href="#">Kurumsal Satış</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="lg:col-span-2 md:col-span-4 col-span-12">
            <h5 className="tracking-wide font-semibold">İLETİŞİM</h5>
            <ul className="mt-6 space-y-2">
              <li>
                <FaPhone className="inline-block mr-2" />
                <span>(+90) 123 456 7890</span>
              </li>
              <li>
                <FaEnvelope className="inline-block mr-2" />
                <span>kurabique@gmail.com</span>
              </li>
              <li>
                <FaMapMarkerAlt className="inline-block mr-2" />
                <span>Kadıköy, İstanbul</span>
              </li>
            </ul>

            {/* Social Media */}
            <div className="mt-6 flex space-x-6 justify-center md:justify-start">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebookF className="text-2xl text-white hover:text-blue-600 transition duration-300" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-2xl text-white hover:text-pink-500 transition duration-300" />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-2xl text-white hover:text-blue-400 transition duration-300" />
              </a>
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                <FaYoutube className="text-2xl text-white hover:text-red-600 transition duration-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
