import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar";
import { RiGalleryView2 } from "react-icons/ri";
import { FaCar, FaInfo } from "react-icons/fa";
import Information from "../components/Information";
import { useState } from "react";
import TourPlan from "../components/TourPlan";

const PackageInfo = () => {
  const [activeTab, setActiveTab] = useState("information");
  return (
    <div>
      <Navbar />
      <div className="">
        <div className="h-[27.125rem] w-full rounded-lg">
          <img
            src="https://media2.thrillophilia.com/images/photos/000/129/394/original/1532088730_shutterstock_567029827.jpg?w=753&h=450&dpr=1.5"
            alt=""
            className="w-full h-full object-cover rounded-lg bg-center"
          />
        </div>
        <div className="flex flex-col justify-center items-center gap-4">
          <div className="w-[68.8125rem] h-[4.588rem] mx-auto bg-white rounded-sm flex pl-7 mt-3">
            <div
              className={`w-[18.8125rem] h-[4.588rem] ml-[4rem] border border-black flex items-center justify-center gap-2 ${
                activeTab === "information"
                  ? "bg-[#8B8484]"
                  : "bg-white text-black"
              }`}
              onClick={() => setActiveTab("information")}
            >
              <FaInfo size={20} className="cursor-pointer" />
              <button className="h-full text-xl font-Poppins">
                Information
              </button>
            </div>

            <div
              className={`w-[18.8125rem] h-[4.588rem] border-y border-black flex items-center justify-center gap-2 ${
                activeTab === "tourplan"
                  ? "bg-[#8B8484]"
                  : "bg-white text-black"
              }`}
              onClick={() => setActiveTab("tourplan")}
            >
              <FaCar size={28} className="cursor-pointer" />
              <button className="h-full text-xl font-Poppins">Tour Plan</button>
            </div>

            <div
              className={`w-[18.8125rem] h-[4.588rem] border border-black flex items-center justify-center gap-2 ${
                activeTab === "gallery" ? "bg-[#8B8484]" : "bg-white text-black"
              }`}
              onClick={() => setActiveTab("gallery")}
            >
              <RiGalleryView2 size={28} className="cursor-pointer" />
              <button className="h-full text-xl font-Poppins">Gallery</button>
            </div>
          </div>
          {activeTab === "information" ? <Information /> : null}
          {activeTab === "tourplan" ? <TourPlan /> : null}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PackageInfo;
