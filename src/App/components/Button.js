import styled from "styled-components";
import { THEME } from "../../constants";

const BaseButton = styled.button`
  border: 0;
  background: transparent;
  color: inherit;
  cursor: pointer;
`;

const Button = styled(BaseButton)`
  background: ${THEME.colors.palette.primary.base};
  color: ${THEME.colors.palette.primary.fg};
  width: auto;
  padding: 10px 14px;
  align-items: center;
  justify-content: center;
  display: flex;

  &:hover {
    background: ${THEME.colors.palette.primary.rollover};
  }

  &:active {
    background: ${THEME.colors.palette.primary.active};
  }

  &:disabled {
    background: ${THEME.colors.palette.primary.disabled};
  }

  svg {
    padding-right: 5px;
  }
`;

const ButtonIcon = styled(Button)`
  height: 30px;
  width: 30px;
  padding: 0;
  justify-content: center;
`;

export { Button, BaseButton, ButtonIcon };
