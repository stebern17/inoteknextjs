import VideoSection from "./mainpages/VideoSection";
import HeroSection from "./mainpages/HeroSection";
import UspSection from "./mainpages/UspSection";
import ProductSection from "./mainpages/ProductSection";
import NewsSection from "./mainpages/NewsSection";
import DistributionSection from "./mainpages/DistributionSection";

export default function Home() {
  return (
    <>
      <VideoSection />
      <HeroSection />
      <UspSection />
      <div>
        <ProductSection />
        <NewsSection />
      </div>
      <DistributionSection />
    </>
  );
}
