import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 21 18" fill="none" {...props}>
<path fill="none" d="M16.93 16.99H3.56C2.14 16.99 1 15.84 1 14.43V3.56001C1 2.14001 2.15 1 3.56 1H16.93C18.35 1 19.49 2.15001 19.49 3.56001V14.43C19.49 15.84 18.34 16.99 16.93 16.99Z" stroke="white" strokeWidth="1.5" stroke-linecap="round" strokeLinejoin="round"/>
<path d="M1.39999 5.95996H19.08" stroke="white" strokeWidth="1.5" stroke-linecap="round" strokeLinejoin="round"/>
<path d="M3.94998 9.6001H7.53" stroke="white" strokeWidth="1.5" stroke-linecap="round" strokeLinejoin="round"/>
    </Svg>
  );
};

export default Icon;
