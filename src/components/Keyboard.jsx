import styled from "styled-components";
import Key from "./Key.jsx";
import PropTypes from "prop-types";

// STYLING WITH STYLED COMPONENTS
const KeyboardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  gap: 1.2rem;
  max-width: 80rem;
  margin: 4.6rem auto;

  @media (max-width: 768px) {
    grid-template-columns: repeat(7, 1fr);
  }
`;

// KEYBOARD COMPONENT
export default function Keyboard({
  alphabets,
  setAlphabets,
  life,
  setLife,
  answer,
  toggle,
  setToggle,
}) {
  // For each alphabets display key component
  const display = alphabets.map((elem, index) => (
    <Key
      key={`item: ${index}`}
      index={index}
      alphabets={alphabets}
      setAlphabets={setAlphabets}
      alphabet={elem}
      life={life}
      setLife={setLife}
      answer={answer}
      toggle={toggle}
      setToggle={setToggle}
    />
  ));

  return <KeyboardContainer>{display}</KeyboardContainer>;
}

// INITIALIZE PROPTYPES
Keyboard.propTypes = {
  alphabets: PropTypes.array.isRequired,
  setAlphabets: PropTypes.func.isRequired,
  life: PropTypes.number.isRequired,
  setLife: PropTypes.func.isRequired,
  answer: PropTypes.string.isRequired,
  toggle: PropTypes.bool.isRequired,
  setToggle: PropTypes.func.isRequired,
};
