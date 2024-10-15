import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar";
import { RiGalleryView2 } from "react-icons/ri";
import { FaCar, FaInfo, FaStar } from "react-icons/fa";
const PackageInfo = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-2">
        <div className="h-[27.125rem] w-full rounded-lg">
          <img
            src="https://media2.thrillophilia.com/images/photos/000/129/394/original/1532088730_shutterstock_567029827.jpg?w=753&h=450&dpr=1.5"
            alt=""
            className="w-full h-full object-cover rounded-lg bg-center"
          />
        </div>
        <div className="flex flex-col justify-center items-center gap-4">
          <div className="w-[68.8125rem] h-[4.588rem] mx-auto bg-white rounded-sm flex pl-7 mt-3">
            <div className="w-[18.8125rem] h-[4.588rem] ml-[4rem] bg-[#8B8484] border border-black flex items-center justify-center gap-2">
              <FaInfo size={20} />
              <button className="h-full text-xl font-Poppins">
                Information
              </button>
            </div>

            <div className="w-[18.8125rem] h-[4.588rem] border-y border-black flex items-center justify-center gap-2">
              <FaCar size={28} />
              <button className="h-full text-xl font-Poppins">Tour Plan</button>
            </div>

            <div className="w-[18.8125rem] h-[4.588rem] border border-black flex items-center justify-center gap-2">
              <RiGalleryView2 size={28} />
              <button className="h-full text-xl font-Poppins">Gallery</button>
            </div>
          </div>
          <div className="w-[79rem] h-[67.96rem] rounded-md pt-[2.625rem] shadow-xl mt-5">
            <div className="flex w-[40rem] gap-10 mt-[1.625rem] ml-[1.625rem]">
              <div className="flex flex-col ml-[1.625rem]">
                <h1 className="text-4xl font-Poppins">Indore</h1>
                <div className="flex w-[12rem] gap-1">
                  <FaStar size={14} />
                  <FaStar size={14} />
                  <FaStar size={14} />
                  <FaStar size={14} />
                  <FaStar size={14} />
                  <p className="text-sm font-Poppins text-[#7D7D7D] ml-2">
                    {" "}
                    (12 Reviews)
                  </p>
                </div>
              </div>
              <div className="flex justify-center items-center w-[14rem]">
                <p className="text-3xl font-Poppins text-[#DF6951]">₹ 6999 </p>
                <p className="text-md font-Poppins text-[#7D7D7D]">
                  {"   "} / Per Person
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center w-[40rem] ml-[1.925rem] mt-[1.625rem]">
              <p className="text-sm font-Poppins">
                Indore, the largest city in Madhya Pradesh, is a vibrant blend
                of rich history, culture, and modern urban life. Known for its
                architectural marvels, street food, and educational
                institutions, this city offers a unique experience to every
                traveler. Indore&apos;s history is deeply rooted in the reign of
                the Holkars, and its legacy is visible in landmarks such as the
                majestic Rajwada Palace and the Lal Bagh Palace, both reflecting
                the grandeur of the Holkar dynasty. The city&apos;s bustling
                markets, like Sarafa Bazaar and Chhappan Dukan, are famous for
                their mouthwatering street food, offering delicacies like poha,
                jalebi, and dahi bada. It&apos;s a paradise for food lovers! For
                nature enthusiasts, Patalpani Waterfall, Ralamandal Wildlife
                Sanctuary, and Pipliyapala Regional Park provide a serene escape
                from the city’s hustle. Indore is also home to significant
                religious sites, such as the Khajrana Ganesh Temple and
                Annapurna Temple, which attract pilgrims from across the
                country. With its perfect blend of tradition and modernity,
                Indore is not only a growing hub for business and education but
                also a captivating destination for history buffs, foodies, and
                nature lovers alike.
              </p>
            </div>
            <div className="w-[40rem] h-[40rem] ml-[1.625rem] mt-[1.625rem] flex flex-col gap-2 px-[1.625rem] py-[2rem]">
              <div className="flex gap-[18rem] font-Poppins">
                <p className="text-[#DF6951]">Destination</p>
                <p className="">Indore</p>
              </div>
              <div className="flex gap-[18.5rem] font-Poppins">
                <p className="text-[#DF6951]">Departure</p>
                <p className="">Gwalior</p>
              </div>
              <div className="flex gap-[15.8rem] font-Poppins">
                <p className="text-[#DF6951]">Departure Time</p>
                <p className="">7:30 PM IST</p>
              </div>
              <div className="flex gap-[17.5rem] font-Poppins">
                <p className="text-[#DF6951]">Return Time</p>
                <p className="">12:30 PM IST</p>
              </div>
              <div className="flex gap-[17.8rem] font-Poppins">
                <p className="text-[#DF6951]">Dress Code</p>
                <p className="">Casuals</p>
              </div>
              <div className="flex gap-[18.5rem] font-Poppins">
                <p className="text-[#DF6951]">Inclusions</p>
                <p className="">Breakfast, Lunch, Dinner</p>
              </div>
              <div className="flex gap-[18.3rem] font-Poppins">
                <p className="text-[#DF6951]">Exclusions</p>
                <p className="">Any Private Expenses</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PackageInfo;
