import React from 'react';
import PropTypes from 'prop-types';
import Document, { Head, Main, NextScript } from 'next/document';
import flush from 'styled-jsx/server';

class MyDocument extends Document {
  render() {
    const { pageContext } = this.props;

    return (
      <html lang="ru" dir="ltr">
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
          />
          <meta
            name="theme-color"
            content={pageContext ? pageContext.theme.palette.primary.main : null}
          />
          <link rel="shortcut icon" type="image/x-icon" href="/static/svgs/favicon.ico" />
          <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700,800" rel="stylesheet" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="description" content="Crystal – это онлайн платформа для дистанционных тренировок по плаванию в бассейне, открытой воде и холодовому плаванию от профессиональных тренеров и спортсменов." />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

MyDocument.getInitialProps = (ctx) => {
  // Render app and page and get the context of the page with collected side effects.
  let pageContext;
  const page = ctx.renderPage((Component) => {
    const WrappedComponent = (props) => {
      // eslint-disable-next-line
      pageContext = props.pageContext;
      return <Component {...props} />;
    };

    WrappedComponent.propTypes = {
      // eslint-disable-next-line
      pageContext: PropTypes.object,
    };

    return WrappedComponent;
  });

  let css;
  // It might be undefined, e.g. after an error.
  if (pageContext) {
    css = pageContext.sheetsRegistry.toString();
  }

  return {
    ...page,
    pageContext,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: (
      <React.Fragment>
        <style
          id="jss-server-side"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: css }}
        />
        {flush() || null}
      </React.Fragment>
    ),
  };
};

export default MyDocument;
