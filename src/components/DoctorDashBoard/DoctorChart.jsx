import styled from 'styled-components';
import InputText, { Input } from '../Input/InputText';
import Dropdown from '../Dropdown/Dropdown';

const SignupContainer = styled.div`
  width: 750px;
  height: 750px;
  border-radius: 7.5px;
  background-color: #ffffff;
  border: 1.5px solid #0064FF;
  position: relative;
  box-shadow: 0px 9px 18px rgba(0, 0, 0, 0.1);
`;

const Divider = styled.div`
  width: 675px;
  height: 0.75px;
  background-color: #D9D9D9;
  margin-top: 7.5px;
  margin-left: 22.5px;
  margin-right: auto;
`;

const Title = styled.h1`
  font-size: 27px;
  font-family: 'Spoqa Han Sans Neo', 'sans-serif';
  font-weight: 700;
  margin-left: 23px;
  margin-top: 18px;
`;

const InputFieldsContainer = styled.div`
  display: flex;
  justify-content: space-between; 
  margin-top: 23px; 
  margin-left: 97px;
  gap: 15px; 
  width: 525px;  
`;

const EmailInputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3.75px;
  width: 525px; 
  margin-left: 97.5px; 
  margin-top: 22.5px;
`;

const EmailInput = styled(Input)`
  width: 150%;
`;

const VerifyButton = styled.button`
  width: 97.5px;
  height: 37.5px;
  background-color: #f0f0f0;
  border: 0.75px solid #BBBBBB;
  border-radius: 7.5px;
  font-family: 'Spoqa Han Sans Neo', 'sans-serif';
  font-size: 12px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  width: 210px;
  height: 45px;
  background-color: #3592FF;
  border-radius: 7.5px;
  color: white;
  font-size: 16.5px;
  border: none;
  cursor: pointer;
  position: absolute;
  font-family: 'Spoqa Han Sans Neo', 'sans-serif';
  margin-top: 30px;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
`;

const DoctorChart = () => {

    // 소속병원 선택
  const gender = [
    "남성", "여성"
  ];

  const therapist =[
    "오민혁",""

  ];

  return (
    <SignupContainer>
      <Title>환자 차트 작성</Title>
      <Divider />
      <InputFieldsContainer>
        <InputText label="질병 분류 번호 *" />
        <Dropdown label="성별 *" items={gender} />
      </InputFieldsContainer>
      <InputFieldsContainer>
        <InputText label="환자 성함 *" />
        <InputText label="환자 생년월일 *" />
      </InputFieldsContainer>
      <InputFieldsContainer>
        <InputText label="환자 전화번호*" />
        <Dropdown label="담당 치료사 *" items={gender} />
      </InputFieldsContainer>
      <Button>가입하기</Button>
    </SignupContainer>
  );
};

export default DoctorChart;