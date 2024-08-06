import Cards from "./Cards";

function HowItWorks() {
  return (
    <div className="m-4 rounded-3xl bg-secondaryColor py-10 md:py-[76px]">
      <div className="max-w-[1410px] mx-auto px-4 lg:px-8">
        <h1 className="heading text-center text-black text-2xl md:text-4xl lg:text-[48px] pb-10">
          How It Works
        </h1>
        <div>
          <Cards />
        </div>
      </div>
    </div>
  );
}
export default HowItWorks;
