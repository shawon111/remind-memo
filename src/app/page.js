import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HomeHero from "@/components/Home/HomeHero";

export default function Home() {
  return (
    <div>
      <div className="gradient-container">
        <Header />
        <HomeHero />
      </div>
      <Footer />
    </div>
  );
}
