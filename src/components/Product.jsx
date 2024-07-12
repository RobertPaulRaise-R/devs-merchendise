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
];

function Product() {
  return (
    <div className="relative flex gap-5 overflow-x-auto">
      {data.map((pdt) => (
        <div
          className="flex min-w-80 flex-col items-center gap-1 border border-black"
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
    </div>
  );
}

export default Product;
