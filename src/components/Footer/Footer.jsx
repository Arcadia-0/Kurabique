import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12 mt-8">
      <div className="container mx-auto py-14 px-6">
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
              <li><a href="#">Kurabiyeler</a></li>
              <li><a href="#">Kekler</a></li>
              <li><a href="#">Çikolatalar</a></li>
              <li><a href="#">Hediyelikler</a></li>
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
            <div className="mt-6 flex space-x-4">
              <a href="#">
                <FaFacebook size={24} />
              </a>
              <a href="#">
                <FaInstagram size={24} />
              </a>
              <a href="#">
                <FaTwitter size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
