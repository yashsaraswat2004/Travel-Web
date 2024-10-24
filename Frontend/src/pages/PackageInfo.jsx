import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar";
import { RiGalleryView2 } from "react-icons/ri";
import { FaCar, FaInfo } from "react-icons/fa";
import Information from "../components/Information";
import { useEffect, useState } from "react";
import TourPlan from "../components/TourPlan";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import Gallery from "../components/Gallery";

const PackageInfo = () => {
  const { id } = useParams();
  const [searchResults, setSearchResults] = useState([]);
  const [activeTab, setActiveTab] = useState("information");
  const jwt = localStorage.getItem("token");

  useEffect(() => {
    if (!id) Swal.fire("No id is Provided", "", "warning");
    const getData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5070/api/destination/id/${id}`
        );
        setSearchResults(
          Array.isArray(response.data) ? response.data : [response.data]
        );
        console.log("search results package info", response.data);
      } catch (error) {
        console.log("error in package info", error);
      }
    };
    getData();
  }, [id]);

  return (
    <div className="flex">
      <div className="flex-1">
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
                    <button className="h-full text-xl font-Poppins">
                      Tour Plan
                    </button>
                  </div>

                  <div
                    className={`w-[18.8125rem] h-[4.588rem] border border-black flex items-center justify-center gap-2 ${
                      activeTab === "gallery"
                        ? "bg-[#8B8484]"
                        : "bg-white text-black"
                    }`}
                    onClick={() => setActiveTab("gallery")}
                  >
                    <RiGalleryView2 size={28} className="cursor-pointer" />
                    <button className="h-full text-xl font-Poppins">
                      Gallery
                    </button>
                  </div>
                </div>
                {activeTab === "information" ? (
                  <div className="flex gap-4">
                    <Information
                      key={result._id}
                      name={result.name}
                      price={result.pricePerPerson}
                      description={result.description}
                      city={result.city}
                      facilities={result.facilities}
                      nights={result.numberOfNights}
                    />
                  </div>
                ) : null}
                {activeTab === "tourplan" ? (
                  <TourPlan itinerary={result.itinerary} />
                ) : null}
                {activeTab === "gallery" ? <Gallery /> : null}
              </div>
            </div>
          ))
        ) : (
          <h1 className="text-3xl font-Poppins font-bold mt-20 w-full border-black text-center">
            No Results Found
          </h1>
        )}
        <Footer />
      </div>
    </div>
  );
};

export default PackageInfo;
