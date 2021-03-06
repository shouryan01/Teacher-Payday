import React from 'react';
import { Link } from 'react-router-dom';
import { LandingPageCont, MainContent, MainContentCont } from './Landing/style'
import Header from './Header/Header';
import Footer from './Footer/Footer';


function LandingPage() {
  return (
    <LandingPageCont>
      <Header />
      <MainContentCont>
        <MainContent>
          <div className="call-to-action">
            Make your investments today!
          </div>
          <Link to="/signup" className="get-started">
            <button>Get Started</button>
          </Link>
        </MainContent>
      </MainContentCont>
      <Footer />
    </LandingPageCont>
  );
}
export default LandingPage;