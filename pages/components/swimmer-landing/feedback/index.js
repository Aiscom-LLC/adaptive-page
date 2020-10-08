import React from 'react';
import feedbackStyles from './feedback.css';
import indexStyles from '../../../index.css';
import FacebookIcon from '../../common/facebookIcon';
import InstagramIcon from '../../common/instagramIcon';

const Feedback = () => (
  <section id="feedback">
    <div className={feedbackStyles.wrapper}>
      <div className={indexStyles.paddingWrapper}>
        <h2 className={feedbackStyles.title}>Остались вопросы?</h2>
        <p className={feedbackStyles.text}>
          Напишите нам на почту и администратор свяжется с вами в ближайшее время.
        </p>
        <p className={feedbackStyles.email}>helpme@crystal-swim.com</p>
        <div className={feedbackStyles.mediaWrapper}>
          <a href="https://facebook.com" className={feedbackStyles.mediaItem}>
            <FacebookIcon />
          </a>
          <a href="https://instagram.com" className={feedbackStyles.mediaItem}>
            <InstagramIcon />
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Feedback;
