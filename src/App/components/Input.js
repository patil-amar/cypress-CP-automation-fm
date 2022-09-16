import styled from "styled-components";

const Input = styled.input`
  background: rgba(0, 0, 0, 0.2);
  border: 0;
  color: inherit;
  padding: 4px 10px;
  margin: 0 0 0 5px;
  border-radius: 12px;

  &::placeholder {
    color: inherit;
    opacity: 0.5;
  }
`;

export { Input };
