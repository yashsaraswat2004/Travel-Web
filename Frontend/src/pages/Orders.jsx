import {
  FaCalendarDay,
  FaMapMarkerAlt,
  FaUsers,
  FaPlane,
  FaHotel,
  FaUtensils,
  FaCreditCard,
} from "react-icons/fa";
import Navbar from "../components/Navbar";


export default function OrderPage() {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gray-100 p-4 lg:p-8">
        <div className="max-w-6xl mx-auto">
          <header className="mb-8">
            <h1 className="text-3xl font-bold font-poppins text-gray-900">
              Best Of GOA
            </h1>
            <p className="text-gray-600 flex items-center mt-2 font-poppins">
              <FaCalendarDay className="w-5 h-5 mr-2" />7 Days, 6 Nights
            </p>
          </header>
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white shadow-md rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-4 font-poppins">
                  Trip Details
                </h2>
                <div className="grid gap-4">
                  <div className="flex items-center">
                    <FaMapMarkerAlt className="w-5 h-5 mr-2 text-[#DF6951]" />
                    <span>Goa</span>
                  </div>
                  <div className="flex items-center">
                    <FaUsers className="w-5 h-5 mr-2 text-[#DF6951]" />
                    <span>2 Adults, 1 Child</span>
                  </div>
                  <div className="flex items-center">
                    <FaPlane className="w-5 h-5 mr-2 text-[#DF6951]" />
                    <span>Round-trip flights included</span>
                  </div>
                  <div className="flex items-center">
                    <FaHotel className="w-5 h-5 mr-2 text-[#DF6951]" />
                    <span>4-star accommodations</span>
                  </div>
                  <div className="flex items-center">
                    <FaUtensils className="w-5 h-5 mr-2 text-[#DF6951]" />
                    <span>Breakfast included daily</span>
                  </div>
                </div>
              </div>
              <div className="bg-white shadow-md rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-4 font-poppins">
                  Traveler Information
                </h2>
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <label htmlFor="name" className="font-medium font-poppins">
                      Full Name
                    </label>
                    <input
                      id="name"
                      placeholder="Your Name"
                      className="w-full border border-gray-300 rounded-md p-2 font-poppins"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="email" className="font-medium font-poppins">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="example@gmail.com"
                      className="w-full border border-gray-300 rounded-md p-2 font-poppins"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="phone" className="font-medium font-poppins">
                      Phone
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="+91 "
                      className="w-full border border-gray-300 rounded-md p-2 font-poppins"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label
                      htmlFor="specialRequests"
                      className="font-medium font-poppins"
                    >
                      Special Requests
                    </label>
                    <textarea
                      id="specialRequests"
                      className="min-h-[100px] w-full border border-gray-300 rounded-md p-2 font-poppins"
                      placeholder="Any special requirements or preferences?"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white shadow-md rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-4 font-poppins">
                  Price Summary
                </h2>
                <div className="grid gap-4">
                  <div className="flex justify-between">
                    <span>Trip Cost (3 travelers)</span>
                    <span>₹ 14,500</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Taxes & Fees</span>
                    <span>₹ 3350</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>₹ 14,850</span>
                  </div>
                  <button className="bg-[#DF6951] text-white py-2 px-4 rounded-md w-full mt-4 hover:bg-[#ff6b4e] transition duration-200">
                    Confirm Booking
                  </button>
                </div>
              </div>
              <div className="bg-white shadow-md rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-4">Payment Options</h2>
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <label htmlFor="paymentMethod" className="font-medium">
                      Select Payment Method
                    </label>
                    <select
                      id="paymentMethod"
                      className="w-full border border-gray-300 rounded-md p-2"
                    >
                      <option value="" disabled selected>
                        Choose a payment method
                      </option>
                      <option value="creditCard">Credit Card</option>
                      <option value="paypal">PayPal</option>
                      <option value="bankTransfer">Bank Transfer</option>
                    </select>
                  </div>
                  <div className="flex items-center justify-center text-sm text-gray-600">
                    <FaCreditCard className="w-4 h-4 mr-2" />
                    Secure payment processing
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
