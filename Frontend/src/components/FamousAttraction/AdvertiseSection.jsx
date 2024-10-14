const AdvertiseSection = () => {
  return (
    <div className="h-[19.5rem] w-full flex">
      <div
        className="w-[46rem] flex flex-col items-center justify-center"
        style={{
          backgroundImage: "url('./.svg')",
        }}
      >
        <h1 className="text-white text-[1.125rem] font-[700] font-poppins">
          Promotion
        </h1>
        <p className="text-white text-[3.125rem] font-[700] font-poppins leading-[4.244rem]">
          Explore Nature
        </p>
        <button className="text-white text-[1.045rem] w-[11.034rem] h-[3.1475rem] font-[700] font-poppins border border-white rounded-[0.625rem]">
          View Packages
        </button>
      </div>
      <div
        className="w-[43.81rem]"
        style={{
          backgroundImage: "url('./Explore Cities.png')",
        }}
      ></div>
    </div>
  );
};

export default AdvertiseSection;
