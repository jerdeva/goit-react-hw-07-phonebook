import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 8px auto;
  color: green;
  width: 400px;
  background-color:skyblue;
  padding:8px;
  border-radius:8px ;
`;
export const LabelSt = styled.label`
/* margin-bottom: 8px; */
font-size: 20px;
font-weight: 400;
text-align: center;
margin-bottom: 12px;
`

export const InputSt = styled.input`
  padding: 8px 12px;
  background-color: lightyellow;
  border: none;
  border-radius: 8px;
  width: 300px;
  color: green;
  font-size: 16px;
  font-weight: 500;
  margin-top: 8px;
`;


export default Wrapper;

