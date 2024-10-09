import { useState } from "react";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const data = new FormData(event.currentTarget);
    const userData = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      email: data.get("email"),
      password: data.get("password"),
    };

    if (!validate(userData)) {
      setLoading(false);
      return;
    }

    setTimeout(() => {
      setLoading(false);
      navigate("/");
    }, 3000);

    console.log("userData", userData);
  };

  const [errors, setErrors] = useState({});
  const validate = (userData) => {
    let newErrors = {};
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!userData.firstName.trim())
      newErrors.firstName = "First Name is required";
    if (!userData.lastName.trim()) newErrors.lastName = "Last Name is required";
    if (!userData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(userData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!userData.password) {
      newErrors.password = "Password is required";
    } else if (userData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  return (
    <div className="al bg-white  min-h-screen place-content-center flex justify-center items-center">
      <div className="absolute top-0 left-0">
        <img src="./aeroplane.png" alt="" className="w-[14rem] h-[14rem]" />
      </div>
      <div className="flex justify-center items-center gap-10 w-[32rem] mt-8 font-Montserrat shadow-lg hover:shadow-xl">
        <p className="text-black text-3xl font-bold cursor-pointer capitalize p-8 rounded-xl">
          <p className="text-custom-pink text-3xl font-bold">
            Adventure awaits! Join EasyTrip
          </p>{" "}
          and book unforgettable journeys with ease. Your dream trip is{" "}
          <p className="text-custom-pink text-3xl font-bold">
            few clicks away!
          </p>
        </p>
      </div>
      <div className="grid  bg-white border border-white h-50 w-96 border-1 rounded m-2 p-8 py-2">
        {loading ? (
          <div className="flex justify-center items-center">
            <l-reuleaux
              size="40"
              stroke="5"
              stroke-length="0.15"
              bg-opacity="0"
              speed="1.2"
              color="black"
            ></l-reuleaux>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="p-10 rounded-2xl shadow-lg hover:shadow-xl w-[28rem] mt-8 ml-5 py-3"
          >
            <h1 className="text-3xl font-bold text-black my-3 text-center">
              Sign Up
            </h1>
            <div className="mb-6">
              <label
                htmlFor="firstName"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                First Name
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-custom-pink"
                id="firstName"
                placeholder="Enter Your First Name"
                name="firstName"
              />
              {errors.firstName && (
                <p className="text-red-500 text-xs italic mt-1">
                  {errors.firstName}
                </p>
              )}
            </div>

            <div className="mb-6">
              <label
                htmlFor="lastName"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Last Name
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-custom-pink"
                id="lastName"
                placeholder="Enter Your Last Name"
                name="lastName"
              />
              {errors.lastName && (
                <p className="text-red-500 text-xs italic mt-1">
                  {errors.lastName}
                </p>
              )}
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-custom-pink"
                id="email"
                placeholder="Enter Your Email"
                name="email"
              />
              {errors.email && (
                <p className="text-red-500 text-xs italic mt-1">
                  {errors.email}
                </p>
              )}
            </div>

            <div className="mb-6">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-custom-pink"
                id="password"
                placeholder="Enter Your Password"
                name="password"
              />
              {errors.password && (
                <p className="text-red-500 text-xs italic mt-1">
                  {errors.password}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-custom-pink text-white py-2 rounded-lg mt-4"
            >
              Sign Up
            </button>

            <p className="text-center mt-4">
              Already have an account?{" "}
              <button
                type="button"
                onClick={() => navigate("/SignIn")}
                className="text-custom-pink hover:underline"
              >
                Login
              </button>
            </p>
          </form>
        )}
      </div>
    </div>
  );
};

export default SignUp;
