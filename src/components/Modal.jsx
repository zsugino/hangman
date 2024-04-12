import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ScoreContext } from "../scoreContext.js";

// STYLING WITH STYLED COMPONENTS
const Title = styled.div`
  font-size: 8.4rem;
  text-align: center;
  background: -webkit-linear-gradient(#67b6ff, #ffffff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const ModalContainer = styled.div`
  border-radius: 2.4rem;
  display: flex;
  flex-direction: column;
  width: 35rem;
  border: 2px solid black;
  padding: 4.8rem 2.4rem;
  gap: 2.4rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: linear-gradient(rgb(52, 74, 186, 0.9), rgba(0, 20, 121, 0.9));
`;

const Btn = styled.button`
  background-color: #2463ff;
  color: white;
  font-family: "Mouse Memoirs", sans-serif;
  border: none;
  font-size: 2.8rem;
  padding: 0.5rem;
  border-radius: 1.2rem;
`;

const QuitBtn = styled.button`
  font-family: "Mouse Memoirs", sans-serif;
  background: linear-gradient(#fe71fe, #7199ff);
  border: none;
  color: white;
  font-size: 2.8rem;
  padding: 0.5rem;
  border-radius: 1.2rem;
`;

// MODAL COMPONENT
export default function Modal({ toggle, setToggle, life }) {
  // Invoke useNavigate for routing to different pages
  const nav = useNavigate();

  // Set Context for Score
  const score = useContext(ScoreContext);

  // Invoked when continue or play again btn clicked
  const handleContinueorPlayClick = () => {
    // Condition to check if midgame, win, lose
    if (life) {
      // User win so reload page
      if (score.correctLength === score.answeredLength) {
        window.location.reload();
      }
      // Closes the modal to continue game
      setToggle(!toggle);
    } else window.location.reload(); // User lose so reload
  };

  // Function to output title string based on user play status
  const displayTitleStr = () => {
    if (life) {
      if (score.correctLength === score.answeredLength) {
        return "You Win!";
      }
      return "Paused";
    }
    return "You Lose";
  };

  // Function to output button string based on user play status
  const displayBtnStr = () => {
    if (life) {
      if (score.correctLength === score.answeredLength) {
        return "Play Again";
      }
      return "Continue";
    }
    return "Play Again";
  };

  return (
    <ModalContainer>
      <Title>{displayTitleStr()}</Title>
      <Btn onClick={handleContinueorPlayClick}>{displayBtnStr()}</Btn>
      <Btn onClick={() => nav("/category")}>New Category</Btn>
      <QuitBtn onClick={() => nav("/")}>Quit Game</QuitBtn>
    </ModalContainer>
  );
}
