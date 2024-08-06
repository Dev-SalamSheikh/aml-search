import { FaRegFileAlt, FaSearch } from "react-icons/fa";
import uploadImage from "../assets/uploadImage.png";

const FileUpload = () => {
  const handleFileUpload = (event) => {
    const files = event.target.files;
    console.log(files);
  };

  return (
    <>
      <div className="w-full h-[392px] p-[14px] shadow-lg rounded-3xl bg-primaryColor">
        <div className="flex flex-col items-center justify-center w-full h-full p-6 border-2 border-white border-dashed border-opacity-60 rounded-3xl bg-fileBasedBg">
          <div className="p-4 mb-4 bg-white rounded-2xl">
            <img src={uploadImage} className="w-12 h-12" alt="Upload icon" />
          </div>

          <h3
            className="mb-2 text-sm text-center sm:text-xl heading"
            style={{
              color: "#fff",
            }}
          >
            Click to Upload or Drop PDF/SPREADSHEET here
          </h3>

          <p className="mb-4 text-xs text-center text-gray-400 underline sm:text-sm">
            Only (PDFs, spreadsheets, etc.) is accepted
          </p>

          <div className="flex flex-col gap-2 mt-2 sm:flex-row sm:gap-4">
            <input
              type="file"
              id="fileInput"
              className="hidden"
              multiple
              onChange={handleFileUpload}
            />
            <label
              htmlFor="fileInput"
              className="w-[226px] flex items-center justify-center gap-2 px-10 py-4 text-xs bg-white rounded-full cursor-pointer text-textPrimaryColor sm:text-sm"
            >
              <FaRegFileAlt className="w-4 h-4 sm:w-5 sm:h-5" />
              Upload Files
            </label>
            <button className="w-[226px] flex items-center justify-center gap-2 px-10 py-4 text-xs bg-white rounded-full text-textPrimaryColor sm:text-sm">
              <FaSearch className="w-4 h-4 sm:w-5 sm:h-5" />
              Search
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FileUpload;
