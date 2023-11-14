// StepCounter.js
import React from "react";
import { useSelector } from "react-redux";

const StepCounter = () => {
  const completedSteps = useSelector((state) => state.completedSteps);
  return (
    <div>
      <ul className="steps w-full">
        <li
          data-content={completedSteps.step1 ? "✓" : "?"}
          className={`step ${
            completedSteps.step1 ? "step-success" : "step-neutral"
          }`}
        >
          Step 1
        </li>
        <li
          data-content={completedSteps.step2 ? "✓" : "?"}
          className={`step ${
            completedSteps.step2 ? "step-success" : "step-neutral"
          }`}
        >
          Step 2
        </li>
        <li
          data-content={completedSteps.step3 ? "✓" : "?"}
          className={`step ${
            completedSteps.step3 ? "step-success" : "step-neutral"
          }`}
        >
          Step 3
        </li>
        <li
          data-content={completedSteps.step4 ? "✓" : "?"}
          className={`step ${
            completedSteps.step4 ? "step-success" : "step-neutral"
          }`}
        >
          Step 4
        </li>
      </ul>
    </div>
  );
};

export default StepCounter;
