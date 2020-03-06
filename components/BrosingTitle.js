import { memo } from 'react'
import styled from "styled-components"
import { motion } from "framer-motion"

import { colors } from '../utils'

const BrosingTitle = memo(() => {
  const title = "Browsing"
  const splittedWords = title.split("")

  let container = {
    idle: { x: 0 },
    move: { x: 0 }
  };
  let item = {
    idle: { x: 0 },
    move: i => ({
      x: "-1.25rem",
      transition: { delay: i * 0.3 }
    })
  };

  return (
    <StyledTitle initial="idle" animate="move" variants={container}>
      { splittedWords.map((word, index) => {
        switch (word) {
          case "w":
            return (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 1, duration: 0.2 }}
              >
                {word}
              </motion.span>
            );
          case "s":
          case "i":
          case "n":
          case "g":
            return (
              <motion.span
                key={index}
                custom={index}
                variants={item}
                style={{ display: "inline-block" }}
              >
                {word}
              </motion.span>
            );
          default:
            return <span key={index}>{word}</span>;
        }
      })}
    </StyledTitle>
  );
})

export default BrosingTitle

const StyledTitle = styled(motion.h2)`
  color: ${colors.dark};
  padding: 24% 0 1rem;
  margin-top: 0;
  font-size: 1.6rem;
`;
