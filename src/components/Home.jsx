import React from "react";
import {
  AiOutlineCloudUpload,
  AiOutlineDatabase,
  AiOutlineSend,
  AiOutlineCloudServer,
} from "react-icons/ai";
import bgImg from "../assets/cyber-bg.png";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-zinc-200 flex flex-col justify-between">
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
        <div className="flex flex-col justify-center md:items-start w-full px-2 py-8">
          <p className="text-1xl">Elevate your data security with</p>
          <h1 className="pt-0 pb-3 text-6xl md:7xl font-bold">Janssen Enterprise</h1>
          <p className="text-2xl">Advanced encryption and privacy solutions</p>
          <button className="py-3 px-6 sm:w-[60%] my-4">get started</button>
        </div>
        <div>
          <img className="w-full" src={bgImg} alt="backgroundImg" />
        </div>
        <div className="absolute flex flex-col py-8 md:min-w-[760px] bottom-[5%] mx-1 md:left-1/2 
        transform md:-translate-x-1/2 bg-zinc-200 border border-slate-300 rounded-xl text-center shadow-xl">
          <p>Data services</p>
          <div className="flex justify-between flex-wrap px-4">
            <p className="flex px-4 py-2 text-slate-500"><AiOutlineCloudUpload className="h-6 text-indigo-600"/>Secure File Transfer</p>
            <p className="flex px-4 py-2 text-slate-500"><AiOutlineDatabase className="h-6 text-indigo-600"/>Secure Data</p>
            <p className="flex px-4 py-2 text-slate-500"><AiOutlineCloudServer className="h-6 text-indigo-600"/>Cloud Encryption</p>
            <p className="flex px-4 py-2 text-slate-500"><AiOutlineSend className="h-6 text-indigo-600"/>Encrypted Data</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
