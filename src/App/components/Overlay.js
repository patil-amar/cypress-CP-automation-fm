import styled from "styled-components";

const Overlay = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  background: rgba(255, 255, 255, 0.5);
  z-index: 100;
`;

export { Overlay };
