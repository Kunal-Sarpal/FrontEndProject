import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram, faPinterest } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className=" text-gray-500 py-12 bg-zinc-100 mt-16 shadow-sm shadow-zinc-400 rounded-xl">
      <div className="max-w-6xl mx-auto px-4 ">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/4 px-4 mb-8 md:mb-0">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <ul className="text-gray-400">
              <li className="flex items-center mb-2"><FontAwesomeIcon icon={faEnvelope} className="mr-2 " /> sarpalkunal@gmail.com</li>
              <li className="flex items-center mb-2"><FontAwesomeIcon icon={faPhone} className="mr-2" /> +91-7814505429</li>
              <li className="flex items-center mb-2"><FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" /> Punjab Nawanshar</li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 px-4 mb-8 md:mb-0">
            <h2 className="text-2xl font-bold mb-4">Follow Us</h2>
            <ul className="text-gray-400 flex space-x-4">
              <li><a href="#"><FontAwesomeIcon icon={faFacebook} /></a></li>
              <li><a href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
              <li><a href="#"><FontAwesomeIcon icon={faInstagram} /></a></li>
              <li><a href="#"><FontAwesomeIcon icon={faPinterest} /></a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
            <h2 className="text-2xl font-bold mb-4">Newsletter</h2>
            <p className="text-gray-400 mb-6">Subscribe to our newsletter to get the latest updates on fashion trends, offers, and events.</p>
            <form className="flex items-center">
              <input type="email" className="bg-zinc-200 text-white rounded-l py-3 px-4 focus:outline-none focus:bg-zinc-300 placeholder:text-zinc-800" placeholder="Enter your email" />
              <button className="bg-black text-white font-semibold py-3 px-8 rounded-r">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 flex justify-between items-center">
          <p className="text-gray-400">&copy; 2024 Fashion Website. All rights reserved.</p>
          <ul className="text-gray-400 flex space-x-4">
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Cookie Policy</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
