import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HomeHero from "@/components/Home/HomeHero";

export default function Home() {
  return (
    <div>
      <div className="bg-[linear-gradient(90deg,rgba(69,223,177,0.259)_0%,rgba(239,71,110,0.042)_50%)]">
        <Header />
        <HomeHero />
      </div>
      <Footer />
    </div>
  );
}
