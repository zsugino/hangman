import styled from "styled-components";
import PropTypes from "prop-types";

// STYLING WITH STYLED COMPONENTS
const InputKey = styled.div`
  padding: 1.2rem 2.4rem;
  text-align: center;
  border-radius: 1.2rem;
  font-size: 3.4rem;
  background-color: ${(props) =>
    props.clicked ? "rgba(255, 255, 255, 0.3)" : "rgba(255, 255, 255)"};
  color: #261676;
`;

// KEY COMPONENT
export default function Key({
  alphabets,
  setAlphabets,
  alphabet,
  index,
  life,
  setLife,
  answer,
  toggle,
  setToggle,
}) {
  // Invoked when user clicks any key
  const handleKeyClick = () => {
    // Updates object where key pressed should be true
    alphabets[index][1] = true;
    alphabets[index][2] = true;

    // Update state for alphabets
    setAlphabets([...alphabets]);

    // Enters if block when pressed alphabets is not in the answer string
    if (!answer.toLowerCase().includes(alphabets[index][0])) {
      // Enters if block if life value becomes 0 which means game over
      if (life - 1 === 0) setToggle(!toggle);
      // Updates life by decreasing 1 since pressed alphabet is wrong
      setLife(life - 1);
    }
  };

  return (
    <InputKey clicked={alphabets[index][2]} onClick={handleKeyClick}>
      {alphabet[0].toUpperCase()}
    </InputKey>
  );
}

// INITIALIZE PROPTYPES
Key.propTypes = {
  alphabet: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  alphabets: PropTypes.array.isRequired,
  setAlphabets: PropTypes.func.isRequired,
  life: PropTypes.number.isRequired,
  setLife: PropTypes.func.isRequired,
  answer: PropTypes.string.isRequired,
  toggle: PropTypes.bool.isRequired,
  setToggle: PropTypes.func.isRequired,
};
