import Background from '../_assets/handyman_back_2.jpg';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
const HomePageContainer = styled.main`
  width: 100%;
  /* padding: 60px; */
  min-height: 69.5vh;
  position: relative;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  overflow: hidden;
  /* margin: 60px; */
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(99, 99, 99, 0.5);
  backdrop-filter: blur(2px);
`;

const HomePageTitle = styled.h1`
  font-size: 42px;
  text-align: center;
  padding: 30px 0;
`;

const HomePageLeftContainer = styled.div`
  width: 50%;
  height: 50%;
  margin-top: auto;
  margin-bottom: auto;
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const LeftContainerTitle = styled.h2`
  font-size: 32px;
`;
const LeftContainerP = styled.p`
  font-size: 14px;
`;
const LeftContainerBtnGroup = styled.div`
  display: flex;
  gap: 30px;
`;
const LeftContainerBtnLeft = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  /* height: 50px; */
  padding: 10px 10px;
  font-size: 16px;
  cursor: pointer;
  border: 2px solid transparent;
  background-color: #ff7300;
  color: white;
  min-width: 152px;
  max-width: 152px;
  white-space: nowrap;
  &:hover {
    background-color: #ff9640;
  }
`;

const LeftContainerBtnRight = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  /* height: 50px; */
  padding: 10px 10px;
  font-size: 16px;
  cursor: pointer;
  border: 2px solid transparent;
  background-color: white;
  color: #ff7300;
  min-width: 152px;
  max-width: 152px;
  white-space: nowrap;
  &:hover {
    background-color: #b4b4b4;
  }
`;

const HomePage = () => {
  return (
    <HomePageContainer style={{ backgroundImage: `url(${Background})` }}>
      <Overlay>
        <HomePageTitle>SIMPLE SOLUTIONS 510</HomePageTitle>
        <HomePageLeftContainer>
          <LeftContainerTitle>
            Your Most Qualified Handyman Service Provider
          </LeftContainerTitle>
          <LeftContainerP>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            libero commodi quis ab unde architecto illum ipsum, dolorum suscipit
            id. Accusamus asperiores aliquid tenetur hic?
          </LeftContainerP>
          <LeftContainerBtnGroup>
            <LeftContainerBtnLeft>Book Appointment</LeftContainerBtnLeft>
            <Link to='/contact' className='navLink'>
              <LeftContainerBtnRight>Contact Us</LeftContainerBtnRight>
            </Link>
          </LeftContainerBtnGroup>
        </HomePageLeftContainer>
      </Overlay>
    </HomePageContainer>
  );
};

export default HomePage;
