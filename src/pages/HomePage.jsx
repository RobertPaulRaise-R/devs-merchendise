import ImgCarousel from "../components/ImgCarousel";
import MayBeIntrested from "../components/MayBeIntrested";
import Product from "../components/Product";

function HomePage() {
  return (
    <div>
      <div className="h-72 w-full">
        <ImgCarousel />
        <div className="mt-10 flex justify-center">
          <Product />
        </div>
        <MayBeIntrested />
      </div>
    </div>
  );
}

export default HomePage;
