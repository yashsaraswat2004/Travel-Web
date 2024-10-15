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
function App() {
  return (
    <div>
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
      </Routes>
    </div>
  );
}

export default App;
