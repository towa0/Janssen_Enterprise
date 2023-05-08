import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaTwitch,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full mt-24 bg-slate-900 text-gray-300 py-8 px-2">
      <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6   border-gray-600">
        <div>
          <h6 className="font-bold uppercase pt-2 mb-3">Solutions</h6>
          <ul>
            <li className="py-1">
              <button className="border-none bg-transparent text-white mr-7">
                Home
              </button>
            </li>
            <li className="py-1">
              <button className="border-none bg-transparent text-white mr-7">
                Analytics
              </button>
            </li>
            <li className="py-1">
              <button className="border-none bg-transparent text-white mr-7">
                Commerce
              </button>
            </li>
            <li className="py-1">
              <button className="border-none bg-transparent text-white mr-7">
                Data
              </button>
            </li>
            <li className="py-1">
              <button className="border-none bg-transparent text-white mr-7">
                Cloud
              </button>
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercase pt-2 mb-3">Support</h6>
          <ul>
            <li className="py-1">
              <button className="border-none bg-transparent text-white mr-7">
                Pricing
              </button>
            </li>
            <li className="py-1">
              <button className="border-none bg-transparent text-white mr-7">
                Documentation
              </button>
            </li>
            <li className="py-1">
              <button className="border-none bg-transparent text-white mr-7">
                Guides
              </button>
            </li>
            <li className="py-1">
              <button className="border-none bg-transparent text-white mr-7">
                Api Status
              </button>
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercase pt-2 mb-3">Company</h6>
          <ul>
            <li className="py-1">
              <button className="border-none bg-transparent text-white mr-7">
                About
              </button>
            </li>
            <li className="py-1">
              <button className="border-none bg-transparent text-white mr-7">
                Blog
              </button>
            </li>
            <li className="py-1">
              <button className="border-none bg-transparent text-white mr-7">
                Jobs
              </button>
            </li>
            <li className="py-1">
              <button className="border-none bg-transparent text-white mr-7">
                press
              </button>
            </li>
            <li className="py-1">
              <button className="border-none bg-transparent text-white mr-7">
                Partners
              </button>
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercase pt-2 mb-3">Legal</h6>
          <ul>
            <li className="py-1">
              <button className="border-none bg-transparent text-white mr-7">
                Privacy
              </button>
            </li>
            <li className="py-1">
              <button className="border-none bg-transparent text-white mr-7">
                Claims
              </button>
            </li>
            <li className="py-1">
              <button className="border-none bg-transparent text-white mr-7">
                Terms
              </button>
            </li>
            <li className="py-1">
              <button className="border-none bg-transparent text-white mr-7">
                Policies
              </button>
            </li>
            <li className="py-1">
              <button className="border-none bg-transparent text-white mr-7">
                Terms
              </button>
            </li>
          </ul>
        </div>

        <div className="col-span-2 pt-8 md:pt-2">
          <p className="font-bold uppercase ">Subscribe to newsletter</p>
          <p className="py-4">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <form className="flex flex-col sm:flex-row text-black">
            <input
              className="w-full p-2 mr-4 rounded-md mb-4"
              type="email"
              placeholder="Enter email.."
            />
            <button className="p-2 mb-4">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="flex flex-col max-w-[1240px] px-2 py-4 m-auto justify-between sm:flex-row text-center text-gray-500">
        <p className="py-4">2022 Workflow, LLC. All rights reserved</p>
        <div className="flex justify-between sm:w-[300px] pt-4 text-2xl">
          <button className="border-none bg-transparent text-white mr-7">
            <FaFacebook />
          </button>
          <button className="border-none bg-transparent text-white mr-7">
            <FaInstagram />
          </button>
          <button className="border-none bg-transparent text-white mr-7">
            <FaTwitter />
          </button>
          <button className="border-none bg-transparent text-white mr-7">
            <FaTwitch/>
          </button>
          <button className="border-none bg-transparent text-white mr-7">
            <FaGithub />
          </button>

          
        </div>
      </div>
    </div>
  );
};

export default Footer;
