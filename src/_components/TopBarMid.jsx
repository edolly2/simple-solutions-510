import { BiEnvelope, BiPhone } from 'react-icons/bi';

import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import Logo from '../_assets/handyman1.png';
import { MdOutlineLocationOn } from 'react-icons/md';
import styled from 'styled-components';

const TopBarMidContent = styled.div`
  font-weight: 600;
  font-size: 16px;
  /* margin-left: 10%; */
  padding: 10px 20px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  flex: 2;
  background-color: rgb(201, 201, 201);
`;

const TopBarMidContentDiv = styled.div`
  display: flex;
  align-items: center;
  white-space: nowrap;
  /* gap: 20px; */
`;

const TopBarMidImg = styled.img`
  width: 75px;
  height: auto;
  cursor: pointer;
`;

const TopBarMidBtn = styled.button`
  /* align-self: center; */
  display: flex;
  align-items: center;
  border-radius: 6px;
  /* height: 50px; */
  padding: 10px 10px;
  font-size: 16px;
  cursor: pointer;
  border: 2px solid transparent;
  background-color: #ff7300;
  color: white;
  &:hover {
    background-color: #ff9640;
  }
`;
const TopBarMidWrapper1 = styled.div`
  border-right: 2px dotted #ff7300;
  padding: 10px;
  min-width: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin: 0;
  padding: 0 20px;
`;
const TopBarMidWrapper2 = styled.div`
  text-align: left;
  font-weight: 800;
  font-size: 18px;
`;

const TopBarP = styled.p`
  font-weight: 200;
  font-size: 14px;
`;

const TopBarMid = () => {
  return (
    <TopBarMidContent>
      <TopBarMidImg src={Logo} alt='Company Logo' />

      <TopBarMidContentDiv>
        <TopBarMidWrapper1>
          <BiPhone className='topBarIcon' />
          <TopBarMidWrapper2>
            (210)289-7932
            <TopBarP>Need Help, Make a Call</TopBarP>
          </TopBarMidWrapper2>
        </TopBarMidWrapper1>
        <TopBarMidWrapper1>
          <BiEnvelope className='topBarIcon' />
          <TopBarMidWrapper2>
            Example@email.com
            <TopBarP>Send Us an Email</TopBarP>
          </TopBarMidWrapper2>
        </TopBarMidWrapper1>
        <TopBarMidWrapper1 style={{ borderRight: 'none' }}>
          <MdOutlineLocationOn className='topBarIcon' />
          <TopBarMidWrapper2>
            Nebraska
            <TopBarP>999 New Street</TopBarP>
          </TopBarMidWrapper2>
        </TopBarMidWrapper1>
      </TopBarMidContentDiv>
      <TopBarMidBtn>
        Get a Quote <HiOutlineArrowNarrowRight style={{ marginLeft: '5px' }} />
      </TopBarMidBtn>
    </TopBarMidContent>
  );
};

export default TopBarMid;
