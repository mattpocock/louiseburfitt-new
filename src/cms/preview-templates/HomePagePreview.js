import React from 'react';
import PropTypes from 'prop-types';
import { HomePageTemplate } from '../../templates/home';

const HomePagePreview = ({ widgetFor }) => (
  <HomePageTemplate
    title={widgetFor('bodyTitle')}
    content={widgetFor('body')}
  />
);

HomePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default HomePagePreview;
