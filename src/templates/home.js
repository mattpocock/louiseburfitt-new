import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';

import Col from 'react-bootstrap/lib/Col';
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
  bodyTitle,
  portfolioTitle,
  portfolioItems,
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
          <AlignCenter>
            <Col sm={10} style={{ textAlign: 'center' }}>
              <Subtitle>{bodyTitle}</Subtitle>
            </Col>
          </AlignCenter>
          <AlignCenter>
            <Col sm={8}>
              <PageContent className="content" content={content} />
            </Col>
          </AlignCenter>
        </Grid>
      </LightBackdropGrid>
      <BackdropGrid fluid style={{ padding: '2rem 0rem' }}>
        <Grid>
          <Title small>{portfolioTitle}</Title>
          {portfolioItems.map(
            ({
              image: {
                childImageSharp: {
                  resize: { src },
                },
              },
              linkSlug,
              subtitle,
              title,
            }) => (
              <PortfolioItem
                src={src}
                role="button"
                tabIndex="0"
                xs={12}
                md={6}
                key={linkSlug}
              >
                <Link to={linkSlug}>
                  <div className="image-holder" />
                  <div className="text-holder">
                    <h3>{title}</h3>
                    <h4>{subtitle}</h4>
                  </div>
                </Link>
              </PortfolioItem>
            ),
          )}
        </Grid>
      </BackdropGrid>
    </React.Fragment>
  );
};

HomePageTemplate.propTypes = {
  heroTagline: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  buttonText: PropTypes.string.isRequired,
  bodyTitle: PropTypes.string.isRequired,
  portfolioItems: PropTypes.array.isRequired,
  portfolioTitle: PropTypes.string.isRequired,
};

const HomePage = ({ data }) => {
  console.log(data);
  const { frontmatter, html } = data.markdownRemark;
  return (
    <Layout>
      <HomePageTemplate
        contentComponent={HTMLContent}
        {...frontmatter}
        content={html}
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
  font-size: ${(props) => (props.small ? '2rem' : '3rem')};
  text-align: center;
  font-weight: 800;
  margin-bottom: 2rem;
`;

const LightBackdropGrid = styled(Grid)`
  background-color: ${theme.superLightGrey};
  padding: 4rem 0rem;
`;

const Subtitle = styled.h2`
  color: ${theme.midText};
`;

const AlignCenter = styled.div`
  display: flex;
  justify-content: center;
`;

const PortfolioItem = styled(Col)`
  background-color: white;
  overflow: hidden;
  padding: 0;
  border-radius: 2rem;
  a {
    text-decoration: none;
  }
  .image-holder {
    height: 18rem;
    position: relative;
    overflow: hidden;
    background-image: ${(props) => `url(${props.src})`};
    background-position: center;
    background-size: cover;
    ::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 100;
      box-shadow: 0px 0px 10px 5px inset rgba(0, 0, 0, 0.2);
    }
  }
  &:hover {
    cursor: pointer;
    .image-holder {
      opacity: 0.85;
    }
  }
  border: 2px solid ${theme.midFrosty};
  &:focus {
    outline: none;
    border: 2px solid ${theme.midBright};
  }
  .text-holder {
    padding: 1rem 1.5rem 1.5rem 1.5rem;
    h3,
    h4 {
      margin: 0;
      font-size: 1.5rem;
    }
    h3 {
      color: ${theme.midText};
      font-weight: 700;
      line-height: 1.4;
    }
    h4 {
      color: ${theme.lightText};
      font-weight: 400;
      font-size: 1.4rem;
    }
  }
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
            name
            childImageSharp {
              resize(width: 640) {
                src
              }
            }
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
