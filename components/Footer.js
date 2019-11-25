import React from 'react';
import styled from 'styled-components'

import { colors } from '../utils/constants'

import Dribbble from '../public/static/svg/dribbble.svg'
import Twitter from '../public/static/svg/twitter.svg'
import Github from '../public/static/svg/github.svg'
import Instagram from '../public/static/svg/instagram.svg'
import Facebook from '../public/static/svg/facebook.svg'
import Linkedin from '../public/static/svg/linkedin.svg'

export default () => {
  // define socmed links
  const social = [
    { icon: <Dribbble />, to: 'https://dribbble.com/singgih_nn' },
    { icon: <Twitter />, to: 'https://twitter.com/singgih_nn' },
    { icon: <Github />, to: 'https://github.com/brosing' },
    { icon: <Instagram />, to: 'https://www.instagram.com/singgih_nn' },
    { icon: <Facebook />, to: 'https://www.facebook.com/singgihnurnugroho' },
    { icon: <Linkedin />, to: 'https://www.linkedin.com/in/singgih-nur-nugroho' },
  ]

  return  (
    <StyledFooter>
      <StyledSocialList>
        {social.map((item) => (
          <li key={item.to}>
            <a
              href={item.to}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          </li>
        ))}
      </StyledSocialList>
      <a href="/feed.json">RSS Feed</a>
    </StyledFooter>
  )
}

const StyledFooter = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 16px;
  border-bottom: 9px solid ${colors.green};
`

const StyledSocialList = styled.ul`
 display: flex;
 list-style: none;
 margin: 0;

 > li {
  &:not(:last-child) {
    margin-right: 0.5rem;
  }
  transition: 200ms opacity ease-in-out;

  &:hover {
    opacity: 0.5;
  }

  a {
    display: block;
    padding: 1rem 0.5rem;
  }
 }
`