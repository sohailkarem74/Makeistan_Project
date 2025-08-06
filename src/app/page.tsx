import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Labs from '../components/Labs';
import About from '../components/About';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Labs />
      <About />
      <Footer />
    </main>
  );
}