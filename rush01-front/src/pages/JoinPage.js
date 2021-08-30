import React from "react";
import styled from "styled-components";

const JoinPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;

  button {
    width: 80px;
    text-align: center;
    border: 1px solid #343a3f;
    border-radius: 20px;
    padding: 6px 10px;
    font-weight: 600;
    margin-top: 100px;
    :hover {
      background-color: #343a3f;
      color: #fff;
    }
  }
`;

const JoinForm = styled.form`
  width: 500px;
  margin-top: 130px;
  input {
    width: 100%;
    height: 35px;
    border: 1px solid #ddd;
    padding-left: 10px;
    box-sizing: border-box;
    border-radius: 5px;
  }
`;

function JoinPage() {
  return (
    <JoinPageStyled>
      <JoinForm>
        <label htmlFor="nickname">닉네임</label>
        <input
          type="text"
          name="nickname"
          placeholder="닉네임을 입력해주세요. "
        ></input>
        <label htmlFor="profile">프로필 이미지</label>
        <input type="file" name="profile"></input>
      </JoinForm>
      <button type="button">입력 완료</button>
    </JoinPageStyled>
  );
}

export default JoinPage;
