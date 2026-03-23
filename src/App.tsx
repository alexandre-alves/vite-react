import { Navigation } from '@/sections/Navigation';
import { Hero } from '@/sections/Hero';
import { Pricing } from '@/sections/Pricing';
import { RealityCheck } from '@/sections/RealityCheck';
import { Method } from '@/sections/Method';
import { Services } from '@/sections/Services';
import { DigitalPresence } from '@/sections/DigitalPresence';
import { Results } from '@/sections/Results';
import { TargetAudience } from '@/sections/TargetAudience';
import { FinalCTA } from '@/sections/FinalCTA';
import { FAQ } from '@/sections/FAQ';
import { Footer } from '@/sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Navigation />
      <main>
        <Hero />
        <Pricing />
        <RealityCheck />
        <Method />
        <Services />
        <DigitalPresence />
        <Results />
        <TargetAudience />
        <FinalCTA />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;
