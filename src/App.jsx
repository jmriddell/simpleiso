import { BrowserRouter } from "react-router-dom";

import { About, Contact, Hero, Navbar, Tech } from "./components"

const App = () => {
  return (
      <BrowserRouter>
        <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>
          <About />
          <Tech />
          <div className="relative z-0">
            <Contact />
          </div>
        </div>
      </BrowserRouter>
  )
}

export default App
