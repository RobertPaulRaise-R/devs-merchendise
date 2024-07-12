import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const data = [
  "https://m.media-amazon.com/images/I/611HZFDXi+L._AC_UY1100_.jpg",
  "https://i.pinimg.com/474x/db/4d/5c/db4d5cbcfbe25226f53dceeefe664aaf.jpg",
  "https://wisetrolley.com/wp-content/uploads/2021/08/Javascript-JS-T-shirt-Black-3.jpg",
  "https://teeshopper.b-cdn.net/product_page_asset/images/web-developer-tshirt_meta.png",
];

function ImgCarousel() {
  const [index, setIndex] = useState(0);

  function handleDecrease() {
    if (index === 0) {
      setIndex(data.length - 1);
    } else {
      setIndex((i) => i - 1);
    }
  }

  function handleIncrease() {
    if (index === data.length - 1) {
      setIndex(0);
    } else {
      setIndex((i) => i + 1);
    }
  }

  return (
    <div className="relative flex h-full w-full items-center justify-center">
      <img
        src={data[index]}
        key={data[index]}
        alt="T-Shirt img"
        className="h-full"
      />
      <button
        onClick={handleDecrease}
        className="absolute left-1 flex h-8 w-8 items-center justify-center rounded-full bg-stone-800 text-white"
      >
        <FaChevronLeft />
      </button>
      <button
        onClick={handleIncrease}
        className="absolute right-1 flex h-8 w-8 items-center justify-center rounded-full bg-stone-800 text-white"
      >
        <FaChevronRight />
      </button>
    </div>
  );
}

export default ImgCarousel;
