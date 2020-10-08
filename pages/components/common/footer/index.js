import React from 'react';
import FacebookIcon from '../facebookIcon';
import InstagramIcon from '../instagramIcon';
import footerStyles from './footer.css';

const visa = '/static/imgs/footer/visa.png';
const mastercard = '/static/imgs/footer/master.png';
const world = '/static/imgs/footer/mir.png';
const paykeeper = '/static/imgs/footer/paykeeper.png';

const Footer = () => (
  <footer className={footerStyles.footer}>
    <div className={footerStyles.wrapper}>
      <div className={footerStyles.content}>
        <div className={footerStyles.left}>
          <div className={footerStyles.logo}>
            <span className={footerStyles.crystal}> © 2019. ИП Кочеткова Кристина Сергеевна</span>
            <div className={footerStyles.itemWrapper}>
              <div className={footerStyles.item}>
                <FacebookIcon width="9" height="17" />
              </div>
              <div className={footerStyles.item}>
                <InstagramIcon width="18" height="19" />
              </div>
            </div>
          </div>
          <div className={footerStyles.payments}>
            <p>Способы оплаты</p>
            <ul>
              <li>
                <img src={visa} alt="Visa" />
              </li>
              <li>
                <img src={mastercard} alt="MasterCard" />
              </li>
              <li>
                <img src={world} alt="Мир" />
              </li>
              <li>
                <img src={paykeeper} alt="PayKeeper" />
              </li>
            </ul>
          </div>
        </div>
        <div className={footerStyles.right}>
          <div className={footerStyles.downloads}>
            <a target="_blank" rel="noopener noreferrer" href={`${process.env.APP_URL}/about`}>Информация о компании</a>
            <a href="/static/pdf/privacy.pdf" download>Политика конфиденциальности</a>
            <a href="/static/pdf/return-policy.pdf" download>Политика возвратов</a>
            <a href="/static/pdf/terms-of-use.pdf" download>Условия предоставления сервиса</a>
            <a target="_blank" rel="noopener noreferrer" href={`${process.env.APP_URL}/about/cookie`}>Политика использования файлов «cookie»</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
