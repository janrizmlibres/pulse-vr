import Essentials from "./components/Essentials";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import How from "./components/How";
import Pricing from "./components/Pricing";
import Rentals from "./components/Rentals";
import Spotlight from "./components/Spotlight";
import Testimonials from "./components/Testimonials";
import Why from "./components/Why";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Essentials />
        <Rentals />
        <How />
        <Spotlight />
        <Why />
        <Pricing />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}

export default App;
