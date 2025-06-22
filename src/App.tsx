import Essentials from "./components/Essentials";
import Header from "./components/Header";
import Hero from "./components/Hero";
import How from "./components/How";
import Pricing from "./components/Pricing";
import Rentals from "./components/Rentals";
import Spotlight from "./components/Spotlight";
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
      </main>
    </>
  );
}

export default App;
