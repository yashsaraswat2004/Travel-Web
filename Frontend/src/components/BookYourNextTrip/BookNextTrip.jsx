import { MdOutlineModeOfTravel } from "react-icons/md";
import { MdOutlinePayment } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { BsPeopleFill } from "react-icons/bs";
const BookNextTrip = () => {
  return (
    <div className="h-[33.3125rem] w-full flex justify-between">
      <div>
        <p className="text-[1rem] font-[600] text-[#5E6282] font-poppins mt-[3.5rem] ml-[3.5rem]">
          Easy and Fast
        </p>
        <h1 className="text-[2rem] text-[#14183E] leading-10 font-[700] font-poppins ml-[3.5rem] w-[20rem]">
          Book your next trip in 3 easy steps
        </h1>
        <div className="w-[35.75rem] h-[12.55rem] flex flex-col gap-4 ml-[4.25rem] mt-[2rem]">
          <div className="flex items-center gap-[6rem] h-[5.7268rem] justify-around">
            <div className="flex items-center justify-center w-[4.5rem] h-[4.5rem] rounded-full ml-[1.5rem]">
              <MdOutlineModeOfTravel size={44} />
            </div>

            <div>
              <h1 className="text-[1rem] text-[#14183E] leading-10 font-[700] font-poppins">
                Choose Destination
              </h1>
              <p className="text-[#5E6282] font-poppins text-[1rem] font-[400]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit, quibusdam.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-[6rem] h-[5.7268rem] justify-around">
            <div className="flex items-center justify-center w-[4.5rem] h-[4.5rem] rounded-full ml-[1.5rem]">
              <MdOutlinePayment size={44} />
            </div>
            <div className="">
              <h1 className="text-[1rem] text-[#14183E] leading-10 font-[700] font-poppins">
                Make Payment
              </h1>
              <p className="text-[#5E6282] font-poppins text-[1rem] font-[400]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit, quibusdam.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[26.1875rem] w-[26.4375rem] mr-[3.5rem] mt-[3.5rem] rounded-3xl shadow-2xl">
        <div className="h-[12.875rem] w-[26.4375rem] rounded-3xl">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRx2CuUHpaeR3wQh5eJck3BrqSKrooJu3JeA&s"
            alt=""
            className="w-full h-full object-cover rounded-t-3xl"
          />
        </div>

        <div className="flex flex-col gap-4 ml-[1.5rem] mt-[1.5rem]">
          <h1 className="text-[1.5rem] font-[700] font-poppins text-[#14183E]">
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
          <div className="flex items-center justify-between mx-[1.5rem]">
            <div className="flex items-center gap-2">
              <BsPeopleFill size={24} />
              <p>24 people going</p>
            </div>
            <FaRegHeart size={24} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookNextTrip;
