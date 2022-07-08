import React from "react";
import {Route,Routes } from 'react-router-dom'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import Step4 from './Step4'
import Result from './Result'
import "./App.css";
import Submit from "./Submit";

function App() {
  return (
    
      <Routes>
      <Route path="/" element={<Step1/>}/>
      <Route path="/step2" element={<Step2/>}/>
      <Route path="/step2/step3" element={<Step3/>}/>
      <Route path="/step2/step3/step4" element={<Step4/>}/>
      <Route path="/step2/step3/step4/result" element={<Result/>}/>
      <Route path="/step2/step3/step4/result/submit" element={<Submit/>}/>
      </Routes>
    
  )
}

export default App;
