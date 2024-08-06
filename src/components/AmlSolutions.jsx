import amlSolutions from "../assets/aml-object.png";

const AmlSolutions = () => {
  return (
    <div className="max-w-[1390px] mx-auto px-4 lg:px-0">
      <div className="flex flex-col items-center justify-center gap-8 py-20 lg:flex-row md:py-44 md:gap-10">
        {/* Left */}
        <div className="flex justify-center w-full lg:w-1/2 lg:justify-start">
          <img
            src={amlSolutions}
            alt="AML Solutions"
            className="w-full h-auto md:w-auto"
          />
        </div>

        {/* Right */}
        <div className="w-full space-y-6 text-center lg:w-1/2 md:space-y-9 lg:text-left">
          <h3 className="text-2xl md:text-4xl lg:text-[48px] font-normal heading">
            Our AML Solutions
          </h3>
          <p className="px-4 text-sm md:text-lg md:px-0 text-fontBlack">
            In today{"'"}s complex regulatory landscape, staying compliant with
            Anti-Money Laundering (AML) requirements is essential. At [Your
            Company Name], we provide advanced AML search solutions to help you
            identify and mitigate risks efficiently. Our cutting-edge screening
            tools deliver accurate, timely results, protecting your business
            from financial crime. With customizable search parameters and
            real-time monitoring, our platform offers the insights you need to
            maintain compliance & safeguard your reputation. Trust us for
            reliable AML solutions that keep you ahead.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AmlSolutions;
