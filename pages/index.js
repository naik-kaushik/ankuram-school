import Navbar from "@/components/Navbar";
import MyCarousel from "@/components/MyCarousel";
import MyCard from "@/components/MyCard";

export default function Home() {
  return (
    <div>
      <Navbar />
      <MyCarousel type="image" />
    </div>
  );
}
