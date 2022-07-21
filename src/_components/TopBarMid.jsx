import { BiEnvelope, BiPhone } from 'react-icons/bi';

import Logo from '../_assets/handyman1.png';
import { MdOutlineLocationOn } from 'react-icons/md';
import styled from 'styled-components';

const TopBarMidContent = styled.div`
  font-weight: 600;
  font-size: 16px;
  /* margin-left: 10%; */
  padding: 10px 0;
  cursor: pointer;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 30px;
  flex: 2;
  background-color: blue;
`;

const TopBarMidContentDiv = styled.div`
  display: flex;
  align-items: center;
  white-space: nowrap;
  gap: 30px;
`;

const TopBarMidImg = styled.img`
  width: 90px;
  height: auto;
  cursor: pointer;
`;

const TopBarMidBtn = styled.button`
  /* align-self: center; */
  border-radius: 6px;
  height: 50px;
  padding: 5px 10px;
  font-size: 16px;
  cursor: pointer;
  border: 2px solid #ff7300;
  background-color: transparent;
  color: #ff7300;
  &:hover {
    background-color: #ff7300;
    color: white;
  }
`;

const TopBarMid = () => {
  return (
    <TopBarMidContent>
      <TopBarMidImg src={Logo} alt='Company Logo' />

      <TopBarMidContentDiv>
        <div>
          <BiPhone className='topBarIcon' />
          (210)289-7932
        </div>
        <div>
          <BiEnvelope className='topBarIcon' />
          Example@email.com
        </div>
        <div>
          <MdOutlineLocationOn className='topBarIcon' />
          999 New Street, Bellevue, NE
        </div>
      </TopBarMidContentDiv>
      <TopBarMidBtn>Schedule Consultation</TopBarMidBtn>
    </TopBarMidContent>
  );
};

export default TopBarMid;
