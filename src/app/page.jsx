import VideoSection from "./nichiha/VideoSection";
import HeroSection from "./nichiha/HeroSection";
import UspSection from "./nichiha/UspSection";
import ProductSection from "./nichiha/ProductSection";
import NewsSection from "./nichiha/NewsSection";
import DistributionSection from "./nichiha/DistributionSection";

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
