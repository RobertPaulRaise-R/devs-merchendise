import ImgCarousel from "../components/ImgCarousel";
import Product from "../components/Product";

function HomePage() {
  return (
    <div>
      <div className="h-72 w-full">
        <ImgCarousel />
        <div className="mt-10 flex gap-10">
          <Product />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
