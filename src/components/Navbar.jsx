import { useState } from "react";
import { Link } from "react-router-dom";
import { FaAlignJustify, FaTimes } from "react-icons/fa";

const Navbar = ({ homepage }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`w-full pb-10 font-jakarta relative`}>
      <div
        className={`flex items-center justify-between px-6 py-3 mx-auto bg-white rounded-full ${
          homepage === false ? "shadow-navShadow" : ""
        }`}
      >
        <Link to="/" className="text-2xl font-bold">
          Logo Here
        </Link>

        <div className="hidden space-x-9 lg:flex">
          <Link to="/">
            <p className="text-[17px]">Home</p>
          </Link>
          <Link to="/">
            <p className="text-[17px]">What We Do</p>
          </Link>
          <Link to="/">
            <p className="text-[17px]">What It Works</p>
          </Link>
          <Link to="/about">
            <p className="text-[17px]">About Us</p>
          </Link>
        </div>

        <div className="hidden space-x-5 lg:flex">
          <button>Log In</button>
          <button className="px-5 py-3 text-white bg-black rounded-full">
            Sign Up
          </button>
        </div>

        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <FaTimes className="w-6 h-6" />
            ) : (
              <FaAlignJustify className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="absolute top-[60%] left-1/2 -translate-x-1/2 w-[97%] mt-3 bg-white rounded-2xl lg:hidden shadow-cardShadow z-50">
          <div className="flex flex-col items-center py-5 space-y-5 text-fontBlack">
            <Link to="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link to="/" onClick={() => setIsOpen(false)}>
              What We Do
            </Link>
            <Link to="/" onClick={() => setIsOpen(false)}>
              What It Works
            </Link>
            <Link to="/about" onClick={() => setIsOpen(false)}>
              About Us
            </Link>
            <button onClick={() => setIsOpen(false)}>Log In</button>
            <button
              className="px-5 py-3 text-white bg-black rounded-full"
              onClick={() => setIsOpen(false)}
            >
              Sign Up
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
