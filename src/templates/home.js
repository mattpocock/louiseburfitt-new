import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled from 'styled-components';

// import Col from 'react-bootstrap/lib/Col';
// import Row from 'react-bootstrap/lib/Row';
import Grid from 'react-bootstrap/lib/Grid';
import theme from '../theme';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';
import Button from '../components/Button';

export const HomePageTemplate = ({
  heroTagline,
  content,
  buttonText,
  contentComponent,
}) => {
  const PageContent = contentComponent || Content;

  return (
    <React.Fragment>
      <BackdropGrid fluid>
        <Grid style={{ textAlign: 'center' }}>
          <Title>{heroTagline || ''}</Title>
          <Button withShadow>{buttonText || ''}</Button>
        </Grid>
      </BackdropGrid>
      <LightBackdropGrid fluid>
        <Grid>
          <PageContent className="content" content={content} />
        </Grid>
      </LightBackdropGrid>
    </React.Fragment>
  );
};

HomePageTemplate.propTypes = {
  heroTagline: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  buttonText: PropTypes.string.isRequired,
};

const HomePage = ({ data }) => {
  console.log(data);
  const { frontmatter } = data.markdownRemark;
  return (
    <Layout>
      <HomePageTemplate
        contentComponent={HTMLContent}
        heroTagline={frontmatter.heroTagline}
        buttonText={frontmatter.buttonText}
        content={JSON.stringify(data)}
      />
    </Layout>
  );
};

HomePage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default HomePage;

const BackdropGrid = styled(Grid)`
  color: white;
  background-color: ${theme.midFrosty};
  padding: 6rem 0rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  text-align: center;
  font-weight: 800;
  margin-bottom: 2rem;
`;

const LightBackdropGrid = styled(Grid)`
  background-color: ${theme.superLightGrey};
  padding: 4rem 0rem;
`;

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
