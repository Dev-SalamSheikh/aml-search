import { useState } from "react";
import { FaPlus, FaSearch } from "react-icons/fa";
import uploadImage from "../assets/uploadImage.png";

const ManualUpload = () => {
  const [userInput, setUserInput] = useState({ firstName: "", sureName: "" });

  return (
    <div className="w-full p-4 mt-10 shadow-lg rounded-3xl bg-primaryColor">
      <div className="flex flex-col items-center p-6 pt-24 border-2 border-gray-400 border-dashed rounded-3xl">
        <div className="w-full mb-6">
          <div className="flex flex-col w-full mb-4 lg:px-20 sm:flex-row sm:justify-between">
            <input
              type="text"
              placeholder="First Name"
              value={userInput.firstName}
              className="w-full h-[50px] px-4 m-2 border border-gray-300 rounded-lg sm:w-1/2 focus:outline-none text-white bg-inputBg"
              onChange={(e) =>
                setUserInput({ ...userInput, firstName: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Surname"
              value={userInput.sureName}
              className="w-full h-[50px] px-4 m-2 border border-gray-300 rounded-lg sm:w-1/2 focus:outline-none text-white bg-inputBg"
              onChange={(e) =>
                setUserInput({ ...userInput, sureName: e.target.value })
              }
            />
          </div>

          <div className="flex flex-col gap-2 mt-8 md:mt-16 sm:flex-row sm:justify-center">
            <button className="w-full md:w-[260px] flex items-center justify-center gap-2 px-6 py-3.5 text-xs bg-white rounded-full text-textPrimaryColor sm:text-sm">
              <FaSearch className="w-4 h-4 sm:w-5 sm:h-5" />
              Search
            </button>
            <button className="w-full md:w-[260px] flex items-center justify-center gap-2 px-6 py-3.5 text-xs text-white border rounded-full bg-transparent sm:text-sm">
              <FaPlus className="w-4 h-4 sm:w-5 sm:h-5" />
              Add New Target
            </button>
          </div>
        </div>

        <div>
          <p className="my-8 text-sm text-white">or upload file</p>
        </div>

        <div className="w-full h-[300px] md:h-[200px] bg-fileBasedBg flex flex-col justify-center items-center rounded-[22px]">
          <div className="p-4 mb-4 bg-white w-max rounded-2xl">
            <img
              src={uploadImage}
              className="w-8 h-8 mx-auto"
              alt="Upload icon"
            />
          </div>

          <p className="mb-2 text-sm font-medium text-center text-white sm:text-base">
            Click to Upload or Drop PDF/SPREADSHEET here
          </p>
          <p className="mb-4 text-xs text-center text-gray-400 underline sm:text-sm">
            Only (PDFs, spreadsheets, etc.) is accepted
          </p>
        </div>
      </div>
    </div>
  );
};

export default ManualUpload;
