import React from "react";
import { FaLink, FaShareAlt, FaEdit, FaChartLine } from "react-icons/fa";
const AboutPage = () => {
  return (
    <div className="lg:px-14 sm:px-8 px-5 min-h-[calc(100vh-64px)] pt-2 bg-gradient-to-br from-[#1d1d2c] to-[#25253f]">
      <div className="w-full sm:py-10 py-8  ">
        <h1 className="sm:text-4xl text-white text-3xl font-bold italic  mb-3">
          About TrimLink
        </h1>
        <p className="text-white text-sm  mb-8 xl:w-[60%] lg:w-[70%] sm:w-[80%] w-full ">
          TrimLink simplifies URL shortening for efficient sharing. Easily
          generate, manage, and track your shortened links. TrimLink simplifies
          URL shortening for efficient sharing. Easily generate, manage, and
          track your shortened links. TrimLink simplifies URL shortening for
          efficient sharing. Easily generate, manage, and track your shortened
          links. TrimLink simplifies URL shortening for efficient sharing.
          Easily generate, manage, and track your shortened links.
        </p>
        <div className="space-y-5 xl:w-[60%] lg:w-[70%] sm:w-[80%] w-full ">
          <div className="flex items-start">
            <FaLink className="text-blue-500 text-3xl mr-4" />
            <div>
              <h2 className="sm:text-2xl font-bold text-white">
              Save Space:
              </h2>
              <p className="text-white">
              Long URLs can be cumbersome. [ TrimLink ] helps you keep things clean and concise.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <FaShareAlt className="text-green-500 text-3xl mr-4" />
            <div>
              <h2 className="sm:text-2xl font-bold text-white">
              Share Anywhere:
              </h2>
              <p className="text-white">
              Whether it's on social media platforms, emails, or text messages, shortened URLs are much easier to share and manage.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <FaEdit className="text-purple-500 text-3xl mr-4" />
            <div>
              <h2 className="sm:text-2xl font-bold text-white">
              Monitor Engagement:
              </h2>
              <p className="text-white">
              Want to know how well your link is performing? With [ TrimLink ], you can track the clicks and user activity associated with your URL.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <FaChartLine className="text-red-500 text-3xl mr-4" />
            <div>
              <h2 className="sm:text-2xl font-bold text-white">
              Mobile-Friendly :
              </h2>
              <p className="text-white">
              Get quick access on mobile and generate shortened links on the go!.
              </p>
            </div>
          </div>
        </div>
      </div>
        <div className="text-white text-md pb-4">
        <p>Start shortening your URLs today with TrimLink and make your links more manageable and effective!</p>
        </div>
    </div>
  );
};

export default AboutPage;