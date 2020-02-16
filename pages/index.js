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
  const writingTitle = "writing"

  return (
    <Layout>
      <StyledCentered>
        <div>
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
                    <span>{ formatDate(post.publishedAt) }</span> { post.title }
                  </StyledA>
                </Link>
              </li>
            )) }
          </StyledList>
        </div>
      </StyledCentered>
    </Layout>
  )
}

export default Home;

const StyledCentered = styled.div`
  display: flex;
  align-items: center;
  line-height: 1.4rem;
  font-size: 0.8rem;
  padding: 0 1rem;
  height: 100vh;
`

const StyledTitle = styled.h3`
  color: ${colors.dark};
  padding: 0 0 1rem;
  margin-top: 0;
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

const StyledA = styled.a`
  padding-left: 5px;
  text-decoration: none;
  color: ${colors.dark};

  span {
    font-size: 0.6rem;
    display: inline-block;
    position: relative;
    margin-right: 1.5rem;

    &:after {
      content: '•';
      position: absolute;
      top: -2px;
      left: 100%;
      width: 1.5rem;
      height: inherit;
      font-size: 1.2rem;
      text-align: center;
    }
  }

  &:hover {
    cursor: pointer;
    color: ${colors.green};
    text-decoration: underline;

    span {
      text-decoration: underline;
    }
  }
`;

const StyledList = styled.ul`
  padding-bottom: 2rem;
`;