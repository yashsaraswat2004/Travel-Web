import Navbar from "../components/Navbar";
import Card from "../components/WhyChooseUs/Card";
const Wishlist = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="w-[90%] max-h-full min-h-screen mx-auto mt-10 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold p-5 text-[#DF6951] font-poppins">
          Your Liked Destinations
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 px-3 mt-10 pl-10 mb-10">
          <Card
            className="transition-transform transform hover:scale-105"
            src={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpY_ctrvkSbas0TxrWdr89FvL2B1wB10CcqA&s"
            }
            Days={"5"}
            City={"Paris"}
            Country={"France"}
            price={"1000"}
          />
          <Card
            className="transition-transform transform hover:scale-105"
            src={
              "https://imgcdn.flamingotravels.co.in/Images/Menu/Destination/egypt.jpg"
            }
            Days={"3"}
            City={"Cairo"}
            Country={"Egypt"}
            price={"1000"}
          />
          <Card
            className="transition-transform transform hover:scale-105"
            src={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfej9BhyDN0U9oGJeXP-otwCvVtm6oBAIC-A&s"
            }
            Days={"4"}
            City={"New York"}
            Country={"USA"}
            price={"1000"}
          />
        </div>
      </div>
    </div>
  );
};
export default Wishlist;
