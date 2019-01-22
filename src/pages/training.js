import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import { Padding } from 'styled-components-spacing'
import { Grid } from '../components/grid'

import Layout from '../components/layout'
import SEOText from '../components/Homepage/seoText'
import CaseStudy from '../components/Homepage/caseStudy'
import GrayBackground from '../components/GreyBG'

const IndexPage = ({
  data: {
    contentfulTrainingPage: content,
    allContentfulMeetupEvent: events,
    site
  }
}) => (
  <Layout>
    <Helmet
      title={`${site.siteMetadata.title} ${
        content.seoTitle ? '- ' + content.seoTitle : ''
      } `}
      meta={[{ name: 'description', content: content.seoMetaDescription }]}
    >
      <html lang="en" />
    </Helmet>
    <Grid>
      <Padding bottom={{ smallPhone: 0, smallTablet: 2, desktop: 2 }}>
        <CaseStudy
          caseStudy={content.featuredCaseStudy}
          subHeading="Featured work"
        />
      </Padding>
      <Padding bottom={{ smallPhone: 0, desktop: 2 }} />
    </Grid>
    <GrayBackground>
      <Grid>
        <Padding top={{ smallPhone: 2 }} />
        <Padding top={{ smallPhone: 4, smallTablet: 4, desktop: 4 }} bottom={4}>
          <SEOText text={content.seoText.content[0].content} />
        </Padding>
      </Grid>
    </GrayBackground>
    <Grid>
      {content.relatedCaseStudy ? (
        <Padding top={5} bottom={5}>
          <CaseStudy
            subHeading="Featured work"
            caseStudy={content.relatedCaseStudy}
          />
        </Padding>
      ) : null}
    </Grid>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }

    contentfulTrainingPage {
      title
      seoTitle
      seoMetaDescription
      featuredCaseStudy {
        id
        title
        slug
        posterImage {
          title
          file {
            url
          }
          fluid(maxWidth: 600) {
            ...GatsbyContentfulFluid_tracedSVG
          }
        }
        posterColor
        introSentence
      }
      seoText {
        content {
          content {
            value
            nodeType
          }
        }
      }
      relatedCaseStudy {
        title
        slug
        posterImage {
          fluid(maxWidth: 600) {
            ...GatsbyContentfulFluid_tracedSVG
          }
          title
          file {
            url
          }
        }
        posterColor
        introSentence
      }
    }
  }
`

export default IndexPage
