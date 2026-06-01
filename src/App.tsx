import Header from './components/Header';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import Stats from './components/Stats';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Clients from './components/Clients';
import Journal from './components/Journal';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-cream text-ink">
      <Header />
      <main>
        <Hero />
        <Marquee
          items={[
            'Brand',
            'Web',
            'Product',
            'Packaging',
            'Editorial',
            'Motion',
            'Strategy',
          ]}
          className="py-6 border-y border-ink/10"
        />
        <About />
        <Services />
        <Portfolio />
        <Process />
        <Stats />
        <Team />
        <Testimonials />
        <Clients />
        <Journal />
        <Marquee
          items={['Available Q3 2026', "Let's build something", 'Say hello', 'New York · Lisbon']}
          reverse
          className="py-6 bg-ink text-cream"
        />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
