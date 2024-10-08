import { FaSearch } from "react-icons/fa";
import { IoMenuSharp } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { IoIosArrowDown } from "react-icons/io";
const Navbar = () => {
  return (
    <div className="flex justify-between items-center max-w-full px-10 py-4 font-Montserrat cursor-pointer shadow-lg">
      <div className="flex items-center gap-4 ">
        <img className="w-16" src="./aeroplane.png" alt="" />
        <h1 className="font-bold text-2xl">EasyTrip</h1>
      </div>
      <div className="border border-gray-300 shadow-lg w-[50rem] h-[4rem] rounded-full mt-2 flex justify-between items-center px-6 bg-white transition duration-300 hover:shadow-xl">
        <div className="w-[70%] h-full m-0 border-gray-300 flex border-r-2 flex-col pb-2">
          <p className="text-gray-500 text-lg font-semibold mt-2 ml-4">Where</p>
          <input
            type="text"
            placeholder="Search Destinations"
            className="w-full h-full rounded-sm px-4 focus:outline-none transition duration-200 border-gray-300"
          />
        </div>
        <div className="relative h-full flex items-center rounded-sm focus:outline-none px-5 py-2 transition duration-200 w-[10rem] hover:bg-gray-200">
          <select
            name="No. of Days"
            id="No. of Days"
            className="h-full appearance-none hover:bg-gray-200 rounded-sm focus:outline-none pl-2 pr-8 border-r-2 cursor-pointer"
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
        <div className="w-14 h-14 ml-9 flex items-center justify-center bg-custom-pink hover:bg-dark-pink rounded-full transition duration-300 transform hover:scale-105">
          <FaSearch size={18} color="white" />
        </div>
      </div>
      <div className="flex items-center gap-4 border border-gray-300 rounded-full p-3 shadow-lg hover:shadow-xl bg-white transition duration-300">
        <IoMenuSharp size={30} color="black" />
        <CgProfile size={30} color="black" />
      </div>
    </div>
  );
};

export default Navbar;
