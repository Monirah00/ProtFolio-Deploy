import React from 'react';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';

const Hocs = (PagesComponets) => {
    return function withPages(){
        return (
            <div>
                <Navbar />
                <PagesComponets />
                <Footer />
            </div>
          )

    }
  
};

export default Hocs;
