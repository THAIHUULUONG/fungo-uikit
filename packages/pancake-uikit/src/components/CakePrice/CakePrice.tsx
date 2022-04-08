import React from "react";
import styled from "styled-components";
import LogoRound from "../Svg/Icons/LogoRound";
import Text from "../Text/Text";
import Skeleton from "../Skeleton/Skeleton";
import { Colors } from "../../theme";
import { Flex } from "../Box";

export interface Props {
  color?: keyof Colors;
  cakePriceUsd?: number;
}

const PriceLink = styled.a`
  display: flex;
  align-items: center;
  svg {
    transition: transform 0.3s;
  }
  :hover {
    svg {
      transform: scale(1.2);
    }
  }
`;

const CakePrice: React.FC<Props> = ({ cakePriceUsd, color = "textSubtle" }) => {
  return cakePriceUsd ? (
    <Flex alignItems="center">
      <LogoRound width="24px" mr="8px" />
      <Text color="#fff" bold>{`$${cakePriceUsd.toFixed(3)}`}</Text>
    </Flex>
  ) : (
    <Skeleton width={80} height={24} />
  );
};

export default React.memo(CakePrice);
