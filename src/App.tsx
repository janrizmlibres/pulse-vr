import Essentials from "./components/Essentials";
import Header from "./components/Header";
import Hero from "./components/Hero";
import How from "./components/How";
import Rentals from "./components/Rentals";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Essentials />
        <Rentals />
        <How />
      </main>
    </>
  );
}

export default App;
