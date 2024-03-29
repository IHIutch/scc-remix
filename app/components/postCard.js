import { useState } from 'react'
import {
  AspectRatio,
  Flex,
  Heading,
  LinkBox,
  LinkOverlay,
  Text,
  Box,
  Img,
} from '@chakra-ui/react'
import dayjs from 'dayjs'
import { Link as RemixLink } from '@remix-run/react'

export default function PostCard({ post }) {
  const [isActive, setIsActive] = useState(false)

  return (
    <LinkBox
      onMouseOver={() => setIsActive(true)}
      onMouseOut={() => setIsActive(false)}
      onFocus={() => setIsActive(true)}
      onBlur={() => setIsActive(false)}
    >
      <Box borderColor="tealGreen.700" borderWidth="2px">
        {post?.featuredImage?.data && (
          <AspectRatio ratio={16 / 9} style={{ mixBlendMode: 'luminosity' }}>
            <Img
              boxSize="100%"
              objectFit="cover"
              src={post?.featuredImage?.data?.attributes?.url}
              alt={post.title}
            />
          </AspectRatio>
        )}
        <Box p="4" color="tealGreen.700">
          <Heading
            size="xl"
            mb="2"
            lineHeight="1.2"
            display="-webkit-box"
            overflow="hidden"
            sx={{
              WebkitLineClamp: '3',
              WebkitBoxOrient: 'vertical',
            }}
          >
            <LinkOverlay as={RemixLink} to={'/blog/' + post.slug}>
              {post.title}
            </LinkOverlay>
          </Heading>
          {post.publishedAt && (
            <Box>
              <Text fontWeight="semibold" mb="2">
                {dayjs(post.publishedAt).format('MMMM D, YYYY')}
              </Text>
              {/* <Text fontSize="lg">{post.excerpt}</Text> */}
            </Box>
          )}
        </Box>
        <Flex
          borderTopWidth="2px"
          borderTopColor="tealGreen.700"
          justify="space-between"
          align="center"
          px="4"
          py="3"
          transition="all ease 0.2s"
          sx={
            isActive
              ? { bg: 'tealGreen.700', color: 'white' }
              : { bg: 'transparent', color: 'tealGreen.700' }
          }
        >
          <Text fontFamily="crimson" fontSize="xl" fontWeight="bold">
            Keep Reading →
          </Text>
          {/* <Text fontWeight="semibold" fontSize="sm">
            (Read Time: {post.timeToRead} min)
          </Text> */}
        </Flex>
      </Box>
    </LinkBox>
  )
}
