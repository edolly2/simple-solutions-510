import Back from '../_assets/back_2.png';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const QuotePageContainer = styled.main`
  background-repeat: no-repeat;
  background-size: cover;
`;

const QuotePageFormTitle = styled.h2`
  text-align: center;
  font-size: 32px;
`;

const QuotePageForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const QuotePageLabel = styled.label`
  font-size: 16px;
  cursor: pointer;
`;

const QuotePageInput = styled.input`
  padding: 2px 5px;
  border-radius: 4px;
  font-size: 16px;
  /* width: 50%; */
  &::placeholder {
    color: #bebebe;
  }
`;

const QuotePageTextArea = styled.textarea`
  resize: none;
  /* width: 50%; */
`;

const QuotePageFormGroup = styled.div`
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  gap: 5px;
`;

const QuotePageTextAreaGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* border-top: 2px solid black; */
`;

const QuotePageSubmitBtn = styled.button`
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

const QuotePageCancelBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  /* height: 50px; */
  padding: 10px 10px;
  font-size: 16px;
  cursor: pointer;
  border: 2px solid transparent;
  background-color: white;
  color: #ff7300;
  margin-left: 30px;
  &:hover {
    background-color: #b4b4b4;
  }
`;

const QuotePage = () => {
  return (
    <QuotePageContainer style={{ backgroundImage: `url(${Back})` }}>
      <QuotePageForm>
        <QuotePageFormTitle>Get a Free Quote</QuotePageFormTitle>
        <QuotePageFormGroup>
          <QuotePageLabel>First Name</QuotePageLabel>
          <QuotePageInput
            type='text'
            name='firstName'
            placeholder='First Name'
          />
          <QuotePageFormGroup>
            <QuotePageLabel>Last Name</QuotePageLabel>
            <QuotePageInput
              type='text'
              name='lastName'
              placeholder='Last Name'
            />
          </QuotePageFormGroup>
        </QuotePageFormGroup>
        <QuotePageFormGroup>
          <QuotePageLabel>Email</QuotePageLabel>
          <QuotePageInput
            type='email'
            name='email'
            placeholder='Example@email.com'
          />
          <QuotePageFormGroup>
            <QuotePageLabel>Phone Number</QuotePageLabel>
            <QuotePageInput
              type='tel'
              name='phone'
              placeholder='Phone Number'
            />
          </QuotePageFormGroup>
        </QuotePageFormGroup>
        <QuotePageFormGroup>
          <QuotePageLabel>Upload Files</QuotePageLabel>
          <QuotePageInput type='file' name='file' placeholder='Files' />
        </QuotePageFormGroup>
        <QuotePageTextAreaGroup>
          <QuotePageLabel>Detailed Description</QuotePageLabel>
          <QuotePageTextArea rows='10' cols='30' />
        </QuotePageTextAreaGroup>
        <QuotePageFormGroup>
          <QuotePageSubmitBtn type='submit'>Submit</QuotePageSubmitBtn>
          <Link to='/' className='navLink'>
            <QuotePageCancelBtn>Cancel</QuotePageCancelBtn>
          </Link>
        </QuotePageFormGroup>
      </QuotePageForm>
    </QuotePageContainer>
  );
};

export default QuotePage;
