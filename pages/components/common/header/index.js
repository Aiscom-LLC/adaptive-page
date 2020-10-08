import React, { PureComponent } from 'react';
import Link from 'next/link';
import { withRouter } from 'next/router';
import Logo from './components/logo';
import headerStyles from './header.css';
import Button from '../button';
import MenuIcon from '../menuIcon';
import Menu from './components/menu';
import SearchIcon from '../searchIcon';

class Header extends PureComponent {
  state = {
    show: false,
  };

  componentDidMount() {
    this.modalState();
  }

  componentDidUpdate() {
    this.modalState();
  }

  modalState = () => {
    const { show } = this.state;

    document.body.classList[show ? 'add' : 'remove'](headerStyles.disableScroll);
  }

  handleClick = () => this.setState(prevState => ({ show: !prevState.show }));

  render() {
    const {
      router: { pathname },
    } = this.props;
    const { show } = this.state;
    return (
      <>
        <header className={headerStyles.wrapper}>
          <div className={headerStyles.content}>
            <div className={headerStyles.headerItem}>
              <Logo />
              <a href={`${process.env.APP_URL}/trainers`} className={`${headerStyles.linkButton} ${headerStyles.headerItem}`}>
                <Button className={headerStyles.button} type="button">
                  <SearchIcon className={headerStyles.searchIcon} />
                  Найти тренера
                </Button>
              </a>
            </div>
            <div className={headerStyles.headerItem}>
              <Link href="/cooperation">
                <a
                  className={`${headerStyles.link} ${
                    pathname === '/cooperation' ? headerStyles.activeLink : ''
                  }`}
                >
                  Для тренеров
                </a>
              </Link>
              <a href={`${process.env.APP_URL}/login`} className={headerStyles.login}>
                <Button className={headerStyles.button} type="button">
                  Войти
                </Button>
              </a>
            </div>
            <MenuIcon onClick={this.handleClick} className={headerStyles.menuIcon} />
          </div>
        </header>
        {show ? <Menu onClose={this.handleClick} /> : null}
      </>
    );
  }
}

export default withRouter(Header);
