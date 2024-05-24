import { Button } from "@teovilla/shadcn-ui-react";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context as AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState(null);
  const { signout } = useContext(AuthContext);
  const localStorageToken = localStorage.getItem("token");
  console.log(localStorageToken);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const handleLogout = async () => {
    const response = await signout();
    if (response.success) {
      setActiveLink(null);
      toast.success(response.message);
      history.push("/signin");
    } else {
      toast.error(response.error);
    }
  };
  const navList = (
    <ul className="flex flex-col gap-2 lg:flex-row lg:gap-10 ">
      <li className={` text-[18px] font-medium cursor-pointer`}>
        <Button>
          <Link
            to="/home"
            className={`text-[#4dcbe4] transition transform duration-700 delay-100 hover:text-white hover:scale-110 ${
              activeLink === "home" ? "text-white scale-110" : ""
            }`}
            onClick={() => handleLinkClick("home")}
          >
            Home
          </Link>
        </Button>
      </li>
      <li className={` text-[18px] font-medium cursor-pointer`}>
        <Button>
          <a
            href="http://localhost:8501/"
            className={`text-[#4dcbe4] transition transform duration-700 delay-100 hover:text-white hover:scale-110 ${
              activeLink === "chatbot" ? "text-white scale-110" : ""
            }`}
            onClick={() => handleLinkClick("chatbot")}
            target="_blank"
          >
            Chatbot
          </a>
        </Button>
      </li>
      <li className={` text-[18px] font-medium cursor-pointer`}>
        <Button>
          <Link
            to="/check-fault"
            className={`text-[#4dcbe4] transition transform duration-700 delay-100 hover:text-white hover:scale-110 ${
              activeLink === "fault" ? "text-white scale-110" : ""
            }`}
            onClick={() => handleLinkClick("fault")}
          >
            Check Fault
          </Link>
        </Button>
      </li>
      <li className={` text-[18px] font-medium cursor-pointer`}>
        <Button>
          <Link
            to="/about"
            className={`text-[#4dcbe4] transition transform duration-700 delay-100 hover:text-white hover:scale-110 ${
              activeLink === "about" ? "text-white scale-110" : ""
            }`}
            onClick={() => handleLinkClick("about")}
          >
            About Us
          </Link>
        </Button>
      </li>
      <li className={` text-[18px] font-medium cursor-pointer`}>
        <Button>
          <Link
            to="/contact"
            className={`text-[#4dcbe4] transition transform duration-700 delay-100 hover:text-white hover:scale-110 ${
              activeLink === "contact" ? "text-white scale-110" : ""
            }`}
            onClick={() => handleLinkClick("contact")}
          >
            Feedback
          </Link>
        </Button>
      </li>

      <li className={` text-[18px] font-medium cursor-pointer`}>
        {localStorageToken === null ? (
          <Button
            className={`transition transform duration-700 delay-100 py-1 px-2 ${
              activeLink === "signin"
                ? "bg-black text-white hover:bg-black hover:text-white hover:scale-125 "
                : "bg-white text-black hover:text-white hover:bg-black hover:scale-125"
            }`}
            onClick={() => handleLinkClick("signin")}
          >
            <Link to="/">Signin</Link>
          </Button>
        ) : (
          <Button
            className={`transition transform duration-700 delay-100 py-1 px-2 ${
              activeLink === "signin"
                ? "bg-black text-white hover:bg-black hover:text-white hover:scale-125 "
                : "bg-white text-black hover:text-white hover:bg-black hover:scale-125"
            }`}
            onClick={handleLogout}
          >
            Logout
          </Button>
        )}
      </li>
    </ul>
  );

  return (
    <nav
      className={`sm:px-16 px-6 w-full flex flex-col py-5 fixed top-0 z-20 backdrop-filter backdrop-blur-lg`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto ">
        <div className={`text-white text-[18px] font-medium cursor-pointer`}>
          CodeByte x Aerothon
        </div>
        <div>{navList}</div>
      </div>
    </nav>
  );
};

export default Navbar;
