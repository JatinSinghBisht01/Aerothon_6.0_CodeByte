import { Button } from "@teovilla/shadcn-ui-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navList = (
    <ul className="flex flex-col gap-2 lg:flex-row lg:gap-10 ">
      <li className={` text-[18px] font-medium cursor-pointer`}>
        <Button>
          <Link to="/about" className="text-[#4dcbe4]">About Us</Link>
        </Button>
      </li>
      <li className={` text-[18px] font-medium cursor-pointer`}>
        <Button>
          <Link to="/contact" className="text-[#4dcbe4]">Contact</Link>
        </Button>
      </li>
      <li className={` text-[18px] font-medium cursor-pointer`}>
        <Button>
          <Link to="/chatbot" className="text-[#4dcbe4]">Chatbot</Link>
        </Button>
      </li>
      <li className={` text-[18px] font-medium cursor-pointer`}>
        <Button>
          <Link to="/check-fault" className="text-[#4dcbe4]">Check Fault</Link>
        </Button>
      </li>
      <li className={` text-[18px] font-medium cursor-pointer`}>
        <Button>
          <Link to="/" className="text-[#4dcbe4]">Home</Link>
        </Button>
      </li>
    </ul>
  );

  return (
    <nav
      className={`sm:px-16 px-6 w-full flex flex-col py-5 fixed top-0 z-20 backdrop-filter backdrop-blur-lg`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <div className={`text-white text-[18px] font-medium cursor-pointer`}>
          CodeByte x Aerothon
        </div>
        <div>{navList}</div>
      </div>
    </nav>
  );
};

export default Navbar;
