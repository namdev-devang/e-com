import React from "react";

const Shopping = () => {
  return (
    <>
      {/* section 1 */}
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

      {/* section2 */}
      <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-1 items-center bg-[#f8f9fb] my-16">
        <div className="mx-auto space-y-2">
          <img
            className="w-32 ml-10 "
            src="http://shopadmin.vipswallet.com/Content/Images/categories/ImageURL111.png"
            alt=""
          />
          <h2 className="text-center font-semibold text-xl">
            VIPS Promotional Offer
          </h2>
        </div>
        <div className="mx-auto space-y-2">
          <img
            className="w-32"
            src="http://shopadmin.vipswallet.com/Content/Images/categories/ImageURL130.png"
            alt=""
          />
          <h2 className="text-center font-semibold text-xl">Special Offer</h2>
        </div>
        <div className="mx-auto space-y-2">
          <img
            className="w-32"
            src="http://shopadmin.vipswallet.com/Content/Images/categories/ImageURL170.png"
            alt=""
          />
          <h2 className="text-center font-semibold text-xl">Mobiles</h2>
        </div>
        <div className="mx-auto space-y-2">
          <img
            className="w-32"
            src="http://shopadmin.vipswallet.com/Content/Images/categories/ImageURL168.png"
            alt=""
          />
          <h2 className="text-center font-semibold text-xl">
            Mobile Accessories
          </h2>
        </div>
        <div className="mx-auto space-y-2">
          <img
            className="w-32"
            src="http://shopadmin.vipswallet.com/Content/Images/categories/ImageURL143.png"
            alt=""
          />
          <h2 className="text-center font-semibold text-xl">Fashion</h2>
        </div>
        <div className="mx-auto space-y-2">
          <img
            className="w-32"
            src="http://shopadmin.vipswallet.com/Content/Images/categories/ImageURL154.png"
            alt=""
          />
          <h2 className="text-center font-semibold text-xl">Footwear</h2>
        </div>
      </div>

      {/* section 3 */}
      <img
        className="w-full h-full  bg-white"
        src="http://shopadmin.vipswallet.com/Content/Images/BGImages/1345/ImageURL1.jpg"
        alt=""
      />

      {/* section 4 */}
      <div className="text-center mt-20 mb-10">
        <h1 className="text-4xl font-bold">
          <span className="text-blue-500">Deals</span> of the Day
        </h1>
        <p className="text-lg my-">
          Exciting, fresh deals on a daily basis. Buy your wishlist products at
          low cost!
        </p>

        <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 my-10 ">
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
                      <span className="text-red-800 font-medium">
                        (25% Off)
                      </span>
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
                        <img
                          className="w-6"
                          src="/heart.png"
                          alt=""
                          srcset=""
                        />
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
                      <span className="text-red-800 font-medium">
                        (25% Off)
                      </span>
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
                        <img
                          className="w-6"
                          src="/heart.png"
                          alt=""
                          srcset=""
                        />
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
                      <span className="text-red-800 font-medium">
                        (33% Off)
                      </span>
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
                        <img
                          className="w-6"
                          src="/heart.png"
                          alt=""
                          srcset=""
                        />
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
                    <h2 className="font-semibold">VIPS Finstock T-Shirt...</h2>
                    <h2 className="space-x-2 items-center">
                      <span className="text-blue-500 text-lg font-medium">
                        ₹84500
                      </span>

                      <span className="line-through text-sm"> ₹25400</span>
                      <span className="text-red-800 font-medium">
                        (22% Off)
                      </span>
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
                        <img
                          className="w-6"
                          src="/heart.png"
                          alt=""
                          srcset=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 5 */}
          <div className="w-[19rem] ">
            <div className="shadow-md  border m-3 border-gray-200 rounded-lg">
              <div className="cursor-pointer">
                <img
                  src="http://shopadmin.vipswallet.com//Content/Images/ProductImages/4576/ImageThumbURL1.jpg"
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
                        ₹84900
                      </span>

                      <span className="line-through text-sm"> ₹28400</span>
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
                        <img
                          className="w-6"
                          src="/heart.png"
                          alt=""
                          srcset=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* section 5 */}
      <div className="text-center mt-20 mb-10">
        <h1 className="text-4xl font-bold">
          <span className="text-blue-500">New</span>Arrival Products
        </h1>
        <p className="text-lg my-2">
          Fresh, new products releasing and going live everyday!
        </p>
    
        <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 my-10 ">
          {/* 1 */}
          <div className="w-[19rem] ">
            <div className="shadow-md  border m-3 border-gray-200 rounded-lg">
              <div className="cursor-pointer">
                <img
                  src="http://shopadmin.vipswallet.com//Content/Images/ProductImages/5684/ImageThumbURL1.jpg"
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
                        ₹299
                      </span>

                      <span className="line-through text-sm"> ₹467</span>
                      <span className="text-red-800 font-medium">
                        (25% Off)
                      </span>
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
                        <img
                          className="w-6"
                          src="/heart.png"
                          alt=""
                          srcset=""
                        />
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
                  src="http://shopadmin.vipswallet.com//Content/Images/ProductImages/5697/ImageThumbURL1.jpg"
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
                        ₹310
                      </span>

                      <span className="line-through text-sm"> ₹100</span>
                      <span className="text-red-800 font-medium">
                        (10% Off)
                      </span>
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
                        <img
                          className="w-6"
                          src="/heart.png"
                          alt=""
                          srcset=""
                        />
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
                  src="http://shopadmin.vipswallet.com//Content/Images/ProductImages/5698/ImageThumbURL1.jpeg"
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

                      <span className="line-through text-sm"> ₹50</span>
                      <span className="text-red-800 font-medium">
                        (5% Off)
                      </span>
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
                        <img
                          className="w-6"
                          src="/heart.png"
                          alt=""
                          srcset=""
                        />
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
                  src="http://shopadmin.vipswallet.com//Content/Images/ProductImages/5699/ImageThumbURL1.jpg"
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

                      <span className="line-through text-sm"> ₹199</span>
                      <span className="text-red-800 font-medium">
                        (19% Off)
                      </span>
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
                        <img
                          className="w-6"
                          src="/heart.png"
                          alt=""
                          srcset=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 5 */}
          <div className="w-[19rem] ">
            <div className="shadow-md  border m-3 border-gray-200 rounded-lg">
              <div className="cursor-pointer">
                <img
                  src="http://shopadmin.vipswallet.com//Content/Images/ProductImages/5700/ImageThumbURL1.jpg"
                  alt=""
                />
                {/* <h2 className="absolute top-2 left-2 bg-red-500 text-sm py-0.5 text-white px-3 rounded-md">
                Sale
              </h2> */}
                <div className="p-2">
                  <div className="space-y-0.5">
                    <h2 className="font-semibold">Designer Fashion Wrist An....</h2>
                    <h2 className="space-x-2 items-center">
                      <span className="text-blue-500 text-lg font-medium">
                        ₹299
                      </span>

                      <span className="line-through text-sm"> ₹499</span>
                      <span className="text-red-800 font-medium">(36% Off)</span>
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
                        <img
                          className="w-6"
                          src="/heart.png"
                          alt=""
                          srcset=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    {/* section 6 */}
    <div className="text-center mt-20 mb-10">
        <h1 className="text-4xl font-bold">
          <span className="text-blue-500">Fashion</span>
        </h1>
        <p className="text-lg my-2">
        Select your shopping product from a variety of categories and goods.
        </p>
    
        <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 my-10 ">
          {/* 1 */}
          <div className="w-[19rem] ">
            <div className="shadow-md  border m-3 border-gray-200 rounded-lg">
              <div className="cursor-pointer">
                <img
                  src="http://shopadmin.vipswallet.com//Content/Images/ProductImages/5648/ImageThumbURL1.jpg"
                  alt=""
                />
                {/* <h2 className="absolute top-2 left-2 bg-red-500 text-sm py-0.5 text-white px-3 rounded-md">
                Sale
              </h2> */}
                <div className="p-2">
                  <div className="space-y-0.5">
                    <h2 className="font-semibold">Analog Watch - For Women...</h2>
                    <h2 className="space-x-2 items-center">
                      <span className="text-blue-500 text-lg font-medium">
                        ₹137
                      </span>

                      <span className="line-through text-sm"> ₹467</span>
                      <span className="text-red-800 font-medium">
                        (72% Off)
                      </span>
                    </h2>

                    <h2 className="flex">Delivery by Sep 23, 2023</h2>

                    <div className="flex mt-4 space-x-3 items-center justify-between">
                      <div>
                        <div className="flex text-center w-52 mx-auto my-2 cursor-pointer border-gray-300 rounded-md  border py-2 justify-center text-black bg-white ">
                          <button className="tracking-wide font-semibold">
                            Quick View
                          </button>
                        </div>
                      </div>
                      <div className="border cursor-pointer bg-white border-gray-300 p-2 rounded-lg">
                        <img
                          className="w-6"
                          src="/heart.png"
                          alt=""
                          srcset=""
                        />
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
                  src="http://shopadmin.vipswallet.com//Content/Images/ProductImages/5547/ImageThumbURL1.jpg"
                  alt=""
                />
                {/* <h2 className="absolute top-2 left-2 bg-red-500 text-sm py-0.5 text-white px-3 rounded-md">
                Sale
              </h2> */}
                <div className="p-2">
                  <div className="space-y-0.5">
                    <h2 className="font-semibold">Analog Watch - For Women ...</h2>
                    <h2 className="space-x-2 items-center">
                      <span className="text-blue-500 text-lg font-medium">
                        ₹140
                      </span>

                      <span className="line-through text-sm"> ₹499</span>
                      <span className="text-red-800 font-medium">
                        (73% Off)
                      </span>
                    </h2>

                    <h2 className="flex">Delivery by Sep 28, 2023</h2>

                    <div className="flex mt-4 space-x-3 items-center justify-between">
                      <div>
                        <div className="flex text-center w-52 mx-auto my-2 cursor-pointer border-gray-300 rounded-md  border py-2 justify-center text-black bg-white ">
                          <button className="tracking-wide font-semibold">
                            Quick View
                          </button>
                        </div>
                      </div>
                      <div className="border cursor-pointer bg-white border-gray-300 p-2 rounded-lg">
                        <img
                          className="w-6"
                          src="/heart.png"
                          alt=""
                          srcset=""
                        />
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
                  className="w-full max-h-fit"  
                  src="http://shopadmin.vipswallet.com//Content/Images/ProductImages/5271/ImageThumbURL1.jpeg"
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

                      <span className="line-through text-sm"> ₹50</span>
                      <span className="text-red-800 font-medium">
                        (5% Off)
                      </span>
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
                        <img
                          className="w-6"
                          src="/heart.png"
                          alt=""
                          srcset=""
                        />
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
                className="h-[275px] w-full"
                  src="http://shopadmin.vipswallet.com//Content/Images/ProductImages/5214/ImageThumbURL1.jpg"
                  alt=""
                />
                {/* <h2 className="absolute top-2 left-2 bg-red-500 text-sm py-0.5 text-white px-3 rounded-md">
                Sale
              </h2> */}
                <div className="p-2">
                  <div className="space-y-0.5">
                    <h2 className="font-semibold">Peals Anti Timbal Jewelle...</h2>
                    <h2 className="space-x-2 items-center">
                      <span className="text-blue-500 text-lg font-medium">
                        ₹950
                      </span>

                      <span className="line-through text-sm"> ₹1999</span>
                      <span className="text-red-800 font-medium">
                        (28% Off)
                      </span>
                    </h2>

                    <h2 className="flex">Delivery by Sep 30, 2023</h2>

                    <div className="flex mt-4 space-x-3 items-center justify-between">
                      <div>
                        <div className="flex text-center w-52 mx-auto my-2 cursor-pointer border-gray-300 rounded-md  border py-2 justify-center text-black bg-white ">
                          <button className="tracking-wide font-semibold">
                            Quick View
                          </button>
                        </div>
                      </div>
                      <div className="border cursor-pointer bg-white border-gray-300 p-2 rounded-lg">
                        <img
                          className="w-6"
                          src="/heart.png"
                          alt=""
                          srcset=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 5 */}
          <div className="w-[19rem] ">
            <div className="shadow-md  border m-3 border-gray-200 rounded-lg">
              <div className="cursor-pointer">
                <img
                className="h-[274px]"
                  src="http://shopadmin.vipswallet.com//Content/Images/ProductImages/5112/ImageThumbURL1.jpg"
                  alt=""
                />
                {/* <h2 className="absolute top-2 left-2 bg-red-500 text-sm py-0.5 text-white px-3 rounded-md">
                Sale
              </h2> */}
                <div className="p-2">
                  <div className="space-y-0.5">
                    <h2 className="font-semibold">Designer Fashion Wrist An....</h2>
                    <h2 className="space-x-2 items-center">
                      <span className="text-blue-500 text-lg font-medium">
                        ₹299
                      </span>

                      <span className="line-through text-sm"> ₹499</span>
                      <span className="text-red-800 font-medium">(36% Off)</span>
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
                        <img
                          className="w-6"
                          src="/heart.png"
                          alt=""
                          srcset=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



          {/* section 7 */}
          <div className="text-center mt-20 mb-10">
        <h1 className="text-4xl font-bold">
          <span className="text-blue-500">Electronic</span>
        </h1>
        <p className="text-lg my-2">
        Best electronic devices at affordable prices with great offers.        </p>
    
        <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 my-10 mb-60 ">
          {/* 1 */}
          <div className="w-[19rem] ">
            <div className="shadow-md  border m-3 border-gray-200 rounded-lg">
              <div className="cursor-pointer">
                <img
                  src="http://shopadmin.vipswallet.com//Content/Images/ProductImages/4709/ImageThumbURL1.jpg"
                  alt=""
                />
                {/* <h2 className="absolute top-2 left-2 bg-red-500 text-sm py-0.5 text-white px-3 rounded-md">
                Sale
              </h2> */}
                <div className="p-2">
                  <div className="space-y-0.5">
                    <h2 className="font-semibold">Metal Bulb LED Light 16 L...</h2>
                    <h2 className="space-x-2 items-center">
                      <span className="text-blue-500 text-lg font-medium">
                        ₹657
                      </span>

                      <span className="line-through text-sm"> ₹1007</span>
                      <span className="text-red-800 font-medium">
                        (36% Off)
                      </span>
                    </h2>

                    <h2 className="flex">Delivery by Sep 23, 2023</h2>

                    <div className="flex mt-4 space-x-3 items-center justify-between">
                      <div>
                        <div className="flex text-center w-52 mx-auto my-2 cursor-pointer border-gray-300 rounded-md  border py-2 justify-center text-black bg-white ">
                          <button className="tracking-wide font-semibold">
                            Quick View
                          </button>
                        </div>
                      </div>
                      <div className="border cursor-pointer bg-white border-gray-300 p-2 rounded-lg">
                        <img
                          className="w-6"
                          src="/heart.png"
                          alt=""
                          srcset=""
                        />
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
                  src="http://shopadmin.vipswallet.com//Content/Images/ProductImages/3875/ImageThumbURL1.jpg"
                  alt=""
                />
                {/* <h2 className="absolute top-2 left-2 bg-red-500 text-sm py-0.5 text-white px-3 rounded-md">
                Sale
              </h2> */}
                <div className="p-2">
                  <div className="space-y-0.5">
                    <h2 className="font-semibold">Fire-Boltt Ring 3...</h2>
                    <h2 className="space-x-2 items-center">
                      <span className="text-blue-500 text-lg font-medium">
                        ₹4999
                      </span>

                      <span className="line-through text-sm"> ₹9999</span>
                      <span className="text-red-800 font-medium">
                        (50% Off)
                      </span>
                    </h2>

                    <h2 className="flex">Delivery by Sep 28, 2023</h2>

                    <div className="flex mt-4 space-x-3 items-center justify-between">
                      <div>
                        <div className="flex text-center w-52 mx-auto my-2 cursor-pointer border-gray-300 rounded-md  border py-2 justify-center text-black bg-white ">
                          <button className="tracking-wide font-semibold">
                            Quick View
                          </button>
                        </div>
                      </div>
                      <div className="border cursor-pointer bg-white border-gray-300 p-2 rounded-lg">
                        <img
                          className="w-6"
                          src="/heart.png"
                          alt=""
                          srcset=""
                        />
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
                  className="w-full h-[274px]"  
                  src="http://shopadmin.vipswallet.com//Content/Images/ProductImages/3812/ImageThumbURL1.jpg"
                  alt=""
                />
                {/* <h2 className="absolute top-2 left-2 bg-red-500 text-sm py-0.5 text-white px-3 rounded-md">
                Sale
              </h2> */}
                <div className="p-2">
                  <div className="space-y-0.5">
                    <h2 className="font-semibold">Fire-Boltt Ninja Call 2 B...</h2>
                    <h2 className="space-x-2 items-center">
                      <span className="text-blue-500 text-lg font-medium">
                        25555
                      </span>

                      <span className="line-through text-sm"> ₹2550</span>
                      <span className="text-red-800 font-medium">
                        (5% Off)
                      </span>
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
                        <img
                          className="w-6"
                          src="/heart.png"
                          alt=""
                          srcset=""
                        />
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
                className="h-[275px] w-full"
                  src="http://shopadmin.vipswallet.com//Content/Images/ProductImages/3810/ImageThumbURL1.jpg"
                  alt=""
                />
                {/* <h2 className="absolute top-2 left-2 bg-red-500 text-sm py-0.5 text-white px-3 rounded-md">
                Sale
              </h2> */}
                <div className="p-2">
                  <div className="space-y-0.5">
                    <h2 className="font-semibold">Peals Anti Timbal Jewelle...</h2>
                    <h2 className="space-x-2 items-center">
                      <span className="text-blue-500 text-lg font-medium">
                        ₹950
                      </span>

                      <span className="line-through text-sm"> ₹1999</span>
                      <span className="text-red-800 font-medium">
                        (28% Off)
                      </span>
                    </h2>

                    <h2 className="flex">Delivery by Sep 30, 2023</h2>

                    <div className="flex mt-4 space-x-3 items-center justify-between">
                      <div>
                        <div className="flex text-center w-52 mx-auto my-2 cursor-pointer border-gray-300 rounded-md  border py-2 justify-center text-black bg-white ">
                          <button className="tracking-wide font-semibold">
                            Quick View
                          </button>
                        </div>
                      </div>
                      <div className="border cursor-pointer bg-white border-gray-300 p-2 rounded-lg">
                        <img
                          className="w-6"
                          src="/heart.png"
                          alt=""
                          srcset=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 5 */}
          <div className="w-[19rem] ">
            <div className="shadow-md  border m-3 border-gray-200 rounded-lg">
              <div className="cursor-pointer">
                <img
                className="h-[274px]"
                  src="http://shopadmin.vipswallet.com//Content/Images/ProductImages/3808/ImageThumbURL1.jpg"
                  alt=""
                />
                {/* <h2 className="absolute top-2 left-2 bg-red-500 text-sm py-0.5 text-white px-3 rounded-md">
                Sale
              </h2> */}
                <div className="p-2">
                  <div className="space-y-0.5">
                    <h2 className="font-semibold">Fire-Boltt 360 Pro Blueto...</h2>
                    <h2 className="space-x-2 items-center">
                      <span className="text-blue-500 text-lg font-medium">
                        ₹299
                      </span>

                      <span className="line-through text-sm"> ₹499</span>
                      <span className="text-red-800 font-medium">(36% Off)</span>
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
                        <img
                          className="w-6"
                          src="/heart.png"
                          alt=""
                          srcset=""
                        />
                      </div>
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

export default Shopping;
