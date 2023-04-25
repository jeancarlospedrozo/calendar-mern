import React from "react";

export const Navbar = () => {
  return (
    <nav className="fixed left-0 top-0 z-20 w-full border-b border-gray-200 bg-white dark:border-gray-600 dark:bg-gray-900">
      <div className="mx-auto flex max-w-screen-2xl flex-wrap items-center justify-between p-4">
        <a href="" className="flex items-center">
          <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
            Calendar
          </span>
        </a>
        <div className="flex md:order-2">
          <button
            type="button"
            className="mr-3 rounded-lg bg-blue-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 md:mr-0"
          >
            Salir
          </button>
        </div>
      </div>
    </nav>
  );
};
