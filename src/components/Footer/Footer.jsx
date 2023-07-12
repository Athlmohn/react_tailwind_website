import React from "react";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className="bg-orange-400 text-white rounded-lg shadow m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex items-center mb-4 sm:mb-0">
            <img src="https://www.pinpng.com/pngs/m/160-1605199_recommended-for-the-following-environments-icon-restaurant-vector.png" className="h-8 mr-3 mix-blend-multiply" alt="/" />
            <h2 className="self-center text-2xl sm:text-4xl whitespace-nowrap text-white">
              Tasty<span className="font-bold">Foods</span>
            </h2>
          </div>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0">
            <li className="mr-4 cursor-pointer hover:text-gray-200 md:mr-6">
              About
            </li>
            <li className="mr-4 cursor-pointer hover:text-gray-200 md:mr-6">
              Privacy Policy
            </li>
            <li className="mr-4 cursor-pointer hover:text-gray-200 md:mr-6">
              Licensing
            </li>
            <li className="hover:text-gray-200">Contact</li>
          </ul>
        </div>
        <hr className="my-6 border-black sm:mx-auto sm:my" />
        <div className="text-center text-sm text-white">
          &copy; {year}
          <span className="hover:underline cursor-pointer">Tasty Foods™</span>.
          All Rights Reserved.
        </div>
      </div>
    </div>
  );
}

export default Footer;
