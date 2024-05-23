import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Singin from "./pages/Signin";
import Signup from "./pages/Singup";

function App() {
  return (
    <div className="font-poppins">
      <Router>
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar/>
        </div>
        <Routes>
          {/* <Route path="/" element={LandingPage}/>
          <Route path="/about" element={AboutPage}/>
          <Route path="/contact" element={ContactPage}/>
          <Route path="/check-fault" element={CheckFaultPage}/>
          <Route path="/chatbot" element={ChatbotPage}/> */}
          <Route path="/auth/signup" element={Signup}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
