import NavBar from './components/NavBar';
import Hero from './components/Hero';
import CaseStudies from './components/CaseStudies';
import Services from './components/Services';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Plans from './components/Plans';
import CTA from './components/CTA';
import Calendar from './components/Calendar';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-surface-dark">
      <NavBar />
      <main>
        <Hero />
        <CaseStudies />
        <Services />
        <Features />
        <Testimonials />
        <Plans />
        <CTA />
        <Calendar />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;
