import React from "react";
import { Route, Routes } from "react-router-dom";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Result from "./Result";
import "./App.css";
import Submit from "./Submit";
import StepCounter from "./StepCounter";

function App() {
  return (
    <div className="App container mx-auto lg:w-4/12 md:w-9/12 w-10/12">
      <div className="bg-gray-200 shadow-2xl p-10 rounded-xl">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <StepCounter />
                <Step1 />
              </>
            }
          />
          <Route
            path="/step2"
            element={
              <>
                <StepCounter />
                <Step2 />
              </>
            }
          />
          <Route
            path="/step2/step3"
            element={
              <>
                <StepCounter />
                <Step3 />
              </>
            }
          />
          <Route
            path="/step2/step3/step4"
            element={
              <>
                <StepCounter />
                <Step4 />
              </>
            }
          />
          <Route path="/step2/step3/step4/result" element={<Result />} />
          <Route path="/step2/step3/step4/result/submit" element={<Submit />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
