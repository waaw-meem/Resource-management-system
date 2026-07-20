import React from "react";
import "./AddUserDrawer.css";
import useResourceContext from "../../../hooks/useResourceContext";
import Stepper from "./Stepper";
import UserDetailsForm from "./UserDetailsForm";
import ProjectDetailsForm from "./ProjectDetailsForm";

import CloseIcon from "../../../assets/svg/close.svg"

const AddUserDrawer = ({
    open,
    onClose,
   
}) => {

    const {
        currentStep,
        handleSubmit,
        goNextStep,
        goPrevStep
    } = useResourceContext();

    if (!open) return null;


    return (
        <>

            <div
                className="drawer-overlay"
                onClick={onClose}
            />

            <aside className="drawer">
                <div className="drawer-header">
                    <h2 className="drawer-title">
                        Add New User
                    </h2>
                    <button
                        className="drawer-close"
                        onClick={onClose}
                    >
                        <img src={CloseIcon} alt="Close" />
                    </button>
                </div>
                <Stepper currentStep={currentStep} />
                <div className="drawer-body">

                    {currentStep === 1 && (
                        <UserDetailsForm />
                    )}

                    {currentStep === 2 && (
                        <ProjectDetailsForm />
                    )}

                </div>



                <div className="drawer-footer">

                    {currentStep === 1 ? (
                        <>
                            <button className="btn-outline" onClick={handleSubmit}>
                                Save
                            </button>

                            <button className="btn-primary" onClick={goNextStep}>
                                Next →
                            </button>
                        </>
                    ) : (
                        <>
                            <button className="btn-outline" onClick={goPrevStep}>
                                ← Back
                            </button>

                            <button className="btn-primary">
                                Save
                            </button>
                        </>
                    )}

                </div>

            </aside>

        </>
    );
};

export default AddUserDrawer;