import Essentials from "./components/Essentials";
import Header from "./components/Header";
import Hero from "./components/Hero";
import How from "./components/How";
import Rentals from "./components/Rentals";
import Spotlight from "./components/Spotlight";

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
      </main>
    </>
  );
}

export default App;
