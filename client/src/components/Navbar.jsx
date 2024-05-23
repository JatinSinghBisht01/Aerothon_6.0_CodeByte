import { Button } from "@teovilla/shadcn-ui-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navList = (
    <ul className="flex flex-col gap-2 lg:flex-row lg:gap-10">
      <li className={` text-[18px] font-medium cursor-pointer`}>
        <Button>
          <Link to="/about">About Us</Link>
        </Button>
      </li>
      <li className={` text-[18px] font-medium cursor-pointer`}>
        <Button>
          <Link to="/contact">Contact</Link>
        </Button>
      </li>
      <li className={` text-[18px] font-medium cursor-pointer`}>
        <Button>
          <Link to="/chatbot">Chatbot</Link>
        </Button>
      </li>
      <li className={` text-[18px] font-medium cursor-pointer`}>
        <Button>
          <Link to="/check-fault">Check Fault</Link>
        </Button>
      </li>
      <li className={` text-[18px] font-medium cursor-pointer`}>
        <Button>
          <Link to="/">Home</Link>
        </Button>
      </li>
      {/* <li className={` text-[18px] font-medium cursor-pointer`}>
            {isLoggedIn ? (
              <Button onClick={handleLogout}>Logout</Button>
            ) : (
              <Button>
                <Link to="/login">Login</Link>
              </Button>
            )}
          </li> */}
    </ul>
  );

  return (
    <nav
      className={`sm:px-16 px-6 w-full flex flex-col py-5 fixed top-0 z-20 backdrop-filter backdrop-blur-lg`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <div className={` text-[18px] font-medium cursor-pointer`}>
          CodeByte x Aerothon
        </div>
        <div>{navList}</div>
      </div>
    </nav>
  );
};

export default Navbar;
