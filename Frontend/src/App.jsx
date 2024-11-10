import { Routes, Route } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer/Footer";
import axios from "axios";
import Swal from "sweetalert2";

const Homepage = lazy(() => import("./components/Homepage"));
const SignIn = lazy(() => import("./pages/SignIn"));
const SignUp = lazy(() => import("./pages/SignUp"));
const TopDestinations = lazy(() =>
  import("./components/WhyChooseUs/TopDestinations")
);
const AdvertiseSection = lazy(() =>
  import("./components/FamousAttraction/AdvertiseSection")
);
const BookNextTrip = lazy(() =>
  import("./components/BookYourNextTrip/BookNextTrip")
);
const RecoveryPassword = lazy(() => import("./pages/RecoveryPassword"));
const ResetPassword = lazy(() => import("./pages/ResetPassword"));
const PackageShowing = lazy(() => import("./pages/PackageShowing"));
const PackageInfo = lazy(() => import("./pages/PackageInfo"));
const TravelForm = lazy(() => import("./components/OrderForm/Form"));
const Wishlist = lazy(() => import("./pages/Wishlist"));
const Orders = lazy(() => import("./pages/Orders"));
const Profile = lazy(() => import("./pages/Profile"));
const Admin = lazy(() => import("./admin/Admin"));
const BookingDetailsPage = lazy(() => import("./pages/BookingDetails"));
const TourPlan = lazy(() => import("./components/TourPlan"));

function App() {
  const jwt = localStorage.getItem("token");

  useEffect(() => {
    const verifyUser = async () => {
      try {
        console.log("JWT Token:", jwt);
        const response = await axios.get(
          "http://localhost:5070/api/user/profile",
          {
            headers: {
              Authorization: `Bearer ${jwt}`,
            },
          }
        );

        if (response.status !== 200) {
          Swal.fire("You need to login", "", "question");
        }
      } catch (error) {
        console.error("Error verifying user:", error);
      }
    };
    verifyUser();
  }, []);

  return (
    <div className="overflow-x-hidden font-poppins relative h-full">
      <Suspense
        fallback={
          <div className="text-3xl text-center font-Poppins mt-10 font-bold">
            Loading...
          </div>
        }
      >
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Navbar jwt={jwt} />
                <Homepage />
                <TopDestinations />
                <AdvertiseSection />
                <BookNextTrip />
                <Footer />
              </div>
            }
          />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/recover_password" element={<RecoveryPassword />} />
          <Route path="/reset_password" element={<ResetPassword />} />
          <Route path="/orderform" element={<TravelForm />} />
          <Route
            path="/package/:id"
            element={
              <>
                <Navbar jwt={jwt} />
                <PackageShowing />
                <Footer />
              </>
            }
          />
          <Route path="/package/packageinfo/:id" element={<PackageInfo />} />
          <Route
            path="/package/:id/packageinfo/tourplan"
            element={<TourPlan />}
          />
          <Route
            path="/wishlist"
            element={
              <>
                <Navbar jwt={jwt} />
                <Wishlist />
                <Footer />
              </>
            }
          />
          <Route
            path="/orders"
            element={
              <>
                <Navbar jwt={jwt} />
                <Orders />
                <Footer />
              </>
            }
          />
          <Route path="/profile" element={<Profile />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/payment/:bookingId" element={<BookingDetailsPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
