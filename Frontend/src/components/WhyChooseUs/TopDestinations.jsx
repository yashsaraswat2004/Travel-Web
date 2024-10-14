import Card from "./Card";
export default function TopDestinations() {
  return (
    <div className="h-[36.5rem] w-full">
      <div className="flex items-center justify-center gap-5">
        <img src="/aeroplane.png" alt="" className="w-24 h-24" />
        <h1 className="text-4xl font-bold">Explore Our Top Destinations</h1>
      </div>
      <div className="flex items-center justify-center gap-10 mt-10">
        <Card
          src="Tajmahal.jpeg"
          Days="4 Days"
          peoples="25"
          City="Agra"
          Country="India"
          DiscountedPrice="₹6290"
          price="₹7790"
        />
        <Card
          src="Hawamahal.jpeg"
          City="Jaipur"
          Country="India"
          Days="5 Days"
          peoples="10"
          DiscountedPrice="₹8290"
          price="₹9790"
        />
        <Card
          src="https://media.easemytrip.com/media/Blog/India/637796764366393506/6377967643663935062h8Tc5.jpg"
          City="GOA"
          Country="India"
          Days="8 Days"
          peoples="18"
          DiscountedPrice="₹18290"
          price="₹28790"
        />
      </div>
    </div>
  );
}
