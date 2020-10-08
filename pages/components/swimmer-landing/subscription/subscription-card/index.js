import React from 'react';
import Button from '../../../common/button';

import subscriptionCardStyles from './subscription-card.css';

const SubscriptionCard = ({
  title, price, period, text, theme, className,
}) => (
  <div className={`${className} ${subscriptionCardStyles.container} ${subscriptionCardStyles[theme]}`}>
    <div className={subscriptionCardStyles.title}>
      {title}
    </div>
    <div className={subscriptionCardStyles.price}>
      {price}
      р
    </div>
    <div className={subscriptionCardStyles.period}>
        в
      {' '}
      {period}
    </div>
    <div className={subscriptionCardStyles.text}>
      {text}
    </div>
    <a href={`${process.env.APP_URL}/registration`} className={subscriptionCardStyles.link}>
      <Button className={subscriptionCardStyles.btn} type="button">
        Попробовать бесплатно
      </Button>
    </a>
  </div>
);

export default SubscriptionCard;
