import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import Signin from "./pages/Signin";
import Signup from "./pages/Singup";

const Routing = () => {
  return (
        <Router>
            <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
              <Navbar />
            </div>
            <Routes>
              <Route path="/home" element={<LandingPage />} />
              <Route path="/contact" element={<ContactPage/>}/>
              <Route path="/about" element={<AboutPage/>}/>
              {/*<Route path="/check-fault" element={CheckFaultPage}/>
              <Route path="/chatbot" element={ChatbotPage}/> */}
              <Route path="/" element={<Signin/>}/>
              <Route path="/signup" element={<Signup/>}/>
            </Routes>
          </Router>

  )
}

function App() {
  return (
    <div className="font-poppins">
      <Routing />
      <ToastContainer />
    </div>
  );
}

export default App;
