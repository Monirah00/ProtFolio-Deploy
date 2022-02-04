import React from 'react';
import Hocs from '../Hoc/Hocs';
import About from './About';
import Features from './Features';
import Header from './Header';
import Services from './Services';
import Contact from './Contact';

const Home = () => {

  return (

    <div>
        <Header />
        <About />
        <Services />
        <Features />
        <Contact />
    </div>
  );
};

export default Hocs(Home);

