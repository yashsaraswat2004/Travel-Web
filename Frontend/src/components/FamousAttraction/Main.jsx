import FamousAttraction from "./FamousAttraction";

const Main = () => {
  return (
    <div className="flex justify-center flex-col">
      <div className="flex items-center justify-center mt-20">
        <h1 className="text-4xl font-bold font-Montserrat">
          Famous Tourist Attraction
        </h1>
      </div>
      <div className="w-[90%] px-20 mb-10 mx-auto mt-10 grid grid-cols-5 gap-5 ml-28">
        <FamousAttraction
          src="https://www.easemytrip.com//images/desk-img/hol-icon/kashmir.svg"
          city="Kashmir"
        />
        <FamousAttraction
          src="https://www.easemytrip.com//images/desk-img/hol-icon/jaipur.svg"
          city="Jaipur"
        />
        <FamousAttraction
          src="https://www.easemytrip.com//images/desk-img/hol-icon/lakshadweep.svg"
          city="Lakshadweep"
        />
        <FamousAttraction
          src="https://www.easemytrip.com//images/desk-img/hol-icon/mumbai.svg"
          city="Mumbai"
        />
        <FamousAttraction
          src="https://www.easemytrip.com//images/desk-img/hol-icon/delhi.svg"
          city="Delhi"
        />
        <FamousAttraction
          src="https://www.easemytrip.com//images/desk-img/hol-icon/andaman-new.png"
          city="Goa"
        />
        <FamousAttraction
          src="https://www.easemytrip.com//images/desk-img/hol-icon/kerala.svg"
          city="Kanyakumari"
        />
        <FamousAttraction
          src="https://www.easemytrip.com//images/desk-img/hol-icon/leh.svg"
          city="Leh"
        />
        <FamousAttraction
          src="https://www.easemytrip.com//images/desk-img/hol-icon/bali-indonesia.svg"
          city="Bali"
        />
        <FamousAttraction
          src="https://www.easemytrip.com//images/desk-img/hol-icon/bangalore.svg"
          city="Ahmedabad"
        />
      </div>
    </div>
  );
};

export default Main;
