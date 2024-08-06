import FileUpload from "../components/FileUpload";
import ManualUpload from "../components/ManualUpload";
import Navbar from "../components/Navbar";
import TabButtons from "../components/TabButtons";
import { useState } from "react";

const FileBasedSearchPage = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="flex flex-col min-h-screen pb-20">
      <div className="w-full max-w-[1240px] mx-auto mt-10 px-4">
        <Navbar homepage={false} />

        <TabButtons activeTab={activeTab} setActiveTab={setActiveTab} />

        {activeTab === 1 ? (
          <FileUpload />
        ) : activeTab === 2 ? (
          <ManualUpload />
        ) : null}
      </div>
    </div>
  );
};

export default FileBasedSearchPage;
