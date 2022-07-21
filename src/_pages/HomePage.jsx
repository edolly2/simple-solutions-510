import Background from '../_assets/handyman_back_1.jpeg';
import styled from 'styled-components';
const HomePageContainer = styled.div`
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
`;

const HomePage = () => {
  return (
    <HomePageContainer style={{ backgroundImage: `url(${Background})` }}>
      <Overlay>
        <HomePageTitle>
          SIMPLE SOLUTIONS <br />
          510
        </HomePageTitle>
      </Overlay>
    </HomePageContainer>
  );
};

export default HomePage;
