import React from 'react';
import featuresStyles from './features.css';
import indexStyles from '../../../index.css';

const Features = () => (
  <section>
    <div className={featuresStyles.wrapper}>
      <div className={indexStyles.paddingWrapper}>
        <h2 className={featuresStyles.title}>
          Почему
          {' '}
          <span className={indexStyles.blue}>CRYSTAL</span>
        </h2>
        <div className={featuresStyles.itemList}>
          <div className={featuresStyles.item}>
            <p className={featuresStyles.text}>
              База профессиональных
              <br />
              тренеров
            </p>
            <div className={featuresStyles.phone}>
              <img
                className={featuresStyles.phoneScreen}
                src="/static/imgs/features/trainers.png"
                alt="trainers"
              />
            </div>
          </div>
          <div className={featuresStyles.item}>
            <p className={featuresStyles.text}>Удобная для пользования тренировочная платформа</p>
            <div className={featuresStyles.phone}>
              <img
                className={featuresStyles.phoneScreen}
                src="/static/imgs/features/filters.png"
                alt="trainers"
              />
            </div>
          </div>
          <div className={featuresStyles.item}>
            <p className={featuresStyles.text}>Интеграция со спортивными гаджетами</p>
            <div className={featuresStyles.phone}>
              <img
                className={featuresStyles.phoneScreen}
                src="/static/imgs/features/interactivity.png"
                alt="trainers"
              />
            </div>
          </div>
          <div className={featuresStyles.item}>
            <p className={featuresStyles.text}>
              Анализ статистики
              <br />
              тренировок
            </p>
            <div className={featuresStyles.phone}>
              <img
                className={featuresStyles.phoneScreen}
                src="/static/imgs/features/analysis.png"
                alt="trainers"
              />
            </div>
          </div>
          <div className={featuresStyles.item}>
            <p className={featuresStyles.text}>
              Задания от лучших тренеров
              <br />
              в любой точке мира
            </p>
            <div className={featuresStyles.phone}>
              <img
                className={featuresStyles.phoneScreen}
                src="/static/imgs/features/trainings.png"
                alt="trainers"
              />
            </div>
          </div>
          <div className={featuresStyles.item}>
            <p className={featuresStyles.text}>
              Встроенный
              <br />
              чат с тренером
            </p>
            <div className={featuresStyles.phone}>
              <img
                className={featuresStyles.phoneScreen}
                src="/static/imgs/features/chat.png"
                alt="trainers"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Features;
