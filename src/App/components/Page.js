import styled from "styled-components";
import { THEME } from "../../constants";
import { Box } from "./Box";

const Page = styled.div`
  display: block;
`;

const PageHeader = styled(Box).attrs(() => ({}))`
  background: ${THEME.colors.bg[2]};
  color: ${THEME.colors.fg[1]};
  z-index: 200;
`;

const PageContent = styled(Box)`
  margin: 10px;
  flex-direction: column;
`;

export { Page, PageHeader, PageContent };
