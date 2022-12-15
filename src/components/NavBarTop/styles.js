import styled from "styled-components";
import { NavLink } from "react-router-dom";

import '../../data/styleVars.css';

export const NavBarTop = styled.nav`
  width: 100vw;
  height: var(--navBarTop-height);
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 3;
  background-color: var(--clr-ntrl-dk);
  
`

export const Logo = styled.div`
  background-image: url('logoFull.png');
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  height: var(--navBarTop-height);
  width: calc(var(--navBarTop-height)*1.7);
  margin-left: var(--sp1);
`

export const NavList = styled.ul`
  display: flex;
  margin-right: var(--sp1);
  
  > li {
    margin-left: var(--sp2);
  }
`

export const StyledNavLink = styled(NavLink)`
  color: var(--clr-ntrl-lt);
  text-decoration: none;
  font-family: var(--ff-secondary);
  font-weight: var(--fw-s1);
  font-size: var(--fs-link);
  transition: color 1s;
  
  &:hover {
    color: var(--clr-highlight-lt);
  }


  &.active {
    color: var(--clr-highlight-lt);
  }
`


