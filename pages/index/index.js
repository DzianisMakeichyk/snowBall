import React from 'react';
import { graphql } from 'react-apollo';

import Layout from 'components/layout';
import { Products } from 'components';
import { H1, Outer, Header } from 'ui';
import graphSettings from './graph-settings';

class FrontPage extends React.Component {
  static graph = graphSettings;

  render() {
    const { router, data } = this.props;
    if (!data || data.loading) return <Layout loading />;
    return (
      <Layout router={router} title="Front page">
        <Outer>
          <Header>
            <H1>Shop me ;)</H1>
          </Header>
          {!!data.products && <Products {...data} />}
        </Outer>
      </Layout>
    );
  }
}

export default graphql(FrontPage.graph.query, FrontPage.graph)(FrontPage);
