import styled from "styled-components";
import playIcon from "../assets/icon-play.svg";
import logo from "../assets/logo.svg";
import landingImageDesktop from "../assets/background-desktop.svg";
import { useNavigate } from "react-router-dom";

// STYLING WITH STYLED COMPONENTS
const LandingImgContainer = styled.div`
  height: 100vh;
  background-image: url(${landingImageDesktop});
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Opening = styled.div`
  position: relative;
  padding: 1.2rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  border: solid 2px black;
  width: 45rem;
  height: 40rem;
  gap: 5rem;
  border-radius: 2.4rem;
  background: linear-gradient(rgba(52, 74, 186, 0.8), rgba(0, 20, 121, 0.8));
`;

const Logo = styled.img`
  position: absolute;
  top: -8rem;
  left: 50%;
  transform: translate(-50%, 0);
  max-width: 30rem;
`;

const PlayBtn = styled.button`
  margin-top: 8rem;
  height: 15rem;
  width: 15rem;
  border: none;
  border-radius: 50%;
  background: linear-gradient(#fe71fe, #7199ff);
`;

const PlayIcon = styled.img`
  height: 8rem;
  width: 8rem;
`;

const HowBtn = styled.button`
  font-family: "Mouse Memoirs", sans-serif;
  padding: 0.6rem 4.8rem;
  border: none;
  color: white;
  font-size: 3.5rem;
  background-color: #2463ff;
  border-radius: 1.2rem;
`;

// LANDING PAGE
export default function LandingPage() {
  // Invoke useNavigate for routing to different pages
  const nav = useNavigate();

  return (
    <LandingImgContainer>
      <Opening>
        <Logo src={logo} alt="logo of website" />
        <PlayBtn onClick={() => nav("/category")}>
          <PlayIcon src={playIcon} alt="play button icon" />
        </PlayBtn>
        <HowBtn onClick={() => nav("/instruction")}>How to Play</HowBtn>
      </Opening>
    </LandingImgContainer>
  );
}
