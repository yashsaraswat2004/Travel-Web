import Card from "../components/WhyChooseUs/Card";
import { useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";



const PackageShowing = () => {
  const { id } = useParams();
  const [searchResults, setSearchResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const packagesPerPage = 6;

  //taking the from value from the search
  const location = useLocation();
  const fromValue = location.state?.from;
  const passenger = location.state?.travellers;
  console.log("packageshowing passenger", passenger)

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        try {
          const response = await axios.get(
            `https://travel-tour-mlya.onrender.com/api/destination?keyword=${id}`
          );
          setSearchResults(response.data);

        } catch (error) {
          console.log("Error while fetching data:", error);
        }
      }
    };
    fetchData();
  }, [id]);

  const indexOfLastPackage = currentPage * packagesPerPage;
  const indexOfFirstPackage = indexOfLastPackage - packagesPerPage;
  const currentPackages = searchResults.slice(
    indexOfFirstPackage,
    indexOfLastPackage
  );

  const handleNextPage = () => {
    if (currentPage < Math.ceil(searchResults.length / packagesPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="flex flex-col justify-center">
      <div>
        <h1 className="text-3xl capitalize font-bold lg:ml-[6.8rem] md:ml-16 pt-[1rem] mt-5">
          Results for {id}
        </h1>
      </div>

      <div className="xl:ml-[6.8rem] pt-[5rem] mt-5 lg:w-[78.625rem] w-auto md:grid flex flex-wrap justify-center md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-[3rem]">
        {currentPackages.length > 0 ? (
          currentPackages.map((result) => (
            <Card
              key={result._id}
              _id={result._id}
              src={result.images[0]}
              Days={result.numberOfNights}
              price={result.pricePerPerson}
              City={result.name}
              Country={result.country}
              fromValue={fromValue}
              passenger={passenger}
            />
          ))
        ) : (
          <h1 className="text-2xl font-bold text-center">No Trips Found</h1>
        )}
      </div>

      <div className="flex justify-center items-center space-x-4 mt-28">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span>
          Page {currentPage} of{" "}
          {Math.ceil(searchResults.length / packagesPerPage)}
        </span>
        <button
          onClick={handleNextPage}
          disabled={
            currentPage === Math.ceil(searchResults.length / packagesPerPage)
          }
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PackageShowing;
