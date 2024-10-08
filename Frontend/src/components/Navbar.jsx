import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoMenuSharp } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-between items-center max-w-full px-4 py-4 font-Montserrat cursor-pointer shadow-lg md:px-10">
      <div className="flex items-center gap-4 ">
        <img className="w-16" src="./aeroplane.png" alt="" />
        <h1 className="font-bold text-2xl">EasyTrip</h1>
      </div>
      <div className="hidden md:flex border border-gray-300 shadow-lg w-[50rem] h-[3.5rem] rounded-full mt-2 justify-between items-center px-6 bg-white transition duration-300 hover:shadow-xl">
        <div className="w-[70%] h-full m-0 border-gray-300 flex border-r-2 ">
          <input
            type="text"
            placeholder="Search Destinations"
            className="w-full h-full rounded-sm px-4 focus:outline-none transition duration-200 border-gray-300"
          />
        </div>
        <div className="relative h-full flex items-center rounded-sm focus:outline-none px-5 py-2 transition duration-200 w-[10rem] bg-gray-200">
          <select
            name="No. of Days"
            id="No. of Days"
            className="h-full appearance-none bg-gray-200 rounded-sm focus:outline-none pl-2 pr-8 border-r-2 cursor-pointer"
          >
            <option value="" disabled selected>
              Select Days
            </option>
            <option value="1">1 Day</option>
            <option value="2">2 Days</option>
            <option value="3">3 Days</option>
            <option value="4">4 Days</option>
            <option value="5">5 Days</option>
          </select>
          <div className="absolute right-3">
            <IoIosArrowDown size={20} color="black" />
          </div>
        </div>
        <div className="w-10 h-10 ml-9 flex items-center justify-center bg-custom-pink hover:bg-dark-pink rounded-full transition duration-300 transform hover:scale-105">
          <FaSearch size={18} color="white" />
        </div>
      </div>
      <div className="flex items-center gap-4 border border-gray-300 rounded-full px-3 py-3 shadow-lg hover:shadow-xl bg-white transition duration-300">
        <IoMenuSharp
          size={30}
          color="black"
          onClick={() => setIsOpen(!isOpen)}
        />
        <CgProfile size={30} color="black" />
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 right-0 w-full bg-white shadow-lg z-10 md:hidden">
          <div className="flex flex-col p-4">
            <input
              type="text"
              placeholder="Search Destinations"
              className="w-full h-10 rounded-sm px-4 mb-2 focus:outline-none border border-gray-300"
            />
            <select
              name="No. of Days"
              id="No. of Days"
              className="h-10 appearance-none bg-gray-200 rounded-sm focus:outline-none pl-2 pr-8 border-r-2 cursor-pointer mb-2"
            >
              <option value="" disabled selected>
                Select Days
              </option>
              <option value="1">1 Day</option>
              <option value="2">2 Days</option>
              <option value="3">3 Days</option>
              <option value="4">4 Days</option>
              <option value="5">5 Days</option>
            </select>
            <div className="w-full h-10 flex items-center justify-center bg-custom-pink hover:bg-dark-pink rounded-full transition duration-300 transform hover:scale-105">
              <FaSearch size={18} color="white" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
