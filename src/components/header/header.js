import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  COLORS,
  FontSize,
  LineHeight,
  FontWeight,
} from "../../css/global/global";

import LogPlanner from "../../image/logPlanner.png";

export default function Header() {
  return (
    <>
      <Section>
        <HeaderInner>
          <Link to="/">
            <Logo />
          </Link>
          <Link to="/login">
            <Premium>프리미엄 가입</Premium>
          </Link>
        </HeaderInner>
      </Section>
    </>
  );
}

const Section = styled.header`
  height: 74px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
`;

const HeaderInner = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 960px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  background: url(${LogPlanner}) no-repeat center center/cover;
  width: 120px;
  height: 22px;
  cursor: pointer;
`;

const Premium = styled.button`
  padding: 8px 12px;
  margin: 0;
  height: 39px;
  border-radius: 8px;
  color: #fff;
  background-color: ${COLORS.brand50};
  font-size: ${FontSize.body1};
  line-height: ${LineHeight.body1};
  font-weight: ${FontWeight.bold};
  border: none;
  cursor: pointer;
`;
