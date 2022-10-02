import styled from "styled-components";

export const Form = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 2rem 3rem;
  width: 90%;
  max-width: 500px;
  row-gap: 2rem;
  border-radius: 10px;
  margin-top: 5rem;
  background-color: white;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`;

export const Label = styled.div`
  width: 100%;
  text-align: center;
  padding: 1rem;
  font-size: 2rem;
  font-weight: 300;
  border-radius: 5px;
`;

export const Button = styled.button`
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
