import styled from "styled-components";
import { Link } from "react-router-dom";

import '../../data/styleVars.css';


export const NavContainer = styled.div`
  margin-top: var(--sp1);
  display: flex;
  justify-content: space-around;
`

export const StyledLink = styled(Link)`
  text-decoration: none;
`

export const NavImage = styled.div`
  --ar: 1.5;
  --size: calc(var(--sp10) * 1.7);

  height: var(--size);
  width: calc(var(--size) * var(--ar));

  background-image: url("${props => props.url}");
  background-position: center;
  background-size: cover;

  display: flex;
  justify-content: center;
  align-items: center;

  > h2 {
    height: 100%;
    width: 100%;
    line-height: var(--size);
    background-color: var(--clr-highlight-lt-mask);
    color: var(--clr-ntrl-dk);
  }
`