import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const data = [
  {
    img: "https://wisetrolley.com/wp-content/uploads/2021/08/Javascript-JS-T-shirt-Black-3.jpg",
    title: "Title 1",
    description: "Description 1",
    price: "₹123",
  },
  {
    img: "https://wisetrolley.com/wp-content/uploads/2021/08/Javascript-JS-T-shirt-Black-3.jpg",
    title: "Title 2",
    description: "Description 2",
    price: "₹220",
  },
  {
    img: "https://wisetrolley.com/wp-content/uploads/2021/08/Javascript-JS-T-shirt-Black-3.jpg",
    title: "Title 3",
    description: "Description 3",
    price: "₹330",
  },
  {
    img: "https://wisetrolley.com/wp-content/uploads/2021/08/Javascript-JS-T-shirt-Black-3.jpg",
    title: "Title 4",
    description: "Description 4",
    price: "₹440",
  },
  {
    img: "https://wisetrolley.com/wp-content/uploads/2021/08/Javascript-JS-T-shirt-Black-3.jpg",
    title: "Title 5",
    description: "Description 5",
    price: "₹440",
  },
  {
    img: "https://wisetrolley.com/wp-content/uploads/2021/08/Javascript-JS-T-shirt-Black-3.jpg",
    title: "Title 5",
    description: "Description 5",
    price: "₹440",
  },
  {
    img: "https://wisetrolley.com/wp-content/uploads/2021/08/Javascript-JS-T-shirt-Black-3.jpg",
    title: "Title 4",
    description: "Description 4",
    price: "₹440",
  },
  {
    img: "https://wisetrolley.com/wp-content/uploads/2021/08/Javascript-JS-T-shirt-Black-3.jpg",
    title: "Title 4",
    description: "Description 4",
    price: "₹440",
  },
  {
    img: "https://wisetrolley.com/wp-content/uploads/2021/08/Javascript-JS-T-shirt-Black-3.jpg",
    title: "Title 4",
    description: "Description 4",
    price: "₹440",
  },
];

function Product() {
  const [position, setPosition] = useState(0);

  function handleLeft() {
    setPosition((pos) => pos - 100);
  }

  return (
    <div className="relative flex gap-5 overflow-x-auto transition-all duration-500 lg:justify-center lg:overflow-x-hidden">
      {data.map((pdt) => (
        <div
          className={`flex min-w-80 translate-x-[${position}rem] flex-col items-center gap-1 border border-black`}
          key={pdt.title}
        >
          <img
            src="https://wisetrolley.com/wp-content/uploads/2021/08/Javascript-JS-T-shirt-Black-3.jpg"
            alt=""
            className="h-72"
          />
          <h3 className="font-medium">Title</h3>
          <p>Description</p>
          <p>
            Price <span className="line-through">Price</span>
          </p>
          <button className="w-full bg-black py-2 font-bold text-white">
            Add to cart
          </button>
        </div>
      ))}

      <button
        className="absolute left-1 top-2/4 hidden rounded-full bg-stone-700 p-2 lg:block"
        onClick={handleLeft}
      >
        <FaChevronLeft />
      </button>

      <button className="absolute right-1 top-2/4 hidden rounded-full bg-stone-700 p-2 lg:block">
        <FaChevronRight />
      </button>
    </div>
  );
}

export default Product;
