import ProgessbarImage from "../assets/progessbar.png";
import LoaderImage from "../assets/loader.png";
import OverlayLeft from "../assets/overlay-left.png";
import OverlayRight from "../assets/overlay-right.png";

const PreLoader = () => {
  return (
    <div className="relative flex items-center justify-center h-screen isolate">
      <div className="bg-primaryColor w-[95%] md:w-[650px] h-[450px] lg:w-[840px] lg:h-[520px] rounded-[36px] flex flex-col justify-center items-center p-4">
        <img src={ProgessbarImage} alt="progessbar" />

        <h3
          className="text-center text-white text-xl md:text-[24px] heading uppercase"
          style={{
            color: "#fff",
          }}
        >
          we are searching information
        </h3>

        <div className="w-8/12">
          <img src={LoaderImage} alt="loader_image" className="w-full mt-5" />
        </div>

        <p
          className="mt-4 text-xs text-center uppercase md:text-sm heading"
          style={{
            color: "rgba(255, 255, 255, 0.5)",
          }}
        >
          we are searching information
        </p>
      </div>

      <div className="absolute top-0 left-0 -z-10">
        <img src={OverlayLeft} alt="overlay" />
      </div>

      <div className="absolute bottom-0 right-0 -z-10">
        <img src={OverlayRight} alt="overlay" />
      </div>
    </div>
  );
};
export default PreLoader;
