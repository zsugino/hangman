import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import backIcon from "../assets/icon-back.svg";
import landingImageDesktop from "../assets/background-desktop.svg";

// STYLING WITH STYLED COMPONENTS
const BgImgContainer = styled.div`
  height: 100vh;
  background-image: url(${landingImageDesktop});
  background-size: cover;
  padding: 4.8rem;
`;

const Title = styled.h2`
  font-size: 7.4rem;
  background: -webkit-linear-gradient(#67b6ff, #ffffff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const InstructionContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2.4rem;
  max-width: 90rem;
  margin: 10rem auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const InstructionCard = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;
  padding: 2.4rem;
  border-radius: 2.4rem;

  @media (max-width: 768px) {
    flex-direction: row;
  }
`;

const InstructionHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BackBtn = styled.button`
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  border: none;
  background: linear-gradient(#fe71fe, #7199ff);
`;

const BackIcon = styled.img`
  width: 5rem;
  height: 5rem;
`;

const InvBtn = styled.button`
  width: 4rem;
  height: 4rem;
  visibility: hidden;
`;

const OrderNumber = styled.h3`
  font-size: 6rem;
  color: #2463ff;
`;

const OrderTitle = styled.h4`
  font-size: 4rem;
  color: #261676;
`;

const OrderInstruction = styled.p`
  color: #887dc0;
  font-size: 2.5rem;
`;

const OrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;
  @media (max-width: 768px) {
    align-items: start;
    gap: 1.2rem;
  }
`;

// INSTRUCTION PAGE
export default function InstructionPage() {
  // Invoke useNavigate for routing to different pages
  const nav = useNavigate();

  return (
    <BgImgContainer>
      <InstructionHeader>
        <BackBtn onClick={() => nav("/")}>
          <BackIcon src={backIcon} alt="back icon" />
        </BackBtn>
        <Title>How to Play</Title>
        <InvBtn>
          <BackIcon src={backIcon} alt="back icon" />
        </InvBtn>
      </InstructionHeader>
      <InstructionContainer>
        <InstructionCard>
          <OrderNumber>01</OrderNumber>
          <OrderContainer>
            <OrderTitle>Choose a category</OrderTitle>
            <OrderInstruction>
              First, choose a word category, like animals or movies. The
              computer then randomly selects a secret word from that topic and
              shows you blanks for each letter of the word.
            </OrderInstruction>
          </OrderContainer>
        </InstructionCard>
        <InstructionCard>
          <OrderNumber>02</OrderNumber>
          <OrderContainer>
            <OrderTitle>Guess letters</OrderTitle>
            <OrderInstruction>
              Take turns guessing letters. The computer fills in the relevant
              blank spaces if your guess is correct. If it’s wrong, you lose
              some health, which empties after eight incorrect guesses.
            </OrderInstruction>
          </OrderContainer>
        </InstructionCard>
        <InstructionCard>
          <OrderNumber>03</OrderNumber>
          <OrderContainer>
            <OrderTitle>Win or lose</OrderTitle>
            <OrderInstruction>
              You win by guessing all the letters in the word before your health
              runs out. If the health bar empties before you guess the word, you
              lose.
            </OrderInstruction>
          </OrderContainer>
        </InstructionCard>
      </InstructionContainer>
    </BgImgContainer>
  );
}
