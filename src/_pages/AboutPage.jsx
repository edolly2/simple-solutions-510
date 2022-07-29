import Choose from '../_assets/choose.jpg';
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
  padding: 60px;
  /* justify-content: center; */
`;
const AboutPageStoryLeft = styled.div`
  flex: 1;
`;
const AboutPageStoryTitle = styled.h3`
  font-size: 24px;
  font-weight: 600;
`;

const AboutPageStoryLeftP = styled.p`
  font-size: 16px;
`;

const AboutPageStoryRight = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  /* margin-left: 30px; */
`;
const AboutPageStoryImg = styled.img`
  width: 400px;
  height: auto;
  background-color: black;
  /* transform: rotate(45deg); */
`;
const AboutPageChooseContainer = styled.div`
  display: flex;
  width: 100%;
  flex: 1;
  background-color: blue;
  padding: 60px;
`;
const AboutPageChooseLeft = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  /* margin-right: 30px; */
  /* padding: 30px; */
`;

const AboutPageChooseImg = styled.img`
  width: 400px;
  height: auto;
`;

const AboutPageChooseRight = styled.div`
  flex: 1;
`;

const AboutPageChooseTitle = styled.h3`
  font-size: 24px;
  font-weight: 600;
`;

const AboutPageChooseRightP = styled.p`
  font-size: 16px;
`;

const AboutPage = () => {
  return (
    <AboutPageContainer>
      <AboutPageTitle>ABOUT US</AboutPageTitle>
      <AboutPageStoryContainer>
        <AboutPageStoryLeft>
          <AboutPageStoryTitle>Our Story</AboutPageStoryTitle>
          <AboutPageStoryLeftP>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab qui
            saepe vero corrupti autem temporibus quam libero ipsa expedita
            impedit, assumenda dolorem ducimus accusantium eum id unde adipisci
            tempore quo provident quidem placeat. Placeat modi quisquam
            voluptate incidunt quod? Officia tenetur, excepturi hic error
            quaerat cum iste porro voluptates modi in fugit placeat ipsam
            necessitatibus repudiandae eos voluptatem mollitia, aperiam
            similique optio quis accusamus, eveniet qui nihil. Eius eveniet nisi
            tenetur error tempora nihil. Doloremque.
          </AboutPageStoryLeftP>
        </AboutPageStoryLeft>
        <AboutPageStoryRight>
          <AboutPageStoryImg src={Story} alt='#' />
        </AboutPageStoryRight>
      </AboutPageStoryContainer>
      <AboutPageChooseContainer>
        <AboutPageChooseLeft>
          <AboutPageChooseImg src={Choose} alt='#' />
        </AboutPageChooseLeft>
        <AboutPageChooseRight>
          <AboutPageChooseTitle>Why Choose Us?</AboutPageChooseTitle>
          <AboutPageChooseRightP>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis ut
            quibusdam, est delectus magnam vero impedit ipsa omnis quidem
            tempora ipsam vitae placeat iusto necessitatibus quasi ea facilis
            illo repudiandae hic! Architecto hic veritatis dignissimos veniam
            distinctio maiores vel aut blanditiis, nemo in animi, at ullam
            tempore rerum facere sequi quis delectus, eligendi nisi!
            Exercitationem laudantium nisi reiciendis. Fugiat sapiente quidem
            officia sequi eos blanditiis animi incidunt! Rem nulla perspiciatis
            odio? Maiores, eligendi officia. Corrupti.
          </AboutPageChooseRightP>
        </AboutPageChooseRight>
      </AboutPageChooseContainer>
    </AboutPageContainer>
  );
};

export default AboutPage;
