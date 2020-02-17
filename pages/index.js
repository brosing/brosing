import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import Link from 'next/link'

import { posts, colors, formatDate } from '../utils'
import Layout from '../components/Layout'
import HighlightedText from '../components/HighlightedText'

const PageTitle = ({ words }) => {
  let splittedWords = words.split('')

  return splittedWords.map((word, index) => (
    <span key={index}>{ word }</span>
  ))
}

const Home = () => {
  const title = "Browsing"
  const writingTitle = "Writing"

  return (
    <StyledLayout>
      <StyledTitle>
        <PageTitle words={title} />
      </StyledTitle>

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
    </StyledLayout>
  )
}

export default Home;

const StyledLayout = styled(Layout)`
  height: 100vh;
  font-size: 0.8rem;
`

const StyledTitle = styled.h1`
  color: ${colors.dark};
  padding: 24% 0 1rem;
  margin-top: 0;
  font-size: 1.6rem;
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