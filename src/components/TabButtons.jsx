const TabButtons = ({ activeTab, setActiveTab }) => {
  const btns = [
    {
      id: 1,
      title: "Auto Input",
    },
    {
      id: 2,
      title: "Manual Input",
    },
  ];

  return (
    <div className="w-full md:w-max mx-auto flex items-center justify-center md:rounded-full bg-[#E4E4E4] gap-2 p-1.5 border border-[rgba(17, 17, 17, 0.20)] shadow-tabShadow mb-8 mt-10 md:flex-row flex-col">
      {btns.map(({ id, title }) => (
        <button
          key={id}
          className={`w-[276px] px-4 py-2 text-sm  rounded-full sm:text-base ${
            id === activeTab
              ? "bg-[#042826] text-white"
              : "bg-transparent text-[#111]"
          }`}
          onClick={() => setActiveTab(id)}
        >
          {title}
        </button>
      ))}
    </div>
  );
};

export default TabButtons;
