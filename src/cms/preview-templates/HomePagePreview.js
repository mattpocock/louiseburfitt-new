import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap-css-only/css/bootstrap.min.css';
import { StyleSheetManager } from 'styled-components';
import { HomePageTemplate } from '../../templates/home';
import '../../components/global.css';

const HomePagePreview = ({ entry }) => {
  const iframe = document.querySelector('iframe');
  const iframeHeadElem = iframe.contentDocument.head;

  return (
    <React.Fragment>
      <StyleSheetManager target={iframeHeadElem}>
        <HomePageTemplate {...entry.get('data').toJS()} />
      </StyleSheetManager>
    </React.Fragment>
  );
};

HomePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default HomePagePreview;
