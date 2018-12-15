import CMS from 'netlify-cms';

import PagePreview from './preview-templates/PagePreview';
import HomePagePreview from './preview-templates/HomePagePreview';

CMS.registerPreviewTemplate('pages', PagePreview);
CMS.registerPreviewTemplate('home', HomePagePreview);
