import Carousel from '../_components/Carousel';
import styled from 'styled-components';

const ProjectsPageContainer = styled.main`
  background-color: pink;
`;

const ProjectsPage = () => {
  return (
    <ProjectsPageContainer>
      <Carousel />
    </ProjectsPageContainer>
  );
};

export default ProjectsPage;
