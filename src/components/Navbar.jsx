import { Link } from "react-router-dom";
import { useState } from "react";

import SearchModal from "./SearchModal";
import { IoMdSearch } from "react-icons/io";
import { BsCart4 } from "react-icons/bs";

function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleModal() {
    setIsModalOpen((modal) => !modal);
  }

  return (
    <nav className="flex items-center justify-between bg-stone-200 p-4 text-lg">
      <Link to="/">RaiseMerch</Link>
      <ul className="flex items-center gap-5">
        <button
          onClick={handleModal}
          className="p-1.5 hover:bg-stone-200 md:hidden"
        >
          <IoMdSearch size={22} />
        </button>

        <form className="hidden items-center gap-3 rounded-full bg-white px-3 py-1 shadow-md md:flex">
          <input
            type="text"
            placeholder="Search..."
            className="rounded-sm px-2 py-1 outline-none placeholder:text-stone-400"
          />
          <Link to="result">
            <IoMdSearch size={22} />
          </Link>
        </form>

        <Link to="cart" className="p-1.5 hover:bg-stone-200">
          <BsCart4 size={22} />
        </Link>

        <Link
          to="/login"
          className="rounded-sm bg-stone-800 px-3 py-1 text-white hover:bg-stone-900"
        >
          Login
        </Link>
      </ul>
      {!isModalOpen ? null : <SearchModal callback={handleModal} />}
    </nav>
  );
}

export default Navbar;
