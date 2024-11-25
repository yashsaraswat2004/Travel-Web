import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import BookingConfirmationModal from "./BookingConfirmationModal";
import PropTypes from "prop-types";

const BookingForm = ({ name, price, fromValue, passenger }) => {
  const [user, setUser] = useState(null);
  const jwt = localStorage.getItem("token");

  // User profile fetch
  useEffect(() => {
    const getUserById = async () => {
      if (!jwt) return;
      try {
        const response = await axios.get(
          "https://travel-tour-mlya.onrender.com/api/user/profile",
          {
            headers: {
              Authorization: `Bearer ${jwt}`,
            },
          }
        );
        setUser(response.data || null);
      } catch (error) {
        setUser(null);
        Swal.fire("Error fetching user details", error.message, "error");
      }
    };
    getUserById();
  }, [jwt]);

  // User booking
  const { id } = useParams();
  const [userBooking, setUserBooking] = useState({
    name: `${user?.firstName || ""} ${user?.lastName || ""}`,
    email: user?.email || "",
    bookingDate: "",
    numberOfPeople: passenger || 1,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bookingDetails, setBookingDetails] = useState(null);

  const handleBooking = async (e) => {
    e.preventDefault();
    try {
      if (!jwt) {
        Swal.fire("Please log in to book this tour", "", "info");
        return;
      }
      const response = await axios.post(
        `https://travel-tour-mlya.onrender.com/api/booking/create/${id}`,
        { ...userBooking, from: fromValue, numberOfPeople: passenger },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jwt}`,
          },
        }
      );

      if (response.status === 200) {
        const { data } = response;
        setBookingDetails({
          name: name,
          price: price,
          date: userBooking.bookingDate,
          numberOfPeople: passenger,
          totalPrice: price * passenger,
          bookingId: data.booking._id,
        });

        setIsModalOpen(true);
      }
    } catch (error) {
      Swal.fire("Error while booking", error.message, "error");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserBooking((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Book This Tour</h2>
      <form onSubmit={handleBooking}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={`${user?.firstName || ""} ${user?.lastName || ""}`}
            readOnly
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={user?.email || ""}
            readOnly
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="bookingDate" className="block text-sm font-medium text-gray-700 mb-2">
            Date
          </label>
          <input
            type="date"
            id="bookingDate"
            name="bookingDate"
            value={userBooking.bookingDate}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="fromValue" className="block text-sm font-medium text-gray-700 mb-2">
            From
          </label>
          <input
            type="text"
            id="fromValue"
            value={fromValue}
            readOnly
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="numberOfPeople" className="block text-sm font-medium text-gray-700 mb-2">
            Number of Guests
          </label>
          <input
            type="number"
            id="numberOfPeople"
            name="numberOfPeople"
            value={passenger}
            readOnly
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#DF6951] text-white py-2 px-4 rounded-md hover:bg-[#c85a45] transition-colors"
        >
          Book Now
        </button>
      </form>

      {isModalOpen && bookingDetails && (
        <BookingConfirmationModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          bookingDetails={bookingDetails}
          passenger={passenger}
          fromValue={fromValue}
        />
      )}
    </div>
  );
};

BookingForm.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  fromValue: PropTypes.string.isRequired,
  passenger: PropTypes.number.isRequired,
};

export default BookingForm;
