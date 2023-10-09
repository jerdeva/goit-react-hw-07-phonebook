import styled from 'styled-components';
// import { Form, ErrorMessage } from 'formik';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  color: green;
`;

export const FormPhB = styled.form`
margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px;
  border: none;
  border-radius: 8px;
  width: 400px;
  background-color: skyblue;
`;

export const LabelStyle = styled.h2`
  display: flex;
  flex-direction: column;
  gap: 4px;
  color: green;
`;

// export const ErrorMessageStyle = styled(ErrorMessage)`
//   color: red;
// `;

export const BtnStyle = styled.button`
  display: flex;
  font-size: 16px;
  font-weight: 600;
  align-items: center;
  color: #fed84c;
  background-color: green;
  border: 1px solid whitesmoke;
  border-radius: 8px;
  width: 108px;
  padding: 16px 12px;
  margin-top: 12px;
`;

export const InputSt = styled.input`
padding: 8px 12px;
background-color: lightyellow;
border: none;
border-radius: 8px;
width: 300px;
color: green;
font-size: 16px;
font-weight: 500;
`
