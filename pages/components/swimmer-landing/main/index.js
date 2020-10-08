import React from 'react';
import mainStyles from './main.css';
import indexStyles from '../../../index.css';
import Button from '../../common/button';

const apple = '/static/imgs/appstore.png';
const google = '/static/imgs/googleplay.png';
const strava = '/static/imgs/strava.png';

const Main = () => (
  <section>
    <div className={mainStyles.backgroundWrapper}>
      <div className={indexStyles.paddingWrapper}>
        <h1 className={mainStyles.title}>
          для тренеров и пловцов
        </h1>
        <p className={mainStyles.text}>
          Онлайн платформа для тренировок по плаванию в бассейне, открытой воде и холодовому плаванию от профессиональных  тренеров и спортсменов.
          <br />
          в бассейне, открытой воде и холодовом плавании.
        </p>
        <div className={mainStyles.imageWrapper}>
          <div className={mainStyles.image} />
        </div>
      </div>
    </div>
    <img
      className={mainStyles.tabletImage}
      src="/static/imgs/main/tablet-example.png"
      alt="тренеры кристал"
    />
    <a className={mainStyles.tabletLink} href="https://strava.com">
      <img src="/static/imgs/main/strava.png" alt="strava" />
    </a>
    <div className={mainStyles.mainFooter}>
      <div className={indexStyles.paddingWrapper}>
        <p className={mainStyles.tabletText}>
          Онлайн платформа для тренировок по плаванию в бассейне, открытой воде и холодовому плаванию от профессиональных  тренеров и спортсменов.
        </p>
        <a className={`${mainStyles.link} ${mainStyles.tabletAuth}`} href="/registration">
          <Button className={mainStyles.button} type="button">
            Connect with
            {' '}
            <img src={strava} alt="" />
          </Button>
        </a>
        <div className={mainStyles.stores}>
          <a href="https://www.apple.com/ios/app-store">
            <img src={apple} alt="apple" />
          </a>
          <a href="http://play.google.com/store/apps">
            <img src={google} alt="google" />
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Main;
