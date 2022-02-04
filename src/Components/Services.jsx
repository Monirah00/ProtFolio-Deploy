import React, { useState,useEffect } from 'react';
import Data from '../Data/Sdata'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Services = () => {
  const [state] = useState({
    Header: 'MY WEB SKILL',
    Para: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendi at dignissimos perferendis? Saepe nemo eaque molestiae enim quosrepellendus, iure ea aut magni vero ut atque quod repudiandae et ullam eveniet provident culpa consequatur quia maiores! Sunt facerquis id Quisquam omnis aspernatur iure quibusdam perspiciatis    temporibus doloremque assumenda totam?'
  })

  useEffect(() => {
    Aos.init()
   },)
  return (
    <div>
      <section className='Services'>
        <div className="container">
          <div className="col-sm-12 Head-section">
            <h4>{state.Header}</h4>
            <hr />
            <p>{state.Para}</p>

            <div className="row">
              {
                Data.CardData.map((item, index) => {
                  return (
                    <div className="col-lg-4 col-sm-6" key={index} data-aos='fade-up'>
                       <div className="Card">
                         <span className='Sicons' >{item.icon}</span>
                         <h4 data-aos='fade-left'>{item.Title}</h4>
                         <p data-aos='fade-right'>{item.Desc}</p>
                       </div>
                    </div>
                  )
                })
              }

            </div>

          </div>
        </div>
      </section>

    </div>
  )
};

export default Services;
