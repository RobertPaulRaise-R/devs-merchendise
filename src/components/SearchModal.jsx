import { Link } from "react-router-dom";

function SearchModal({ callback }) {
  return (
    <div
      className="absolute z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="fixed inset-0 bg-gray-500 bg-opacity-50 backdrop-blur-sm transition-opacity"
        aria-hidden="true"
        onClick={callback}
      ></div>

      <div className="fixed z-10 w-screen">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="bg-white px-4 pb-4 pt-2 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 flex items-center gap-3 sm:ml-4 sm:mt-0 sm:text-left">
                  <input
                    type="text"
                    placeholder="Search developers..."
                    className="border border-black px-3 py-2 outline-none"
                  />
                  <Link
                    to="result"
                    className="bg-stone-800 px-3 py-2 text-white hover:bg-stone-900"
                  >
                    Search
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchModal;
