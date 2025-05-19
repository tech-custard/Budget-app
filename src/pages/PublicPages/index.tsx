import * as React from "react";
import LandingImage from "@assets/LandingImage.jpg";

const Public = () => {
  return (
    <div className="relative h-screen text-white bg-white font-mont">
      <div className="absolute inset-0">
        <img
          className="object-cover w-full h-full"
          src={LandingImage}
          alt="Landing page image"
        />
      </div>
      <div className="relative z-10 max-w-2xl px-6 pb-24 mx-auto sm:pb-32 lg:pb-56 lg:pt-48">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 pt-35 lg:mt-10 lg:pt-0 sm:text-6xl">
          My Budget App
        </h1>
        <p className="mt-6 leading-8 text-gray-600 text-md">
          Manage your finances effortlessly with our intuitive budget app. Track
          spending, set savings goals, and gain insights with real-time
          analytics. Simplify budgeting and take control of your financial
          future today.
        </p>
        <div className="flex items-center mt-10 gap-x-6">
          <a
            href="/dashboard"
            className="rounded-md bg-bodydark2 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Go to Dashboard
          </a>
        </div>
      </div>
    </div>
  );
};

export default Public;
