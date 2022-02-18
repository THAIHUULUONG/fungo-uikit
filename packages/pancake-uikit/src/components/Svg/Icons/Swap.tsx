import React from "react";
import { useTheme } from "styled-components";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  const theme = useTheme()
  return (
    <Svg viewBox="0 0 25 24" {...props} style={{fill:'none'}}>
<line x1="4.26506" y1="7.00657" x2="7.90248" y2="3.57595" stroke={theme.colors.text} strokeLinecap="round"/>
<path d="M4.5 3L8.5 3L8.5 7" stroke={theme.colors.text} strokeLinecap="round" strokeLinejoin="round"/>
<line x1="0.5" y1="-0.5" x2="5.5" y2="-0.5" transform="matrix(-0.676874 0.736099 0.736099 0.676874 21.1831 16.7075)" stroke={theme.colors.text} strokeLinecap="round"/>
<path d="M16.4734 17.0226L16.524 21.0223L20.5236 20.9717" stroke={theme.colors.text} strokeLinecap="round" strokeLinejoin="round"/>
<rect x="11" y="3.5" width="11" height="11" rx="2.5" stroke={theme.colors.text}/>
<path fillRule="evenodd" clipRule="evenodd" d="M10.5 9H5.5C3.84315 9 2.5 10.3431 2.5 12V18C2.5 19.6569 3.84315 21 5.5 21H11.5C13.1569 21 14.5 19.6569 14.5 18V15H13.5V18C13.5 19.1046 12.6046 20 11.5 20H5.5C4.39543 20 3.5 19.1046 3.5 18V12C3.5 10.8954 4.39543 10 5.5 10H10.5V9Z" stroke={theme.colors.text}/>

    </Svg>
  );
};

export default Icon;
