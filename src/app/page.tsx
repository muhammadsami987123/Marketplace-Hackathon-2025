import HeroSection from "./HeroSection";
import BrowseTheRange from "./BrowseTheRange";
import ProductSection from "./ProductSection";
import ImageGrid from "./mageGrid"; // Import the Magegrid component
import Slider from "./slider";
import Chat from "./Chat";

export default function Home() {
  return (
    <div className="bg-[#f5f0e8]">
      <HeroSection />
      <Chat />
      <BrowseTheRange />
      <ProductSection/>
      <Slider/>
      <ImageGrid/> 
      
    </div>
  )
}