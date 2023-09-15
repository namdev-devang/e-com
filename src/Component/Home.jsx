import React from "react";

const Home = () => {
  return (
    <>
      {/* section 1 */}
      <img className="w-full h-fit bg-white" src="/heroimg.jpg" alt="" />

      <div className=" all-payment-section-main bg-blue-100 mt-10 mx-auto rounded-2xl shadow-lg flex justify-evenly">
        {/* 1 */}
        <div className="my-4 space-y-1 hover:scale-105 duration-300 cursor-pointer">
          <img className="w-16 mx-auto" src="/rechrge.png" alt="" />
          <h2 className="text-center font-semibold">Recharge</h2>
        </div>

        {/* 2 */}
        <div className="my-4 space-y-1 hover:scale-105 duration-300 cursor-pointer">
          <img className="w-16 mx-auto" src="/dth.png" alt="" />
          <h2 className="text-center font-semibold">DTH</h2>
        </div>

        {/* 3 */}
        <div className="my-4 space-y-1 hover:scale-105 duration-300 cursor-pointer">
          <img className="w-16 mx-auto" src="/fasttag.png" alt="" />
          <h2 className="text-center font-semibold">Fastag</h2>
        </div>

        {/* 4 */}
        <div className="my-4 space-y-1 hover:scale-105 duration-300 cursor-pointer">
          <img className="w-16 mx-auto" src="/electric.png" alt="" />
          <h2 className="text-center font-semibold">Electricity</h2>
        </div>

        {/* 5 */}
        <div className="my-4 space-y-1 hover:scale-105 duration-300 cursor-pointer">
          <img className="w-16 mx-auto" src="/digitalcable.png" alt="" />
          <h2 className="text-center font-semibold">Digital Cable</h2>
        </div>

        {/* 6 */}
        <div className="my-4 space-y-1 hover:scale-105 duration-300 cursor-pointer">
          <img className="w-16 mx-auto" src="/landline.png" alt="" />
          <h2 className="text-center font-semibold">Landline</h2>
        </div>

        {/* 7 */}
        <div className="my-4 space-y-1 hover:scale-105 duration-300 cursor-pointer">
          <img className="w-16 mx-auto" src="/gas.png" alt="" />
          <h2 className="text-center font-semibold">Gas</h2>
        </div>

        {/* 8 */}
        <div className="my-4 space-y-1 hover:scale-105 duration-300 cursor-pointer">
          <img className="w-16 mx-auto" src="/waterbil.png" alt="" />
          <h2 className="text-center font-semibold">Water Bill</h2>
        </div>
      </div>

      {/* section2 */}
      <div className="my-16 text-center ">
        <h1 className=" text-4xl font-bold my-2">
          <span className="text-blue-600 font-bold text-4xl">Shop By</span>{" "}
          Shopping Category
        </h1>
        <span className="my-10 text-lg">
          We've got every shopping mood covered!
        </span>
      </div>

      {/* section3 */}
      <div className="">
        <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-1 mt-16">
          {/* 1st */}
          <div className="text-center duration-300 cursor-pointer hover:-translate-y-3">
            <img
              className="w-[245px] rounded-xl"
              src="/fashion.jpg"
              alt=""
              srcset=""
            />
            <h1 className="items-center text-lg font-semibold tracking-wide">
              Fashion
            </h1>
          </div>

          {/* 2 */}
          <div className="text-center duration-300 cursor-pointer hover:-translate-y-3">
            <img
              className="w-[245px] rounded-xl"
              src="/mobile.jpg"
              alt=""
              srcset=""
            />
            <h1 className="text-lg font-semibold tracking-wide">Mobile</h1>
          </div>

          {/* 3 */}
          <div className="text-center duration-300 cursor-pointer hover:-translate-y-3">
            <img
              className="w-[245px] rounded-xl"
              src="/electronics.jpg"
              alt=""
              srcset=""
            />
            <h1 className="text-lg font-semibold tracking-wide">Electronics</h1>
          </div>

          {/* 4 */}
          <div className="text-center duration-300 cursor-pointer hover:-translate-y-3">
            <img
              className="w-[245px] rounded-xl"
              src="/footwear.jpg"
              alt=""
              srcset=""
            />
            <h1 className="text-lg font-semibold tracking-wide">Footwear</h1>
          </div>

          {/* 5 */}
          <div className="text-center duration-300 cursor-pointer hover:-translate-y-3">
            <img
              className="w-[245px] rounded-xl"
              src="/grocery.jpg"
              alt=""
              srcset=""
            />
            <h1 className="text-lg font-semibold tracking-wide">Grocery</h1>
          </div>

          {/* 6 */}
          <div className="text-center duration-300 cursor-pointer hover:-translate-y-3">
            <img
              className="w-[245px] rounded-xl"
              src="/furniture.jpg"
              alt=""
              srcset=""
            />
            <h1 className="text-lg font-semibold tracking-wide">Furniture</h1>
          </div>
        </div>
        <div className="flex text-center w-32 mx-auto my-20 cursor-pointer border-gray-300 rounded-md  border py-2 justify-center text-black bg-white">
          <button className="tracking-wide font-semibold">View All</button>
        </div>
      </div>

      {/* section 4th */}
      <div>
        <div className="  text-center">
          <h1 className="text-4xl font-bold">
            <span className="text-blue-500">Recharge</span> & Pay Bills
          </h1>
          <p className="text-lg my-4">
            Ease the transaction and payments hassle with tech that's convenient
            to use.
          </p>
        </div>

        <div className="space-y-16">
          <div className="bg-blue-100 shadow-lg mx-auto rounded-xl mt-10">
            <div className=" grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 py-10">
              {/* 1 */}
              <div className=" p-5 hover:scale-105 duration-300 cursor-pointer text-center space-y-1">
                <img className="w-16 mx-auto" src="/rechrge.png" alt="" />
                <h2 className="font-semibold tracking-wide text-center">
                  Recharge
                </h2>
                <p className="w-52 mx-auto">
                  Get Instant 2% Cashback On Mobile Recharge
                </p>
              </div>

              {/* 2 */}
              <div className=" p-5 hover:scale-105 duration-300 cursor-pointer text-center space-y-1">
                <img className="w-16 mx-auto" src="/dth.png" alt="" />
                <h2 className="font-semibold tracking-wide text-center">DTH</h2>
                <p className="w-52 mx-auto">
                  Get Instant 2% Cashback On Mobile Recharge
                </p>
              </div>

              {/* 3 */}
              <div className=" p-5 hover:scale-105 duration-300 cursor-pointer text-center space-y-1">
                <img className="w-16 mx-auto" src="/fasttag.png" alt="" />
                <h2 className="font-semibold tracking-wide text-center">
                  Fastag
                </h2>
                <p className="w-52 mx-auto">
                  Get Instant 2% Cashback On Mobile Recharge
                </p>
              </div>

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
            </div>
          </div>
          <div className="flex text-center w-32 mx-auto my-20 cursor-pointer border-gray-300 rounded-md  border py-2 justify-center text-black bg-white">
            <button className="tracking-wide font-semibold">View All</button>
          </div>
        </div>
      </div>

      {/* section 5 */}
      <div className="  text-center my-20">
        <h1 className="text-4xl font-bold">
          <span className="text-blue-500">VIPS</span> Promotional
        </h1>
        <p className="text-lg my-4">Discover all the VIPS merchandise here!</p>
      </div>

      <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1">
        {/* 1 */}
        <div className="w-[19rem] ">
          <div className="shadow-md  border m-3 border-gray-200 rounded-lg">
            <div className="cursor-pointer">
              <img
                src="http://shopadmin.vipswallet.com//Content/Images/ProductImages/3356/ImageThumbURL1.jpeg"
                alt=""
              />
              {/* <h2 className="absolute top-2 left-2 bg-red-500 text-sm py-0.5 text-white px-3 rounded-md">
                Sale
              </h2> */}
              <div className="p-2">
                <div className="space-y-0.5">
                  <h2 className="font-semibold">VIPS Finstock T-Shirt...</h2>
                  <h2 className="space-x-2 items-center">
                    <span className="text-blue-500 text-lg font-medium">
                      ₹350
                    </span>

                    <span className="line-through text-sm"> ₹467</span>
                    <span className="text-red-800 font-medium">(25% Off)</span>
                  </h2>

                  <h2 className="flex">Delivery by Sep 21, 2023</h2>

                  <div className="flex mt-4 space-x-3 items-center justify-between">
                    <div>
                      <div className="flex text-center w-52 mx-auto my-2 cursor-pointer border-gray-300 rounded-md  border py-2 justify-center text-black bg-white ">
                        <button className="tracking-wide font-semibold">
                          Quick View
                        </button>
                      </div>
                    </div>
                    <div className="border cursor-pointer bg-white border-gray-300 p-2 rounded-lg">
                      <img className="w-6" src="/heart.png" alt="" srcset="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2 */}
        <div className="w-[19rem] ">
          <div className="shadow-md  border m-3 border-gray-200 rounded-lg">
            <div className="cursor-pointer">
              <img
                src="http://shopadmin.vipswallet.com//Content/Images/ProductImages/1831/ImageThumbURL1.jpg"
                alt=""
              />
              {/* <h2 className="absolute top-2 left-2 bg-red-500 text-sm py-0.5 text-white px-3 rounded-md">
                Sale
              </h2> */}
              <div className="p-2">
                <div className="space-y-0.5">
                  <h2 className="font-semibold">VIPS T-Shirts: New...</h2>
                  <h2 className="space-x-2 items-center">
                    <span className="text-blue-500 text-lg font-medium">
                      ₹300
                    </span>

                    <span className="line-through text-sm"> ₹400</span>
                    <span className="text-red-800 font-medium">(25% Off)</span>
                  </h2>

                  <h2 className="flex">Delivery by Sep 22, 2023</h2>

                  <div className="flex mt-4 space-x-3 items-center justify-between">
                    <div>
                      <div className="flex text-center w-52 mx-auto my-2 cursor-pointer border-gray-300 rounded-md  border py-2 justify-center text-black bg-white ">
                        <button className="tracking-wide font-semibold">
                          Quick View
                        </button>
                      </div>
                    </div>
                    <div className="border cursor-pointer bg-white border-gray-300 p-2 rounded-lg">
                      <img className="w-6" src="/heart.png" alt="" srcset="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 */}
        <div className="w-[19rem] ">
          <div className="shadow-md  border m-3 border-gray-200 rounded-lg">
            <div className="cursor-pointer">
              <img
                src="http://shopadmin.vipswallet.com//Content/Images/ProductImages/4925/ImageThumbURL1.jpg"
                alt=""
              />
              {/* <h2 className="absolute top-2 left-2 bg-red-500 text-sm py-0.5 text-white px-3 rounded-md">
                Sale
              </h2> */}
              <div className="p-2">
                <div className="space-y-0.5">
                  <h2 className="font-semibold">VIPS Finstock T-Shirt...</h2>
                  <h2 className="space-x-2 items-center">
                    <span className="text-blue-500 text-lg font-medium">
                      ₹100
                    </span>

                    <span className="line-through text-sm"> ₹150</span>
                    <span className="text-red-800 font-medium">(33% Off)</span>
                  </h2>

                  <h2 className="flex">Delivery by Sep 22, 2023</h2>

                  <div className="flex mt-4 space-x-3 items-center justify-between">
                    <div>
                      <div className="flex text-center w-52 mx-auto my-2 cursor-pointer border-gray-300 rounded-md  border py-2 justify-center text-black bg-white ">
                        <button className="tracking-wide font-semibold">
                          Quick View
                        </button>
                      </div>
                    </div>
                    <div className="border cursor-pointer bg-white border-gray-300 p-2 rounded-lg">
                      <img className="w-6" src="/heart.png" alt="" srcset="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 */}
        <div className="w-[19rem] ">
          <div className="shadow-md  border m-3 border-gray-200 rounded-lg">
            <div className="cursor-pointer">
              <img
                src="http://shopadmin.vipswallet.com//Content/Images/ProductImages/1827/ImageThumbURL1.jpg"
                alt=""
              />
              {/* <h2 className="absolute top-2 left-2 bg-red-500 text-sm py-0.5 text-white px-3 rounded-md">
                Sale
              </h2> */}
              <div className="p-2">
                <div className="space-y-0.5">
                  <h2 className="font-semibold">VIPS Finstock T-Shirt...</h2>
                  <h2 className="space-x-2 items-center">
                    <span className="text-blue-500 text-lg font-medium">
                      ₹350
                    </span>

                    <span className="line-through text-sm"> ₹467</span>
                    <span className="text-red-800 font-medium">(25% Off)</span>
                  </h2>

                  <h2 className="flex">Delivery by Sep 21, 2023</h2>

                  <div className="flex mt-4 space-x-3 items-center justify-between">
                    <div>
                      <div className="flex text-center w-52 mx-auto my-2 cursor-pointer border-gray-300 rounded-md  border py-2 justify-center text-black bg-white ">
                        <button className="tracking-wide font-semibold">
                          Quick View
                        </button>
                      </div>
                    </div>
                    <div className="border cursor-pointer bg-white border-gray-300 p-2 rounded-lg">
                      <img className="w-6" src="/heart.png" alt="" srcset="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 5 */}
        <div className="w-[19rem] ">
          <div className=" shadow-md  border m-3 border-gray-200 rounded-lg">
            <div className=" cursor-pointer">
              <img
                src="http://shopadmin.vipswallet.com//Content/Images/ProductImages/1830/ImageThumbURL1.jpg"
                alt=""
              />
              {/* <h2 className="absolute top-2 left-2 bg-red-500 text-sm py-0.5 text-white px-3 rounded-md">
                Sale
              </h2> */}
              <div className="p-2">
                <div className="space-y-0.5">
                  <h2 className="font-semibold">VIPS Finstock T-Shirt...</h2>
                  <h2 className="space-x-2 items-center">
                    <span className="text-blue-500 text-lg font-medium">
                      ₹100
                    </span>

                    <span className="line-through text-sm"> ₹125</span>
                    <span className="text-red-800 font-medium">(20% Off)</span>
                  </h2>

                  <h2 className="flex">Delivery by Sep 21, 2023</h2>

                  <div className="flex mt-4 space-x-3 items-center justify-between">
                    <div>
                      <div className="flex text-center w-52 mx-auto my-2 cursor-pointer border-gray-300 rounded-md  border py-2 justify-center text-black bg-white ">
                        <button className="tracking-wide font-semibold">
                          Quick View
                        </button>
                      </div>
                    </div>
                    <div className="border cursor-pointer bg-white border-gray-300 p-2 rounded-lg">
                      <img className="w-6" src="/heart.png" alt="" srcset="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* section 6 */}
      <div className="text-center mb-10 mt-20">
        <h1 className="text-4xl font-bold">
          <span className="text-blue-500">Online</span> Stores
        </h1>
        <p className="text-lg my-2">
          Shop your favourite products from our connected online stores.
        </p>
      </div>

      <div className="flex flex-row justify-center items-center mx-10">
        <div className="mx-16">
          <img className="w-96" src="/tata.png" alt="" />
          <h2 className="text-center font-semibold text-lg">
            Tata Cliq Luxury
          </h2>
        </div>
        <div className="mx-16">
          <img className="w-96" src="/shopclues.png" alt="" />
          <h2 className="text-center font-semibold text-lg">ShopClues</h2>
        </div>
        <div className="mx-16">
          <img className="w-96" src="/uby.png" alt="" />
          <h2 className="text-center font-semibold text-lg">Ubuy</h2>
        </div>
        <div className="mx-16">
          <img className="w-96" src="/ban.png" alt="" />
          <h2 className="text-center font-semibold text-lg">Banggood</h2>
        </div>
        <div className="mx-16">
          <img className="w-96" src="/mytra.png" alt="" />
          <h2 className="text-center font-semibold text-lg">Myntra</h2>
        </div>
      </div>

      <div className="flex text-center w-32 mx-auto mt-20 mb-10 space-y-16 cursor-pointer border-gray-300 rounded-md  border py-2 justify-center text-black bg-white">
        <button className="tracking-wide font-semibold">View All</button>
      </div>

      {/* section 7 */}
      <div className="flex justify-center mx-auto">
        <img src="/sec7.jpeg" alt="" />
      </div>

      {/* section 8 */}
      <div className="text-center mt-20 mb-10">
        <h1 className="text-4xl font-bold">
          <span className="text-blue-500">Deals</span> of the day
        </h1>
        <p className="text-lg my-4">
          Exciting, fresh deals on a daily basis. Buy your wishlist products at
          low cost!
        </p>
      </div>

      <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1">
        {/* 1 */}
        <div className="w-[19rem] ">
          <div className="shadow-md  border m-3 border-gray-200 rounded-lg">
            <div className="cursor-pointer">
              <img
                src="http://shopadmin.vipswallet.com//Content/Images/ProductImages/4579/ImageThumbURL1.jpg"
                alt=""
              />
              {/* <h2 className="absolute top-2 left-2 bg-red-500 text-sm py-0.5 text-white px-3 rounded-md">
                Sale
              </h2> */}
              <div className="p-2">
                <div className="space-y-0.5">
                  <h2 className="font-semibold">
                    Apple iPhone 14 128GB Sta...
                  </h2>
                  <h2 className="space-x-2 items-center">
                    <span className="text-blue-500 text-lg font-medium">
                      ₹95412
                    </span>

                    <span className="line-through text-sm"> ₹25555</span>
                    <span className="text-red-800 font-medium">(25% Off)</span>
                  </h2>

                  <h2 className="flex">Delivery by Sep 21, 2023</h2>

                  <div className="flex mt-4 space-x-3 items-center justify-between">
                    <div>
                      <div className="flex text-center w-52 mx-auto my-2 cursor-pointer border-gray-300 rounded-md  border py-2 justify-center text-black bg-white ">
                        <button className="tracking-wide font-semibold">
                          Quick View
                        </button>
                      </div>
                    </div>
                    <div className="border cursor-pointer bg-white border-gray-300 p-2 rounded-lg">
                      <img className="w-6" src="/heart.png" alt="" srcset="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2 */}
        <div className="w-[19rem] ">
          <div className="shadow-md  border m-3 border-gray-200 rounded-lg">
            <div className="cursor-pointer">
              <img
                src="http://shopadmin.vipswallet.com//Content/Images/ProductImages/4579/ImageThumbURL1.jpg"
                alt=""
              />
              {/* <h2 className="absolute top-2 left-2 bg-red-500 text-sm py-0.5 text-white px-3 rounded-md">
                Sale
              </h2> */}
              <div className="p-2">
                <div className="space-y-0.5">
                  <h2 className="font-semibold">
                    Apple iPhone 14 256GB Sta...
                  </h2>
                  <h2 className="space-x-2 items-center">
                    <span className="text-blue-500 text-lg font-medium">
                      ₹84900
                    </span>

                    <span className="line-through text-sm"> ₹89900</span>
                    <span className="text-red-800 font-medium">(6% Off)</span>
                  </h2>

                  <h2 className="flex">Delivery by Sep 22, 2023</h2>

                  <div className="flex mt-4 space-x-3 items-center justify-between">
                    <div>
                      <div className="flex text-center w-52 mx-auto my-2 cursor-pointer border-gray-300 rounded-md  border py-2 justify-center text-black bg-white ">
                        <button className="tracking-wide font-semibold">
                          Quick View
                        </button>
                      </div>
                    </div>
                    <div className="border cursor-pointer bg-white border-gray-300 p-2 rounded-lg">
                      <img className="w-6" src="/heart.png" alt="" srcset="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 */}
        <div className="w-[19rem] ">
          <div className="shadow-md  border m-3 border-gray-200 rounded-lg">
            <div className="cursor-pointer">
              <img
                src="http://shopadmin.vipswallet.com//Content/Images/ProductImages/4579/ImageThumbURL1.jpg"
                alt=""
              />
              {/* <h2 className="absolute top-2 left-2 bg-red-500 text-sm py-0.5 text-white px-3 rounded-md">
                Sale
              </h2> */}
              <div className="p-2">
                <div className="space-y-0.5">
                  <h2 className="font-semibold">
                    Apple iPhone 14 256GB Pur...
                  </h2>
                  <h2 className="space-x-2 items-center">
                    <span className="text-blue-500 text-lg font-medium">
                      ₹84900
                    </span>

                    <span className="line-through text-sm"> ₹89900</span>
                    <span className="text-red-800 font-medium">(6% Off)</span>
                  </h2>

                  <h2 className="flex">Delivery by Sep 17, 2023</h2>

                  <div className="flex mt-4 space-x-3 items-center justify-between">
                    <div>
                      <div className="flex text-center w-52 mx-auto my-2 cursor-pointer border-gray-300 rounded-md  border py-2 justify-center text-black bg-white ">
                        <button className="tracking-wide font-semibold">
                          Quick View
                        </button>
                      </div>
                    </div>
                    <div className="border cursor-pointer bg-white border-gray-300 p-2 rounded-lg">
                      <img className="w-6" src="/heart.png" alt="" srcset="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 */}
        <div className="w-[19rem] ">
          <div className="shadow-md  border m-3 border-gray-200 rounded-lg">
            <div className="cursor-pointer">
              <img
                src="http://shopadmin.vipswallet.com//Content/Images/ProductImages/4579/ImageThumbURL1.jpg"
                alt=""
              />
              {/* <h2 className="absolute top-2 left-2 bg-red-500 text-sm py-0.5 text-white px-3 rounded-md">
                Sale
              </h2> */}
              <div className="p-2">
                <div className="space-y-0.5">
                  <h2 className="font-semibold">
                    Apple iPhone 14 256GB Blu...
                  </h2>
                  <h2 className="space-x-2 items-center">
                    <span className="text-blue-500 text-lg font-medium">
                      ₹84900
                    </span>

                    <span className="line-through text-sm"> ₹89900</span>
                    <span className="text-red-800 font-medium">(6% Off)</span>
                  </h2>

                  <h2 className="flex">Delivery by Sep 17, 2023</h2>

                  <div className="flex mt-4 space-x-3 items-center justify-between">
                    <div>
                      <div className="flex text-center w-52 mx-auto my-2 cursor-pointer border-gray-300 rounded-md  border py-2 justify-center text-black bg-white ">
                        <button className="tracking-wide font-semibold">
                          Quick View
                        </button>
                      </div>
                    </div>
                    <div className="border cursor-pointer bg-white border-gray-300 p-2 rounded-lg">
                      <img className="w-6" src="/heart.png" alt="" srcset="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 5 */}
        <div className="w-[19rem] ">
          <div className=" shadow-md  border m-3 border-gray-200 rounded-lg">
            <div className=" cursor-pointer">
              <img
                src="http://shopadmin.vipswallet.com//Content/Images/ProductImages/4579/ImageThumbURL1.jpg"
                alt=""
              />
              {/* <h2 className="absolute top-2 left-2 bg-red-500 text-sm py-0.5 text-white px-3 rounded-md">
                Sale
              </h2> */}
              <div className="p-2">
                <div className="space-y-0.5">
                  <h2 className="font-semibold">
                    Apple iPhone 13 (128GB) -...
                  </h2>
                  <h2 className="space-x-2 items-center">
                    <span className="text-blue-500 text-lg font-medium">
                      ₹64900
                    </span>

                    <span className="line-through text-sm"> ₹79990</span>
                    <span className="text-red-800 font-medium">(19% Off)</span>
                  </h2>

                  <h2 className="flex">Delivery by Sep 17, 2023</h2>

                  <div className="flex mt-4 space-x-3 items-center justify-between">
                    <div>
                      <div className="flex text-center w-52 mx-auto my-2 cursor-pointer border-gray-300 rounded-md  border py-2 justify-center text-black bg-white ">
                        <button className="tracking-wide font-semibold">
                          Quick View
                        </button>
                      </div>
                    </div>
                    <div className="border cursor-pointer bg-white border-gray-300 p-2 rounded-lg">
                      <img className="w-6" src="/heart.png" alt="" srcset="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex text-center w-32 mx-auto my-10 space-y-16 cursor-pointer border-gray-300 rounded-md  border py-2 justify-center text-black bg-white">
        <button className="tracking-wide font-semibold">View All</button>
      </div>

      {/* section 9 */}
      <div className="flex justify-center mx-auto my-10 cursor-pointer">
        <img src="/sec8.jpeg" alt="" />
      </div>

      {/* section 10 */}
      <div className="h-3/4 mx-32 mt-20">
        <div className="flex justify-center items-center mx-16">
          <div className=" space-y-12">
            <h1 className="text-5xl font-semibold leading-snug">
              India's Most Loved Payment <br />
              App
            </h1>
            <p className="text-lg w-3/4">
              VIPS Wallet application is available on Google Play Store and App
              Store. Download now for a trouble-free shopping <br />
              experience. .
            </p>
            <div className="flex ">
              <img className="w-48 mr-5" src="/Gpay.svg" alt="" />
              <img className="w-48" src="/Gpay.svg" alt="" />
            </div>
          </div>
          <img className="w-96" src="/sec9.png" alt="" />
        </div>
      </div>

      {/* section 11 */}
      <div className="text-center my-10">
        <h1 className="text-4xl font-bold">
          <span className="text-blue-500">Inspired</span> By Browsing History
        </h1>
      </div>

      <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 my-20">
        {/* 1 */}
        <div className="w-[19rem] ">
          <div className="shadow-md  border m-3 border-gray-200 rounded-lg">
            <div className="cursor-pointer">
              <img
                src="http://shopadmin.vipswallet.com//Content/Images/ProductImages/3356/ImageThumbURL1.jpeg"
                alt=""
              />
              {/* <h2 className="absolute top-2 left-2 bg-red-500 text-sm py-0.5 text-white px-3 rounded-md">
                Sale
              </h2> */}
              <div className="p-2">
                <div className="space-y-0.5">
                  <h2 className="font-semibold">VIPS Finstock T-Shirt...</h2>
                  <h2 className="space-x-2 items-center">
                    <span className="text-blue-500 text-lg font-medium">
                      ₹350
                    </span>

                    <span className="line-through text-sm"> ₹467</span>
                    <span className="text-red-800 font-medium">(25% Off)</span>
                  </h2>

                  <h2 className="flex">Delivery by Sep 21, 2023</h2>

                  <div className="flex mt-4 space-x-3 items-center justify-between">
                    <div>
                      <div className="flex text-center w-52 mx-auto my-2 cursor-pointer border-gray-300 rounded-md  border py-2 justify-center text-black bg-white ">
                        <button className="tracking-wide font-semibold">
                          Quick View
                        </button>
                      </div>
                    </div>
                    <div className="border cursor-pointer bg-white border-gray-300 p-2 rounded-lg">
                      <img className="w-6" src="/heart.png" alt="" srcset="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2 */}
        <div className="w-[19rem] ">
          <div className="shadow-md  border m-3 border-gray-200 rounded-lg">
            <div className="cursor-pointer">
              <img
                src="http://shopadmin.vipswallet.com//Content/Images/ProductImages/1831/ImageThumbURL1.jpg"
                alt=""
              />
              {/* <h2 className="absolute top-2 left-2 bg-red-500 text-sm py-0.5 text-white px-3 rounded-md">
                Sale
              </h2> */}
              <div className="p-2">
                <div className="space-y-0.5">
                  <h2 className="font-semibold">VIPS T-Shirts: New...</h2>
                  <h2 className="space-x-2 items-center">
                    <span className="text-blue-500 text-lg font-medium">
                      ₹300
                    </span>

                    <span className="line-through text-sm"> ₹400</span>
                    <span className="text-red-800 font-medium">(25% Off)</span>
                  </h2>

                  <h2 className="flex">Delivery by Sep 22, 2023</h2>

                  <div className="flex mt-4 space-x-3 items-center justify-between">
                    <div>
                      <div className="flex text-center w-52 mx-auto my-2 cursor-pointer border-gray-300 rounded-md  border py-2 justify-center text-black bg-white ">
                        <button className="tracking-wide font-semibold">
                          Quick View
                        </button>
                      </div>
                    </div>
                    <div className="border cursor-pointer bg-white border-gray-300 p-2 rounded-lg">
                      <img className="w-6" src="/heart.png" alt="" srcset="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 */}
        <div className="w-[19rem] ">
          <div className="shadow-md  border m-3 border-gray-200 rounded-lg">
            <div className="cursor-pointer">
              <img
                src="http://shopadmin.vipswallet.com//Content/Images/ProductImages/4925/ImageThumbURL1.jpg"
                alt=""
              />
              {/* <h2 className="absolute top-2 left-2 bg-red-500 text-sm py-0.5 text-white px-3 rounded-md">
                Sale
              </h2> */}
              <div className="p-2">
                <div className="space-y-0.5">
                  <h2 className="font-semibold">VIPS Finstock T-Shirt...</h2>
                  <h2 className="space-x-2 items-center">
                    <span className="text-blue-500 text-lg font-medium">
                      ₹100
                    </span>

                    <span className="line-through text-sm"> ₹150</span>
                    <span className="text-red-800 font-medium">(33% Off)</span>
                  </h2>

                  <h2 className="flex">Delivery by Sep 22, 2023</h2>

                  <div className="flex mt-4 space-x-3 items-center justify-between">
                    <div>
                      <div className="flex text-center w-52 mx-auto my-2 cursor-pointer border-gray-300 rounded-md  border py-2 justify-center text-black bg-white ">
                        <button className="tracking-wide font-semibold">
                          Quick View
                        </button>
                      </div>
                    </div>
                    <div className="border cursor-pointer bg-white border-gray-300 p-2 rounded-lg">
                      <img className="w-6" src="/heart.png" alt="" srcset="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
