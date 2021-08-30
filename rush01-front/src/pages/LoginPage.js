import React from "react";
import styled from "styled-components";

const LoginPageStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 100%;
`;

const LoginForm = styled.form`
  width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    width: 300px;
    margin-top: 300px;
    text-align: center;
    border: 2px solid #343a3f;
    border-radius: 20px;
    padding: 10px 50px;
    font-weight: 600;
    :hover {
      background-color: #343a3f;
      color: #fff;
  }
`;

function LoginPage() {
  return (
    <LoginPageStyled>
      <LoginForm>
        <button type="button">Intra Login</button>
      </LoginForm>
    </LoginPageStyled>
  );
}

export default LoginPage;
