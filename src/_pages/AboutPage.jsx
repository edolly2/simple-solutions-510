import Story from '../_assets/handyman-story.jpg';
import styled from 'styled-components';
const AboutPageContainer = styled.main`
  background-color: pink;
  display: flex;
  flex-direction: column;
`;

const AboutPageTitle = styled.h1`
  font-size: 42px;
  text-align: center;
  padding: 30px 0;
`;

const AboutPageStoryContainer = styled.div`
  display: flex;
  width: 100%;
  flex: 1;
  background-color: red;
  padding: 30px;
`;
const AboutPageStoryLeft = styled.div`
  flex: 1;
`;
const AboutPageStoryTitle = styled.h3``;
const AboutPageStoryRight = styled.div`
  flex: 1;
`;
const AboutPageStoryImg = styled.img``;
const AboutPageChooseContainer = styled.div`
  display: flex;
  width: 100%;
  flex: 1;
  background-color: blue;
  padding: 30px;
`;
const AboutPageChooseLeft = styled.div`
  flex: 1;
`;

const AboutPageChooseImg = styled.img``;

const AboutPageChooseRight = styled.div`
  flex: 1;
`;

const AboutPageChooseTitle = styled.h3``;

const AboutPage = () => {
  return (
    <AboutPageContainer>
      <AboutPageTitle>ABOUT US</AboutPageTitle>
      <AboutPageStoryContainer>
        <AboutPageStoryLeft>
          <AboutPageStoryTitle>Our Story</AboutPageStoryTitle>
        </AboutPageStoryLeft>
        <AboutPageStoryRight>
          <AboutPageStoryImg src={Story} alt='#' />
        </AboutPageStoryRight>
      </AboutPageStoryContainer>
      <AboutPageChooseContainer>
        <AboutPageChooseLeft></AboutPageChooseLeft>
        <AboutPageChooseRight>
          <AboutPageChooseTitle>Why Choose Us?</AboutPageChooseTitle>
        </AboutPageChooseRight>
      </AboutPageChooseContainer>
    </AboutPageContainer>
  );
};

export default AboutPage;
