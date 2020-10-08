import React from 'react';

import Header from './components/common/header';
import Main from './components/swimmer-landing/main';
import Features from './components/swimmer-landing/features';
import Instruction from './components/swimmer-landing/instruction';
import indexStyles from './index.css';
import Feedback from './components/swimmer-landing/feedback';
import Footer from './components/common/footer';
import Subscription from './components/swimmer-landing/subscription';

const Home = props => (
  <div className={indexStyles.body}>
    <div className={indexStyles.wideWrapper}>
      <Header />
      <Main />
      <Features />
      <Instruction />
      <Subscription />
      <Feedback />
      <Footer />
    </div>
  </div>
);

export default Home;
