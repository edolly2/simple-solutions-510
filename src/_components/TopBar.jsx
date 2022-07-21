import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaTwitterSquare,
} from 'react-icons/fa';

import { BsCheck } from 'react-icons/bs';
import styled from 'styled-components';

const TopBarContainer = styled.div`
  width: 100%;
  min-height: 30px;
  /* max-height: 30px; */
  background-color: rgb(0, 0, 41);
  color: #ff7300;
  display: flex;
  align-items: center;
  padding: 10px 30px;
  justify-content: space-between;
`;

const TopBarLeft = styled.div`
  font-size: 16px;
  display: flex;
  align-items: center;
  font-weight: 600;
  color: white;
`;

const TopBarSocialContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 1;
  /* margin-right: 10%; */
  gap: 10px;
  font-size: 28px;
`;

const TopBar = () => {
  return (
    <TopBarContainer>
      <TopBarLeft>
        <BsCheck className='checkIcon' />
        Your Trusted Handyman!
      </TopBarLeft>
      <TopBarSocialContainer>
        <FaFacebookSquare className='socialIcon' />
        <FaTwitterSquare className='socialIcon' />
        <FaInstagram className='socialIcon' />
        <FaLinkedin className='socialIcon' />
      </TopBarSocialContainer>
    </TopBarContainer>
  );
};

export default TopBar;
