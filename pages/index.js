import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import Link from 'next/link'

import { posts } from '../utils/getBlogPosts'
import { colors } from '../utils/constants'
import Layout from '../components/Layout'
import HighlightedText from '../components/HighlightedText'

const TitlePage = ({ words }) => {
  let splittedWords = words.split('')

  return splittedWords.map((word, index) => (
    <span key={index}>{ word }</span>
  ))
}

const Home = () => {
  const title = "Browsing"
  const writingTitle = "writing"

  useEffect(() => {
    console.log("posts", posts)
  }, [])

  return (
    <Layout>
      <StyledCentered>
        <StyledTitle>
          <TitlePage words={title} />
        </StyledTitle>

        <main>
          Hi... I'm a <HighlightedText>Front-end Web & Mobile Developer</HighlightedText>. Well technically,
          I could build iOS app with swift, while android app use react-native for now.
        </main>

        <StyledWritingTitle>
          { writingTitle + ":" }
        </StyledWritingTitle>

        <ul>
          { posts.map((post, index) => (
            <li key={index}>
              <Link href={post.path}>
                <a>{ post.title }</a>
              </Link>
            </li>
          )) }
        </ul>

      </StyledCentered>
    </Layout>
  )
}

export default Home;

const StyledCentered = styled.div`
  margin-top: -5rem;
  padding: 1.2rem;
  font-size: 0.8rem;
  text-align: center;
  line-height: 1.4rem;
`

const StyledTitle = styled.h3`
  color: ${colors.dark};
  padding: 0 0 1rem;
  font-weight: 600;
  font-size: 2rem;
  letter-spacing: 5px;
`

const StyledWritingTitle = styled.h4`
  color: ${colors.dark};
  padding: 4rem 0 0.5rem;
  font-size: 1.4rem;
  letter-spacing: 3px;
`
