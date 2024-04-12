import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "styled-components";
import data from "../data/data.json";
import landingImageDesktop from "../assets/background-desktop.svg";
import Keyboard from "../components/Keyboard.jsx";
import AnswerBoard from "../components/AnswerBoard.jsx";
import HangManHeader from "../components/HangManHeader.jsx";
import Modal from "../components/Modal.jsx";
import { ScoreContext } from "../scoreContext.js";

// STYLING WITH STYLED COMPONENTS
const BgImgContainer = styled.div`
  height: 100vh;
  background-image: url(${landingImageDesktop});
  background-size: cover;
  padding: 4.8rem;
`;

// HANGMAN PAGE
export default function HangManPage() {
  // Retrieve URL parameter value
  const { subject } = useParams();

  // Set initial states
  const [answer, setAnswer] = useState("");
  const [correctLength, setCorrectLength] = useState(0);
  const [answeredLength, setAnsweredLength] = useState(0);
  const [life, setLife] = useState(5);
  const [toggle, setToggle] = useState(false);
  const [alphabets, setAlphabets] = useState([
    ["a", false, false],
    ["b", false, false],
    ["c", false, false],
    ["d", false, false],
    ["e", false, false],
    ["f", false, false],
    ["g", false, false],
    ["h", false, false],
    ["i", false, false],
    ["j", false, false],
    ["k", false, false],
    ["l", false, false],
    ["m", false, false],
    ["n", false, false],
    ["o", false, false],
    ["p", false, false],
    ["q", false, false],
    ["r", false, false],
    ["s", false, false],
    ["t", false, false],
    ["u", false, false],
    ["v", false, false],
    ["w", false, false],
    ["x", false, false],
    ["y", false, false],
    ["z", false, false],
  ]);

  const updateAnsweredLength = () => {
    setAnsweredLength((answeredLength) => {
      if (answeredLength + 1 === correctLength) setToggle(!toggle);
      return answeredLength + 1;
    });
    console.log("SCORE", answeredLength);
  };

  // Sets hangman answer and length upon initial render
  useEffect(() => {
    const randomNumber = Math.floor(
      Math.random() * data.categories[subject].length,
    );
    // console.log("ANSWER", data.categories[subject][randomNumber].name);
    // Sets the answer
    setAnswer(data.categories[subject][randomNumber].name);
    // Sets the length of the answer
    setCorrectLength(
      data.categories[subject][randomNumber].name.length -
        data.categories[subject][randomNumber].name.split(" ").length +
        1,
    );
  }, []);

  return (
    <ScoreContext.Provider
      value={{ updateAnsweredLength, answeredLength, correctLength }}
    >
      <BgImgContainer>
        <HangManHeader life={life} toggle={toggle} setToggle={setToggle} />
        <AnswerBoard answer={answer} alphabets={alphabets} />
        <Keyboard
          alphabets={alphabets}
          setAlphabets={setAlphabets}
          life={life}
          setLife={setLife}
          answer={answer}
          toggle={toggle}
          setToggle={setToggle}
        />
        {toggle && <Modal toggle={toggle} setToggle={setToggle} life={life} />}
      </BgImgContainer>
    </ScoreContext.Provider>
  );
}
