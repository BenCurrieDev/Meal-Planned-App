import styled from "styled-components";

import '../../data/styleVars.css';

export const Banner = styled.div`
  position: relative;
  top: var(--navBarTop-height);
  background-color: var(--clr-highlight-dk);
  height: var(--banner-height);
  display: flex;
  
`

export const BannerLogo = styled.div`
  --img-sizer: 0.5;
  
  width: calc(1497px * var(--img-sizer));
  height: calc(447px * var(--img-sizer));
  background-image: url('Logo-White-1497x447.png');
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  margin: auto;

`