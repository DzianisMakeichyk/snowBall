import React from 'react';
import Head from 'next/head';
import Router from 'next/router';

import { Header } from 'components';
import GraphData from './graph-data';

Router.onRouteChangeComplete = () => {
  if (window.dataLayer) {
    window.dataLayer.push({
      event: 'pageview'
    });
  }
};

class Layout extends React.Component {
  render() {
    const {
      children,
      tenant,
      title,
      description,
      loading,
    } = this.props;

    let displayTitle = tenant ? tenant.company_name : '';
    if (title) {
      displayTitle = `${title} - ${displayTitle}`;
    } else if (loading) {
      displayTitle = 'Loading';
    } else {
      displayTitle = 'Error';
    }

    return (
      <>
        <Head>
          <title key="title">{displayTitle}</title>
          {description && (
            <meta key="description" name="description" content={description} />
          )}
        </Head>
        <Header />
        <main>
          {loading ? <div>{children || 'Loading...'}</div> : children}
        </main>
      </>
    );
  }
}

export default GraphData(Layout);
