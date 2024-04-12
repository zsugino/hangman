import styled from "styled-components";
import AnswerKey from "./AnswerKey.jsx";
import PropTypes from "prop-types";

// STYLING WITH STYLED COMPONENTS
const WordContainer = styled.div`
  display: flex;
  gap: 1.2rem;
`;

// ANSWER WORD COMPONENT
export default function AnswerWord({ word, alphabets }) {
  // Function to convert alphabet to number to quickly find index number
  function alphabetToNumber(alphabet) {
    const lowerCaseAlphabet = alphabet.toLowerCase();
    return lowerCaseAlphabet.charCodeAt(0) - 97;
  }

  // Split the words into character and store in array
  const characters = word.split("");

  // Display each character block
  const display = characters.map((elem, index) => {
    // Initialize value that keeps check of correct key
    let isCorrect = false;

    // This means that clicked key was correct and should show in the answer key
    if (alphabets[alphabetToNumber(elem)][1]) {
      isCorrect = true;
    }

    // Prop down isCorrect which means the key is guessed correctly
    return (
      <AnswerKey key={`item: ${index}`} alphabet={elem} correct={isCorrect} />
    );
  });

  return <WordContainer>{display}</WordContainer>;
}

// INITIALIZE PROPTYPES
AnswerWord.propTypes = {
  alphabets: PropTypes.array.isRequired,
  word: PropTypes.string.isRequired,
};
