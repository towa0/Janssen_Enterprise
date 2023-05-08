import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";

const Pricing = () => {
  return (
    <div name="pricing" className="w-full text-white my-24">
      <div className="w-full h-[900px] absolute bg-slate-900 mix-blend-overlay "></div>

      <div className="max-w-[1240px] mx-auto py-12">
        <div className="text-center py-8 text-slate-300">
          <h2 className="text-3xl uppercase">Pricing</h2>
          <h3 className="text-5xl font-bold text-white py-8">
            Affordable Pricing Plans for Any Business
          </h3>
          <h2 className="text-3xl">
            Affordable pricing for businesses of all sizes. Choose the plan that
            fits your needs and budget. Get started today and take your business
            to the next level.
          </h2>
        </div>

        <div className="grid md:grid-cols-2">
          <div className="bg-white text-slate-900 m-4 p-8 rounded-xl; shadow-2xl relative h-[700px]">
            <span className="uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-small">
              Standard
            </span>
            <div>
              <p className="text-6xl font-bold py-4 flex">
                $40
                <span className="text-xl text-slate-500 flex flex-col justify-end">
                  /mo
                </span>
              </p>
            </div>
            <p className="text-2xl py-8 text-slate-500">
              Perfect for small businesses looking for essential features at an
              affordable price.
            </p>
            <div className="text-2xl ">
              <p className="flex py-4">
                <AiFillCheckCircle className="w-8 mr-5 text-green-600" />
                5GB storage
              </p>
              <p className="flex py-4">
                <AiFillCheckCircle className="w-8 mr-5 text-green-600" />5 email
                accounts
              </p>
              <p className="flex py-4">
                <AiFillCheckCircle className="w-8 mr-5 text-green-600" />
                24/7 customer support
              </p>
              <p className="flex py-4">
                <AiFillCheckCircle className="w-8 mr-5 text-green-600" />
                Mobile app access
              </p>
              <p className="flex py-4">
                <AiFillCheckCircle className="w-8 mr-5 text-green-600" />
                Secure data encryption
              </p>
              <button className="w-full py-4 my-4">Get Started</button>
            </div>
          </div>

          <div className="bg-white text-slate-900 m-4 p-8 rounded-xl; shadow-2xl relative">
            <span className="uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-small">
              Enterprise
            </span>
            <div>
              <p className="text-6xl font-bold py-4 flex">
                $80
                <span className="text-xl text-slate-500 flex flex-col justify-end">
                  /mo
                </span>
              </p>
            </div>
            <p className="text-2xl py-8 text-slate-500">
              Ideal for growing businesses that need more storage, custom
              branding, and advanced analytics.
            </p>
            <div className="text-2xl ">
              <p className="flex py-4">
                <AiFillCheckCircle className="w-8 mr-5 text-green-600" />
                20GB storage
              </p>
              <p className="flex py-4">
                <AiFillCheckCircle className="w-8 mr-5 text-green-600" />
                10 email accounts
              </p>
              <p className="flex py-4">
                <AiFillCheckCircle className="w-8 mr-5 text-green-600" />
                Priority customer support
              </p>
              <p className="flex py-4">
                <AiFillCheckCircle className="w-8 mr-5 text-green-600" />
                Mobile app access
              </p>
              <p className="flex py-4">
                <AiFillCheckCircle className="w-8 mr-5 text-green-600" />
                Custom branding
              </p>
              <p className="flex py-4">
                <AiFillCheckCircle className="w-8 mr-5 text-green-600" />
                Advanced analytics
              </p>
              <button className="w-full py-4 my-4">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
