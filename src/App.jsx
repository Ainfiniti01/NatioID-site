import { BrowserRouter } from "react-router-dom";

import { About, Contact, Hero, Navbar, Tech, StarsCanvas, ProblemStatement, SolutionSummary, LiveDemo, Screenshots, FeatureHighlights, CallToAction, ContactWidgets, Motivation, Collaborations, VisionQuote } from "./components";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <ContactWidgets />
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <ProblemStatement />
        <SolutionSummary />
        <LiveDemo />
        <Screenshots />
        <FeatureHighlights />
        <Motivation />
        <Collaborations />
        <VisionQuote />
        <About />
        <Tech />
        <div className='relative z-0'>
          <CallToAction />
          <Contact />

          <StarsCanvas />
          <Footer/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
