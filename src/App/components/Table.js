import styled from "styled-components";
import { THEME } from "../../constants";

const Table = styled.table.attrs(() => ({
  cellSpacing: 0,
}))``;

const TBody = styled.tbody``;

const Tr = styled.tr`
  &:hover {
    background: ${THEME.colors.fg[1]};
  }
`;

const Th = styled.th`
  padding: 5px;
`;

const Td = styled.td`
  padding: 5px;
  ${(props) => props.align && `text-align: ${props.align};`}
`;

const Thead = styled.thead`
  text-align: left;

  ${Td} {
    font-weight: bold;
  }
`;

export { Table, Thead, TBody, Tr, Th, Td };
