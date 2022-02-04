import React,{useEffect} from 'react';

import Aos from 'aos'
import 'aos/dist/aos.css'

const Features = () => {

    useEffect(() => {
        Aos.init()
       },)
    return <div>
        <section className='Features'>
            <div className="container">
                <div className="col-sm-12 Head-section">  
                    <h5 className='text-center'>MY FEATURED SERVICE</h5>
                    <hr />
                </div>

                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-12" data-aos='fade-up'>
                        <div className="Box-1">
                            <h5>PHP Languages</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit numquam et, nam accusamus amet ipsa laudantium similique enim eligendi corporis?</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12" data-aos='fade-down'>
                        <div className="Box-2">
                            <h5>Laravel</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit numquam et, nam accusamus amet ipsa laudantium similique enim eligendi corporis?</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12"data-aos='fade-left'>
                        <div className="Box-3">
                            <h5>SEO Service</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit numquam et, nam accusamus amet ipsa laudantium similique enim eligendi corporis?</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12" data-aos='fade-right'>
                        <div className="Box-4">
                            <h5>Website Optimization</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit numquam et, nam accusamus amet ipsa laudantium similique enim eligendi corporis?</p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    </div>;
};

export default Features;
