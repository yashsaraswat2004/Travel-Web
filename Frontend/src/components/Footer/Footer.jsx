import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" mt-40">
      <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Section */}
        <div className="space-y-4">
          <img src="./logo.svg" alt="logo" />
          <p>Travel helps people to find their dream destination easily.</p>
          <div className="flex space-x-4">
            <Link
              to="https://www.facebook.com"
              target="_blank"
              rel="noreferrer"
              className="text-[#df6951]"
            >
              <FaFacebookF size={20}/>
            </Link>
            <Link
              to="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
              className="text-[#df6951]"
            >
              <FaInstagram  size={20}/>
            </Link>
            <Link
              to="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="text-[#df6951]"
            >
              <FaLinkedinIn size={20}/>
            </Link>
            <Link
              to="https://www.twitter.com"
              target="_blank"
              rel="noreferrer"
              className="text-[#df6951]"
            >
              <FaTwitter size={20}/>
            </Link>
          </div>
        </div>

        {/* Links Section */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Company</h2>
          <ul className="space-y-2">
            <li>
              <Link to="#" className="text-base">
                About Us
              </Link>
            </li>
            <li>
              <Link to="#" className="text-base">
                Careers
              </Link>
            </li>
            <li>
              <Link to="#" className="text-base">
                Blog
              </Link>
            </li>
            <li>
              <Link to="#" className="text-base">
                Pricing
              </Link>
            </li>
          </ul>
        </div>

        {/* Destinations Section */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Destinations</h2>
          <ul className="space-y-2">
            <li className="text-base">Delhi</li>
            <li className="text-base">Mumbai</li>
            <li className="text-base">Banglore</li>
            <li className="text-base">Shimla</li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Join Our Newsletter</h2>
          <form className="flex flex-row  items-center" onSubmit={handleSubscribe}>
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 bg-gray-100 rounded-l-md h-10 focus:outline-none focus:ring-2 focus:ring-[#df6951]"
              required
            />
            <button
              type="submit"
              className="p-2 bg-[#df6951] text-white rounded-r-md "
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      
      <hr className="my-8 border-gray-300 mx-8 " />

      <div className="text-center py-4 text-sm">
        &copy; 2024 Travel Tour | All Rights Reserved.
      </div>
    </footer>
  );
};

const handleSubscribe = (e) => {
  e.preventDefault();
  console.log("Subscribed successfully!");
};

export default Footer;
