"use client";
import React from "react";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-orange-500">404</h1>
        <p className="mt-4 text-lg font-medium text-gray-800">
          Oops! Look like&apos;s something going wrong
        </p>
        <p className="mt-2 text-sm text-gray-600">
          Page Cannot be found! We&apos;ll have it figured out in no time.
          <br />
          Meanwhile, check out these fresh ideas:
        </p>
        <button
          className="mt-6 px-6 py-2 text-white bg-orange-500 rounded hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400"
          onClick={() => window.location.href = "/"} 
        >
          Go to home
        </button>
      </div>
    </div>
  );
}
