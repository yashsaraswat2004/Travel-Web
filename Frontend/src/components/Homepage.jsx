import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  // for navbar user verify

  //body search
  const [keyword, setKeyword] = useState([]);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const handleSearch = async () => {
    if (!keyword.trim) {
      setErrors({ keyword: "**Please enter a destination." });
      return;
    }
    try {
      const response = await axios.get(
        `https://travel-tour-mlya.onrender.com/api/destination/?keyword=${keyword}`
      );
      if (response.status !== 200) {
        setErrors(response.data.errors);
      }
      navigate(`/package/${keyword}`);
    } catch (error) {
      console.log("error while searching from homepage body", error);
    }
  };

  const handleKeywordChange = (e) => {
    setKeyword(e.target.value);
  };

  return (
    <div>
      <div
        className=" h-[31.375rem] w-full bg-cover bg-center relative"
        style={{
          backgroundImage: "url('./HeroSection.webp')",

          opacity: "90%",
        }}
      >
        <div className="w-[39.25rem] h-[20.875rem] absolute top-[8.4375rem] xl:left-[9rem] md:left-20 left-0 mx-4 right-0 flex flex-col gap-4 place-content-center ">
          <div className="backdrop-blur-none rounded-lg bg-gray-800/10 mb-5">
            <h1 className=" lg:text-[3.3rem] md:text-4xl text-4xl px-2 font-[700] font-poppins md:w-[34.5rem] md:h-[12.235rem] w-screen leading-tight lg:leading-[4.2rem] lg:text-black">
              No matter where you’re going to, we’ll take you there
            </h1>
          </div>




          <div className="lg:h-[6.4287rem] md:h-24 h-14 lg:w-[65.5568rem] md:w-full w-[25rem] border bg-white rounded-[0.625rem] flex justify-center gap-6 items-center md:justify-between">



            <div className="flex items-center md:gap-5 gap-2 w-fit my-2 ">

              {/* Searching the destination from which we are going */}
              <div className="md:ml-[3.05rem]  md:w-full h-full w-18 ">
                <input
                  type="text"
                  placeholder="From ?"
                  className="text-transform:capitalize py-2 px-2 focus:outline-none md:text-[1.25rem] font-[600] font-poppins placeholder:text-black md:placeholder:text-[1.25rem] md:w-full w-18 placeholder:text-sm placeholder:font-[600] placeholder:font-poppins bg-transparent"
                  value={keyword}
                  onChange={handleKeywordChange}
                  onKeyDown={handleKeyDown}
                />
                {errors.keyword && (
                  <p className="text-[#DF6951] font-poppins font-bold text-md mb-2 ml-2">
                    {errors.keyword}
                  </p>
                )}
              </div>


              <div className="  md:w-full w-24">
                <input
                  type="text"
                  placeholder="Destination ?"
                  className="text-transform:capitalize py-2 px-2 focus:outline-none md:text-[1.25rem] font-[600] font-poppins placeholder:text-black md:placeholder:text-[1.25rem] md:w-full w-20 placeholder:text-sm placeholder:font-[600] placeholder:font-poppins bg-transparent"
                  value={keyword}
                  onChange={handleKeywordChange}
                  onKeyDown={handleKeyDown}
                />
                {errors.keyword && (
                  <p className="text-[#DF6951] font-poppins font-bold text-md mb-2 ml-2">
                    {errors.keyword}
                  </p>
                )}
              </div>
              


              {/* Selecting number of Days */}
              <div className="flex focus:outline-none h-[4.4287rem] md:w-[15.3125rem] w-20 bg-transparent rounded-[0.625rem] items-center justify-center">
                <select
                  name="No. of Days"
                  id="No. of Days"
                  className="h-full appearance-none focus:outline-none md:text-[1.25rem] text-sm  font-[600] font-poppins py-2 md:px-2 px-1 bg-transparent cursor-pointer"
                >
                  <option value="" disabled selected className="text-sm">
                    Select Days
                  </option>
                  <option value="1">1 Day</option>
                  <option value="2">2 Days</option>
                  <option value="3">3 Days</option>
                  <option value="4">4 Days</option>
                  <option value="5">5 Days</option>
                </select>
                <div className="">
                  <IoIosArrowDown size={18} color="black" />
                </div>
              </div>

               
              {/* Selecting number of peoples */}
              <div className="flex focus:outline-none h-[4.4287rem] md:w-[22.3125rem] w-20 bg-transparent rounded-[0.625rem] items-center justify-center ">
                <select
                  name="No. of Days"
                  id="No. of Days"
                  className="h-full appearance-none focus:outline-none md:text-[1.25rem] text-sm  font-[600] font-poppins py-2 md:px-2 px-1 bg-transparent cursor-pointer"
                >
                  <option value="" disabled selected className="text-sm">
                    Select number of Peoples
                  </option>
                  <option value="1" className="flex">Adults</option>
                  <option value="2">Childrens</option>
                </select>
                <div className="">
                  <IoIosArrowDown size={20} color="black" />
                </div>
              </div>



            </div>

            

            <button
              onClick={handleSearch}
              className="bg-[#DF6951] md:w-[11.83rem] md:px-0 px-4 md:h-[2.46rem] h-7 rounded-md text-white md:text-[1.25rem] text-sm  font-[600] font-poppins hover:bg-[#E0761F] transition duration-300 transform hover:scale-105 md:mr-[1.05rem] mr-2"
            >
              Search
            </button>
          </div>






          <div className="md:w-[39.25rem] w-96 h-[2.875rem] flex flex-wrap items-center md:gap-4 gap-1 mt-3 md:ml-[0.7rem]">
            <div className="md:w-[12.5537rem] w-fit h-[2.6175rem] flex items-center ">
              <div className="md:w-[2.4856rem] md:h-[2.4856rem] w-6 h-6 rounded-full bg-[#F3F3F399]">
                <img
                  src="/ClientsImage/client1.png"
                  alt=""
                  className="md:w-[2.4856rem] md:h-[2.4856rem] w-6 h-6 rounded-full "
                />
              </div>
              <div className="md:w-[2.4856rem] md:h-[2.4856rem] w-6 h-6 rounded-full bg-[#F3F3F399] absolute md:left-[1.856rem] left-3">
                <img
                  src="/ClientsImage/client2.png"
                  alt=""
                  className="md:w-[2.4856rem] md:h-[2.4856rem] w-6 h-6 rounded-full"
                />
              </div>
              <div className="md:w-[2.4856rem] md:h-[2.4856rem] w-6 h-6 rounded-full bg-[#F3F3F399] absolute md:left-[3.4rem] left-6">
                <img
                  src="/ClientsImage/client3.png"
                  alt=""
                  className="md:w-[2.4856rem] md:h-[2.4856rem] w-6 h-6 rounded-full"
                />
              </div>
              <div className="md:w-[2.4856rem] md:h-[2.4856rem] w-6 h-6 rounded-full bg-[#F3F3F399] absolute md:left-[5.19rem] left-9">
                <img
                  src="/ClientsImage/client4.png"
                  alt=""
                  className="md:w-[2.4856rem] md:h-[2.4856rem] w-6 h-6 rounded-full"
                />
              </div>
              <div className="md:w-[2.4856rem] md:h-[2.4856rem] w-6 h-6 rounded-full bg-[#F3F3F399] absolute md:left-[6.822rem] left-12">
                <img
                  src="/ClientsImage/client5.png"
                  alt=""
                  className="md:w-[2.4856rem] md:h-[2.4856rem] w-6 h-6 rounded-full"
                />
              </div>
              <div className="md:w-[2.4856rem] md:h-[2.4856rem] w-6 h-6 rounded-full bg-[#F3F3F399] absolute md:left-[8.357rem] left-15">
                <img
                  src="/ClientsImage/client6.png"
                  alt=""
                  className="md:w-[2.4856rem] md:h-[2.4856rem] w-6 h-6 rounded-full"
                />
              </div>
              <div className="md:w-[2.4856rem] md:h-[2.4856rem] w-6 h-6 rounded-full bg-[#DF6951] absolute md:left-[10.133rem] left-16 flex  items-center justify-center">
                <h1 className="text-white text-[1.25rem] font-[600] font-poppins">
                  +
                </h1>
              </div>
            </div>
            <p className="text-[0.783rem] font-[500] font-poppins text-white leading-10">
              2,500 people booked Goa Trip in last 24 hours
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
