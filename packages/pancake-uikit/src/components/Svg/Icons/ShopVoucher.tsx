import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="18" height="21" viewBox="0 0 18 21" {...props}>
<path fill="none" d="M14.1987 6.13989H3.86866C2.79866 6.13989 1.91867 6.94989 1.81867 8.01989L1.00868 17.2699C0.898677 18.4699 1.84866 19.5099 3.05866 19.5099H15.0187C16.2287 19.5099 17.1687 18.4799 17.0687 17.2699L16.2587 8.01989C16.1587 6.94989 15.2687 6.13989 14.1987 6.13989Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path fill="none" d="M13.1487 9.22V5.11C13.1487 2.84 11.3087 1 9.0387 1C6.7687 1 4.92871 2.84 4.92871 5.11V9.22" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path fill="none" d="M6.46875 13.3301L8.17877 15.0501L11.6088 11.6201" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </Svg>
  );
};

export default Icon;
