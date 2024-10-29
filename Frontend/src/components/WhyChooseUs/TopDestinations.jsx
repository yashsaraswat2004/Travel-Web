import Card from "./Card";
export default function TopDestinations() {
  return (
    <div className="h-[36.5rem] w-full mt-[5rem]">
      <div className="flex items-center justify-center gap-5">
        <img src="/aeroplane.png" alt="" className="w-24 h-24" />
        <h1 className="text-4xl font-bold">Explore Our Top Destinations</h1>
      </div>
      <div className="flex items-center justify-center gap-10 mt-10 ">
        <Card
          _id="Agra"
          src="Tajmahal.jpeg"
          Days="4"
          peoples="25"
          City="Agra"
          Country="India"
          price="7790"
        />
        <Card
          _id="Jaipur"
          src="Hawamahal.jpeg"
          City="Jaipur"
          Country="India"
          Days="5"
          peoples="10"
          price="9790"
        />
        <Card
          _id="GOA"
          src="https://media.easemytrip.com/media/Blog/India/637796764366393506/6377967643663935062h8Tc5.jpg"
          City="GOA"
          Country="India"
          Days="8"
          peoples="18"
          price="28790"
        />
      </div>
    </div>
  );
}
