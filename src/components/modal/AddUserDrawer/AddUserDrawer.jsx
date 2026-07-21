import React from "react";
import "./AddUserDrawer.css";
import useResourceContext from "../../../hooks/useResourceContext";
import Stepper from "./Stepper";
import UserDetailsForm from "./UserDetailsForm";

import CloseIcon from "../../../assets/svg/close.svg"
import ProjectDetailSection from "./ProjectDetailSection";

const AddUserDrawer = ({
    open,
    onClose,

}) => {

    const {
        currentStep,
        handleSubmit,
        goNextStep,
        goPrevStep,
        addProject
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
                        <ProjectDetailSection />
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

                            <button
                                className="btn-primary"
                                onClick={addProject}
                            >
                                + Add New Project
                            </button>
                            <button className="btn-outline" onClick={goPrevStep}>
                                ← Back
                            </button>

                            <button className="btn-primary" onClick={handleSubmit}>
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