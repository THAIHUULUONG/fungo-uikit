import styled from "styled-components";
import { Flex } from "../Box";

const StyledBottomNav = styled(Flex)`
  bottom: 0px;
  background: #040023;
  width: 100%;
  height: 80px;
  padding-top:2px;
  align-items: center;
  justify-content: space-around;
  position: relative;
  padding-bottom: env(safe-area-inset-bottom);
  html[data-useragent*="TokenPocket_iOS"] & {
    padding-bottom: 45px;
  }
  z-index: 20;
  @media only screen and (max-width: 600px) {
    padding-left:5px;
    padding-right:5px;
  }
`;

export default StyledBottomNav;
