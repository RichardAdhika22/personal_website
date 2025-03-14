import { BrowserRouter } from "react-router-dom";
import {About, Contact, Experience, Feedbacks, 
  Hero, Navbar, Tech, Projects, StarsCanvas} from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-black">
        <div className="bg-[url('./assets/bg_overview.jpg')] bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <div>
          <About />
          <StarsCanvas/>
        </div>
        <Experience />
        {/* <Tech /> */}
        <Projects />
        {/* <Feedbacks /> */}
        
      </div>
    </BrowserRouter>
  );
}

export default App;