import styled from 'styled-components';

const FooterContainer = styled.footer`
  width: 100%;
  min-height: 250px;
  background-color: rgb(0, 0, 41);
  color: white;
  padding: 30px 0;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

const FooterCol1 = styled.div`
  flex: 1;
  margin-right: 20px;
  padding: 0 60px;
`;

const FooterCol1Title = styled.h4`
  font-size: 20px;
`;
const FooterColsTitle = styled.h4`
  font-size: 18px;
  color: #ff7300;
`;
const FooterCol2 = styled.div`
  flex: 1;
`;
const FooterCol3 = styled.div`
  flex: 1;
`;
const FooterCol4 = styled.div`
  flex: 1;
`;
const FooterSocial = styled.div``;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterCol1>
        <FooterCol1Title>Simple Solutions 510</FooterCol1Title>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
          temporibus ea quod soluta libero iste enim veniam quis debitis? Ab
          alias consequuntur minima officia amet!
        </p>
        <FooterSocial>SOCIAL MEDIA ICONS</FooterSocial>
      </FooterCol1>
      <FooterCol2>
        <FooterColsTitle>Our Services</FooterColsTitle>
      </FooterCol2>
      <FooterCol3>
        <FooterColsTitle>Quick Links</FooterColsTitle>
      </FooterCol3>
      <FooterCol4>
        <FooterColsTitle>Information</FooterColsTitle>
      </FooterCol4>
    </FooterContainer>
  );
};

export default Footer;
