import styled from "styled-components";
import AnswerWord from "./AnswerWord.jsx";
import PropTypes from "prop-types";

// STYLING WITH STYLED COMPONENTS
const AnswerContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 4.8rem;
  margin-top: 5.4rem;
`;

// ANSWER BOARD COMPONENT
export default function AnswerBoard({ answer, alphabets }) {
  // Stores each word from answer in array
  const arr = answer.split(" ");

  // Display each word block
  const display = arr.map((elem, index) => {
    return (
      <AnswerWord key={`item${index}`} word={elem} alphabets={alphabets} />
    );
  });

  return <AnswerContainer>{display}</AnswerContainer>;
}

// INITIALIZE PROPTYPES
AnswerBoard.propTypes = {
  alphabets: PropTypes.array.isRequired,
  answer: PropTypes.string.isRequired,
};
