import Homepage from "./components/Homepage";
import SignIn from "./pages/SIgnIn";
import SignUp from "./pages/SignUp";
import TopDestinations from "./components/WhyChooseUs/TopDestinations";
import { Routes, Route } from "react-router-dom";
import AdvertiseSection from "./components/FamousAttraction/AdvertiseSection";
import Footer from "./components/Footer/Footer";
import BookNextTrip from "./components/BookYourNextTrip/BookNextTrip";
import RecoveryPassword from "./pages/RecoveryPassword";
import ResetPassword from "./pages/ResetPassword";
import PackageShowing from "./pages/PackageShowing";
import PackageInfo from "./pages/PackageInfo";
function App() {
  return (
    <div className="overflow-x-hidden font-poppins">
      <Routes>
        <Route
          path="/"
          element={
            <div>
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
        <Route path="/package/:id" element={<PackageShowing />} />
        <Route path="/packageinfo" element={<PackageInfo />} />
      </Routes>
    </div>
  );
}

export default App;
