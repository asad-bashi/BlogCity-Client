import styled from "styled-components";

const FormButton = styled.button`
  padding: 1rem;
  font-size: 1.1rem;
  border: none;
  outline: none;
  border-radius: 5px;
  background-color: #009688;
  color: white;
  transition: 100ms ease-in-out;
  &:hover {
    background-color: #004d40;
    cursor: pointer;
  }
`;

export default FormButton;
