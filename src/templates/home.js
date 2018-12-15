import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';

export const HomePageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title || ''}
              </h2>
              <PageContent className="content" content={content} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

HomePageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const HomePage = ({ data }) => {
  console.log(data);
  return (
    <Layout>
      <HomePageTemplate
        contentComponent={HTMLContent}
        title="Hello"
        content={JSON.stringify(data)}
      />
    </Layout>
  );
};

HomePage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default HomePage;

export const HomePageQuery = graphql`
  query HomePage {
    markdownRemark(frontmatter: { templateKey: { eq: "home" } }) {
      html
      frontmatter {
        bodyTitle
        heroTagline
        portfolioTitle
        portfolioItems {
          image {
            relativePath
            name
          }
          linkSlug
          subtitle
          title
        }
        testimonialsTitle
        testimonials {
          person
          quote
          workplace
        }
        buttonText
      }
    }
  }
`;
