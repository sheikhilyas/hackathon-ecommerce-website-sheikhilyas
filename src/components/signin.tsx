import React from "react";
import Image from "next/image";

export default function SignIn() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-orange-100">
      <div className="w-full max-w-sm p-8 bg-white rounded shadow-lg">
        <h2 className="mb-6 text-2xl font-bold text-gray-800">Sign In</h2>
        <form>
          <div className="mb-4">
            <label
              className="block mb-1 text-sm font-medium text-gray-700"
              htmlFor="email"
            >
              Email
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2.94 6.94a1.5 1.5 0 011.78-.3l5.4 2.7 5.4-2.7a1.5 1.5 0 112 1.48l-7 3.5a1.5 1.5 0 01-1.35 0l-7-3.5a1.5 1.5 0 01-.23-1.18z" />
                </svg>
              </span>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 pl-10 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Email"
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              className="block mb-1 text-sm font-medium text-gray-700"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M4 8a4 4 0 118 0v4a1 1 0 001 1h1a1 1 0 001-1V8a6 6 0 00-12 0v4a1 1 0 001 1h1a1 1 0 001-1V8z" />
                  <path d="M8 10a2 2 0 104 0 2 2 0 00-4 0z" />
                </svg>
              </span>
              <input
                type="password"
                id="password"
                className="w-full px-3 py-2 pl-10 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Password"
              />
            </div>
          </div>
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              id="remember"
              className="w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500"
            />
            <label htmlFor="remember" className="ml-2 text-sm text-gray-700">
              Remember me?
            </label>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-orange-500 rounded hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400"
          >
            Sign In
          </button>
        </form>
        <div className="flex justify-between mt-4 text-sm">
          <a href="#" className="text-orange-500 hover:underline">
            Forget password?
          </a>
          <a href="/signup" className="text-orange-500 hover:underline">
            Sign Up
          </a>
        </div>
        <button
          type="button"
          className="flex items-center justify-center w-full px-4 py-2 mb-3 text-gray-700 bg-gray-100 border border-gray-300 rounded hover:bg-gray-200"
        >
          <Image
            src="/Google.png" 
            alt="Google logo"
            width={20}
            height={20}
            className="mr-2"
          />
          Sign in with Google
        </button>
        <button
          type="button"
          className="flex items-center justify-center w-full px-4 py-2 text-gray-700 bg-gray-100 border border-gray-300 rounded hover:bg-gray-200"
        >
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
            alt="Apple logo"
            width={20}
            height={20}
            className="mr-2"
          />
          Sign in with Apple
        </button>
      </div>
    </div>
  );
}
