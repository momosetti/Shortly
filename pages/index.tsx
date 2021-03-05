import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";
import Hero from "../components/elements/Hero";
import Shorten from "../components/elements/Shorten";
import Stat from "../components/elements/Stat";
import BoostSection from "../components/elements/BoostSection";
export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Shorten />
      <Stat />
      <BoostSection />
      <Footer />
    </div>
  );
}
