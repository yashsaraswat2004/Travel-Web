import {
  FiSettings,
  FiEdit,
  FiUser,
  FiCreditCard,
  FiGlobe,
  FiMapPin,
  FiCalendar,
} from "react-icons/fi";
import { IoHomeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaPlane } from "react-icons/fa";
import { useState } from "react";
export default function Profile() {
  const [activeTab, setActiveTab] = useState("personal");
  return (
    <div className="min-h-screen bg-gray-100 p-4 lg:p-8 font-poppins">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 rounded-full bg-[#ff694b] flex items-center justify-center text-white text-2xl font-bold">
              YS
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Welcome, Yash
              </h1>
              <p className="text-gray-600">Member since 2024</p>
            </div>
          </div>
          <button className="px-4 py-2 border rounded-md flex items-center space-x-2">
            <FiSettings className="w-4 h-4" />
            <span>Account Settings</span>
          </button>
        </header>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            <div className="w-full">
              <div className="flex space-x-4 mb-4">
                <button
                  className={`py-2 px-4 ${
                    activeTab === "personal"
                      ? "bg-[#ff694b] text-white"
                      : "bg-gray-200"
                  }`}
                  onClick={() => setActiveTab("personal")}
                >
                  Personal
                </button>
                <button
                  className={`py-2 px-4 ${
                    activeTab === "upcoming"
                      ? "bg-[#ff694b] text-white"
                      : "bg-gray-200"
                  }`}
                  onClick={() => setActiveTab("upcoming")}
                >
                  Upcoming
                </button>
                <button
                  className={`py-2 px-4 ${
                    activeTab === "past"
                      ? "bg-[#ff694b] text-white"
                      : "bg-gray-200"
                  }`}
                  onClick={() => setActiveTab("past")}
                >
                  Past Trips
                </button>
                <button
                  className={`py-2 px-4 ${
                    activeTab === "preferences"
                      ? "bg-[#ff694b] text-white"
                      : "bg-gray-200"
                  }`}
                  onClick={() => setActiveTab("preferences")}
                >
                  Preferences
                </button>
              </div>
              {activeTab === "personal" && (
                <div className="p-6 bg-white rounded-lg shadow">
                  <h2 className="text-xl font-bold mb-4">
                    Personal Information
                  </h2>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="fullName">Full Name</label>
                      <input
                        id="fullName"
                        placeholder="Your Name"
                        className="border p-2 rounded w-full"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email">Email</label>
                      <input
                        id="email"
                        type="email"
                        placeholder="Your Email"
                        className="border p-2 rounded w-full"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone">Phone</label>
                      <input
                        id="phone"
                        type="tel"
                        placeholder="+91"
                        className="border p-2 rounded w-full"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="dateOfBirth">Date of Birth</label>
                      <input
                        id="dateOfBirth"
                        type="date"
                        placeholder="Your Date of Birth"
                        className="border p-2 rounded w-full"
                      />
                    </div>
                  </div>
                  <button className="mt-4 px-4 py-2 bg-[#ff694b] text-white rounded flex items-center space-x-2">
                    <FiEdit className="w-4 h-4" />
                    <span>Update Information</span>
                  </button>
                </div>
              )}
              {activeTab === "upcoming" && (
                <div className="bg-white p-4 rounded-lg shadow">
                  <h2 className="text-xl font-bold mb-4">Upcoming Trips</h2>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-gray-100 rounded">
                      <div>
                        <h3 className="font-semibold">Beautiful Munnar</h3>
                        <p className="text-gray-600">Munnar, India</p>
                      </div>
                      <div className="text-right">
                        <p>December 15 - 21, 2024</p>
                        <button className="text-[#ff694b]">View Details</button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-gray-100 rounded">
                      <div>
                        <h3 className="font-semibold">
                          Feel Alive in Kashmir in Summer
                        </h3>
                        <p className="text-gray-600">Kashmir, India</p>
                      </div>
                      <div className="text-right">
                        <p>December 3 - 10, 2024</p>
                        <button className="text-[#ff694b]">View Details</button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "past" && (
                <div className="bg-white p-4 rounded-lg shadow">
                  <h2 className="text-xl font-bold mb-4">Past Trips</h2>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-gray-100 rounded">
                      <div>
                        <h3 className="font-semibold">Jaipur, the Pink City</h3>
                        <p className="text-gray-600">Jaipur, India</p>
                      </div>
                      <div className="text-right">
                        <p>September 10 - 17, 2024</p>
                        <button className="text-[#ff694b]">View Photos</button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-gray-100 rounded">
                      <div>
                        <h3 className="font-semibold">
                          Agra, the City of Taj Mahal
                        </h3>
                        <p className="text-gray-600">Agra, India</p>
                      </div>
                      <div className="text-right">
                        <p>April 5 - 15, 2024</p>
                        <button className="text-[#ff694b]">View Photos</button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "preferences" && (
                <div className="bg-white p-4 rounded-lg shadow">
                  <h2 className="text-xl font-bold mb-4">Travel Preferences</h2>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block mb-2">Preferred Transport</label>
                      <select className="w-full p-2 border rounded">
                        <option>Car</option>
                        <option>Bus</option>
                        <option>Train</option>
                        <option>Flight</option>
                      </select>
                    </div>
                    <div>
                      <label className="block mb-2">Seat Preference</label>
                      <select className="w-full p-2 border rounded">
                        <option>Window</option>
                        <option>Aisle</option>
                        <option>Middle</option>
                      </select>
                    </div>
                    <div>
                      <label className="block mb-2">Meal Preference</label>
                      <select className="w-full p-2 border rounded">
                        <option>Regular</option>
                        <option>Vegetarian</option>
                        <option>Vegan</option>
                        <option>Kosher</option>
                        <option>Halal</option>
                      </select>
                    </div>
                    <div>
                      <label className="block mb-2">Room Preference</label>
                      <select className="w-full p-2 border rounded">
                        <option>Non-Smoking</option>
                        <option>Smoking</option>
                        <option>High Floor</option>
                        <option>Low Floor</option>
                      </select>
                    </div>
                  </div>
                  <button className="mt-4 px-4 py-2 bg-[#fc5736] text-white rounded">
                    Save Preferences
                  </button>
                </div>
              )}
            </div>
            <Link to="/">
              <div className="flex items-center gap-2 bg-[#ff694b] text-white px-4 py-2 rounded-md mt-10">
                <button className="">Back to Home</button>
                <IoHomeOutline />
              </div>
            </Link>
          </div>

          <div className="space-y-6">
            <div className="p-6 bg-white rounded-lg shadow">
              <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
              <div className="space-y-4">
                <button className="w-full px-4 py-2 border rounded-md flex items-center space-x-2">
                  <FaPlane className="w-4 h-4" />
                  <Link to="/">
                    {" "}
                    <span>Book a New Trip</span>
                  </Link>
                </button>
                <button className="w-full px-4 py-2 border rounded-md flex items-center space-x-2">
                  <FiCreditCard className="w-4 h-4" />
                  <span>Manage Payment Methods</span>
                </button>
                <button className="w-full px-4 py-2 border rounded-md flex items-center space-x-2">
                  <FiUser className="w-4 h-4" />
                  <span>Update Profile</span>
                </button>
              </div>
            </div>

            <div className="p-6 bg-white rounded-lg shadow">
              <h2 className="text-xl font-bold mb-4">Trip Statistics</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="flex gap-2 items-center">
                    <FiGlobe className="w-4 h-4 text-[#ff694b]" />
                    Cities Visited
                  </span>
                  <span className="font-semibold">12</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex gap-2 items-center">
                    <FiMapPin className="w-4 h-4 text-[#ff694b]" />
                    Total Trips
                  </span>
                  <span className="font-semibold">24</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex gap-2 items-center">
                    <FiCalendar className="w-4 h-4 text-[#ff694b]" />
                    Travel Days
                  </span>
                  <span className="font-semibold">187</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
