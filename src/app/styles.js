import styled from "styled-components";

import '../data/styleVars.css';

export const AppContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: var(--clr-ntrl-lt);
`

export const PageContainer = styled.div`
  width: var(--content-width);
  margin: 0 auto;
  position: relative;
  top: var(--navBarTop-height)
`

