import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiFillPhone } from "react-icons/ai";
import { BiChip, BiSupport } from "react-icons/bi";
import supImg from "../assets/support.jpg";

const Support = () => {
  return (
    <div name="support" className="w-full  mt-24">
      <div className="w-full h-[700px] bg-gray-900/90 absolute">
        <img
          className="w-full h-full object-cover mix-blend-overlay"
          src={supImg}
          alt=""
        />
      </div>

      <div className="max-w-[1240px] mx-auto text-white relative">
        <div className="px-4 py-12">
          <h2 className="pt-9 text-slate-300 uppercase text-center">Support</h2>
          <h3 className="text-5xl font-bold py-6 text-center">
            Expert support when you need it
          </h3>
          <p className="py-4 text-3xl text-slate-300 text-center"></p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black">
          <div className="bg-white rounded-xl shadow-2xl ">
            <div className="p-8">
              <AiFillPhone className="bg-indigo-600 text-white w-16 rounded-lg mt-[-4rem] h-16 p-4" />
              <h3 className="font-bold text-2xl my-6">Expert Support</h3>
              <p className="text-gray-600 text-xl mb-2">
              At Janssen Enterprise, we offer instant access to expert support through phone, email, or chat. Trust our experienced team to help you solve any problem and keep your business running smoothly.
              </p>
            </div>
            <div className="bg-slate-100 pl-8 py-4">
              <p className="flex items-center text-indigo-600 ">
                Contact Us <AiOutlineArrowRight className="w-5 ml-2" />
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-2xl ">
            <div className="p-9">
              <BiSupport className="bg-indigo-600 text-white w-16 rounded-lg mt-[-4rem] h-16 p-4" />
              <h3 className="font-bold text-2xl my-6">Instant Access</h3>
              <p className="text-gray-600 text-xl">
                At Janssen Enterprise, we believe in instant access to support.
                Whether you prefer phone, email, or chat, our expert team is
                always available to help you solve any problem.
              </p>
            </div>
            <div className="bg-slate-100 pl-8 py-4">
              <p className="flex items-center text-indigo-600">
                Contact Us <AiOutlineArrowRight className="w-5 ml-2" />
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-2xl ">
            <div className="p-9">
              <BiChip className="bg-indigo-600 text-white w-16 rounded-lg mt-[-4rem] h-16 p-4" />
              <h3 className="font-bold text-2xl my-6">
                Cutting-Edge Technology
              </h3>
              <p className="text-gray-600 text-xl">
              At Janssen Enterprise, our experienced team provides fast and friendly assistance via phone, email, or chat. Count on us to help you succeed in your business endeavors.
              </p>
            </div>
            <div className="bg-slate-100 pl-8 py-4">
              <p className="flex items-center text-indigo-600">
                Contact Us <AiOutlineArrowRight className="w-5 ml-2" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
