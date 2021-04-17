import React from 'react'
import { Helmet } from 'react-helmet'
import { Box, Flex, Grid, GridItem, Heading, Text } from '@chakra-ui/react'
import { graphql } from 'gatsby'
import Navbar from '../components/global/Navbar'
import Container from '../components/common/Container'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

export default function Post({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  const featuredImg = getImage(frontmatter.featuredImage)

  return (
    <main>
      <Helmet>
        <title>{frontmatter.title}</title>
      </Helmet>
      <Navbar />
      <Flex w="100%" h="100vh" position="relative">
        <Box
          position="absolute"
          top="0"
          right="0"
          bottom="0"
          left="0"
          bg="tealGreen.700"
        >
          <Box
            as={GatsbyImage}
            w="100%"
            h="100%"
            objectFit="cover"
            opacity="20%"
            style={{ mixBlendMode: 'luminosity' }}
            image={featuredImg}
            alt={''}
          />
        </Box>
        <Box mt="auto" w="100%" mb="12" position="relative">
          <Container>
            <Grid py="6" templateColumns="repeat(12, 1fr)" gap="6">
              <GridItem colStart="3" colSpan="8">
                <Box borderBottomWidth="1px" borderColor="white">
                  <Heading as="h1" size="xl" mb="8" color="white">
                    {frontmatter.title}
                  </Heading>
                </Box>
                <Box mt="6">
                  <Text color="white" fontSize="xl">
                    {frontmatter.date}
                  </Text>
                </Box>
              </GridItem>
            </Grid>
          </Container>
        </Box>
      </Flex>
      <Container>
        <Grid py="32" templateColumns="repeat(12, 1fr)" gap="6">
          <GridItem colStart="3" colSpan="8">
            <div
              className="post-content"
              dangerouslySetInnerHTML={{ __html: html }}
            ></div>
          </GridItem>
        </Grid>
      </Container>
    </main>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        featuredImage {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
      }
    }
  }
`