import { useEffect, useRef, useState } from "react";
import { HeartIcon } from "@heroicons/react/24/solid";

function useDragging(ref) {
  const [isDragging, setDragging] = useState(false);
  const [startX, setStartX] = useState(null);
  const [scrollLeft, setScrollLeft] = useState(null);

  useEffect(() => {
    const handleMouseDown = (event) => {
      if (!ref.current.contains(event.target)) return;

      setDragging(true);
      setStartX(event.pageX);
      setScrollLeft(ref.current.scrollLeft);
    };

    const handleMouseMove = (event) => {
      if (!isDragging) return;
      event.preventDefault();
      const walk = (event.pageX - startX) * 3;
      ref.current.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => {
      setDragging(false);
    };

    const handleTouchStart = (event) => {
      if (!ref.current.contains(event.target)) return;

      setDragging(true);
      setStartX(event.touches[0].pageX);
      setScrollLeft(ref.current.scrollLeft);
    };

    const handleTouchMove = (event) => {
      if (!isDragging) return;
      event.preventDefault();
      const walk = (event.touches[0].pageX - startX) * 3;
      ref.current.scrollLeft = scrollLeft - walk;
    };

    const handleTouchEnd = () => {
      setDragging(false);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("touchmove", handleTouchMove, { passive: false });
    document.addEventListener("touchend", handleTouchEnd);
    ref.current.addEventListener("mousedown", handleMouseDown);
    ref.current.addEventListener("touchstart", handleTouchStart);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
      ref.current.removeEventListener("mousedown", handleMouseDown);
      ref.current.removeEventListener("touchstart", handleTouchStart);
    };
  }, [isDragging, startX, scrollLeft, ref]);

  return { isDragging };
}

const FavouriteAssets = () => {
  const containerRef = useRef(null);
  const { isDragging } = useDragging(containerRef);
  return (
    <div
      ref={containerRef}
      className={`w-full gap-5 rounded-2xl p-3 lg:p-5 overflow-x-hidden flex flex-col lg:flex-row items-start lg:items-end justify-start bg-mirage grabbing-area ${
        isDragging ? "grabbing" : "grab"
      }`}
      onTouchStart={(e) => e.preventDefault()}
    >
      <div className="sticky top-0 left-0 lg:relative lg:min-w-[280px] flex flex-col items-start justify-end gap-1 mdl:gap-3 lg:gap-5">
        <h2 className="text-white font-medium text-[20px] mdl:text-[25px] ">
          Favourite assets
        </h2>
        <p className="text-[13px] mdl:text-[14px] text-left text-dustyGrey">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.
        </p>
      </div>
      <div className="flex items-center justify-start gap-2 mdl:gap-3 lg:gap-5 ">
        {[0, 1, 2, 3, 4, 5, 6].map((item, index) => (
          <div
            key={index}
            className="min-w-[280px] bg-onyx rounded-xl mdl:rounded-2xl p-4 gap-16 flex flex-col items-center justify-between"
          >
            {/* Row 1 => Asset name + time + Wishlist Icon  */}
            <div className="w-full flex justify-between items-center gap-5">
              <div className="flex flex-col items-start justify-center gap-[2px] ">
                <div className="text-white font-medium text-[14px] mdl:text-[15px]">
                  Asset name
                </div>
                <div className="text-xs text-dustyGrey font-medium">
                  18 MINUTES AGO
                </div>
              </div>
              <HeartIcon className="w-[22px] h-[22px] text-white cursor-pointer" />
            </div>
            {/* Row 2  */}
            <div className="w-full flex justify-between items-center gap-10">
              <div className="flex flex-col items-start justify-center gap-[2px] ">
                <div className="text-white font-medium text-sm mdl:text-[15px]">
                  Tesco
                </div>
                <div className="text-xs text-dustyGrey font-medium">
                  Lorem ipsum Dolar
                </div>
              </div>
              <div className="text-white font-medium text-2xl mdl:text-[30px] ">
                55M
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavouriteAssets;
