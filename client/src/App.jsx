import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <Router>
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/contact" element={<ContactPage/>}/>
         <Route path="/about" element={<AboutPage/>}/>
        {/*<Route path="/check-fault" element={CheckFaultPage}/>
        <Route path="/chatbot" element={ChatbotPage}/> */}
      </Routes>
    </Router>
  );
}

export default App;
