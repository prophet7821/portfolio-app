import NextLink from 'next/link'
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button
} from '@chakra-ui/react'

const Construction = () => {
  return (
    <Container align="center" justify="center" mt={25}>
      <Heading as="h1">In Progress</Heading>
      <Text>The page you&apos;re looking for is being built at this very hour.
          Thanks for your cooperation. 
      </Text>
      <Divider my={6} />
      <Box my={6} align="center">
        <NextLink href="/" passHref>
          <Button colorScheme="teal">Return to home</Button>
        </NextLink>
      </Box>
    </Container>
  )
}

export default Construction