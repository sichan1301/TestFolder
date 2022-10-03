import styled from "styled-components";
import {
  COLORS,
  FontSize,
  LineHeight,
  FontWeight,
} from "../../css/global/global";
import Email from "../../image/email.png";

export default function Contact() {
  return (
    <>
      <Section id="contact">
        <Inner>
          <Text>
            <Title>연락 및 문의</Title>
            <Sub>
              문의사항이 있으신가요? <br /> <span>contact@gradehc.com</span>으로
              연락해주세요.
            </Sub>
          </Text>

          <Img></Img>
        </Inner>
      </Section>
    </>
  );
}

const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 128px 240px;
`;

const Inner = styled.div`
  margin: 0 auto;
  max-width: 960px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.p`
  font-size: ${FontSize.d2};
  line-height: ${LineHeight.d2};
  font-weight: ${FontWeight.bold};
  color: ${COLORS.grey100};
  margin: 0 0 24px 0;
`;

const Sub = styled.p`
  margin: 0;
  font-size: ${FontSize.h2r};
  line-height: ${LineHeight.h2r};
  font-weight: ${FontWeight.regular};
  color: ${COLORS.grey100};
  span {
    color: ${COLORS.brand50};
  }
`;

const Img = styled.div`
  background: url(${Email}) no-repeat center center/cover;
  width: 260px;
  height: 260px;
`;
