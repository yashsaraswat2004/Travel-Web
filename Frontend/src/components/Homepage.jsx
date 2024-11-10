import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  // for navbar user verify

  //body search
  const [keyword, setKeyword] = useState([]);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const handleSearch = async () => {
    if (!keyword.trim) {
      setErrors({ keyword: "**Please enter a destination." });
      return;
    }
    try {
      const response = await axios.get(
        `https://travel-tour-mlya.onrender.com/api/destination/?keyword=${keyword}`
      );
      if (response.status !== 200) {
        setErrors(response.data.errors);
      }
      console.log("response from homeage search", response.data);
      navigate(`/package/${keyword}`);
    } catch (error) {
      console.log("error while searching from homepage body", error);
    }
  };

  const handleKeywordChange = (e) => {
    setKeyword(e.target.value);
  };

  return (
    <div>
      <div
        className=" h-[31.375rem] w-full bg-cover bg-center relative"
        style={{
          backgroundImage: "url('./HeroSection.jpeg')",
          
          opacity: "90%",
        }}
      >
        <div className="w-[39.25rem] h-[20.875rem] absolute top-[8.4375rem] xl:left-[9rem] md:left-20 left-0 mx-4 right-0 flex flex-col gap-4 place-content-center ">


          <h1 className="text-white lg:text-[2.5rem] md:text-4xl text-2xl px-2 font-[700] font-poppins md:w-[34.5rem] md:h-[12.235rem] w-screen leading-[4.244rem]">
            No matter where you’re going to, we’ll take you there
          </h1>


          <div className="lg:h-[4.4287rem] md:h-24 h-14 lg:w-[56.5568rem] md:w-full w-fit border bg-[#F3F3F399] rounded-[0.625rem] flex items-center md:justify-between gap-4">

            <div className="flex items-center md:gap-2 gap-1">

              <div className="md:ml-[3.05rem]  md:w-full w-28">
                <input
                  type="text"
                  placeholder="Where to ?"
                  className="text-transform:capitalize py-2 px-2 focus:outline-none md:text-[1.25rem] font-[600] font-poppins placeholder:text-black md:placeholder:text-[1.25rem] md:w-full w-28 placeholder:text-sm placeholder:font-[600] placeholder:font-poppins bg-transparent"
                  value={keyword}
                  onChange={handleKeywordChange}
                  onKeyDown={handleKeyDown}
                />
                {errors.keyword && (
                  <p className="text-[#DF6951] font-poppins font-bold text-md mb-2 ml-2">
                    {errors.keyword}
                  </p>
                )}
              </div>

              <div className="flex focus:outline-none h-[4.4287rem] md:w-[12.3125rem] w-20 bg-transparent rounded-[0.625rem] items-center justify-center">
                <select
                  name="No. of Days"
                  id="No. of Days"
                  className="h-full appearance-none focus:outline-none md:text-[1.25rem] text-sm  font-[600] font-poppins py-2 md:px-4 px-1 bg-transparent cursor-pointer"
                >
                  <option value="" disabled selected className="text-sm">
                    Select Days
                  </option>
                  <option value="1">1 Day</option>
                  <option value="2">2 Days</option>
                  <option value="3">3 Days</option>
                  <option value="4">4 Days</option>
                  <option value="5">5 Days</option>
                </select>
                <div className="">
                  <IoIosArrowDown size={20} color="black" />
                </div>
              </div>


            </div>

            <button
              onClick={handleSearch}
              className="bg-[#DF6951] md:w-[11.83rem] md:px-0 px-4 md:h-[2.46rem] h-7 rounded-md text-white md:text-[1.25rem] text-sm  font-[600] font-poppins hover:bg-[#E0761F] transition duration-300 transform hover:scale-105 md:mr-[3.05rem] mr-2"
            >
              Search
            </button>

          </div>




          <div className="md:w-[39.25rem] w-96 h-[2.875rem] flex flex-wrap items-center md:gap-4 gap-1 mt-3 md:ml-[0.7rem]">
            <div className="md:w-[12.5537rem] w-fit h-[2.6175rem] flex items-center ">
              <div className="md:w-[2.4856rem] md:h-[2.4856rem] w-6 h-6 rounded-full bg-[#F3F3F399]">
                <img
                  src="https://s3-alpha-sig.figma.com/img/e86b/1a58/edac4decef7d3331c8b7169d259e4e8b?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pQ1u1dPf47IrYqYD9mYCaI~CjHZZ508gnDse530IRAMGaERmkdVdOJwfAU3YetrfBHwqGSuCg7qw570KfuGJRUYgrmD2aJYkExh~Y5oIEMwUNzZ9uC5hCxxCGxmqcVr0hnsPuJzO-2Tv-TYPXqPA70~-iAJNACq6~A9n6MF~zYucUSufkkOKm4Mjra7fBhO4Qq~dpXfKalvwEU9LSw2JiOXApgoizK7CyM3owhX0ShrXKW~mlh6KVN~T2Hnyi2PeTz8IxJ42P-ZqHuADUmVxYU0YjA2ETuslWHOOTvJcWeVly8uc2FGqC3VuLQe-e9hoNfeeVVUQyeszTK6b6juYKQ__"
                  alt=""
                  className="md:w-[2.4856rem] md:h-[2.4856rem] w-6 h-6 rounded-full "
                />
              </div>
              <div className="md:w-[2.4856rem] md:h-[2.4856rem] w-6 h-6 rounded-full bg-[#F3F3F399] absolute md:left-[1.856rem] left-3">
                <img
                  src="https://s3-alpha-sig.figma.com/img/7a76/66b9/bf8984e03a5298eb66a5d598dc0cc0d1?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PSLj9O5WVQwhdFQNHHZ032XWJ83rQJUgprhGqmkvZ~5vGXlSs8xFLaW2xu6Rz0RLs8pHIIL6Uked2ufbPZNoSH1q91tc02rz~2ieHY-xKlzTfeEHbvTXULGRxnpJxvg35dI3XdGh8h1nj~L6uHDijJ-u-McsVrru7hCQibI1YWGMZGLpEmnwuX2G3If~k74LZjGq4TqvEjoRiM7wWzNtfDOH-vAa1CxgAzVPuAAlQE-OFYFqsM1PSM3t7~xXOH-rRjpXMz-H4eYrHVb~1QojDrRQHHMG8540e3xePY9fJzM-7zfbeX4mc81ODWXy8B3RIClwRK7a~EVAX61CEXATKA__"
                  alt=""
                  className="md:w-[2.4856rem] md:h-[2.4856rem] w-6 h-6 rounded-full"
                />
              </div>
              <div className="md:w-[2.4856rem] md:h-[2.4856rem] w-6 h-6 rounded-full bg-[#F3F3F399] absolute md:left-[3.4rem] left-6">
                <img
                  src="https://s3-alpha-sig.figma.com/img/b873/e89d/2ab86ab88178bc4908f7a74af398fcdf?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hoEnsmsbo4rgac8hkuMwsg38djLiOwqi-1Rd8llLNhPgFMCcrcIso1tTweyS74Q8ibFOHzMATmI6bPyaC4Z3RoC1ejELxInokmrjLB70wdXQgSIJsdaipNqqtX4MKTu8KJFrInZJsEDyR~Kk03fpQPUbs4AWWcKsUFgGCDlpm8M658gUDTynCZCpWRZU3AeUsAg2LcPHmhbnik1L0ypNYl-54a~74~zT~1y37mjm285lhJxKt~Of~ajiVViMYQsoX4FgjDSccVjIr7ZVfncKqoafLjiORwKgjEf2sexfY12zjbuNhGSCmGH-j3e2sd~aAksmxvoTHZg7Tlpq-ZRxAA__"
                  alt=""
                  className="md:w-[2.4856rem] md:h-[2.4856rem] w-6 h-6 rounded-full"
                />
              </div>
              <div className="md:w-[2.4856rem] md:h-[2.4856rem] w-6 h-6 rounded-full bg-[#F3F3F399] absolute md:left-[5.19rem] left-9">
                <img
                  src="https://s3-alpha-sig.figma.com/img/cd65/84f6/702d429835720cd261b497fc4f154e56?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KM8Y2ZjhuO8k8RS2N3Z4Gc2U8edF-pCk9UVgSd1t-nbYeJvN4aKldiQziAVEHLuh78wXm-KDmDI5KEKl9PqyegszDsxK2RyenTS8-P~WKc330UGtjwwriW4mRQB0~U-dC7VL4Y~oknrDVgFMLNYJXTiLiD-FwBMXVNs0xKqA0T5fcdOHBaSlbfmFIOahL-D4llI0MyPX4VeKQlqxBRJgZqgZPQ-aGzUb5e6w8Hg0aK7GhE4Vmi4lRvUX8ue4dCjuaWfsx8SW1LrKoL3IdwpgqCB~mmYIxs3RiTB9TGO~q24Pt7mgpeUt8WnWseXiKwH6DC7KahCEGrKqU22fMDLDhA__"
                  alt=""
                  className="md:w-[2.4856rem] md:h-[2.4856rem] w-6 h-6 rounded-full"
                />
              </div>
              <div className="md:w-[2.4856rem] md:h-[2.4856rem] w-6 h-6 rounded-full bg-[#F3F3F399] absolute md:left-[6.822rem] left-12">
                <img
                  src="https://s3-alpha-sig.figma.com/img/2b7e/ae90/47b4fa95b71f17bdebc0371ca488f595?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ePnfAmFcW6VZAcMiiqMLr~LmpanIY4WRPngp8SGw3YzN1rBBn8GLajsP1zAUpcLb0ZdcHYc4JjWMdoY9FA9jEiLvxdPtILYNn1m9y90baRe-xfTuixENLT7no0NLSuzspFHaupEaXJah2nB0iotA50jkYEbXv3ceOdaCPEPz8DhMBUQBK1ovIrnw7-rwbknE5HU6Iu7dwlqNlyzRsfWUjuTLYr1lpA1JcSqUQuMC-~OHoBXRaALqD3Fyy-lNRin~U1sMu~vbTofe88dhZ34N~DCDmfZUcKOkFmjcxt-53XuuC-jkn1NwstIQs019OZrrOITU5CV7eAlDit6kK~SkZg__"
                  alt=""
                  className="md:w-[2.4856rem] md:h-[2.4856rem] w-6 h-6 rounded-full"
                />
              </div>
              <div className="md:w-[2.4856rem] md:h-[2.4856rem] w-6 h-6 rounded-full bg-[#F3F3F399] absolute md:left-[8.357rem] left-15">
                <img
                  src="https://s3-alpha-sig.figma.com/img/9c41/b359/452e81bba6240b95cc06df83c02886a3?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QXH-HkCXe6~Nuo2cHmnHbihxpGVzPw4WLTA28r4ro8KKHNDj9yaaVhHpjOMdvyrkaLBFoKOpcDg7pLcjuiNhPdVtULRWvwuNSOtr2j8hW8MdiXPFEI41VhsUTD4Kl-j9XyV~5nOFLmhwGFoZV9meVJVrgTfPHgNxAzBgQy8Lhb~7Mj6em1Ufu3SvAI0ZLaEr~-xrdVEh-Op8NzvpYQRYd0o1S2OfOzQR54Or2UXaORr8dMH1XgXdWd3Hf1-UziMhRkNLQ9yybOmzapmDG55hG5XNyXyfyPQkH2Ktc2ckbZLj5HlKn2X8tpZpSMI-BVIPJx74OjYm9T5ui4PXCYeIVg__"
                  alt=""
                  className="md:w-[2.4856rem] md:h-[2.4856rem] w-6 h-6 rounded-full"
                />
              </div>
              <div className="md:w-[2.4856rem] md:h-[2.4856rem] w-6 h-6 rounded-full bg-[#DF6951] absolute md:left-[10.133rem] left-16 flex  items-center justify-center">
                <h1 className="text-white text-[1.25rem] font-[600] font-poppins">
                  +
                </h1>
              </div>
            </div>
            <p className="text-[0.783rem] font-[500] font-poppins text-white leading-10">
              2,500 people booked Goa Trip in last 24 hours
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
