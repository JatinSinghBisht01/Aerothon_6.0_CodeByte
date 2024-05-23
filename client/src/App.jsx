import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar/>
      </div>
      {/* <Routes>
        <Route path="/" element={LandingPage}/>
        <Route path="/about" element={AboutPage}/>
        <Route path="/contact" element={ContactPage}/>
        <Route path="/check-fault" element={CheckFaultPage}/>
        <Route path="/chatbot" element={ChatbotPage}/>
      </Routes> */}
    </Router>
  )
}

export default App
