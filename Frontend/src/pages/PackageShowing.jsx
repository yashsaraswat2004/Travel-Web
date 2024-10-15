import Navbar from "../components/Navbar";
import Footer from "../components/Footer/Footer";
import Card from "../components/WhyChooseUs/Card";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const PackageShowing = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <div className="flex flex-col">
      <Navbar />
      <div>
        <h1 className="text-3xl font-bold ml-[6.8rem] pt-[1rem] mt-10">
          Popular Packages in {id}
        </h1>
      </div>
      <div className="ml-[6.8rem] pt-[2rem] mt-5 h-[91rem] w-[78.625rem] grid grid-cols-3 gap-2">
        <Card
          src={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHwJjaHfwd8HEKscTW2GVrj4D5wqWLJsPhfw&s"
          }
          Days={"5 Days"}
          peoples={"6"}
          City={"Indore"}
          Country={"India"}
          DiscountedPrice={"5999"}
          price={"8999"}
        />
        <Card
          src={
            "https://media2.thrillophilia.com/images/photos/000/129/394/original/1532088730_shutterstock_567029827.jpg?w=753&h=450&dpr=1.5"
          }
          Days={"7 Days"}
          peoples={"3"}
          City={"Indore"}
          Country={"India"}
          DiscountedPrice={"7999"}
          price={"10999"}
          onClick={() => {
            navigate("/packageinfo");
          }}
        />
        <Card
          src={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMFnVZ_gjEisOxuTSpWKEa0i13vOEzadsf2A&s"
          }
          Days={"2 Days"}
          peoples={"16"}
          City={"Indore"}
          Country={"India"}
          DiscountedPrice={"3999"}
          price={"4999"}
        />
        <Card
          src={
            "https://media2.thrillophilia.com/images/photos/000/129/394/original/1532088730_shutterstock_567029827.jpg?w=753&h=450&dpr=1.5"
          }
          Days={"2 Days"}
          peoples={"16"}
          City={"Indore"}
          Country={"India"}
          DiscountedPrice={"3999"}
          price={"4999"}
        />
        <Card
          src={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMFnVZ_gjEisOxuTSpWKEa0i13vOEzadsf2A&s"
          }
          Days={"2 Days"}
          peoples={"16"}
          City={"Indore"}
          Country={"India"}
          DiscountedPrice={"3999"}
          price={"4999"}
        />
        <Card
          src={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHwJjaHfwd8HEKscTW2GVrj4D5wqWLJsPhfw&s"
          }
          Days={"2 Days"}
          peoples={"16"}
          City={"Indore"}
          Country={"India"}
          DiscountedPrice={"3999"}
          price={"4999"}
        />
      </div>
      <Footer />
    </div>
  );
};

export default PackageShowing;
