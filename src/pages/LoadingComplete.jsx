import OverlayLeft from "../assets/overlay-left.png";
import OverlayRight from "../assets/overlay-right.png";
import SearchCompleteImagge from "../assets/search-complete.png";

const LoadingComplete = () => {
  return (
    <div className="relative flex items-center justify-center h-screen isolate">
      <div className="bg-primaryColor w-[95%] h-[400px] md:w-[650px] lg:w-[840px] lg:h-[520px] rounded-[36px] flex flex-col justify-center items-center">
        <img src={SearchCompleteImagge} alt="search_complete_image" />
        <h3
          className="text-center text-white text-xl md:text-[24px] heading uppercase"
          style={{
            color: "#fff",
          }}
        >
          your searching is complete
        </h3>
        <p
          className="mt-4 text-xs text-center capitalize md:text-sm heading"
          style={{
            color: "rgba(255, 255, 255, 0.5)",
          }}
        >
          please! check your email for results
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
export default LoadingComplete;
