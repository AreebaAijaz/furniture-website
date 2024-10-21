import ExpressDelivery from "@/components/express-delivery";
import Banner1 from "../components/banner1";
import Banner2 from "../components/banner2";
import Blog from "../components/blog-section";
import Footer from "../components/footer";
import HeroBanner from "../components/hero";
import MenuDemo from "../components/menu-demo";
import ProductCatalogue from "../components/products-catalogue";
import Review from "../components/review";

export default function HomePage() {
  return (
    <div>
      <HeroBanner />
      <MenuDemo />
      <Banner1 />
      <ProductCatalogue />
      <ExpressDelivery />
      <Banner2 />
      <Blog />
      <Review />
      <Footer />
    </div>
  );
}
