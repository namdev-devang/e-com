import React from "react";

const Service = () => {
  return (
    <>
      <div className=" all-payment-section-main bg-blue-800  ease-in-out h-14 rounded-2xl shadow-lg flex justify-center space-x-8 mt-[94px] w-full ">
        <div className=""></div>
        {/* 1 */}
        <div className="flex items-center space-x-2 space-y-1 hover:scale-105 duration-300 mx-auto cursor-pointer">
          <img className="w-10 mx-auto" src="/rechrge.png" alt="" />
          <h2 className="text-right font-semibold text-white">Recharge</h2>
        </div>

        {/* 2 */}
        <div className="flex items-center space-x-2 space-y-1 hover:scale-105 duration-300 cursor-pointer">
          <img className="w-10 mx-auto" src="/dth.png" alt="" />
          <h2 className="text-right font-semibold text-white">DTH</h2>
        </div>

        {/* 3 */}
        <div className="flex items-center space-x-2 space-y-1 hover:scale-105 duration-300 cursor-pointer">
          <img className="w-10 mx-auto" src="/fasttag.png" alt="" />
          <h2 className="text-right font-semibold text-white">Fastag</h2>
        </div>

        {/* 4 */}
        <div className="flex items-center space-x-2 space-y-1 hover:scale-105 duration-300 cursor-pointer">
          <img className="w-10 mx-auto" src="/electric.png" alt="" />
          <h2 className="text-right font-semibold text-white">Electricity</h2>
        </div>

        {/* 5 */}
        <div className="flex items-center space-x-2 space-y-1 hover:scale-105 duration-300 cursor-pointer">
          <img className="w-10 mx-auto" src="/digitalcable.png" alt="" />
          <h2 className="text-right font-semibold text-white">Digital Cable</h2>
        </div>

        {/* 6 */}
        <div className="flex items-center space-x-2 space-y-1 hover:scale-105 duration-300 cursor-pointer">
          <img className="w-10 mx-auto" src="/landline.png" alt="" />
          <h2 className="text-right font-semibold text-white">Landline</h2>
        </div>

        {/* 7 */}
        <div className="flex items-center space-x-2 space-y-1 hover:scale-105 duration-300 cursor-pointer">
          <img className="w-10 mx-auto" src="/gas.png" alt="" />
          <h2 className="text-right font-semibold text-white">Gas</h2>
        </div>

        {/* 8 */}
        <div className="flex items-center space-x-2 space-y-1 hover:scale-105 duration-300 cursor-pointer">
          <img className="w-10 mx-auto" src="/waterbil.png" alt="" />
          <h2 className="text-right font-semibold text-white">Water Bill</h2>
        </div>
      </div>

      {/* section 1 */}
      <div className="h-3/4 mx-32 mt-10">
        <div className="flex justify-center items-center mx-16">
          <div className=" space-y-12">
            <h1 className="text-5xl font-semibold leading-snug">
              Online payments just got Easier, Hassle-free and Effortless!
            </h1>
            <p className="text-lg w-3/4">
              With VIPS Wallet, you can complete and process your online
              payments, from bills to loan repayment and more. Your painless
              e-payments solution is here! VIPS Wallet application available on
              Google Play store and App Store.
            </p>
            <div className="flex ">
              <img className="w-44 mr-5" src="/Gpay.svg" alt="" />
              <img className="w-44" src="/Gpay.svg" alt="" />
            </div>
          </div>
          <img className="w-80" src="/sec9.png" alt="" />
        </div>
      </div>

      {/* section 2 */}
      <div className="text-center mt-20 mb-10">
        <h1 className="text-4xl font-bold">
          <span className="text-blue-500">Recharge</span> & Pay Bills
        </h1>
        <p className="text-lg my-">
          Ease the transaction and payments hassle with tech that's convenient
          to use.
        </p>

        <div className=" all-payment-section-main bg-blue-100 mt-10 rounded-2xl shadow-lg flex justify-evenly py-12">
          {/* 1 */}
          <div className="text-center mx-16 my-4 space-y-1 hover:scale-105 duration-300 cursor-pointer">
            <img className="w-16 mx-auto" src="/rechrge.png" alt="" />
            <h2 className=" font-semibold">Recharge</h2>
            <span>Get Instant 2% Cashback On Mobile Recharge</span>
          </div>

          {/* 2 */}
          <div className="my-4 mx-16 space-y-1 hover:scale-105 duration-300 cursor-pointer">
            <img className="w-16 mx-auto" src="/dth.png" alt="" />
            <h2 className="text-center font-semibold">DTH</h2>
            <span>Get Instant 2% Cashback On Mobile Recharge</span>
          </div>

          {/* 3 */}
          <div className="my-4 mx-16 space-y-1 hover:scale-105 duration-300 cursor-pointer">
            <img className="w-16 mx-auto" src="/fasttag.png" alt="" />
            <h2 className="text-center font-semibold">Fastag</h2>
            <span>Get Instant 2% Cashback On Mobile Recharge</span>
          </div>

          {/* 4 */}
          <div className="my-4 mx-16 space-y-1 hover:scale-105 duration-300 cursor-pointer">
            <img className="w-16 mx-auto" src="/digitalcable.png" alt="" />
            <h2 className="text-center font-semibold">Digital Cable</h2>
            <span>Get Instant 2% Cashback On Mobile Recharge</span>
          </div>
        </div>
      </div>

     {/* section 3 */}
     <div>
        <div className="  text-center">
          <h1 className="text-4xl font-bold">
            <span className="text-blue-500">Pay Bills</span> of Utilities
          </h1>
          <p className="text-lg my-4">
          Your all basic necessity bills can be taken care of using VIPS Wallet.
          </p>
        </div>

        <div className="space-y-16">
          <div className="bg-blue-100 shadow-lg mx-auto rounded-xl mt-10">
            <div className=" grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 py-10">
             

              {/* 4 */}
              <div className=" p-5 hover:scale-105 duration-300 cursor-pointer text-center space-y-1">
                <img className="w-16 mx-auto" src="/electric.png" alt="" />
                <h2 className="font-semibold tracking-wide text-center">
                  Electricity
                </h2>
                <p className="w-52 mx-auto">
                  Get Instant 2% Cashback On Mobile Recharge
                </p>
              </div>

              {/* 5 */}
              <div className=" p-5 hover:scale-105 duration-300 cursor-pointer text-center space-y-1">
                <img className="w-16 mx-auto" src="/digitalcable.png" alt="" />
                <h2 className="font-semibold tracking-wide text-center">
                  Digital Cable
                </h2>
                <p className="w-52 mx-auto">
                  Get Instant 2% Cashback On Mobile Recharge
                </p>
              </div>

              {/* 6 */}
              <div className=" p-5 hover:scale-105 duration-300 cursor-pointer text-center space-y-1">
                <img className="w-16 mx-auto" src="/landline.png" alt="" />
                <h2 className="font-semibold tracking-wide text-center">
                  LandLine
                </h2>
                <p className="w-52 mx-auto">
                  Get Instant 2% Cashback On Mobile Recharge
                </p>
              </div>

              {/* 7 */}
              <div className=" p-5 hover:scale-105 duration-300 cursor-pointer text-center space-y-1">
                <img className="w-16 mx-auto" src="/gas.png" alt="" />
                <h2 className="font-semibold tracking-wide text-center">Gas</h2>
                <p className="w-52 mx-auto">
                  Get Instant 2% Cashback On Mobile Recharge
                </p>
              </div>

              {/* 8 */}
              <div className=" p-5 hover:scale-105 duration-300 cursor-pointer text-center space-y-1">
                <img className="w-16 mx-auto" src="/waterbil.png" alt="" />
                <h2 className="font-semibold tracking-wide text-center">
                  Water Bill
                </h2>
                <p className="w-52 mx-auto">
                  Get Instant 2% Cashback On Mobile Recharge
                </p>
              </div>

               {/* 1 */}
               <div className=" p-5 hover:scale-105 duration-300 cursor-pointer text-center space-y-1">
                <img className="w-16 mx-auto" src="/waterbil.png" alt="" />
                <h2 className="font-semibold tracking-wide text-center">
                  LPG Gas
                </h2>
                <p className="w-52 mx-auto">
                  Get Instant 2% Cashback On Mobile Recharge
                </p>
              </div>

              {/* 2 */}
              <div className=" p-5 hover:scale-105 duration-300 cursor-pointer text-center space-y-1">
                <img className="w-16 mx-auto" src="/waterbil.png" alt="" />
                <h2 className="font-semibold tracking-wide text-center">Insurance</h2>
                <p className="w-52 mx-auto">
                  Get Instant 2% Cashback On Mobile Recharge
                </p>
              </div>

              {/* 3 */}
              <div className=" p-5 hover:scale-105 duration-300 cursor-pointer text-center space-y-1">
                <img className="w-16 mx-auto" src="/waterbil.png" alt="" />
                <h2 className="font-semibold tracking-wide text-center">
                Pay Loan
                </h2>
                <p className="w-52 mx-auto">
                  Get Instant 2% Cashback On Mobile Recharge
                </p>
              </div>
            </div>
          </div>
          <div className="flex text-center w-32 mx-auto my-20 cursor-pointer border-gray-300 rounded-md  border py-2 justify-center text-black bg-white">
            <button className="tracking-wide font-semibold">View All</button>
          </div>
        </div>


          {/* section 4 */}
          <div className="text-center mt-20 mb-10">
        <h1 className="text-4xl font-bold">
          <span className="text-blue-500">Financial Services</span> & Taxes
        </h1>
        <p className="text-lg my-2">
        Either it be loan repayment, tax or any other financial bill, VIPS Wallet can help you with easy transactions for it.
        </p>

        <div className=" all-payment-section-main bg-blue-100 mt-10 mb-32 rounded-2xl shadow-lg flex justify-evenly py-12 ">
          {/* 1 */}
          <div className="text-center mx-16 my-4 space-y-1 hover:scale-105 duration-300 cursor-pointer">
            <img className="w-16 mx-auto" src="/electric.png" alt="" />
            <h2 className=" font-semibold">Loan Repayment</h2>
            <span>Get Instant 2% Cashback On Mobile Recharge</span>
          </div>

          {/* 2 */}
          <div className="my-4 mx-16 space-y-1 hover:scale-105 duration-300 cursor-pointer">
            <img className="w-16 mx-auto" src="/digitalcable.png" alt="" />
            <h2 className="text-center font-semibold">Credit Card</h2>
            <span>Get Instant 2% Cashback On Mobile Recharge</span>
          </div>

          {/* 3 */}
          <div className="my-4 mx-16 space-y-1 hover:scale-105 duration-300 cursor-pointer">
            <img className="w-16 mx-auto" src="/landline.png" alt="" />
            <h2 className="text-center font-semibold">Housint Society</h2>
            <span>Get Instant 2% Cashback On Mobile Recharge</span>
          </div>

          {/* 4 */}
          <div className="my-4 mx-16 space-y-1 hover:scale-105 duration-300 cursor-pointer">
            <img className="w-16 mx-auto" src="/gas.png" alt="" />
            <h2 className="text-center font-semibold">Hospital Bills</h2>
            <span>Get Instant 2% Cashback On Mobile Recharge</span>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Service;
