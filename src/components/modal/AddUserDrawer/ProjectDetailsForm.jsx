import React from "react";
import "./ProjectDetailsForm.css";

import FormField from "./FormField";
import UploadBox from "./UploadBox";
import useResourceContext from "../../../hooks/useResourceContext"


const ProjectDetailsForm = ({
    project,
    index,
    onChange,
    onRemove,
}) => {

    const {
        handleChange,
    } = useResourceContext()
    return (
        <div className="project-details-form">

            <section className="form-section">

                <div className="d-flex justify-content-between align-items-center">

                    <h3 className="section-title">
                        Project {index + 1}
                    </h3>

                    {
                        index > 0 && (

                            <button
                                type="button"
                                className="btn btn-danger btn-sm"
                                onClick={() => onRemove(index)}
                            >
                                Remove
                            </button>

                        )
                    }

                </div>

                <div className="form-grid">

                    <FormField
                        label="Project Name"
                        type="select"
                        required
                        onChange={(e) => onChange(index, e)}
                        name="projectName"
                        group="projectDetails"
                    />

                    <FormField
                        label="Project Manager"
                        type="select"
                        required
                        onChange={(e) => onChange(index, e)}
                        name="projectManager"
                        group="projectDetails"
                        options={[
                            "Sohail Ahmed",
                            "Muhammad Daniyal Aslam",
                            "Muhammad Hammad",
                            "Osama",
                            "Hira Majid",
                            "Arsalan Qamar",
                        ]}
                    />

                    <FormField
                        label="Client"
                        type="select"
                        required
                        onChange={(e) => onChange(index, e)}
                        name="client"
                        group="projectDetails"
                        options={[
                            "VSI",
                            "MEA",
                            "KSA",
                            "PK",
                            "Oman",
                        ]}

                    />

                    <FormField
                        label="Allocation"
                        type="select"
                        required
                       onChange={(e) => onChange(index, e)}
                        name="allocation"
                        group="projectDetails"
                        options={[
                            "VSI",
                            "MEA",
                            "KSA",
                            "PK",
                            "Oman",
                        ]}

                    />

                    <FormField
                        label="Billing Status"
                        type="select"
                        required
                        onChange={(e) => onChange(index, e)}
                        name="billingStatus"
                        group="projectDetails"
                        options={[
                            "100%",
                            "Partially",
                            "Talent Pool",
                        ]}
                    />

                    <FormField
                        label="Project Role"
                        type="select"
                        required
                        name="projectRole"
                        onChange={(e) => onChange(index, e)}
                        group="projectDetails"
                        options={[
                            "Consultant",
                            "Designer",
                            "Developer",
                        ]}
                    />

                </div>

            </section>



            <section className="form-section">

                <h3 className="section-title">
                    Project Duration
                </h3>

                <div className="form-grid">

                    <FormField
                        label="Start Date"
                        type="date"
                        required
                        onChange={(e) => onChange(index, e)}
                        name="startDate"
                        group="projectDetails"

                    />

                    <FormField
                        label="End Date"
                        type="date"
                        onChange={(e) => onChange(index, e)}
                        name="endDate"
                        group="projectDetails"
                    />

                    <FormField
                        label="Working Hours"
                        type="number"
                        placeholder="8"
                        onChange={(e) => onChange(index, e)}
                        name="workingHours"
                        group="projectDetails"
                    />

                    <FormField
                        label="Utilization (%)"
                        type="number"
                        placeholder="100"
                        onChange={(e) => onChange(index, e)}
                        name="utilization"
                        group="projectDetails"
                    />

                </div>

            </section>



            <section className="form-section">

                <h3 className="section-title">
                    Supporting Documents
                </h3>

                <UploadBox
                    type="file"
                    name="documents"
                    group="projectDetails"
                    onChange={(e) => onChange(index, e)}
                    title="Upload Project Documents"
                    description="Drag & Drop files here or click to browse"
                    supportedFormats="PDF, DOCX, XLSX (Max 10 MB)"
                />

            </section>


            <section className="form-section">

                <h3 className="section-title">
                    Project Comments
                </h3>

                <FormField
                    label="Comments"
                    type="textarea"
                    placeholder="Write project comments here..."
                    onChange={(e) => onChange(index, e)}
                    name="comments"
                    group="projectDetails"
                />

            </section>

        </div>
    );
};

export default ProjectDetailsForm;