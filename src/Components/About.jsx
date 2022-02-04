import React from 'react';
import AboutImg from '../Images/AboutImg.jpg'

const About = () => {
  return (
    <div>
      <section className='About'>
      <div className="container">
            <h2 className='text-center'>About Us</h2>
            <hr />
            <div className="row">
                <div className="col-lg-6 col-sm 12">
                    <div className="About-content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quia possimus voluptatibus, eos accusamus error. Officiis minima impedit repellendus, doloribus totam exercitationem molestias id eos tenetur, delectus dignissimos! Quod laudantium, sint rerum impedit unde nam voluptatem veniam minus ducimus expedita quaerat numquam sed dolores doloribus eum, mollitia atque molestiae similique officia libero! Quaerat, quisquam autem aut ratione, error reiciendis asperiores laboriosam beatae soluta exercitationem odit nobis dolor illum accusamus eaque blanditiis vero iusto et minima eligendi quo. Maxime in recusandae ad aspernatur, illum, esse id quam deleniti tempore excepturi exercitationem sed ea iste doloremque? Quisquam sint quaerat eveniet mollitia rem.</p>
                    </div>
                    
                </div>
                <div className="col-lg-6 col-sm-12">
                        <img className='AboutImg' src={AboutImg} alt="" />
                    </div>
            </div>
           
        </div>
      </section>
    </div>
  )
};

export default About;
