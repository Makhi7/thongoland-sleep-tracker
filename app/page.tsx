import Footer from "./ui/footer";
import BenefitsSection from "./ui/splash/benefits-section";
import HeroSection from "./ui/splash/hero-section";
import SubscribeToMailSection from "./ui/splash/subscribe-to-mail-section";


export default function Home() {
  return (
    <div className="wrapper">
      {/* hero section */}
      <HeroSection />
      
      {/* benefits section */}
      <BenefitsSection />

      {/* subscribe to mail section */}
      <SubscribeToMailSection />

      {/* footer section */}
      <Footer />
    </div>
  );
}

