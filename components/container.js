import styled from 'styled-components'

const Container = ({ children }) => (
  <StyledContainer>{children}</StyledContainer>
)

export default Container

const StyledContainer = styled.div`
  max-width: 45rem;
  margin: 0 auto;
  padding: 0 1em;
`