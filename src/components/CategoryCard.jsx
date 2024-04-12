import styled from "styled-components";
import { useNavigate } from "react-router-dom";

// STYLING WITH STYLED COMPONENTS
const Card = styled.div`
  padding: 4.8rem 1.8rem;
  background-color: #2463ff;
  color: white;
  text-align: center;
  font-size: 3.6rem;
  border-radius: 2.4rem;

  @media (max-width: 640px) {
    padding: 2.8rem 1.8rem;
  }
`;

// CATEGORY CARD COMPONENT
export default function CategoryCard({ categoryName }) {
  // Invoke useNavigate for routing to different pages
  const nav = useNavigate();

  return (
    <Card onClick={() => nav(`/hangman/${categoryName}`)}>{categoryName}</Card>
  );
}
