import { Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";

import person1 from "../assets/person1.png";
import person2 from "../assets/person2.png";
import person3 from "../assets/person3.png";
import quoteImg from "../assets/quote.png";
import Arrow from "../assets/arrow-prev.svg";

const Slider = () => {
  const sliderData = [
    {
      id: "01",
      name: "Kevin Hammer",
      image: person1,
      quote: quoteImg,
      desc: "Sed ut perspiciatis unde omnise natus ervoluptatem accusantium doloremque laudantium, trem aperiam, eaque ipsa quae ab i inventore veritatis i architecto beatae vitae dicta sunt explicabo.",
      star: 4,
    },
    {
      id: "02",
      name: "Kevin Hammer",
      image: person2,
      quote: quoteImg,
      desc: "Sed ut perspiciatis unde omnise natus ervoluptatem accusantium doloremque laudantium, trem aperiam, eaque ipsa quae ab i inventore veritatis i architecto beatae vitae dicta sunt explicabo.",
      star: 5,
    },
    {
      id: "03",
      name: "Kevin Hammer",
      image: person3,
      quote: quoteImg,
      desc: "Sed ut perspiciatis unde omnise natus ervoluptatem accusantium doloremque laudantium, trem aperiam, eaque ipsa quae ab i inventore veritatis i architecto beatae vitae dicta sunt explicabo.",
      star: 4,
    },
    {
      id: "01",
      name: "Kevin Hammer",
      image: person1,
      quote: quoteImg,
      desc: "Sed ut perspiciatis unde omnise natus ervoluptatem accusantium doloremque laudantium, trem aperiam, eaque ipsa quae ab i inventore veritatis i architecto beatae vitae dicta sunt explicabo.",
      star: 4,
    },
    {
      id: "02",
      name: "Kevin Hammer",
      image: person2,
      quote: quoteImg,
      desc: "Sed ut perspiciatis unde omnise natus ervoluptatem accusantium doloremque laudantium, trem aperiam, eaque ipsa quae ab i inventore veritatis i architecto beatae vitae dicta sunt explicabo.",
      star: 5,
    },
    {
      id: "03",
      name: "Kevin Hammer",
      image: person3,
      quote: quoteImg,
      desc: "Sed ut perspiciatis unde omnise natus ervoluptatem accusantium doloremque laudantium, trem aperiam, eaque ipsa quae ab i inventore veritatis i architecto beatae vitae dicta sunt explicabo.",
      star: 4,
    },
  ];

  const swiperRef = useRef();

  return (
    <div className="max-w-[1410px] mx-auto px-4 md:px-8 pb-20 md:pb-32">
      <div className="flex items-center justify-between">
        <h1 className="heading text-center md:text-left text-black text-2xl md:text-4xl lg:text-[48px] pt-10 pb-10">
          What Our Users Say
        </h1>

        <div className="flex items-center gap-4">
          <img
            src={Arrow}
            alt="arrow"
            className="duration-200 cursor-pointer active:scale-95"
            onClick={() => swiperRef.current && swiperRef.current.slidePrev()}
          />
          <img
            src={Arrow}
            alt="arrow"
            className="rotate-[180deg] cursor-pointer active:scale-95 duration-200"
            onClick={() => swiperRef.current && swiperRef.current.slideNext()}
          />
        </div>
      </div>

      <div className="pb-14">
        <Swiper
          slidesPerView={3}
          spaceBetween={24}
          modules={[Pagination]}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          className="mySwiper"
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {sliderData.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className="w-full p-[18px] bg-white rounded-xl shadow-md mb-4">
                <div className="flex flex-col gap-4">
                  <div>
                    <div>
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 rounded-full"
                      />
                    </div>
                    <div>
                      <h3 className="pt-4 pb-[18px] text-lg font-semibold text-[#111]">
                        {item.name}
                      </h3>

                      <div className="flex items-center justify-between space-x-1">
                        <img src={item.quote} alt="quote" className="w-6 h-6" />

                        <div className="flex pr-4 space-x-1">
                          {Array.from({ length: item.star }).map((_, idx) => (
                            <svg
                              key={idx}
                              xmlns="http://www.w3.org/2000/svg"
                              width="23"
                              height="23"
                              viewBox="0 0 25 25"
                              fill="none"
                            >
                              <path
                                d="M24.919 9.42004C24.7325 8.86485 24.252 8.46006 23.6734 8.37156L16.9394 7.34253L13.9147 0.898867C13.6568 0.349625 13.1056 0 12.5 0C11.894 0 11.3432 0.349625 11.0853 0.898867L8.06017 7.34293L1.32622 8.37196C0.747628 8.46046 0.267057 8.86485 0.0809402 9.42044C-0.105177 9.97603 0.0353038 10.588 0.444444 11.0078L5.36206 16.0506L4.19734 23.1848C4.10131 23.7753 4.35171 24.369 4.84022 24.7143C5.32833 25.0595 5.9728 25.0945 6.49781 24.8048L12.5004 21.4851L18.503 24.8048C18.7399 24.9357 19.0006 25 19.2601 25C19.576 25 19.8919 24.904 20.1606 24.7143C20.6491 24.3694 20.8991 23.7757 20.803 23.1848L19.6383 16.0506L24.5563 11.0078C24.9647 10.588 25.1052 9.97603 24.919 9.42004Z"
                                fill="#FFB800"
                              />
                            </svg>
                          ))}

                          {item.star < 5 && (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="23"
                              height="23"
                              viewBox="0 0 25 25"
                              fill="none"
                            >
                              <path
                                d="M24.919 9.42004C24.7325 8.86485 24.252 8.46006 23.6734 8.37156L16.9394 7.34253L13.9147 0.898867C13.6568 0.349625 13.1056 0 12.5 0C11.894 0 11.3432 0.349625 11.0853 0.898867L8.06017 7.34293L1.32622 8.37196C0.747628 8.46046 0.267057 8.86485 0.0809402 9.42044C-0.105177 9.97603 0.0353038 10.588 0.444444 11.0078L5.36206 16.0506L4.19734 23.1848C4.10131 23.7753 4.35171 24.369 4.84022 24.7143C5.32833 25.0595 5.9728 25.0945 6.49781 24.8048L12.5004 21.4851L18.503 24.8048C18.7399 24.9357 19.0006 25 19.2601 25C19.576 25 19.8919 24.904 20.1606 24.7143C20.6491 24.3694 20.8991 23.7757 20.803 23.1848L19.6383 16.0506L24.5563 11.0078C24.9647 10.588 25.1052 9.97603 24.919 9.42004Z"
                                fill="#E1E1E1"
                              />
                            </svg>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="pr-1 mt-2 text-sm md:text-base lg:text-lg text-fontBlack">
                    {item.desc}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
