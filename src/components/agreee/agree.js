import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Footer from "../footer/footer";
import {
  COLORS,
  FontSize,
  LineHeight,
  FontWeight,
} from "../../css/global/global";
import Header from "../header/header";

export default function Agree() {
  const payBtn = useRef();

  const [allCheck, setAllCheck] = useState(false);
  const [firstCheck, setFirstCheck] = useState(false);
  const [secondCheck, setSecondCheck] = useState(false);
  const [thirdCheck, setThirdCheck] = useState(false);
  const [fourthCheck, setFourthCheck] = useState(false);

  const allBtnEvent = () => {
    if (allCheck === false) {
      setAllCheck(true);
      setFirstCheck(true);
      setSecondCheck(true);
      setThirdCheck(true);
      setFourthCheck(true);
    } else {
      setAllCheck(false);
      setFirstCheck(false);
      setSecondCheck(false);
      setThirdCheck(false);
      setFourthCheck(false);
    }
  };

  const firstBtnEvent = () => {
    if (firstCheck === false) {
      setFirstCheck(true);
    } else {
      setFirstCheck(false);
    }
  };

  const secondBtnEvent = () => {
    if (secondCheck === false) {
      setSecondCheck(true);
    } else {
      setSecondCheck(false);
    }
  };

  const thirdBtnEvent = () => {
    if (thirdCheck === false) {
      setThirdCheck(true);
    } else {
      setThirdCheck(false);
    }
  };

  const fourthBtnEvent = () => {
    if (fourthCheck === false) {
      setFourthCheck(true);
    } else {
      setFourthCheck(false);
    }
  };

  useEffect(() => {
    if (
      firstCheck === true &&
      secondCheck === true &&
      thirdCheck === true &&
      fourthCheck === true
    ) {
      setAllCheck(true);
      payBtn.current.style = "background-color:#009AE0";
      //   payBtn.current.style="cursor:pointer";
    } else {
      setAllCheck(false);
      payBtn.current.style = "background-color:#cbced2";
    }
  }, [firstCheck, secondCheck, thirdCheck, fourthCheck]);

  const payClick = () => {
    if (
      firstCheck === true &&
      secondCheck === true &&
      thirdCheck === true &&
      fourthCheck === true
    ) {
      window.location.href = "/pay";
    } else {
      alert("약관에 동의해주세요");
    }
  };

  return (
    <>
      <Header />
      <AgreeSection>
        <AgreeInner>
          <AgreeTitle>결제 정보를 확인해주세요</AgreeTitle>
          <PremiumDiv>
            <Plan>프리미엄 플랜</Plan>
            <Month>매월 4,900원</Month>
          </PremiumDiv>
          <AgreeForm>
            <Terms>
              <Term>
                <Checkbox
                  type="checkbox"
                  checked={allCheck}
                  onChange={allBtnEvent}
                  name="agree"
                  id=""
                />
                <TermTxt for="agree">
                  19세 이상이며, 아래의 약관에 모두 동의합니다.
                </TermTxt>
              </Term>

              <Term>
                <Checkbox
                  type="checkbox"
                  checked={firstCheck}
                  onChange={firstBtnEvent}
                  name="agree"
                  id=""
                />
                <TermTxt for="agree">
                  로그 플래너 이용 약관 및 개인정보 처리방침에 동의합니다.
                </TermTxt>
              </Term>

              <Term>
                <Checkbox
                  type="checkbox"
                  checked={secondCheck}
                  onChange={secondBtnEvent}
                  name="agree"
                  id=""
                />
                <TermTxt for="agree">
                  본인의 개인 정보를 제 3자에게 제공하는 데에 동의합니다.
                </TermTxt>
              </Term>

              <Term>
                <Checkbox
                  type="checkbox"
                  checked={thirdCheck}
                  onChange={thirdBtnEvent}
                  name="agree"
                  id=""
                />
                <TermTxt for="agree">
                  본인의 개인 정보를 결제 서비스업체에 제공하는 데에 동의합니다.
                </TermTxt>
              </Term>

              <Term>
                <Checkbox
                  type="checkbox"
                  checked={fourthCheck}
                  onChange={fourthBtnEvent}
                  name="agree"
                  id=""
                />
                <TermTxt for="agree">
                  플랜을 해지하지 않으면 그레이드헬스체인에서 자동으로 플랜을
                  계속하며, 플랜 요금(현 4,900원)이 최초 결제한 수단으로 매월
                  청구됩니다. 플랜은 www.pay.gradehc.com의 ‘마이페이지'에서
                  언제든지 해지할 수 있습니다. 이 경우 결제 주기가 종료될 때
                  플랜이 해지되면, 잔여 기간 동안은 서비스를 계속 이용할 수
                  있습니다. 단, 결제일로부터 n일 이내 로그 플래너 서비스를
                  사용하지 않고 즉시 종료되도록 해지하는 경우 해당 결제 주기에
                  청구된 플랜 요금을 전액 환불 요청 할 수 있습니다.
                </TermTxt>
              </Term>
            </Terms>

            <PayBtn ref={payBtn} onClick={payClick}>
              결제하기
            </PayBtn>
          </AgreeForm>
        </AgreeInner>
      </AgreeSection>
      <Footer />
    </>
  );
}

const AgreeSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;

const AgreeInner = styled.div`
  padding: 128px 0;
  margin: 0 auto;
  display: flex;
  width: 400px;
  flex-direction: column;
  justify-content: space-between;
`;

const AgreeTitle = styled.p`
  text-align: center;
  font-size: ${FontSize.d3};
  line-height: ${LineHeight.d3};
  font-weight: ${FontWeight.bold};
  margin: 0 0 48px 0;
`;

const AgreeForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Terms = styled.ul`
  margin: 0 0 24px 0;
  padding: 0;

  li:first-child {
    padding-bottom: 16px;
    border-bottom: 1px solid ${COLORS.grey20};
  }
`;

const Term = styled.li`
  display: flex;
  align-items: flex-start;
  margin: 0 0 16px 0;
`;

const Checkbox = styled.input`
  /* width: 24px;
  height: 24px; */
  margin: 6px 12px 0 0;
`;

const TermTxt = styled.label`
  font-size: ${FontSize.body1r};
  line-height: ${LineHeight.body1r};
  font-weight: ${FontWeight.body1r};
  color: ${COLORS.grey100};
`;

const PayBtn = styled.button`
  height: 60px;
  font-size: ${FontSize.h2};
  line-height: ${LineHeight.h2};
  font-weight: ${FontWeight.bold};
  text-align: center;
  background-color: ${COLORS.grey30};
  color: #fff;
  border: none;
  border-radius: 12px;
  margin: 0;
`;

const PremiumDiv = styled.div`
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  align-items: center;
  padding: 24px;
  height: 75px;
  margin: 0 0 24px 0;
  border-radius: 12px;
  background-color: ${COLORS.grey10};
`;

const Plan = styled.p`
  font-size: ${FontSize.h2};
  line-height: ${LineHeight.h2};
  font-weight: ${FontWeight.bold};
  color: ${COLORS.grey100};
  margin: 0;
`;

const Month = styled.p`
  font-size: ${FontSize.h2r};
  line-height: ${LineHeight.h2r};
  font-weight: ${FontWeight.regular};
  color: ${COLORS.grey100};
  margin: 0;
`;
