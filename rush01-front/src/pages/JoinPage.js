import React, { useState } from "react";
import styled from "styled-components";

const JoinPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;

  button {
    width: 100px;
    text-align: center;
    border: 1px solid #343a3f;
    border-radius: 20px;
    padding: 9px 10px;
    font-weight: 600;
    margin-top: 100px;
    :hover {
      background-color: #343a3f;
      color: #fff;
    }
  }
`;

const JoinForm = styled.form`
  width: 600px;
  margin-top: 130px;
`;

JoinForm.Item = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  .field_title {
    width: 150px;
  }
  input {
    width: 100%;
    height: 35px;
    border: 1px solid #ddd;
    padding-left: 10px;
    box-sizing: border-box;
    border-radius: 5px;
  }
  .textview {
    width: calc(100% - 112px);
  }
  input[type="file"] {
    display: none;
  }
  .file_button {
    margin-left: 10px;
    display: inline-block;
    border: 1px solid #ccc;
    width: 100px;
    height: 35px;
    box-sizing: border-box;
    text-align: center;
    line-height: 33px;
    border-radius: 5px;
    cursor: pointer;
  }
`;

function JoinPage() {
  const [profile, setProfile] = useState("");
  const handleFileInputChange = (e) => {
    setProfile(e.target.value);
  };
  return (
    <JoinPageStyled>
      <JoinForm>
        <JoinForm.Item>
          <label class="field_title" htmlFor="nickname">
            닉네임
          </label>
          <input
            type="text"
            name="nickname"
            placeholder="닉네임을 입력해주세요. "
          ></input>
        </JoinForm.Item>
        <JoinForm.Item>
          <label class="field_title">프로필 이미지</label>
          <input type="text" value={profile} disabled class="textview" />
          <label htmlFor="file" class="file_button">
            파일 찾기
            <input
              type="file"
              id="file"
              name="profile"
              onChange={handleFileInputChange}
            ></input>
          </label>
        </JoinForm.Item>
      </JoinForm>
      <button type="button">입력 완료</button>
    </JoinPageStyled>
  );
}

export default JoinPage;
