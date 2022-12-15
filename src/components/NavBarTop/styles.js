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
  background-color: var(--clr-highlight-dk);
  
`

export const Logo = styled.div`
  background-image: url('LogoIcon-White-303x306.png');
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  height: calc(var(--navBarTop-height)*0.7);
  width: calc(var(--navBarTop-height)*0.7);
  margin-left: var(--sp1);


`

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  margin-right: var(--sp1);
  
  > li {
    margin-left: var(--sp2);
    
  }
`

export const StyledNavLink = styled(NavLink)`
  color: var(--clr-wht);
  text-decoration: none;
  height: var(--navBarTop-height);
  font-family: var(--ff-secondary);
  font-weight: var(--fw-s2);
  font-size: var(--fs-link);
  transition: color 1s;

  
  &:hover {
    text-decoration: underline;
  }


  &.active {
    text-decoration: underline;
  }
`


