import { memo } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { motion } from 'framer-motion'

import { posts, colors, formatDate } from '../utils'
import Layout from '../components/Layout'
import HighlightedText from '../components/HighlightedText'
import BrosingTitle from '../components/BrosingTitle'

const Home = memo((props) => {
  const writingTitle = "Writing"

  return (
    <StyledLayout {...props}>
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <BrosingTitle />

        <main>
          Hi... I'm a <HighlightedText>Front-end Web & Mobile Developer</HighlightedText>. Well technically,
          I could build iOS app with swift, while android app use react-native for now.
        </main>

        <StyledWritingTitle>
          { writingTitle + ":" }
        </StyledWritingTitle>

        <StyledList>
          { posts.map((post, index) => (
            <li key={index}>
              <Link href={post.path}>
                <StyledA>
                  { formatDate(post.publishedAt) } - { post.title }
                </StyledA>
              </Link>
            </li>
          )) }
        </StyledList>
      </motion.div>
    </StyledLayout>
  )
})

export default Home

const StyledLayout = styled(Layout)`
  height: 100vh;
  font-size: 0.8rem;
`

const StyledWritingTitle = styled.h4`
  color: ${colors.dark};
  padding: 4rem 0 0.5rem;
  font-size: 1.4rem;
`

const StyledA = styled.a`
  padding-left: 5px;
  text-decoration: none;
  color: ${colors.dark};

  &:hover {
    cursor: pointer;
    color: ${colors.green};
    text-decoration: underline;
  }
`;

const StyledList = styled.ul`
  padding-bottom: 2rem;
`;