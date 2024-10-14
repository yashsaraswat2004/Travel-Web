import Homepage from "./components/Homepage";
import SignIn from "./pages/SIgnIn";
import SignUp from "./pages/SignUp";
import ChooseUS from "./components/WhyChooseUs/ChooseUS";
import { Routes, Route } from "react-router-dom";
import Main from "./components/FamousAttraction/Main";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Homepage />
              <ChooseUS />
              <Main />
              <Footer />
            </div>
          }
        />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
