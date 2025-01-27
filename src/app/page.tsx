import HeroSection from "./HeroSection";
import BrowseTheRange from "./BrowseTheRange";
import ProductSection from "./ProductSection";
import ImageGrid from "./mageGrid"; // Import the Magegrid component
import Slider from "./slider";

export default function Home() {
  return (
    <div className="bg-[#f5f0e8]">
      <HeroSection />
      <BrowseTheRange />
      <ProductSection/>
      <Slider/>
      <ImageGrid/> 
      
    </div>
  )
}