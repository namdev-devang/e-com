import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="main-Container flex justify-between rounded-b-2xl  px-5 py-5 shadow-md items-center top-0 fixed z-50 bg-white w-full ">
        <div className="left ">
          <img src="/himg.png" className="w-40 h-auto" alt="" />
        </div>

        <div className="mid space-x-5 text-sm mx-14 ">
          <Link to="/">
            <span> Home</span>
          </Link>
          <Link to="/shopping">
            <span> Shopping</span>
          </Link>
          <Link to="/service">
            <span> Service</span>
          </Link>
          <Link to="/online-store">
            <span>Online Store</span>
          </Link>
          <Link to="/digi-gold">
            <span> Digi Gold</span>
          </Link>
          <Link to="http://vendor.vipswallet.com/Login/Vendor">
            <span> Become a</span>
          </Link>
          <Link to="http://vendor.vipswallet.com/Login/Vendor">
            <span>Supplier</span>
          </Link>
        </div>

        <div className="ryt flex items-center border-2 border-gray-300 rounded-lg">
          <input
            className=" px-5 py-2 rounded-lg w-72 focus:outline-none ml-5"
            type="text"
            placeholder="What are you looking..."
          />
          <svg
            className="w-5 mx-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            width="50px"
            height="50px"
          >
            <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z" />
          </svg>
        </div>
        <div>
          <img className="w-7" src="/icocart.png" alt="" srcset="" />
        </div>

        <div>
          <img className="" src="/heart.png" alt="" srcset="" />
        </div>

        <button className="flex items-center shadow-lg border border-dashed hover:text-blue-500 hover:border-cyan-500 px-5 py-2 rounded-lg">
          <img className="w-5" src="/account.png" alt="" />
          <span className=""> Sign In</span>
        </button>
      </div>
    </>
  );
};

export default Header;
