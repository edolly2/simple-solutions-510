import Background from '../_assets/handyman_back_1.jpeg';
import styled from 'styled-components';
const HomePageContainer = styled.div`
  width: 100%;
  /* padding: 60px; */
  min-height: 70vh;
  position: relative;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
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

const HomePagetitle = styled.h1`
  font-size: 42px;
  text-align: center;
`;

const HomePage = () => {
  return (
    <HomePageContainer style={{ backgroundImage: `url(${Background})` }}>
      <Overlay>
        <HomePagetitle>
          SIMPLE SOLUTIONS <br />
          510
        </HomePagetitle>
      </Overlay>
    </HomePageContainer>
  );
};

export default HomePage;