import React, { memo, useState } from "react";

const Updates = memo(({ monthlyUpdates, handleChange, handleSubmit}) => {
  const handleToggleModal = () => {
    const modal = document.getElementById("authentication-modal");
    modal.classList.toggle("hidden");
  };

  const handleHideModal = () => {
    const modal = document.getElementById("authentication-modal");
    modal.classList.add("hidden");
  };

  
  return (
    <div>
      <h3 className="text-3xl font-bold dark:text-white text-center my-4">
        Monthly Report
      </h3>

      <div className="relative overflow-x-auto mx-6">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Month
              </th>
              <th scope="col" className="px-6 py-3">
                Report
              </th>
            </tr>
          </thead>
          <tbody>
            {monthlyUpdates.map((update, index) => {
              return (
                <tr
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  key={index}
                >
                  <td className="px-6 py-4">{update.month}</td>
                  <td className="px-6 py-4">{update.update}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center items-center my-5">
        <button
          onClick={handleToggleModal}
          data-modal-target="authentication-modal"
          data-modal-toggle="authentication-modal"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="button"
        >
          Next Month Update
        </button>
      </div>

      {/* Main modal */}
      <div
        id="authentication-modal"
        tabIndex="-1"
        aria-hidden="true"
        className="hidden fixed top-0 right-0 bottom-0 left-0 flex items-center justify-center bg-black bg-opacity-50"
      >
        <div className="relative p-4 w-full max-w-md">
          {/* Modal content */}
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            {/* Modal header */}
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Your next month update
              </h3>
              <button
                onClick={handleHideModal}
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="authentication-modal"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            {/* Modal body */}
            <div className="p-4 md:p-5">
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="month"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Month
                  </label>
                  <input
                    type="text"
                    name="month"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="month"
                    required
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label
                    htmlFor="update"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your Update
                  </label>
                  <input
                    type="text"
                    name="update"
                    id="password"
                    placeholder="update"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    required
                    onChange={handleChange}
                  />
                </div>

                <button
                  onClick={handleHideModal}
                  type="submit"
                  className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Updates;
