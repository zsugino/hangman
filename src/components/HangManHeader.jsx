import { useParams } from "react-router-dom";
import menu from "../assets/icon-menu.svg";
import heart from "../assets/icon-heart.svg";
import styled from "styled-components";

// STYLING WITH STYLED COMPONENTS
const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
`;

const LeftHeader = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
`;

const RightHeader = styled.div`
  display: flex;
  gap: 1.8rem;
  align-items: center;
`;

const CategoryTitle = styled.h2`
  font-size: 4.8rem;
`;

const LifeNumber = styled.div`
  font-size: 4.8rem;
`;

// HEADER COMPONENT IN HANGMAN PAGE
export default function HangManHeader({ life, toggle, setToggle }) {
  const { subject } = useParams();

  return (
    <HeaderContainer>
      <LeftHeader>
        <div onClick={() => setToggle(!toggle)}>
          <img src={menu} alt="menu icon" />
        </div>
        <CategoryTitle>{subject}</CategoryTitle>
      </LeftHeader>
      <RightHeader>
        <LifeNumber>{life}</LifeNumber>
        <img src={heart} alt="heart icon" />
      </RightHeader>
    </HeaderContainer>
  );
}
