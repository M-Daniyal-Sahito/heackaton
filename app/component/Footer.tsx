"use client";
import React from "react";
import { ImLocation2 } from "react-icons/im";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      {/* main bg */}
      <div className="h-auto w-[1120px] mt-3 m-auto bg-black text-white rounded ">
        <div className="h-14 w-[300px] ml-auto flex gap-8 pt-4 cursor-pointer">
          <Image src="/6.png" alt="Logo 1" width={50} height={50} />
          <Image src="/7.png" alt="Logo 2" width={50} height={50} />
          <Image src="/8.png" alt="Logo 3" width={50} height={50} />
          <Image src="/9.png" alt="Logo 4" width={50} height={50} />
        </div>

        {/* textbox right side */}
        <div className="w-[710px] h-[215px] flex gap-3 ml-6">
          {/* right side text 1st */}
          <div className="w-[245px]">
            <p>Find A Store</p>
            <p>Become A Member</p>
            <p>Sign Up for Email</p>
            <p>Send Us Feedback</p>
            <p className="cursor-pointer" onClick={() => window.open("/products", "_blank")}>
              All Products
            </p>
          </div>

          {/* right side text 2nd */}
          <div className="w-[255px] cursor-pointer">
            <p onClick={() => window.open("/contactUs", "_blank")}>Get Help</p>
            <p>Order Status</p>
            <p>Delivery</p>
            <p>Returns</p>
            <p>Payment Options</p>
            <p>Contact Us On Nike.com Inquiries</p>
            <p>Contact Us On All Other Inquiries</p>
          </div>

          {/* right side text 3rd */}
          <div className="w-[245px]">
            <p>About Nike</p>
            <p>News</p>
            <p>Careers</p>
            <p>Investors</p>
            <p>Sustainability</p>
          </div>
        </div>

        {/* bottom icons  */}
        <div className="h-[60px]  w-[1120px] flex items-center  px-5">
          {/* bottom left section */}
          <div className="flex items-center gap-4">
            <ImLocation2 style={{ color: "cyan" }} />
            <p>Pakistan</p>
            <p>© 2023 Nike, Inc. All Rights Reserved</p>
          </div>

          {/* bottom right section */}
          <div className="flex gap-4 ml-auto">
            <p>Guides</p>
            <p>Terms of Sale</p>
            <p>Terms of Use</p>
            <p>Nike Privacy Policy</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
