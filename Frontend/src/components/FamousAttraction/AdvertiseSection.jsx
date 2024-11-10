const AdvertiseSection = () => {
  return (
    <div className="md:h-[19.5rem] h-fit w-full sm:flex grid relative mt-16">
      <div
        className="sm:w-[50%] w-full  h-[221px]  md:h-auto flex flex-col items-center justify-center"
        style={{
          backgroundImage: "url('./.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1 className="text-white md:text-[1.125rem] text-base md:font-[700] font-medium font-poppins">
          Promotion
        </h1>
        <p className="text-white md:text-[3.125rem] text-3xl font-[700] font-poppins leading-[4.244rem]">
          Explore Nature
        </p>
        <button className="text-white md:text-[1.045rem] text-sm md:w-[11.034rem] md:h-[3.1475rem] w-32 h-10 font-[700] font-poppins border border-white rounded-[0.625rem]">
          View Packages
        </button>
      </div>
      <div
        className="sm:w-[50%] w-full h-[221px] md:h-auto"
        style={{
          backgroundImage: "url('./Explore Cities.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
    </div>
  );
};

export default AdvertiseSection;
