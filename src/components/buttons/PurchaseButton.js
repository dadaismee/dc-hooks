import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

import { Caption2, SmallText } from "../../styles/TextStyles";

export default function PurchaseButton({ title, subtitle }) {
  return (
    <Link to="/src/pages/404.js">
      <Wrapper>
        <IconWrapper>
          <Icon src="/images/icons/credit.svg" className="icon" />
          <Ring src="/images/icons/icon-ring.svg" className="ring" />
        </IconWrapper>
        <TextWrapper>
          <Title>{title || "Get PRO access"}</Title>
          <Subtitle>{subtitle || "$19 per month"}</Subtitle>
        </TextWrapper>
      </Wrapper>
    </Link>
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  align-items: center;
  width: 280px;
  height: 77px;
  background: linear-gradient(180deg, #ffffff 0%, #d9dfff 100%);
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
    0px 20px 40px rgba(23, 0, 102, 0.2),
    inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  padding: 12px;
  display: grid;
  grid-template-columns: 53px auto;
  gap: 20px;
  align-items: center;

  *,
  & {
    transition: 0.8s cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  :hover {
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
      0px 30px 60px rgba(23, 0, 102, 0.5),
      inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.5);
    transform: translateY(-3px);

    .icon {
      transform: scale(1.125);
    }
  }
`;

const Title = styled(Caption2)``;

const Subtitle = styled(SmallText)``;

const IconWrapper = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: linear-gradient(200.44deg, #4316db 13.57%, #9076e7 98.38%);
  box-shadow: 0px 10px 20px rgba(182, 153, 255, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  justify-self: center;
  position: relative;

  ${Wrapper}:hover & {
    filter: hue-rotate(10deg) brightness(150%) saturate(120%);
  }
`;

const Icon = styled.img`
  width: 29px;
  height: 29px;
`;

const TextWrapper = styled.div`
  display: grid;
  gap: 4px;
`;

const Ring = styled.img`
  position: absolute;
  top: -15px;
  left: -16px;

  ${Wrapper}:hover & {
    transform: rotate(30deg) scale(1.125) translate(1px, 2px);
  }
`;
