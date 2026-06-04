import React from "react";

const Footer = () => {
  return (
    <footer className="bg-zinc-100 py-20">
      <div className="max-w-[1400px] mx-auto py-10">
        <div>
          <a href="#" className="text-3xl font-bold">
            Gr<span className="text-green-800">O</span>cery
          </a>
          <p className="text-zinc-600 mt-4 max-w-[350px]">
            Bred for a high content of beneficial substances. Our products are
            all fresh and healthy.
          </p>
          <p className="text-zinc-800 mt-6">
            2025 &copy; Grocery. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
