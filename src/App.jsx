import React, { useState } from 'react'
import Container from './components/Container';
import Display from './components/Display';
import Buttons from './components/Buttons';
const App = () => {
  const [calVal, setcalVal] = useState("");
const onButtonClick = (buttonText) =>
  {
    if(buttonText === "C"){
      setcalVal("");
    }
    else if(buttonText === "=")
      {
        const res = eval(calVal);
        setcalVal(res);
      }
      else{
        const newDispVal = calVal + buttonText;
        setcalVal(newDispVal);
      }
  }
  return (
    <Container>
     <Display displayValue = {calVal}></Display>
     <Buttons onButtonClick={onButtonClick}></Buttons>
    </Container>
  );
}

export default App