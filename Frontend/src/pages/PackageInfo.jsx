import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar";
import { RiGalleryView2 } from "react-icons/ri";
import { FaCar, FaInfo } from "react-icons/fa";
import Information from "../components/Information";
import { useEffect, useState } from "react";
import TourPlan from "../components/TourPlan";
import { useLocation, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import Gallery from "../components/Gallery";
import PropTypes from "prop-types";

const PackageInfo = () => {
  const { id } = useParams();
  const [searchResults, setSearchResults] = useState([]);
  const [activeTab, setActiveTab] = useState("information");
  const jwt = localStorage.getItem("token");

  const location = useLocation();
  const { fromValue } = location.state || {};
  const { passenger } = location.state || {};

  console.log("package passenger", passenger);

  useEffect(() => {
    if (!id) Swal.fire("No id is Provided", "", "warning");
    const getData = async () => {
      try {
        const response = await axios.get(
          `https://travel-tour-mlya.onrender.com/api/destination/id/${id}`
        );
        setSearchResults(
          Array.isArray(response.data) ? response.data : [response.data]
        );
      } catch (error) {
        console.log("error in package info", error);
      }
    };
    getData();
  }, [id]);

  return (
    <div className="bg-[#f9f9f9]">
      <Navbar jwt={jwt} />

      {searchResults.length > 0 ? (
        searchResults.map((result) => (
          <div key={result._id} className="">
            <div className="h-[27.125rem] w-full rounded-lg">
              <img
                src={result.images[0]}
                alt=""
                className="w-full h-full object-cover rounded-lg bg-center"
              />
            </div>

            <div className="flex flex-col justify-center items-center gap-4 ">
              <div className="xl:w-fit w-3/4   lg:h-[4.588rem] h-14 mx-auto  rounded-sm flex -mt-4 justify-center">
                {/* information section  */}
                <div
                  className={`xl:w-[18.8125rem] w-1/3 flex items-center justify-center md:gap-2 gap-1 ${activeTab === "information"
                    ? "bg-[#8B8484]"
                    : "bg-white text-black"
                    }`}
                  onClick={() => setActiveTab("information")}
                >
                  <FaInfo size={20} className="cursor-pointer" />
                  <button className="h-full lg:text-xl md:text-base text-xs  font-Poppins">
                    Information
                  </button>
                </div>

                {/* tour plan section  */}
                <div
                  className={`xl:w-[18.8125rem] w-1/3  flex items-center justify-center md:gap-2 gap-1 ${activeTab === "tourplan"
                    ? "bg-[#8B8484]"
                    : "bg-white text-black"
                    }`}
                  onClick={() => setActiveTab("tourplan")}
                >
                  <FaCar size={28} className="cursor-pointer" />
                  <button className="h-full lg:text-xl md:text-base text-xs  font-Poppins">
                    Tour Plan
                  </button>
                </div>

                {/* gallery section  */}
                <div
                  className={`xl:w-[18.8125rem] w-1/3  flex items-center justify-center md:gap-2 gap-1 ${activeTab === "gallery"
                    ? "bg-[#8B8484]"
                    : "bg-white text-black"
                    }`}
                  onClick={() => setActiveTab("gallery")}
                >
                  <RiGalleryView2 size={28} className="cursor-pointer" />
                  <button className="h-full lg:text-xl md:text-base text-xs font-Poppins">
                    Gallery
                  </button>
                </div>
              </div>

              {activeTab === "information" ? (
                <Information
                  key={result._id}
                  name={result.name}
                  price={result.pricePerPerson}
                  description={result.description}
                  city={result.city}
                  facilities={result.facilities}
                  nights={result.numberOfNights}
                  fromValue={fromValue}
                  passenger={passenger}
                />
              ) : null}
              {activeTab === "tourplan" ? (
                <TourPlan itinerary={result.itinerary} />
              ) : null}
              {activeTab === "gallery" ? (
                <Gallery images={result.images} />
              ) : null}
            </div>
          </div>
        ))
      ) : (
        <h1 className="text-2xl font-bold">No Results Found</h1>
      )}
      <Footer />
    </div>
  );
};

PackageInfo.propTypes = {
  fromValue: PropTypes.string
};

export default PackageInfo;

