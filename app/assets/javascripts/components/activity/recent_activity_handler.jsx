import React from 'react';
import createReactClass from 'create-react-class';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

const RecentActivityHandler = createReactClass({
  displayName: 'RecentActivityHandler',

  propTypes: {
    children: PropTypes.node
  },

  render() {
    return (
      <div className="recent-activity__container">
        <nav>
          <div className="container">
            <div className="nav__item" id="dyk-link">
              <p><Link to="/recent-activity/dyk" activeClassName="active">{I18n.t('recent_activity.did_you_know_eligible')}</Link></p>
            </div>
            <div className="nav__item" id="plagiarism-link">
              <p><Link to="/recent-activity/plagiarism" activeClassName="active">{I18n.t('recent_activity.possible_plagiarism')}</Link></p>
            </div>
            <div className="nav__item" id="recent-edits-link">
              <p><Link to="/recent-activity/recent-edits" activeClassName="active">{I18n.t('recent_activity.recent_edits')}</Link></p>
            </div>
            <div className="nav__item" id="recent-uploads-link">
              <p><Link to="/recent-activity/recent-uploads" activeClassName="active">{I18n.t('recent_activity.recent_uploads')}</Link></p>
            </div>
          </div>
        </nav>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
});

export default RecentActivityHandler;
