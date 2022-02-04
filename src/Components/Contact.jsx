import React from 'react';

const Contact = () => {
    return <div>
        <section className='contact'>
            <div className="container">
                <div className="col-sm-12">
                    <h5 className='text-center'>Contact us</h5>
                    <hr />
                </div>
                <div className="row">
                    <div className="col-lg-6 col-sm-12">
                    <div className="contact-info">
              <h4>Contact Info</h4>
              <span className="d-flex text-align-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Placeat, debitis?
              </span>
              <span className="d-flex text-align-center">
              <strong>Phone Num : 01756808137</strong>
              </span>
              <span className="d-flex text-align-center">
                <strong>Email : nerob0000@gmail.com</strong>
              </span>
            </div>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <form class="row g-3">
                            <div class="col-md-6">
                                <label for="inputEmail4" class="form-label">Email</label>
                                <input type="email" class="form-control" id="inputEmail4" />
                            </div>
                            <div class="col-md-6">
                                <label for="inputPassword4" class="form-label">Password</label>
                                <input type="password" class="form-control" id="inputPassword4" />
                            </div>
                            <div class="col-12">
                                <label for="inputAddress" class="form-label">Address</label>
                                <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
                            </div>
                            <div class="col-12">
                                <label for="inputAddress2" class="form-label">Address 2</label>
                                <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                            </div>
                            <div class="col-md-6">
                                <label for="inputCity" class="form-label">City</label>
                                <input type="text" class="form-control" id="inputCity" />
                            </div>
                            <div class="col-md-4">
                                <label for="inputState" class="form-label">State</label>
                                <select id="inputState" class="form-select">
                                    <option selected>Choose...</option>
                                    <option>...</option>
                                </select>
                            </div>
                            <div class="col-md-2">
                                <label for="inputZip" class="form-label">Zip</label>
                                <input type="text" class="form-control" id="inputZip" />
                            </div>
                            <div class="col-12">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="gridCheck" />
                                    <label class="form-check-label" for="gridCheck">
                                        Check me out
                                    </label>
                                </div>
                            </div>
                            <div class="col-12">
                                <button type="submit" class="btn btn-primary">Sign in</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>

    </div>;
};

export default Contact;
