import styled from "styled-components";
import {
  COLORS,
  FontSize,
  LineHeight,
  FontWeight,
} from "../../css/global/global";

import innobiz from "../../image/innobiz.png";

export default function Footer() {
  return (
    <>
      <Section id="footer">
        <FooterInner>
          <InnerDiv>
            <Title>㈜ 그레이드 헬스체인</Title>

            <Contact>
              <p>
                사업자등록번호:205-81-42749 | 대표 : 이형주
                <br />
                04166 서울특별시 마포구 큰우물로 64, 5층
              </p>
              <p>개인정보 보호 책임자 : 김홍수</p>
              <p>연락 및 문의 : contact@gradehc.com</p>
            </Contact>

            <FooterBlue>
              <a
                href="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/db7a6c38-d4e4-45ee-a3c1-ff063f1d3b79/%EB%A1%9C%EA%B7%B8_%EC%84%9C%EB%B9%84%EC%8A%A4%EC%9D%B4%EC%9A%A9%EC%95%BD%EA%B4%80.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220922T053937Z&X-Amz-Expires=86400&X-Amz-Signature=25c2c3ea647c111ec0b2fd32950cc6959e46a162f2dc3ee9ca628a0ed9e989a5&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22%25EB%25A1%259C%25EA%25B7%25B8_%25EC%2584%259C%25EB%25B9%2584%25EC%258A%25A4%25EC%259D%25B4%25EC%259A%25A9%25EC%2595%25BD%25EA%25B4%2580.pdf%22&x-id=GetObject"
                target="_blank"
              >
                <p>서비스 이용약관</p>
              </a>
              <a
                href="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/610ea6c9-028e-4a8a-b087-682da0c00435/%EB%A1%9C%EA%B7%B8_%EA%B0%9C%EC%9D%B8%EC%A0%95%EB%B3%B4%EC%B2%98%EB%A6%AC%EB%B0%A9%EC%B9%A8.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220922T054051Z&X-Amz-Expires=86400&X-Amz-Signature=adcc015d6c1190f002e54df79a9f4c6b8eeab456868f36ccfb34ea23bae170b4&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22%25EB%25A1%259C%25EA%25B7%25B8_%25EA%25B0%259C%25EC%259D%25B8%25EC%25A0%2595%25EB%25B3%25B4%25EC%25B2%2598%25EB%25A6%25AC%25EB%25B0%25A9%25EC%25B9%25A8.pdf%22&x-id=GetObject"
                target="_blank"
              >
                <p>개인정보 보호방침</p>
              </a>
            </FooterBlue>

            <Copyright>
              ⓒ GradeHealthChain Co. Ltd. All rights reserved
            </Copyright>

            <Innobiz />
          </InnerDiv>
        </FooterInner>
      </Section>
    </>
  );
}

const Section = styled.footer`
  background-color: ${COLORS.grey20};
  box-sizing: border-box;
`;

const FooterInner = styled.div`
  padding-top: 32px;
  padding-bottom: 32px;

  max-width: 960px;
  margin: 0 auto;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const InnerDiv = styled.div`
  margin: 0;
`;

const Title = styled.p`
  font-size: ${FontSize.h2};
  line-height: ${LineHeight.h2};
  font-weight: ${FontWeight.bold};
  color: ${COLORS.grey60};
  margin: 0 0 24px 0;
`;

const Contact = styled.div`
  margin: 0 0 16px 0;
  p {
    font-size: ${FontSize.body2r};
    line-height: ${LineHeight.body2r};
    font-weight: ${FontWeight.regular};
    color: ${COLORS.grey60};
    margin: 0 0 8px 0;
  }
`;

const FooterBlue = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 24px 0;

  a {
    text-decoration: none;
  }
  p {
    font-size: ${FontSize.body2};
    line-height: ${LineHeight.body2};
    font-weight: ${FontWeight.bold};
    color: ${COLORS.brand50};
    margin: 0 24px 0 0;
  }
`;

const Copyright = styled.p`
  font-size: ${FontSize.captionr};
  line-height: ${LineHeight.captionr};
  font-weight: ${FontWeight.regular};
  color: ${COLORS.grey60};
  margin: 0 0 24px 0;
`;

const Innobiz = styled.div`
  background: url(${innobiz}) no-repeat center center/cover;
  width: 65px;
  height: 28px;
  opacity: 0.8;
`;
