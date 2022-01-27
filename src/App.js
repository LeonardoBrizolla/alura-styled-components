import React, { useState } from "react";

import { ThemeProvider } from "styled-components";
import { TemaEscuro, TemaClaro } from "./Components/UI/temas";
import SwitcherTema from './Components/SwitcherTema';
import Cabecalho from "./Components/Cabecalho";
import Container from "./Components/Container";
import { GlobalStyle } from "./Components/GlobalStyle";
import { ButtonTema } from "./Components/UI";

function App() {
  const [tema, setTema] = useState(true);

  return (
    <ThemeProvider theme={tema ? TemaClaro : TemaEscuro}>
      <GlobalStyle />
      <ButtonTema onClick={() => setTema(oldTema => !!!oldTema)}>
        <SwitcherTema tema={tema}/>
      </ButtonTema>
      <Cabecalho />
      <Container />
    </ThemeProvider>
  );
}

export default App;
