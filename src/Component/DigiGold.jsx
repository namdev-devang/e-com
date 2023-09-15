import React from "react";

const DigiGold = () => {
  return (
    <>
      <div className="mt-40 ">
        <div className="text-center my-10">
          <h1 className="text-4xl font-bold ">
            <span className="text-blue-500">Buy Gold &</span> Silver At Best
            Prices
          </h1>
        </div>
      </div>

      <div className="h-3/4 my-10 mx-auto">
        <div className="w-2/4 border-t border-l border-r rounded-t-3xl border-blue-300 mx-auto bg-white items-center flex flex-col p-5">
          <span className="bg-blue-900 -m-10 px-8 p-2 text-white font-semibold tracking-wide text-2xl rounded-lg ">
            My Vault
          </span>

          <div className="w-full mt-6 flex justify-around items-center pb-3">
            <div className="space-y-2 py-10">
              <span className="text-2xl text-blue-800 font-bold">
                GOLD GRAMS
              </span>
              <h2 className="text-center font-semibold my-2 text-lg">0.0000 Grams</h2>
            </div>
            |
            <div className="space-y-2">
              <span className="text-2xl text-blue-800 font-bold">
                SILVER GRAMS
              </span>
              <h2 className="text-center font-semibold my-2 text-lg">0.0000 Grams</h2>
            </div>
          </div>

          <div className="w-[80vw] h-[80vh] rounded-3xl bg-white border border-blue-300 shadow-2xl ">
            <div className="w-3/4 flex justify-center border ml-40 my-10 rounded-full shadow-2xl py-5">
              <div className="px-28">
                <h1 className="text-center text-4xl font-bold my-2 text-blue-800">
                  Gold
                </h1>
                <h1 className="font-semibold text-2xl">₹Loading... / Grams</h1>
              </div>

              <div className="px-28">
                <h1 className="text-center text-4xl font-bold my-2 text-blue-800">
                  SILVER
                </h1>
                <h1 className="font-semibold text-2xl">₹Loading... / Grams</h1>
              </div>
            </div>
            <div className="flex flex-col wf items-center">
              <div className="flex text-4xl items-center space-x-80 font-semibold">
                <h2 className= " px-3 active:underline border-gray-500 cursor-pointer  pb-3">
                  BUY
                </h2>
                <h2 className="false px-3 active:underline  border-gray-500 cursor-pointer  pb-3">
                  SELL
                </h2>
              </div>
            </div>

            <div className="flex border my-8 space-x-5 border-gray-500 rounded-xl p-1  items-center w-4/5 justify-center ml-32">

            <h2 className="active:bg-blue-900 active:text-white  p-5 cursor-pointer text-lg font-semibold tracking-wide duration-75  w-full rounded-xl text-center">GOLD 24K 999</h2>
            <h2 className="active:bg-blue-900 active:text-white  p-5 cursor-pointer text-lg font-semibold tracking-wide duration-75  w-full rounded-xl text-center">GOLD 24K 999</h2>

            </div>
            <div className="flex w-4/5 justify-center mx-auto">

            <input className="item border text-4xl px-5 py-4 mx-10 rounded-lg active:border border-blue-300 outline-none" type="text" placeholder="Enter Grams" name="" id="" />

            <input className="border text-4xl px-5 py-4 mx-10 rounded-lg active:border border-blue-300 outline-none" type="text" placeholder="Enter Amount" name="" id="" />
            </div>

            <div className="flex justify-center ">
                <button className="bg-[#ca3060] text-white font-semibold my-10 px-14 py-4 rounded-lg">Quick Buy</button>
            </div>
          </div>
        </div>
      </div>

      <div>
      <div className=" grid grid-cols-5 rounded-2xl shadow-lg py-"> 
          {/* 1 */}
          <div className="text-center mx-5 my-14 space-y-1 hover:scale-105 duration-300 cursor-pointer">
            <img className="w-20 mx-auto" src="https://new-ecom-six.vercel.app/images/digigold-images/open-an-account.svg" alt="" />
            <h2 className=" text-2xl font-semibold">Open An Account</h2>
            <span>Buy Gold/Silver at the best market prices</span>
          </div>

          {/* 2 */}
          <div className="text-center mx-5 my-14 space-y-1 hover:scale-105 duration-300 cursor-pointer">
            <img className="w-20 mx-auto" src="https://new-ecom-six.vercel.app/images/digigold-images/buy-sell.svg" alt="" />
            <h2 className=" text-2xl font-semibold">Buy / Sell Small</h2>
            <span>Buy Gold/Silver at the best market prices</span>
          </div>

          {/* 3 */}
          <div className="text-center mx-5 my-14 space-y-1 hover:scale-105 duration-300 cursor-pointer">
            <img className="w-20 mx-auto" src="https://new-ecom-six.vercel.app/images/digigold-images/secured-vault.svg" alt="" />
            <h2 className=" text-2xl font-semibold">Secured Vault</h2>
            <span>Buy Gold/Silver at the best market prices</span>
          </div>

          {/* 4 */}
          <div className="text-center mx-5 my-14 space-y-1 hover:scale-105 duration-300 cursor-pointer">
            <img className="w-20 mx-auto" src="https://new-ecom-six.vercel.app/images/digigold-images/request-delivery.svg" alt="" />
            <h2 className=" text-2xl font-semibold">Request Delivery</h2>
            <span>Buy Gold/Silver at the best market prices</span>
          </div>

          {/* 5 */}
          <div className="text-center mx-5 my-14 space-y-1 hover:scale-105 duration-300 cursor-pointer">
            <img className="w-20 mx-auto" src="https://new-ecom-six.vercel.app/images/digigold-images/doorstep-delivery.svg" alt="" />
            <h2 className=" text-2xl font-semibold">Recharge</h2>
            <span>Buy Gold/Silver at the best market prices</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default DigiGold;
