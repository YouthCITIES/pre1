/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
//import { Grid, Row, Col } from 'react-flexbox-grid';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import {Grid, Col, Row} from 'react-styled-flexboxgrid';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import Layout from '../../components/Layout';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';


class Explore extends React.Component {
  static propTypes = {
    news: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      content: PropTypes.string,
    })).isRequired,
  };

  render() {
    return (
      <Layout>
        <div>
          <div>

            <Row>
              <h2> Suggested </h2>
            </Row>
            <Row>
              <DropDownMenu value={1} >
                <MenuItem value={1} primaryText="Prototypes" />
                <MenuItem value={2} primaryText="Projects" />
                <MenuItem value={3} primaryText="People" />
              </DropDownMenu>
            </Row>
            <Row>
              <Col md={5}>
                <ProjectCard preview />
                  <p />
                <ProjectCard preview />
              </Col>
              <Col md={5}>
                <ProjectCard preview />
                  <p />
                <ProjectCard preview />
              </Col>
            </Row>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Explore;
