import React from 'react';
import subscriptionStyles from './subscription.css';
import indexStyles from '../../../index.css';
import Divider from '../../common/dividerIcon';
import SubscriptionCard from './subscription-card';

const Subscription = () => (
  <section className={subscriptionStyles.subscription}>
    <div className={subscriptionStyles.title}>
      <Divider className={subscriptionStyles.divider} />
      <span className={subscriptionStyles.titleText}>
          Попробуйте сейчас –
        {' '}
        <span>первые 3 месяца</span>
        {' '}
        <span>бесплатно</span>
      </span>
      <Divider className={subscriptionStyles.divider} reverse />
    </div>
    <div className={`${indexStyles.paddingWrapper} ${subscriptionStyles.cards}`}>
      <SubscriptionCard
        className={subscriptionStyles.cardItem}
        title="Ежемесячно"
        price="220"
        period="месяц"
        theme="light"
        text={<span>Все функции портала по <br /> ежемесячной подписке.</span>}
      />
      <SubscriptionCard
        className={subscriptionStyles.cardItem}
        title="Годовой"
        price="2100"
        period="год"
        theme="dark"
        text={<span>Все функции портала <br /> со скидкой 20%.</span>}
      />
    </div>
  </section>
);

export default Subscription;
