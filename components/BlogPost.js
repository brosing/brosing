import styled from 'styled-components'

const BlogPost = ({ title, children }) => (
  <div>
    <StyledTitle>{ title }</StyledTitle>
    <div>{ children }</div>
  </div>
)

export default BlogPost

const StyledTitle = styled.h1`
  font-size: 2rem;
  margin: 1rem 0 1rem;
  padding: 0 0 1rem;
  position: relative;

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
`;
