import { BiSearch } from 'react-icons/bi';
import styled from 'styled-components';
const TopNavContainer = styled.div`
  width: 100%;
  /* min-height: 90px; */
  /* max-height: 90px; */
  background-color: #555;
  display: flex;
  padding: 10px 30px;
  align-items: center;
  justify-content: space-between;
`;

const TopNavigation = styled.nav`
  display: flex;
  gap: 60px;
`;
const TopNavigationList = styled.ul`
  display: flex;
  align-items: center;
  gap: 30px;
`;
const TopNavigationListItem = styled.li`
  font-size: 16px;
  cursor: pointer;
  font-weight: 600;
  &:hover {
    color: #ff7300;
  }
  &.active {
    color: #ff7300;
  }
`;

const TopNavigationSearch = styled.div`
  display: flex;
  align-items: center;
`;

const TopNavigationSearchInput = styled.input`
  border-radius: 4px;
  border: none;
  font-size: 16px;
  padding: 2px 0 2px 10px;

  &:focus {
    outline: none;
  }
`;

const TopNavSearchBtn = styled.button`
  border: none;
  padding: 1.5px 5px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  margin-left: -3px;
  cursor: pointer;
  text-align: center;
  background-color: #ff7300;
`;

const TopNav = () => {
  return (
    <TopNavContainer>
      <TopNavigation>
        <TopNavigationList>
          <TopNavigationListItem className='active'>HOME</TopNavigationListItem>
          <TopNavigationListItem>ABOUT</TopNavigationListItem>
          <TopNavigationListItem>MY WORK</TopNavigationListItem>
          <TopNavigationListItem>FAQs</TopNavigationListItem>
          <TopNavigationListItem>CONTACT</TopNavigationListItem>
        </TopNavigationList>

        <TopNavigationSearch>
          <TopNavigationSearchInput
            type='search'
            name='search'
            id='search'
            placeholder='Search...'
          />
          <TopNavSearchBtn type='submit'>
            <BiSearch className='searchIcon' />
          </TopNavSearchBtn>
        </TopNavigationSearch>
      </TopNavigation>
    </TopNavContainer>
  );
};

export default TopNav;
