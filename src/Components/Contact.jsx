import React from "react";
import Wrapper from "./Wrapper";

const Contact = () => {
  return (
    <div id="contact">
      <div className="flex flex-col justify-center items-center mt-[20vh]">
        <h1 className="mb-[10vh] font-montserrat font-bold text-2xl">
          Contact Us
        </h1>
        <div className="w-fit h-fit bg-[#343434] shadow-3xl rounded-xl p-[5vh] md:ml-5 mb-10 z-10 searchtext card">
          <h1 className="md:text-[5vh] text-[8vh] font-montserrat font-bold text-red">
            Contact our Team
          </h1>
         

          {/* Static data */}
          <div className="mt-10 text-red">
            <p>E-Recycle Solution Pvt Ltd</p>
            <p>Contact: 7395062924</p>
            <p>Email: e-waste@recycle.org</p>
            <p>Address: Sec-F, Jankipuram, Lko, 226021</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
