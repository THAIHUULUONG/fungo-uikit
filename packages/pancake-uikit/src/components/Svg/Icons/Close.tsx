import React from "react";
import { useTheme } from "styled-components";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  const theme = useTheme()
  const renderColor = theme.isDark ? "#FFFFFF" : "#011226"
  return (
    <Svg viewBox="0 0 24 25" {...props} style={{fill:"none"}}>
<path d="M12 22.5C17.5228 22.5 22 18.0228 22 12.5C22 6.97715 17.5228 2.5 12 2.5C6.47715 2.5 2 6.97715 2 12.5C2 18.0228 6.47715 22.5 12 22.5Z" stroke={renderColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 9.5L9 15.5" stroke={renderColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 9.5L15 15.5" stroke={renderColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </Svg>
  );
};

export default Icon;
