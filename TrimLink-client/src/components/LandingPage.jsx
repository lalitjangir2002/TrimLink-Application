import { useNavigate } from "react-router-dom";
import React from "react";
import { motion } from "framer-motion";
import Card from "./Card";
import { useStoreContext } from "../contextApi/ContextApi";
import im from "../assets/img2.png"

const LandingPage = () => {
  const navigate = useNavigate();
  const { token } = useStoreContext();
  console.log("TOKEN FROM LANDING PAGE: " + token);

  const dashBoardNavigateHandler = () => {
    if (token) {
      navigate("/dashboard");
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="min-h-[calc(100vh-64px)] bg-gradient-to-br from-[#1d1d2c] to-[#25253f] text-white lg:px-14 sm:px-8 px-4">
      {/* Main section */}
      <div className="lg:flex-row flex-col lg:py-5 pt-16 lg:gap-10 gap-8 flex justify-between items-center">
        {/* Text Section */}
        <div className="flex-1">
          <motion.h1
            initial={{ opacity: 0, y: -80 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-extrabold font-roboto text-white md:text-5xl sm:text-4xl text-4xl lg:leading-[70px] sm:leading-[55px] leading-10 lg:w-full md:w-[75%] w-full"
          >
            Welcome to{" "}
            <span className="text-neon-blue cursor-pointer hover:underline">
              TrimLink
            </span>{" "}
            – the fast and simple solution to shorten and share long URLs
            effortlessly!
          </motion.h1>
          <p className="text-slate-300 text-sm my-5 lg:w-[80%]">
            With{" "}
            <span className="text-neon-blue cursor-pointer hover:underline">
              TrimLink
            </span>
            ,you can transform lengthy web links into compact, easy-to-share
            URLs. Whether you're sending a link through social media, text
            message, or email.
          </p>
          <div className="flex items-center gap-3">
            <motion.button
              initial={{ opacity: 0, y: 80 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              onClick={dashBoardNavigateHandler}
              className="bg-gradient-to-r from-neon-blue to-neon-pink w-44 border border-sky-500 text-white font-semibold rounded-md py-2 shadow-lg hover:shadow-2xl"
            >
              Trim a Link
            </motion.button>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1 flex justify-center w-full">
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              rotate: 360,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              rotate: { duration: 0.5, ease: "linear" },
            }}
            className="sm:w-[500px] w-[400px] object-cover rounded-md"
            src={im}
            alt="3d visual"
          />
        </div>
      </div>

      {/* Features Section */}
      <div className="sm:pt-12 pt-7">
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-white font-extrabold text-center underline lg:w-[60%] md:w-[70%] sm:w-[80%] mx-auto text-4xl"
        >
          Key Features of the Application
        </motion.p>

        {/* Cards Section */}
        <div className="pt-4 pb-7 grid lg:gap-10 gap-6 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-8">
          <Card
            title="Secure User Signup"
            desc="Sign up securely to create an account where all your links are stored. Our platform ensures your data is protected with advanced security protocols."
          />
          <Card
            title="Instant URL Shortening"
            desc="Simply paste any long URL and generate a shortened version with a single click! Our fast and intuitive tool ensures you can manage your links with ease."
          />
          <Card
            title="Track Clicks"
            desc="Gain real-time insights into how your links are performing. Monitor the number of clicks, geographical locations of your visitors, and referral sources for every shortened link."
          />
          <Card
            title="Track Link History"
            desc="Not only can you track clicks in real time, but you can also view historical data on your links, helping you analyze trends and make informed decisions."
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
