import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

class Landing extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }

  render() {
    return (
      <div className="landing">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h1 className="display-3 mb-4">BeReferenced</h1>
                <h3>Never Miss Out on a Reference Again.</h3>
                <p className="lead">
                  {' '}
                Show recruiters, you're serious about the future of your career. Join your colleagues, classmates, and friends.
                </p>
                <hr />
                  <form class="search-form">
                    <div class="form-row">
                      <div class="col-md-9">
                        <input type="email" class="form-control form-control-lg" placeholder="Search for professionals.." />
                      </div>
                      <div class="col-md-3">
                        <button type="submit" class="btn-lg btn-gold">Search</button>
                      </div>
                    </div>
                  </form>
                <div class="mainBtnBlock">
                  <Link to="/register" className="btn btn-lg btn-signup">
                  Sign Up
                </Link>
                <Link to="/login" className="btn btn-lg btn-login">
                  Login
                </Link>
                </div>
              </div>
            <div className="col-md-6 text-center">
            
            </div>

            </div>
          </div>
        </div>
        <div class="row aseen-block">
          <div class="asseen">
            <img src="/src/img/techcrunch.png" alt="" class="badge-link" />
            <img src="/src/img/new-york-times.png" alt=""  class="badge-link" />
            <img src="/src/img/tnw.png" alt="" class="badge-link" />
            <img src="/src/img/usa-today.png" alt="" class="badge-link" />
          </div>
        </div>

        <div class="container h-100">
          <div class="row h-100">
            <div class="col-lg-7 my-auto">
              <div class="header-content mx-auto">
                <h1 class="mb-5">BeReferenced is an app that will help you credibly showcase your employment references!</h1>
                <p>With over 800,000 founders and 85,000 investment professionals on our platform, we’ll connect you to the whole startup ecosystem. We understand what investors want to see from a startup, and we can help you put your best foot forward. </p>
                <a href="#download" class="btn-lg btn-gold start js-scroll-trigger">Start Now for Free!</a>
              </div>
            </div>
            <div class="col-lg-5 my-auto">
              <div class="device-container">
                <div class="device-mockup iphone6_plus portrait white">
                  <div class="device">
                    <div class="screen">
                      <img src="/src/img/showcase.png" class="img-fluid" alt="" />
                    </div>
                    <div class="button">
                  
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    <div class="default text-center steps">
      <div class="row text-center steps">
        <h2 class="mb-5">We Make It Easy To Get References</h2>
        <p>Mission-critical business tools. Powerful performance benchmarks. Trusted fundraising recommendations. Gust supports you at every point along your entrepreneurial journey so when it’s time to raise money, you have the best shot at investment. Get started on the path to fundraising success: </p>
        <div class="col-lg-4">
          <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
            <div class="features-icons-icon d-flex">
              <img src="/src/img/email.svg" height="100%" width="auto" />
            </div>
            <h3>Send An Invite</h3>
            <p class="lead mb-0">Send an invitation via email to colleagues or employers to be a reference.</p>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
            <div class="features-icons-icon d-flex">
             <img src="/src/img/folder.svg" height="100%" width="auto" />
            </div>
            <h3>Get A Reference</h3>
            <p class="lead mb-0">Written by someone familiar with your work, character, and accomplishments.</p>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="features-icons-item mx-auto mb-0 mb-lg-3">
            <div class="features-icons-icon d-flex">
              <img src="/src/img/attach.svg" height="100%" width="auto" />
            </div>
            <h3>Show Recruiters</h3>
            <p class="lead mb-0">Let recruiters know you’re open to new opportunities. And serious about your career.</p>
          </div>
        </div>
      </div>
    </div>
        <div class="container h-100">
          <div class="row h-100">
            <div class="col-lg-5 my-auto">    
              <div class="device-container">
                <div class="device-mockup iphone6_plus portrait white">
                  <div class="device">
                    <div class="screen">
                      <img src="/src/img/graph.png" class="img-fluid" alt="" />
                    </div>
                    <div class="button">
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-7 my-auto">
              <div class="header-content mx-auto">
                <h1 class="mb-5">Personalized to showcase your professional journey. </h1>
                With powerful performance benchmarks, tailored feedback, and clear next steps for your startup, you’ll learn where to focus your efforts and find the tools you need to execute right at your fingertips. 
                <a href="#download" class="s-scroll-trigger"> Start Now for Free!</a>
              </div>
            </div>
          </div>
        </div>
         <div class="container h-100">
          <div class="row h-100">
            <div class="col-lg-7 my-auto">
              <div class="header-content mx-auto">
                <h1 class="mb-5">Designed to help you succeed. </h1>
                 Our mission is to help founders win. Whether your next milestone is initially setting up your company the right way or successfully closing a Series C, we are here to help you hit it.
                <a href="#download" class="btn btn-outline btn-xl js-scroll-trigger">Start Now for Free!</a>
              </div>
            </div>
            <div class="col-lg-5 my-auto">
              <div class="device-container">
                <div class="device-mockup iphone6_plus portrait white">
                  <div class="device">
                    <div class="screen">
                      <img src="/src/img/professionals.png" class="img-fluid" alt="" />
                    </div>
                    <div class="button">
                  
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
    <div class="container default text-center">
      <h2 class="mb-5">What people are saying...</h2>
      <div class="row">
        <div class="col-lg-4">
          <div class="testimonial-item mx-auto mb-5 mb-lg-0">
        <img src="/src/img/testimonials-1.jpg" height="100%" width="auto" />
          <div class="testimonial1"></div>
            <h5>Margaret E.</h5>
            <p class="font-weight-light mb-0">"This is fantastic! Thanks so much guys!"</p>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="testimonial-item mx-auto mb-5 mb-lg-0">
            <img src="/src/img/testimonials-2.jpg" height="100%" width="auto" />
            <div class="testimonial1"></div>
            <h5>Fred S.</h5>
            <p class="font-weight-light mb-0">"Bootstrap is amazing. I've been using it to create lots of super nice landing pages."</p>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="testimonial-item mx-auto mb-5 mb-lg-0">
            <img src="/src/img/testimonials-3.jpg" height="100%" width="auto" />
         <div class="testimonial1"></div>
            <h5>Sarah W.</h5>
            <p class="font-weight-light mb-0">"Thanks so much for making these free resources available to us!"</p>
          </div>
        </div>
      </div>
    </div>
    <div class="default download text-center">
      <div class="row">
        <div class="download text-center">
          <h2 class="section-heading">Discover what all the buzz is about!</h2>
          <p>Our app is available on any mobile device! Download now to get started!</p>
          <div class="badges">
            <a class="badge-link" href="#"><img src="/src/img/google-play-badge.svg" alt="" /></a>
            <a class="badge-link" href="#"><img src="/src/img/app-store-badge.svg" alt="" /></a>
          </div>
        </div>
      </div>
    </div>
      <footer className="text-white text-center">
      Copyright &copy; {new Date().getFullYear()} BeReferenced
    </footer>
      </div>
    );
  }
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Landing);