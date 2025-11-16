import { useRef } from "react";
import { NICHES } from "../lib/constants";

const NicheSection = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="pt-[124px] min-h-dvh">
      <div className="flex flex-col justify-center w-full max-w-[1512px] mx-auto px-4 md:px-6 lg:px-[138px] pb-44">
        <div className="mx-auto">
          <h3 className="text-secondary-color text-center font-semibold pb-0.5">
            Specialized Niches
          </h3>
          <h2 className="capitalize pb-5 font-semibold font-inter text-[30px] lg:text-[36px] max-w-[750px] text-center text-primary-text niche">
            Your vision, Our niche
          </h2>
          <p className="max-w-[684px] text-center text-secondary-text text-xl font-normal">
            We connect clients with high-end freelancers across these categories
          </p>
        </div>
        <div className="relative mt-16">
          {/* Scroll Buttons */}
          <button
            onClick={scrollLeft}
            className="
          absolute left-0 top-1/2 -translate-y-1/2 z-10 
          bg-white shadow-md rounded-full w-10 h-10 
          flex items-center justify-center 
          hover:scale-105 transition
        "
          >
            ‹
          </button>

          <button
            onClick={scrollRight}
            className="
          absolute right-0 top-1/2 -translate-y-1/2 z-10 
          bg-white shadow-md rounded-full w-10 h-10 
          flex items-center justify-center 
          hover:scale-105 transition
        "
          >
            ›
          </button>

          {/* Scrollable Container */}
          <div
            ref={scrollRef}
            className="
          flex gap-5 overflow-x-auto scroll-smooth pb-4 snap-x snap-mandatory 
          [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]
        "
          >
            {NICHES.map((niche, index) => (
              <article
                key={index}
                className="
              shrink-0 
              w-[268px] 
              h-[300px]
              rounded-2xl 
              border border-gray-200 
              bg-white 
              snap-start
              hover:shadow-md transition
            "
              >
                {/* Image */}
                <div className="overflow-hidden aspect-4/3 p-2">
                  <img
                    src={niche.image}
                    alt={niche.name}
                    draggable={false}
                    className="w-full h-full object-fill rounded-t-2xl"
                  />
                </div>

                {/* Label */}
                <div className="border-t border-gray-200">
                  <p
                    className="
                text-center py-4 
                text-primary-text 
                hover:text-primary-color transition 
                cursor-pointer 
                font-semibold capitalize
              "
                  >
                    {niche.name}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NicheSection;
