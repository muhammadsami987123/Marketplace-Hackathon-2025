import Link from 'next/link';
import { FaFacebookF,  FaInstagram, FaLinkedinIn } from "react-icons/fa";
// import { SiVercel } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-[#2B2B2B] text-white">
      <div className="container mx-auto py-12 px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand & Address */}
          <div>
            <h1 className="text-3xl font-bold text-yellow-500">Funiro.</h1>
            <p className="text-gray-400 mt-4">
              400 University Drive Suite 200<br />
              Coral Gables, FL 33134 USA
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="font-bold text-lg text-yellow-400">Get to Know Us</h2>
            <ul className="mt-4 space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white">Home</Link></li>
              <li><Link href="/shop" className="text-gray-400 hover:text-white">Shop</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-white">Blog</Link></li>
              {/* <li><Link href="/about" className="text-gray-400 hover:text-white">About Us</Link></li> */}
              <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h2 className="font-bold text-lg text-yellow-400">Customer Service</h2>
            <ul className="mt-4 space-y-2">
              <li><Link href="/faq" className="text-gray-400 hover:text-white">FAQ</Link></li>
              <li><Link href="/shipping-delivery" className="text-gray-400 hover:text-white">Shipping & Delivery</Link></li>
              <li><Link href="/returns-Policies" className="text-gray-400 hover:text-white">Returns & Exchanges</Link></li>
              <li><Link href="/privacy-policy" className="text-gray-400 hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/terms-conditions" className="text-gray-400 hover:text-white">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Newsletter & Social Media */}
          <div>
            <h2 className="font-bold text-lg text-yellow-400">Subscribe to Our Newsletter</h2>
            <p className="text-gray-400 mt-2">Get the latest updates, offers, and trends.</p>
            <form className="mt-4 flex">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="w-full p-2 border border-gray-500 bg-transparent text-white placeholder-gray-400 rounded-l-md focus:outline-none"
              />
              <button className="bg-yellow-500 px-4 py-2 text-black font-semibold rounded-r-md hover:bg-yellow-600">
                Subscribe
              </button>
            </form>

            {/* Social Media Icons */}
            <div className="flex gap-4 mt-6">
              <Link href="https://www.facebook.com/profile.php?id=100044619184212" target="_blank" className="p-2 bg-gray-700 rounded-full hover:bg-yellow-500">
                <FaFacebookF className="w-5 h-5" />
              </Link>
              
              <Link href="https://www.instagram.com/muhammad_sami3344/" target="_blank" className="p-2 bg-gray-700 rounded-full hover:bg-yellow-500">
                <FaInstagram className="w-5 h-5" />
              </Link>
              
              <Link href="https://www.linkedin.com/in/muhammad-sami-3aa6102b8/" target="_blank" className="p-2 bg-gray-700 rounded-full hover:bg-yellow-500">
                <FaLinkedinIn className="w-5 h-5" />
              </Link>
              
            </div>
          </div>

        </div>

        {/* Secure Payments & Copyright */}
        <div className="mt-12 border-t border-gray-600 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>© 2024 Funiro. All rights reserved.</p>
          <p>Secure Payments: Visa | Mastercard | PayPal | Stripe</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
