import React from 'react';
import { Link } from 'react-router-dom';
import { LandingPageCont, MainContent, MainContentCont } from './style';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function LandingPage() {
  return (
    <LandingPageCont>
      <Header />
      <MainContentCont>
        <MainContent>
          <div className="call-to-action">
            Make your investments today!
            <br />
            Ed|xCHANGE is a revolutionary  platform empowering teachers to support themselves & their deserving students!
          </div>
        </MainContent>
      </MainContentCont>
      <Footer />
    </LandingPageCont>
  );
}
export default LandingPage;