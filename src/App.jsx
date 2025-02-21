import { BrowserRouter } from "react-router-dom";
import {About, Contact, Experience, Feedbacks, 
  Hero, Navbar, Tech, Works, StarsCanvas} from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-black">
        <div className="bg-[url('./assets/herobg.png')] bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <StarsCanvas />
        <div className="relative z-0">
          {/* <Contact /> */}
          
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;