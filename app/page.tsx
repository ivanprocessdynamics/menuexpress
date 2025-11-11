import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import StyleSelector from '@/components/StyleSelector';
import VisualShowcase from '@/components/VisualShowcase';
import Comparison from '@/components/Comparison';
import Guarantee from '@/components/Guarantee';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <HowItWorks />
      <StyleSelector />
      <VisualShowcase />
      <Comparison />
      <Guarantee />
      <Pricing />
      <FAQ />
      <ContactForm />
      <Footer />
    </main>
  );
}
