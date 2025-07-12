import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import { Helmet } from "react-helmet";

const App = () => {
  return (<>
   <Helmet>
        <title>Asilbekh.uz - 3d Portfolio</title>
        <meta name="description" content="Welcome to the 3d Porfolio of Asilbek Haydarov!" />
        <meta name="keywords" content="asilbekh uz, asilbek, haydarov, asilbek.uz, asilbekuz" />
        <meta property="og:title" content="Asilbekh.uz" />
      </Helmet>
  
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  </>
  );
}

export default App;
