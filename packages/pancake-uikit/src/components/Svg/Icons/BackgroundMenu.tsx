import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="375" height="80" viewBox="0 0 375 80" fill="none" {...props}>
<path d="M284.852 7.37573L297.703 28.6109H354.946L368.77 44.4813V104.505H6.42529V43.8108L19.6652 28.6109H77.4923L90.3428 7.37573H284.852Z" fill="#040023" fill-opacity="0.8"/>
<path d="M107.087 7.37573L116.433 18.1051H258.762L268.107 7.37573H107.087Z" fill="white"/>
<path d="M69.7041 4.91699L62.6947 16.5404H70.2882L77.2975 4.91699H69.7041ZM55.8801 4.91699L48.8707 16.5404H56.4642L63.4735 4.91699H55.8801ZM42.0561 4.91699L35.0468 16.5404H42.6402L49.6496 4.91699H42.0561ZM28.4268 4.91699L21.4175 16.5404H29.0109L36.0203 4.91699H28.4268Z" fill="#FFFF00"/>
<path d="M297.508 4.91699L304.517 16.5404H312.111L305.101 4.91699H297.508ZM311.332 4.91699L318.341 16.5404H325.935L318.925 4.91699H311.332ZM325.156 4.91699L332.165 16.5404H339.759L332.749 4.91699H325.156ZM338.98 4.91699L345.989 16.5404H353.583L346.573 4.91699H338.98Z" fill="#FFFF00"/>
    </Svg>
  );
};

export default Icon;
