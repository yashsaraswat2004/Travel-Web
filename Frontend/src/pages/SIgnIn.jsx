import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const SignIn = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const data = new FormData(event.currentTarget);
    const userData = {
      email: data.get("email"),
      password: data.get("password"),
    };

    if (!CheckValidation(userData)) {
      setLoading(false);
      return;
    }

    setTimeout(() => {
      setLoading(false);
      navigate("/");
    }, 3000);

    console.log("userData", userData);
  };

  const [errorObject, setErrorObject] = useState({});
  const CheckValidation = (userData) => {
    let errorText = {};
    const emailFormat = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!userData.email || userData.email.trim() === "") {
      errorText.Email = "Email is required";
    } else if (!emailFormat.test(userData.email)) {
      errorText.Email = "Enter a valid email";
    }

    if (!userData.password || userData.password.trim() === "") {
      errorText.Password = "Password is required";
    } else if (userData.password.length < 8) {
      errorText.Password = "Password should be at least 8 characters long";
    }

    setErrorObject(errorText);
    return Object.keys(errorText).length === 0;
  };

  return (
    <div className="al bg-white  min-h-screen place-content-center flex justify-center items-center relative">
      <div className="absolute top-0 left-0">
        <img src="./aeroplane.png" alt="" className="w-[16rem] h-[16rem]" />
      </div>
      <div className="flex justify-center items-center gap-10 w-[32rem] mt-8 font-Montserrat shadow-lg hover:shadow-xl">
        <p className="text-black text-3xl font-bold cursor-pointer capitalize p-8 rounded-xl">
          <p className="text-custom-pink text-3xl font-bold">
            Welcome back, traveler!
          </p>{" "}
          Your next adventure is waiting at EasyTrip.
          <p className="text-custom-pink text-3xl font-bold">
            Log in to explore and book your next destination!
          </p>
        </p>
      </div>
      <div className="grid  bg-white border border-white h-50 w-96 border-1 rounded m-2 p-8 py-2">
        {loading ? (
          <div className="flex justify-center items-center">
            {/* <InfinitySpin color="black" radius={"8px"} /> */}
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="ml-20 w-[24rem] p-10 rounded-2xl shadow-lg hover:shadow-xl mt-5 font-Montserrat"
          >
            <h1 className="text-2xl font-bold text-black my-4 text-center">
              Login
            </h1>

            <div className="mb-4">
              <label className="block mb-2" htmlFor="exampleInputEmail1">
                Email address
              </label>
              <input
                type="email"
                name="email"
                className="w-full border border-gray-300 rounded px-2 py-1"
                id="exampleInputEmail1"
                placeholder="Enter email"
                required
              />
              {errorObject.Email && (
                <p className="text-red-500 text-xs italic">
                  {errorObject.Email}
                </p>
              )}
            </div>

            <div className="mb-4">
              <label className="block mb-2" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                name="password"
                className="w-full border border-gray-300 rounded px-2 py-1"
                id="password"
                placeholder="Enter Password"
                required
              />
              {errorObject.Password && (
                <p className="text-red-500 text-xs italic">
                  {errorObject.Password}
                </p>
              )}
            </div>
            <div className="flex  justify-center ">
              <div className="ml-40">
                <Link to="/recover_password" className="opacity-70 ">
                  Forgot Password
                </Link>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-custom-pink text-white py-2 rounded mt-4"
            >
              Sign In
            </button>

            <p className="text-center mt-4">
              Don&apos;t have an account?{" "}
              <button
                type="button"
                onClick={() => navigate("/signup")}
                className="text-custom-pink"
              >
                Sign up
              </button>
            </p>
          </form>
        )}
      </div>
    </div>
  );
};

export default SignIn;
