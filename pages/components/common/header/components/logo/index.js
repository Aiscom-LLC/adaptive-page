import React from 'react';
import Media from 'react-media';
import LogoImage from './components/logoImage';
import LogoText from './components/logoText';
import logoStyles from './logo.css';

const Logo = ({ imageColor, textColor }) => (
  <a href="/" className={logoStyles.logoWrapper}>
    <Media
      queries={{
        small: 'screen and (max-width: 456px)',
      }}
    >
      {matches => (
        matches.small ? (
          <>
            <LogoImage className={logoStyles.image} fill={imageColor} width={37} />
            <LogoText className={logoStyles.text} fill={textColor} width={86} />
          </>
        ) : (
          <>
            <LogoImage className={logoStyles.image} fill={imageColor} />
            <LogoText className={logoStyles.text} fill={textColor} />
          </>
        )
      )}
    </Media>
  </a>
);

export default Logo;
