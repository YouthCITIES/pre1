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
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import LinearProgress from 'material-ui/LinearProgress';
import Checkbox from 'material-ui/Checkbox';

class ProjectCard extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    html: PropTypes.string.isRequired,
  };

  render() {
    return (
        <Card>
            <CardHeader
            title="Sua"
            subtitle="12th Grader at Cambridge Latin"
            avatar="https://pbs.twimg.com/profile_images/799357938662068224/m4_o6bGl.jpg"
            />
            <CardMedia
            overlay={<CardTitle title="Helping Kids with Type I Diabetes" subtitle="Helping Kids with Type I Diabetes" />}
            >
            <img src="https://bgcdn.s3.amazonaws.com/wp-content/uploads/2013/04/5-2-God-is-in-Nature.jpg" />
            </CardMedia>
            <CardTitle title="13 Days Left" subtitle="Goal Date: 2/3/17" />
            <CardText>
              Coding simple android app prototype with simple page navigation and button interactions.
            </CardText>
            { !this.props.preview &&
            <div>
              <Checkbox
                label="Contains all 5 screens"
              />
              <Checkbox
                label="All buttons are linked to pages"
              />
              <Checkbox
                label="Contains all user interactions"
              />
              <Checkbox
                label="Deployable Android Play Store"
              />
            </div>
            }
            <LinearProgress mode="determinate" value = { 60 } />
            <CardActions>
            <FlatButton label="Action1" />
            <FlatButton label="Action2" />
            </CardActions>
        </Card>
    );
  }
}

export default ProjectCard;
