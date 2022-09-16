import styled from "styled-components";

const Box = styled.div`
  position: relative;
  display: flex;
  flex-direction: ${(props) => props.horizontal && "row"};
  flex-direction: ${(props) => props.vertical && "column"};
  padding: ${(props) => (props.padding || []).map((p) => `${p}px`).join(" ")};
  margin: ${(props) => (props.margin || []).map((p) => `${p}px`).join(" ")};
  justify-content: ${(props) => props.justify && props.justify};
  align-items: ${(props) => props.align && props.align};
`;

export { Box };
