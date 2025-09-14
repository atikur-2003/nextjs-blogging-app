// components/Footer.jsx
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 md:px-8 flex flex-col items-center">
        {/* Footer Title */}
        <div className="mb-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center">Blogger</h2>
        </div>

        {/* Social Links */}
        <div className="flex space-x-6 mb-4">
          <Link href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={25}/>
          </Link>
          <Link href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={25} />
          </Link>
          <Link href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={25} />
          </Link>
          <Link href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={25} />
          </Link>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-300 text-base">
          &copy; {new Date().getFullYear()} . All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;