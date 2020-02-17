import styled from 'styled-components'
import Link from 'next/link'

import { colors } from '../utils'
import Next from '../public/static/svg/next.svg'

const BlogPost = ({ title, children }) => (
  <div>
    <StyledHeader>
      <Link href="/">
        <a><Next /></a>
      </Link>
      <h1>{ title }</h1>
    </StyledHeader>
    <div>{ children }</div>
  </div>
)

export default BlogPost

const StyledHeader = styled.div`
  position: relative;
  
  a {
    position: absolute;
    top: calc(50% - 1rem);
    right: calc(100% + 1rem);

    > svg {
      transform: scaleX(-1);
      filter: brightness(70%) saturate(140%);
    }
  }

  > h1 {
    position: relative;
    display: inline-block;
    margin: 1rem 0 1rem;
    padding: 0 0 1rem;
    font-size: 2rem;
    color: ${colors.dark};

    &:after {
      content: ' ';
      display: block;
      position: absolute;
      bottom: 0;
      left: 0;
      width: 150px;
      height: 2px;
      background: #eee;
    }
  }
`;
