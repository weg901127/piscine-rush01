import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html, body, ul, li, input, button, a {
    all: unset;
    list-style: none;
  }
  a, button {
    cursor: pointer;
  }
  #root {
    width: 100%;
    height: 100%;
    font-family: 'Noto Sans', sans-serif;
  }
`;

function App() {
  return (
    <div className="App">
      <GlobalStyle />
    </div>
  );
}

export default App;
