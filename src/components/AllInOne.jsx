import React from "react";
import { AiOutlineCheck } from "react-icons/ai";

const AllInOne = () => {
  return (
    <div name="platforms" className="w-full my-32">
      <div className="max-w-[1240px] mx-auto px-2">
        <h2 className="text-5xl font-bold text-center">
          The Ultimate Solution for Your Business
        </h2>
        <p className="text-2xl py-8 text-gray-500 text-center">
          Manage your business with ease using our all-in-one platform. From
          data security to customer management, we've got you covered.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
          <div className="flex">
            <div>
              <AiOutlineCheck className="w-7 mr-2 mt-1  text-green-600" />
            </div>

            <div>
              <h3 className="font-bold text-lg">Safe and Secure</h3>
              <p className="text-lg pt-2 pb-4">
                Protect your business from cyber threats with our enhanced
                security features. Our platform is equipped with the latest
                tools and technologies to keep your data and transactions safe.
              </p>
            </div>
          </div>

          <div className="flex">
            <div>
              <AiOutlineCheck className="w-7 mr-2 mt-1 text-green-600" />
            </div>

            <div>
              <h3 className="font-bold text-lg">Actionable Insights</h3>
              <p className="text-lg pt-2 pb-4">
                Get valuable insights into your business with our advanced
                analytics tools. Our platform provides real-time data and
                detailed reports to help you make informed decisions.
              </p>
            </div>
          </div>

          <div className="flex">
            <div>
              <AiOutlineCheck className="w-7 mr-2 mt-1 text-green-600" />
            </div>

            <div>
              <h3 className="font-bold text-lg">Simplify Transactions</h3>
              <p className="text-lg pt-2 pb-4">
                Make payments simple and hassle-free with our streamlined
                payment processing. Our platform offers a variety of payment
                options to suit your business needs.
              </p>
            </div>
          </div>

          <div className="flex">
            <div>
              <AiOutlineCheck className="w-7 mr-2 mt-1 text-green-600" />
            </div>

            <div>
              <h3 className="font-bold text-lg">Expand Your Business</h3>
              <p className="text-lg pt-2 pb-4">
                Reach new markets and grow your business with our global reach.
                Our platform makes it easy to expand your customer base and sell
                products worldwide.
              </p>
            </div>
          </div>

          <div className="flex">
            <div>
              <AiOutlineCheck className="w-7 mr-2 mt-1 text-green-600" />
            </div>

            <div>
              <h3 className="font-bold text-lg">Flexible Integrations</h3>
              <p className="text-lg pt-2 pb-4">
                Integrate our platform seamlessly with your existing tools and
                systems. Our flexible integrations make it easy to connect and
                automate your workflow.
              </p>
            </div>
          </div>

          <div className="flex">
            <div>
              <AiOutlineCheck className="w-7 mr-2 mt-1 text-green-600" />
            </div>

            <div>
              <h3 className="font-bold text-lg">Collaborative Tools</h3>
              <p className="text-lg pt-2 pb-4">
                Improve team collaboration with our integrated communication
                tools. Our platform allows you to work together with colleagues
                and clients in real-time.
              </p>
            </div>
          </div>

          <div className="flex">
            <div>
              <AiOutlineCheck className="w-7 mr-2 mt-1 text-green-600" />
            </div>

            <div>
              <h3 className="font-bold text-lg">Personalized Messaging</h3>
              <p className="text-lg pt-2 pb-4">
                Engage with your customers on a personal level with our
                messaging features. Our platform enables you to send targeted
                messages and build lasting relationships.
              </p>
            </div>
          </div>

          <div className="flex">
            <div>
              <AiOutlineCheck className="w-7 mr-2 mt-1 text-green-600" />
            </div>

            <div>
              <h3 className="font-bold text-lg">
                Resources at Your Fingertips
              </h3>
              <p className="text-lg pt-2 pb-4">
                Access a wealth of resources with our knowledge base. Our
                platform offers tutorials, guides, and FAQs to help you get the
                most out of our services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllInOne;
