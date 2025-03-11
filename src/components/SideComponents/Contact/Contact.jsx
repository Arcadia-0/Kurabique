import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="container mx-auto mt-8 px-4">
      {/* Text and Contact Info Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Text Section */}
        <div className="text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-4xl font-bold text-primary mb-6">İletişim</h1>
          <p className="text-lg text-primary leading-relaxed">
            İletişim, bizde sadece bir kelime değil, müşterilerimizle kurduğumuz güçlü bir bağdır. Sizi butik pastanemizde ağırlamak, güler yüzümüzle bir araya gelmek ve her lokmada geçmişten gelen sıcaklıkla buluşturmak bizim için en büyük keyif. Taze, özenle hazırlanmış tatlarımız ve her zaman yanınızda olan güler yüzlü personelimizle, her anınızı değerli kılmak istiyoruz. Bizimle geçireceğiniz her anın, ruhunuzu dinlendirecek bir anı olacağına eminiz.
          </p>
        </div>

        {/* Contact Info Section */}
        <div className="flex flex-col items-center md:items-start md:justify-center md:ml-auto">
          <div className="text-center mb-6">
            <p className="text-xl font-semibold mb-2 text-primary">İletişim Bilgileri</p>
            <div className="flex items-center mb-4">
              <FaPhoneAlt className="mr-2 text-xl text-primary" />
              <p className="text-lg">+90 123 456 78 90</p>
            </div>
            <div className="flex items-center mb-4">
              <FaMapMarkerAlt className="mr-2 text-xl text-primary" />
              <p className="text-lg">Kadıköy, İstanbul</p>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="flex space-x-6 mb-8">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="text-2xl text-primary hover:text-blue-600 transition duration-300" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-2xl text-primary hover:text-pink-500 transition duration-300" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-2xl text-primary hover:text-blue-400 transition duration-300" />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="text-2xl text-primary hover:text-red-600 transition duration-300" />
            </a>
          </div>
        </div>
      </div>

      {/* Google Map Section */}
      <div className="w-full my-8">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48192.212170773004!2d29.021853555057273!3d40.98119046332828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac790b17ba89d%3A0xd2d24ea0437a7ee2!2zS2FkxLFrw7Z5L8Swc3RhbmJ1bA!5e0!3m2!1str!2str!4v1741677772577!5m2!1str!2str"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
