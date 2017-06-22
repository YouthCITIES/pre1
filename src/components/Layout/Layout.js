/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {Grid, Col, Row} from 'react-styled-flexboxgrid';

// external-global styles must be imported in your JS.
import normalizeCss from 'normalize.css';
import s from './Layout.css';
import Header from '../Header';
import Feedback from '../Feedback';
import Footer from '../Footer';
import Sidebar from '../Sidebar/Sidebar'


class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    return (
      <MuiThemeProvider>
        <Row >
          <Col md={3}>
            <Sidebar />
          </Col>
          <Col md>
            <Header />
            {this.props.children}
            <Feedback />
            <Footer />
          </Col>
        </Row>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(normalizeCss, s)(Layout);
