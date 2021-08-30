import styled, { createGlobalStyle } from "styled-components";
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import LoginPage from "../src/pages/LoginPage";
import JoinPage from "../src/pages/JoinPage";

const GlobalStyle = createGlobalStyle`
  html, body, ul, li, input, button, a {
    all: unset;
    list-style: none;
  }

  a, button {
    cursor: pointer;
  }

  body, .App {
    width: 100%;
    height: 100vh;
  }

  #root {
    width: 100%;
    height: 100vh;
    font-family: 'Noto Sans', sans-serif;
  }
`;

const Header = styled.header`
  text-align: center;
  margin-top: 60px;
`;

function App() {
  return (
    <div className="App">
      <Header>
        <h1>Indian Poker</h1>
      </Header>
      <BrowserRouter>
        <Route path="/" exact component={LoginPage} />
        <Route path="/join" component={JoinPage} />
      </BrowserRouter>
      <GlobalStyle />
    </div>
  );
}

export default App;
