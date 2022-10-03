import styled from "styled-components";
import {
  COLORS,
  FontSize,
  LineHeight,
  FontWeight,
} from "../../css/global/global";

import Reserve from "../../image/checkupReservation1.png";
import Report from "../../image/heeathReport.png";

export default function Planner() {
  return (
    <>
      <Section>
        <Inner>
          <Imgs>
            <Img1></Img1>
            <Img2></Img2>
          </Imgs>

          <Text>
            <Title>건강관리</Title>
            <Sub>
              고객상담에 <br /> 전문성을 더하다
            </Sub>
            <H2r>
              고객 건강종합리포트 관리와 알짜배기만 모은 <br />
              컨설팅 콘텐츠로 양질의 고객 상담이 가능해요.
            </H2r>
            <Body2r>아래 버튼을 눌러 서비스별 화면을 살펴보세요.</Body2r>

            <ChipUl>
              <ChipLi>⚙️ 고객 건강리포트</ChipLi>
              <ChipLi>🧑 통계 영업 노하우 영상</ChipLi>
              <ChipLi>📊 건강통계 세일즈 자료</ChipLi>
            </ChipUl>
          </Text>
        </Inner>
      </Section>
    </>
  );
}

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 128px 240px;
`;

const Inner = styled.div`
  width: 960px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Imgs = styled.div`
  position: relative;
  width: 466px;
  height: 608px;
`;

const Img1 = styled.div`
  position: absolute;
  top: 57px;
  left: 0;
  width: 240px;
  height: 494px;
  background: url(${Reserve}) no-repeat center center/cover;
`;

const Img2 = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 275px;
  height: 608px;
  left: 191px;
  background: url(${Report}) no-repeat center center/cover;
`;

const Text = styled.div`
  width: 375px;
`;

const Title = styled.p`
  font-size: ${FontSize.d4};
  line-height: ${LineHeight.d4};
  font-weight: ${FontWeight.bold};
  color: ${COLORS.brand50};
  margin: 0 0 12px 0;
`;

const Sub = styled.p`
  font-size: ${FontSize.d2};
  line-height: ${LineHeight.d2};
  font-weight: ${FontWeight.bold};
  color: ${COLORS.grey100};
  margin: 0 0 24px 0;
`;

const H2r = styled.p`
  font-size: ${FontSize.h2r};
  line-height: ${LineHeight.h2r};
  font-weight: ${FontWeight.regular};
  color: ${COLORS.grey100};
  margin: 0 0 8px 0;
`;

const Body2r = styled.p`
  font-size: ${FontSize.body2r};
  line-height: ${LineHeight.body2r};
  font-weight: ${FontWeight.regular};
  color: ${COLORS.grey60};
  margin: 0 0 32px 0;
`;

const ChipUl = styled.ul`
  margin: 0;
  padding: 0;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  li:first-child {
    border: 1.5px solid ${COLORS.grey80};
  }
`;

const ChipLi = styled.li`
  font-size: ${FontSize.body1};
  line-height: ${LineHeight.body1};
  font-weight: ${FontWeight.bold};
  color: ${COLORS.grey60};
  padding: 8px 12px;
  border: 1.5px solid ${COLORS.grey20};
  border-radius: 8px;
  margin-right: 4px;
  margin-bottom: 12px;
  cursor: pointer;
  list-style: none;
`;
