
import Container from "./Container";
import ContainerTwo from "./ContainerTwo";
import './App.css'
import { useState } from "react";

function App() {
  const [switchContainer, setSwitchContainer]=useState(false);  
  const [finalScore, setFinalScore]=useState(0)
  return (
   <div className="box">
   {!switchContainer&& <Container setSwitchContainer={setSwitchContainer} switchContainer={switchContainer}  setFinalScore={setFinalScore} finalScore={finalScore}/>}
     {switchContainer && <ContainerTwo finalScore={finalScore}/> }
    
   </div>
  );
}

export default App;
