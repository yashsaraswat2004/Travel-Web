import { MdOutlineModeOfTravel } from "react-icons/md";
import { MdOutlinePayment } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { BsPeopleFill } from "react-icons/bs";
import { useState } from "react";
const BookNextTrip = () => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="md:h-[33.3125rem] h-fit w-full md:flex grid md:justify-between justify-items-center gap-5 relative mt-10">
      <div>
        <p className="text-[1rem] font-[600] text-[#5E6282] font-poppins mt-[2rem] lg:ml-[3.5rem] ml-4 text-wrap">
          Easy and Fast
        </p>
        <h1 className="lg:text-[2rem] text-xl text-wrap text-[#14183E] leading-10 font-[700] font-poppins lg:ml-[3.5rem] ml-4 sm:w-[20rem]">
          Book your next trip in 3 easy steps
        </h1>
        <div className="lg:w-[35.75rem]  lg:h-[12.55rem] flex flex-col gap-2 xl:ml-[4.25rem] ml-5 mt-[1rem] ">
          <div className="flex items-center xl:gap-[6rem] gap-4 h-[5.7268rem] justify-around">
            <div className="flex items-center justify-center md:w-[4.5rem] w-[2rem] h-[4.5rem] rounded-full lg:ml-[1.5rem]">
              <MdOutlineModeOfTravel size={44} />
            </div>

            <div>
              <h1 className="text-[1rem] text-[#14183E] leading-10 font-[700] font-poppins">
                Choose Destination
              </h1>
              <p className="text-[#5E6282] font-poppins text-[1rem] font-[400]">
                Choose your dream destination and explore the best places around
                the world.
              </p>
            </div>
          </div>
          <div className="flex items-center xl:gap-[6rem] gap-4 h-[5.7268rem] justify-around ">
            <div className="flex items-center justify-center md:w-[4.5rem] w-[2rem] h-[4.5rem] rounded-full lg:ml-[1.5rem]">
              <MdOutlinePayment size={44} />
            </div>
            <div className="">
              <h1 className="text-[1rem] text-[#14183E] leading-10 font-[700] font-poppins">
                Make Payment
              </h1>
              <p className="text-[#5E6282] font-poppins text-[1rem] font-[400] text-wrap">
                Make payment for your trip and get your booking confirmed in
                minutes.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="xl:h-[26.1875rem] lg:h-96  h-80  xl:w-[26.4375rem] lg:w-[24rem] md:w-80 w-[19rem] md:mr-[3.5rem] mt-[3.5rem] rounded-3xl shadow-2xl justify-self-center">
        <div className="xl:h-[12.875rem] h-[10rem] xl:w-[26.4375rem] lg:w-[24rem] rounded-3xl">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRx2CuUHpaeR3wQh5eJck3BrqSKrooJu3JeA&s"
            alt=""
            loading="lazy"
            className="w-full h-full object-cover rounded-t-3xl"
          />
        </div>

        <div className="flex flex-col lg:gap-4 gap-2 ml-[1.5rem] lg:mt-[1.5rem] mt-4 h-[5rem] w-[22.4375rem] rounded-3xl">
          <h1 className="lg:text-[1.5rem] md:text-xl font-[700] font-poppins text-[#14183E]">
            Trip To Bhopal
          </h1>
          <div className="flex gap-4 text-[#5E6282] font-poppins text-[1rem] font-[400]">
            <p>14-29 January</p>
            <p>By Amar Singhal</p>
          </div>
          <div className="flex gap-4">
            <img src="./LEAF.svg" alt="" />
            <img src="./map icon.svg" alt="" />
            <img src="./send.svg" alt="" />
          </div>
          <div className="flex items-center lg:justify-between gap-11 lg:mx-[1.5rem] md:mx-3">
            <div className="flex items-center gap-3">
              <BsPeopleFill size={24} />
              <p>24 people going</p>
            </div>
            <FaRegHeart
              size={24}
              onClick={handleLike}
              className={`hover:cursor-pointer hover:scale-105 duration-300 ${
                isLiked ? "text-red-700" : ""
              }`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookNextTrip;
