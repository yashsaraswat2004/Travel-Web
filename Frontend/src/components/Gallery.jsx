export default function Gallery() {
  return (
    <div className="mt-10flex mx-20">
      <div className="grid grid-cols-2">
        <div className="grid grid-cols-2 gap-5 w-[36rem]">
          <div className="row-span-1 h-[26.75rem] mt-10">
            <img
              src="https://delhitourism.gov.in/dttdc/images/About_Img.jpg"
              alt="Tour 1"
              className="w-[20.937rem] h-[26.75rem] object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="grid grid-rows-2 h-[27rem] mt-10">
            <img
              src="https://www.thedelhitours.com/images/slider/6.jpg"
              alt="Tour 2"
              className="w-[16.812rem] h-[13.187rem] object-cover rounded-lg shadow-lg"
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwIDqiFpnNgSMSRBWjdSI-rB8j5kLJMAXGQw&s"
              alt="Tour 3"
              className="w-[16.812rem] h-[13.187rem] object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-0 p-0 m-0">
          <div className="grid grid-rows-2 border w-[17rem] h-[27rem] mt-10">
            <img
              src="https://www.thedelhitours.com/images/slider/6.jpg"
              alt="Tour 2"
              className="w-[16.812rem] h-[13.187rem] object-cover rounded-lg shadow-lg"
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwIDqiFpnNgSMSRBWjdSI-rB8j5kLJMAXGQw&s"
              alt="Tour 3"
              className="w-[16.812rem] h-[13.187rem] object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="row-span-1 h-[27rem] mt-10">
            <img
              src="https://delhitourism.gov.in/dttdc/images/About_Img.jpg"
              alt="Tour 1"
              className="w-[20.937rem] h-[26.75rem] object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
