import { BiSearch } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
const TopNavContainer = styled.div`
  width: 100%;
  /* min-height: 90px; */
  /* max-height: 90px; */
  background-color: white;
  display: flex;
  padding: 10px 20px;
  align-items: center;
  justify-content: space-between;
`;

const TopNavigation = styled.nav`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  /* gap: 60px; */
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
  color: rgb(0, 0, 41);
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
  border: 2px solid #ff7300;
  border-radius: 6px;
`;

const TopNavigationSearchInput = styled.input`
  border-radius: 4px;
  border: none;
  font-size: 16px;
  padding: 2px 0 2px 10px;
  /* background-color: #ececec; */

  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #bebebe;
  }
`;

const TopNavSearchBtn = styled.button`
  border: none;
  padding: 1.5px 5px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  margin-left: -3px;
  color: white;
  background-color: #ff7300;

  cursor: pointer;
  text-align: center;
  border-left: 2px solid #ff7300;
  &:hover {
    background-color: #ff9640;
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;
  }
`;

const TopNav = () => {
  return (
    <TopNavContainer>
      <TopNavigation>
        <TopNavigationList>
          <TopNavigationListItem>
            <Link to='/' className='navLink active'>
              HOME
            </Link>
          </TopNavigationListItem>
          <TopNavigationListItem>
            <Link to='/about' className='navLink'>
              ABOUT
            </Link>
          </TopNavigationListItem>
          <TopNavigationListItem>
            <Link to='/services' className='navLink'>
              SERVICES
            </Link>
          </TopNavigationListItem>
          <TopNavigationListItem>
            <Link to='/projects' className='navLink'>
              PROJECTS
            </Link>
          </TopNavigationListItem>

          <TopNavigationListItem>
            <Link to='/help' className='navLink'>
              HELP
            </Link>
          </TopNavigationListItem>
          <TopNavigationListItem>
            <Link to='/contact' className='navLink'>
              CONTACT
            </Link>
          </TopNavigationListItem>
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
