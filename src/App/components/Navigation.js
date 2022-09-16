import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { Box } from "./Box";
import { Button } from "./Button";
import { THEME } from "../../constants";

function NavItem({ to, title, children }) {
  const { pathname } = useLocation();
  // eslint-disable-next-line no-unused-vars
  const [_, root] = pathname.split("/");

  return (
    <NavButtonItem
      data-testid={`nav-${title.toLowerCase()}`}
      as={Link}
      title={title}
      to={to}
      // Match exact or descendent paths of parent (root)
      // Using transient prop `https://styled-components.com/docs/api#transient-props`
      $isActive={pathname === to || (root && to.startsWith(`/${root}`))}
    >
      {children}
    </NavButtonItem>
  );
}

const Nav = styled(Box).attrs(() => ({
  as: "nav",
}))`
  flex: 1 1 auto;
`;

const NavButtonItem = styled(Button)`
  display: flex;
  background: transparent;
  padding: 14px 16px;
  color: ${THEME.colors.fg[1]};
  background: ${(props) =>
    props.$isActive ? THEME.colors.palette.primary.base : "transparent"};
`;

export { Nav, NavItem };
