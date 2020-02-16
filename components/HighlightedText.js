import React from 'react'
import styled from 'styled-components'

import { colors } from '../utils'

const HighlightedText = ({ children }) => {
  const words = children.split(' ');
  const { length } = words;

  return words.map((word, index) => (
    <Highlight key={word}>
      <Text isFirst={length > 1 && index === 0}>{word}</Text>
      <Color />
    </Highlight>
  ));
};

export default HighlightedText

const Highlight = styled.span`
  position: relative;
`

const Text = styled.span`
  position: relative;
  z-index: 1;
  padding-left: ${props => props.isFirst ? '0' : '0.25rem'};
`
const Color = styled.span`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 0;
  width: 100%;
  height: 0.7rem;
  background-color: ${colors.green};
  opacity: 0.25;
`
