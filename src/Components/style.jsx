import styled, { css } from 'styled-components'

export const ParentComponent = styled.div`
  align-items: center;
  border-radius: 5px;
  border: 1px solid gray;
  display: flex;
  flex-direction: column;
  height: auto;
  justify-content: center;
  margin: 0 auto;
  padding: 20px;
  width: 350px;
`
export const LogoContainer = styled.div`
  width: 250px;
`
export const Image = styled.img`
  width: 100%;
`
export const Form = styled.form`
  width: 100%;
  height: auto;
`
export const Input = styled.input`
  padding: 10px;
  width: 94%;
  margin-top: 10px;
  border-radius: 5px;
  border: 1px dotted gray;
  color: #fff;
  &:focus {
    outline: none;
  }
  color: ${({ fontColor }) => fontColor};
`
export const ButtonContainer = styled.div`
  width: 100%;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
`

export const Button = styled.button`
  width: 45%;
  color: #eee;
  border: none;
  font-size: .9em;
  letter-spacing: 1px;
  padding: 10px;
  background-color: ${({main})=> main ? "#7367f0" : "#ea5455" };
  box-shadow: ${({main})=> main && "0 3px 6px 0 rgb(115 103 240 / 40%)"};
  ${({main}) => main && css`
   &:hover{
    background-color: green;
   }`
  };
`
