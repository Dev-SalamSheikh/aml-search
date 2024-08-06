import hero from "../assets/hero.png";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import OverlayLeft from "../assets/home-overlay.png";

const Hero = () => {
  return (
    <div className="p-2 md:p-[14px] ">
      <div className="relative px-2 py-6 md:py-10 md:px-4 rounded-3xl bg-primaryColor isolate">
        <div className="max-w-[1410px] mx-auto px-2">
          <Navbar />

          <div className="flex flex-col items-center justify-center gap-10 lg:flex-row lg:gap-32">
            <div className="w-full px-2 space-y-10 text-center lg:text-left md:px-0">
              <h3
                className="font-normal text-[32px] md:text-[48px] heading"
                style={{
                  color: "#fff",
                }}
              >
                Leading the Way in AML Search and Compliance Solutions
              </h3>

              <div className="h-[3px] bg-white w-[200px] md:w-[411px] mx-auto lg:mx-0"></div>

              <p className="text-base font-light text-white md:text-lg">
                Conduct anti-money laundering searches by uploading{" "}
                <br className="hidden md:block" /> files or manually entering
                names to ensure compliance and{" "}
                <br className="hidden md:block" />
                security.
              </p>

              <div className="space-y-5 md:space-y-0 md:space-x-5">
                <Link
                  to="/search-file"
                  className="block px-10 py-3 bg-white rounded-full md:inline-block text-textPrimaryColor"
                >
                  File-Based Search
                </Link>
                <Link
                  to="/search-manual"
                  className="block px-10 py-3 text-white border border-white rounded-full md:inline-block"
                >
                  Manual Search
                </Link>
              </div>
            </div>

            {/* Hero Right */}
            <div className="w-full mt-10 md:mt-0">
              <img src={hero} alt="Hero" className="w-full" />
            </div>
          </div>
        </div>

        <div className="absolute top-0 left-0 -z-10">
          <img src={OverlayLeft} alt="overlay" />
        </div>

        <div className="absolute bottom-0 right-0 rotate-180 -z-10">
          <img src={OverlayLeft} alt="overlay" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
