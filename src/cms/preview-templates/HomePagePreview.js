import React from 'react';
import PropTypes from 'prop-types';
import { HomePageTemplate } from '../../templates/home';

const HomePagePreview = ({ widgetFor }) => (
  <HomePageTemplate
    heroTagline={widgetFor('heroTagline')}
    content={widgetFor('body')}
    buttonText={widgetFor('buttonText')}
  />
);

HomePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default HomePagePreview;
