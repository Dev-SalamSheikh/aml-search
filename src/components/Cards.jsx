const Cards = () => {
  const cardData = [
    {
      id: "01",
      title: "Input Data",
      description:
        "Begin by entering the required customer information into our secure AML search platform. Our system is designed to handle various data inputs seamlessly, ensuring a smooth user experience.",
    },
    {
      id: "02",
      title: "Automated Screening",
      description:
        "Our platform conducts thorough searches across global databases and watchlists, including sanctions lists, PEP lists, and adverse media, ensuring comprehensive coverage.",
    },
    {
      id: "03",
      title: "Risk Assessment",
      description:
        "Once the search is complete, our system generates a detailed risk assessment report. This report highlights potential risks and flags any matches, helping you make informed compliance decisions.",
    },
  ];

  return (
    <div className="flex flex-col gap-[22px] lg:flex-row">
      {cardData.map((item) => (
        <div
          key={item.id}
          className="flex-1 p-8 bg-white shadow-cardShadow rounded-3xl"
        >
          <div className="flex flex-col gap-4">
            <span className="text-4xl md:text-[46px] font-bold text-[#042826] underline font-sarala">
              {item.id}
            </span>
            <span className="text-xl md:text-[24px] font-bold text-fontBlack font-sarala">
              {item.title}:
            </span>
            <p className="text-sm md:text-base lg:text-lg text-[#333] font-jakarta">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
