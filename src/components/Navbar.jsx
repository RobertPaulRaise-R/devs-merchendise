import { Link } from "react-router-dom";
import { useState } from "react";

import SearchModal from "./SearchModal";
import { IoMdSearch } from "react-icons/io";
import { BsCart4 } from "react-icons/bs";
import { GiCardboardBox } from "react-icons/gi";

function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isLoggedIn = true;

  function handleModal() {
    setIsModalOpen((modal) => !modal);
  }

  function handleSearch(e) {
    e.preventDefault();
    // Search feature implementation goes here
  }

  return (
    <nav className="flex items-center justify-between bg-stone-200 p-4 text-lg">
      <Link to="/">RaiseMerch</Link>

      <form
        onSubmit={(e) => handleSearch(e)}
        className="hidden items-center gap-3 rounded-full bg-white px-3 py-1 shadow-md md:flex"
      >
        <input
          type="text"
          placeholder="Search developers..."
          className="rounded-sm px-2 py-1 outline-none placeholder:text-stone-400 lg:w-96"
        />
        <Link to="result">
          <IoMdSearch size={26} color="#adadad" />
        </Link>
      </form>

      <ul className="flex items-center gap-3">
        <button
          onClick={handleModal}
          className="p-1.5 hover:bg-stone-300 md:hidden"
        >
          <IoMdSearch size={26} />
        </button>

        <Link to="orders" className="p-1.5 hover:bg-stone-300">
          <GiCardboardBox size={26} />
        </Link>

        <Link to="cart" className="p-1.5 hover:bg-stone-300">
          <BsCart4 size={26} />
        </Link>

        {isLoggedIn ? (
          <Link
            to="account"
            className="profile h-10 w-10 rounded-full bg-stone-50 text-stone-500"
          ></Link>
        ) : (
          <Link
            to="/login"
            className="rounded-sm bg-stone-800 px-3 py-1 text-base text-white hover:bg-stone-900"
          >
            Login
          </Link>
        )}
      </ul>
      {!isModalOpen ? null : <SearchModal callback={handleModal} />}
    </nav>
  );
}

export default Navbar;
