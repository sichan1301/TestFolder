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

export default function Login() {
  const loginBtn = useRef();

  const [account, setAccount] = useState({
    id: "",
    password: "",
  });

  //input에 입력될 때마다 account state값 변경되게 하는 함수
  const onChangeAccount = (e) => {
    setAccount({
      ...account,
      [e.target.name]: e.target.value,
    });
  };

  const loginBtnActive = () => {
    if (account.id.length !== 0 && account.password.length !== 0) {
      loginBtn.current.style = "background-color:#009AE0";
    } else {
      loginBtn.current.style = "background-color:#cbced2";
    }
  };

  useEffect(() => {
    loginBtnActive();
  }, [account]);

  const loginClick = () => {
    if (account.id === "00000000000000" && account.password === "123456") {
      window.location.href = "/agree";
    } else {
      alert("아이디와 비밀번호를 확인해주세요.");
    }
  };

  return (
    <>
      <Header />
      <LoginSection>
        <LoginInner>
          <LoginTitle>
            프리미엄 플랜에 가입하려면 <br /> 로그인이 필요해요
          </LoginTitle>
          <Form>
            <p>설계사 번호</p>
            <input
              type="number"
              placeholder="설계사 번호 14자리를 입력해주세요."
              name="id"
              onChange={onChangeAccount}
            ></input>
            <p>추가 인증번호</p>
            <input
              type="number"
              placeholder="추가 인증번호를 입력해주세요."
              name="password"
              onChange={onChangeAccount}
            ></input>
            <LoginBtn ref={loginBtn} onClick={loginClick}>
              로그인
            </LoginBtn>
          </Form>
          <Forget>
            <ForgetSpan>?</ForgetSpan>
            <ForgetTxt>추가 인증번호 잊어버리셨나요?</ForgetTxt>
          </Forget>
        </LoginInner>
      </LoginSection>
      <Footer />
    </>
  );
}

const LoginSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;

const LoginInner = styled.div`
  padding: 128px 0;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const LoginTitle = styled.p`
  text-align: center;
  font-size: ${FontSize.d3};
  line-height: ${LineHeight.d3};
  font-weight: ${FontWeight.bold};
  margin: 0 0 48px 0;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 0 24px 0;
  p {
    font-size: ${FontSize.body1r};
    line-height: ${LineHeight.body1r};
    font-weight: ${FontWeight.regular};
    margin: 0 0 8px 0;
    color: ${COLORS.grey80};
  }

  input {
    height: 60px;
    padding: 16px;
    box-sizing: border-box;
    border: 1.5px solid ${COLORS.grey20};
    border-radius: 12px;
    margin: 0 0 24px 0;
  }

  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  input::placeholder {
    margin: 0;
    font-size: ${FontSize.h2r};
    line-height: ${LineHeight.h2r};
    font-weight: ${FontWeight.regular};
    color: ${COLORS.grey60};
  }
`;

const LoginBtn = styled.button`
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

const Forget = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ForgetSpan = styled.span`
  color: #fff;
  margin-right: 6px;
  text-align: center;
  line-height: 20px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${COLORS.grey40};
`;

const ForgetTxt = styled.p`
  color: ${COLORS.grey80};
  font-size: ${FontSize.body1r};
  line-height: ${LineHeight.body1r};
  font-weight: ${FontWeight.regular};
  margin: 0;
`;
