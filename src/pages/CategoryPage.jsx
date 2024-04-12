import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import backIcon from "../assets/icon-back.svg";
import landingImageDesktop from "../assets/background-desktop.svg";
import CategoryCard from "../components/CategoryCard.jsx";

// STYLING WITH STYLED COMPONENTS
const Title = styled.h2`
  font-size: 7.4rem;
  background: -webkit-linear-gradient(#67b6ff, #ffffff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const BgImgContainer = styled.div`
  height: 100vh;
  background-image: url(${landingImageDesktop});
  background-size: cover;
  padding: 4.8rem;
`;

const InstructionHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2.4rem;
  margin-top: 9rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 640px) {
    margin-top: 6rem;
    grid-template-columns: 1fr;
  }
`;

const BackBtn = styled.button`
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  border: none;
  background: linear-gradient(#fe71fe, #7199ff);
`;

const InvBtn = styled.button`
  width: 4rem;
  height: 4rem;
  visibility: hidden;
`;

const BackIcon = styled.img`
  width: 5rem;
  height: 5rem;
`;

// CATEGORY PAGE
export default function CategoryPage() {
  // Invoke useNavigate for routing to different pages
  const nav = useNavigate();

  // Initialize list of hangman categories
  const categoryList = [
    "Movies",
    "TV Shows",
    "Countries",
    "Capital Cities",
    "Animals",
    "Sports",
  ];

  // Prop each category into CategoryCard component and display
  const display = categoryList.map((elem, index) => (
    <CategoryCard key={`item ${index}`} categoryName={elem} />
  ));

  return (
    <BgImgContainer>
      <InstructionHeader>
        <BackBtn onClick={() => nav("/")}>
          <BackIcon src={backIcon} alt="back icon" />
        </BackBtn>
        <Title>Pick a Category</Title>
        <InvBtn>
          <BackIcon src={backIcon} alt="back icon" />
        </InvBtn>
      </InstructionHeader>
      <CategoryContainer>{display}</CategoryContainer>
    </BgImgContainer>
  );
}
