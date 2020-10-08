import React from 'react';
import Close from '../../../close';
import menuStyles from './menu.css';

const Menu = ({ onClose }) => (
  <div className={menuStyles.menuContent}>
    <Close onClick={onClose} className={menuStyles.close} />
    <a className={`${menuStyles.whiteLink} ${menuStyles.tablet}`} href={`${process.env.APP_URL}/login`}>Войти</a>
    <a className={menuStyles.whiteLink} href="/">Главная</a>
    <a className={menuStyles.whiteLink} href="/cooperation">Я – тренер</a>
    <a className={menuStyles.whiteLink} href={`${process.env.APP_URL}/trainers`}>Найти тренера</a>
    <a className={menuStyles.whiteLink} href="/blog">Блог</a>
    <a className={menuStyles.whiteLink} onClick={onClose} href="#feedback">Обратная связь</a>
  </div>
);

export default Menu;
