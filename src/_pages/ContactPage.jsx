import { BiEnvelope, BiPhone } from 'react-icons/bi';

import { MdOutlineLocationOn } from 'react-icons/md';
import styled from 'styled-components';

const ContactPageContainer = styled.main`
  background-color: pink;
  padding: 30px 0;
`;
const ContactPageTitle = styled.h1`
  font-size: 42px;
  text-align: center;
  /* padding: 30px 0 0 0; */
`;

const ContactPageInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin: 60px 0;
`;

const ContactPageInfoContent = styled.div`
  font-size: 16px;
  display: flex;
  flex-direction: column;
`;

const ContactPageInfoGroup = styled.div`
  display: flex;
  align-items: center;
`;

const ContactPageInfoContentTitle = styled.h3`
  font-size: 24px;
  font-weight: 600;
`;

const ContactPageForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
const ContactPageFormTitle = styled.h2`
  text-align: center;
  font-size: 32px;
`;
const ContactPageFormLabel = styled.label`
  font-size: 16px;
  cursor: pointer;
`;
const ContactPageFormInput = styled.input`
  padding: 2px 5px;
  border-radius: 4px;
  font-size: 16px;
  /* width: 50%; */
  &::placeholder {
    color: #bebebe;
  }
`;
const ContactPageFormTextArea = styled.textarea`
  resize: none;
`;

const ContactPageFormGroup = styled.div`
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  gap: 5px;
`;

const ContactPageTextAreaGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* border-top: 2px solid black; */
`;

const ContactPageFormSubmitBtn = styled.button`
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

const ContactPage = () => {
  return (
    <ContactPageContainer>
      <ContactPageTitle>Contact Us</ContactPageTitle>
      <ContactPageInfoContainer>
        <ContactPageInfoContent>
          <ContactPageInfoContentTitle>Phone</ContactPageInfoContentTitle>
          <ContactPageInfoGroup>
            <BiPhone /> (210)289-7932
          </ContactPageInfoGroup>
        </ContactPageInfoContent>
        <ContactPageInfoContent>
          <ContactPageInfoContentTitle>Email</ContactPageInfoContentTitle>
          <ContactPageInfoGroup>
            <BiEnvelope /> Example@email.com
          </ContactPageInfoGroup>
        </ContactPageInfoContent>
        <ContactPageInfoContent>
          <ContactPageInfoContentTitle>Address</ContactPageInfoContentTitle>
          <ContactPageInfoGroup>
            <MdOutlineLocationOn /> 999 New Street Bellevue, NE 68123
          </ContactPageInfoGroup>
        </ContactPageInfoContent>
      </ContactPageInfoContainer>
      <ContactPageForm>
        <ContactPageFormTitle>
          We Would Love to Hear From You!
        </ContactPageFormTitle>
        <ContactPageFormGroup>
          <ContactPageFormGroup>
            <ContactPageFormLabel>First Name</ContactPageFormLabel>
            <ContactPageFormInput
              type='text'
              name='contactFirstName'
              placeholder='First Name'
            />
          </ContactPageFormGroup>
          <ContactPageFormGroup>
            <ContactPageFormLabel>Last Name</ContactPageFormLabel>
            <ContactPageFormInput
              type='text'
              name='contactLastName'
              placeholder='Last Name'
            />
          </ContactPageFormGroup>
        </ContactPageFormGroup>
        <ContactPageFormGroup>
          <ContactPageFormLabel>Email</ContactPageFormLabel>
          <ContactPageFormInput
            type='email'
            name='email'
            placeholder='Example@email.com'
          />
          <ContactPageFormGroup>
            <ContactPageFormLabel>Phone Number</ContactPageFormLabel>
            <ContactPageFormInput
              type='tel'
              name='phone'
              placeholder='Phone Number'
            />
          </ContactPageFormGroup>
        </ContactPageFormGroup>
        <ContactPageTextAreaGroup>
          <ContactPageFormLabel>Your Thoughts...</ContactPageFormLabel>
          <ContactPageFormTextArea rows='10' cols='30' />
        </ContactPageTextAreaGroup>
        <ContactPageFormGroup>
          <ContactPageFormSubmitBtn type='submit'>
            Send
          </ContactPageFormSubmitBtn>
        </ContactPageFormGroup>
      </ContactPageForm>
    </ContactPageContainer>
  );
};

export default ContactPage;
