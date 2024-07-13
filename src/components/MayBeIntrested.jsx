function MayBeIntrested() {
  return (
    <div className="mt-10">
      <h3 className="mb-5 text-center">May be intrested</h3>
      <div className="grid max-h-[600px] min-h-96 w-full grid-cols-2 grid-rows-2 md:h-[500px] lg:h-[600px]">
        <div className="col-span-1 flex items-center justify-center bg-red-900">
          Phones
        </div>
        <div className="col-span-1 flex items-center justify-center bg-blue-900">
          Laptops
        </div>
        <div className="col-span-1 flex items-center justify-center bg-cyan-900">
          Computers
        </div>
        <div className="col-span-1 flex items-center justify-center bg-purple-900">
          Headphones
        </div>
      </div>
    </div>
  );
}

export default MayBeIntrested;
