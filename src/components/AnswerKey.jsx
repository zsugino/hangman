import styled from "styled-components";
import { useContext, useEffect } from "react";
import { ScoreContext } from "../scoreContext.js";
import PropTypes from "prop-types";

// STYLING WITH STYLED COMPONENTS
const Key = styled.div`
  width: 5.2rem;
  height: 5.2rem;
  background-color: ${(props) =>
    props.correct ? "rgba(36, 99, 255);" : "rgba(36, 99, 255, 0.7);"};
  font-size: 3.8rem;
  color: white;
  border-radius: 1.2rem;
  text-align: center;
`;

// ANSWER KEY COMPONENT
export default function AnswerKey({ alphabet, correct }) {
  // Set Context for Score
  const score = useContext(ScoreContext);

  // Handles score update on initial render
  useEffect(() => {
    // Condition when correct alphabet pressed then update score
    if (correct) {
      score.updateAnsweredLength();
    }
  }, [correct]);

  // If correct prop is true then display the alphabet
  return <Key correct={correct}>{correct && alphabet}</Key>;
}

// INITIALIZE PROPTYPES
AnswerKey.propTypes = {
  alphabet: PropTypes.string.isRequired,
  correct: PropTypes.bool.isRequired,
};
