import React from "react";
import "./Stepper.css";

import StepperCheck from "../../../assets/svg/stepper-check.svg"

const Stepper = ({ currentStep = 1 }) => {
    const steps = [
        {
            id: 1,
            title: "User Details",
        },
        {
            id: 2,
            title: "Project Details",
        },
    ];

    return (
        <div className="stepper">

            {steps.map((step, index) => {

                const completed = currentStep > step.id;
                const active = currentStep === step.id;

                return (

                    <React.Fragment key={step.id}>

                        <div className="step">

                            <div
                                className={`step-circle 
                                ${completed ? "completed" : ""}
                                ${active ? "active" : ""}
                                `}
                            >

                                {completed ? <img src={StepperCheck} alt="Completed" /> : step.id}

                            </div>

                            <span className="step-title">
                                {step.title}
                            </span>

                        </div>

                        {index !== steps.length - 1 && (
                            <div
                                className={`step-line 
                                ${currentStep > step.id ? "line-active" : ""}
                                `}
                            />
                        )}

                    </React.Fragment>

                );
            })}

        </div>
    );
};

export default Stepper;