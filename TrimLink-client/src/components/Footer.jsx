import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white py-2 z-40 relative">
      <div className="container mx-auto px-6 lg:px-14 flex flex-col lg:flex-row lg:justify-between items-center gap-4">
        <div className="text-center lg:text-left">
          <h2 className="text-3xl font-bold mb-2">TrimLink</h2>
        </div>

        <p className="mt-4 lg:mt-0">
          &copy; 2024 Linklytics. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;