import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-[#e9e7f6] px-10 py-10">
        <div className="grid lg:grid-cols-5">
        {/* 1 */}
          <div>
            <img className="w-32" src="/himg.png" alt="" />
            <h6 className="my-2 font-semibold">Join Us</h6>
            <h6 className="font-semibold">Dowunload Now</h6>
          </div>

          {/* 2 */}
          <div className="px-">
            <h6 className="font-semibold my-2">VIPS Wallet</h6>
            <h6 className="font-semibold my-2">My Account</h6>
            <h6 className="font-semibold my-2">About Us</h6>
            <h6 className="font-semibold my-2">Contact Us</h6>
            <h6 className="font-semibold my-2">FAQ's</h6>
          </div>

          {/* 3 */}
          <div>
            <h6 className="font-semibold my-2">Policies</h6>
            <h6 className="font-semibold my-2">Privacy Policy</h6>
            <h6 className="font-semibold my-2">Term's & Condition</h6>
          </div>

          {/* 4 */}
          <div>
          <h6 className="font-semibold my-2">Services</h6>
          <h6 className="font-semibold my-2">VIPS Shopping</h6>
          <h6 className="font-semibold my-2">Recharge & Pay Bills</h6>
          </div>

          <div>
          <h6 className="font-semibold my-2">Customer Care</h6>
          <h6 className="font-semibold my-2">9922098098</h6>
          <h6 className="font-semibold my-2">support@vipswallet.com</h6>
          </div>
        </div>
      </div>
      
      <div className="bg-blue-700 flex justify-between px-5 py-5">
            <h6 className="text-white">VIPS WALLET PVT LTD © 2023 All Rights Reserved. Designed by vipswallet.com</h6>
            <span className="text-white flex justify-between">Terms & Conditions <h1 className="px-5">Privacy Policy</h1></span>
      </div>
    </>
  );
};

export default Footer;

