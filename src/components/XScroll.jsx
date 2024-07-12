const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

function XScroll() {
  return (
    <div className="flex overflow-x-scroll">
      {data.map((el, i) => (
        <div className="h-32 bg-purple-600 text-white" key={i}>
          <p className="min-w-32">{el}</p>
        </div>
      ))}
    </div>
  );
}

export default XScroll;
