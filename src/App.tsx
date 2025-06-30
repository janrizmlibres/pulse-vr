import { useRef, useEffect, useState } from "react";

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
  const [shouldSticky, setShouldSticky] = useState(false);
  const sectionHero = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      function (entries) {
        const ent = entries[0];

        if (!ent.isIntersecting) {
          setShouldSticky(true);
        } else {
          setShouldSticky(false);
        }
      },
      {
        // In the viewport
        root: null,
        // When 0% of the target is visible
        threshold: 0,
        // 80px from the top of the viewport
        // This is the height of the header
        rootMargin: "-80px",
      }
    );
    observer.observe(sectionHero.current!);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header shouldSticky={shouldSticky} />
      <main className="overflow-x-hidden">
        <Hero ref={sectionHero} isNavSticky={shouldSticky} />
        <Essentials />
        <Rentals />
        <How />
        {/* <Spotlight /> */}
        {/* <Why /> */}
        {/* <Pricing /> */}
        {/* <Testimonials /> */}
        {/* <FAQ /> */}
      </main>
      {/* <Footer /> */}
    </>
  );
}

export default App;
