import React from "react";
import useResourceContext from "../../../hooks/useResourceContext"
import "./UserDetailsForm.css";

import FormField from "./FormField";
import UploadBox from "./UploadBox";

const UserDetailsForm = () => {

    const {
        handleSubmit,
        handleChange
    } = useResourceContext();

    return (
        <div className="user-details-form">
            <form onSubmit={handleSubmit}>
                <section className="form-section">

                    <h3 className="section-title">
                        Basic Information
                    </h3>

                    <div className="form-grid">

                        <FormField
                            label="Employee ID"
                            required
                            placeholder="Enter Employee ID"
                            onChange={handleChange}
                            name="employeeId"
                            group="basicInformation"
                        />

                        <FormField
                            label="Employee Name"
                            required
                            name='employeeName'
                            placeholder="Enter Employee Name"
                            onChange={handleChange}
                            group="basicInformation"
                        />

                        <FormField
                            label="Official Email"
                            type="email"
                            required
                            name="email"
                            placeholder="Enter Official Email"
                            group="basicInformation"
                            onChange={handleChange}
                        />

                        <FormField
                            label="Contact Number"
                            required
                            placeholder="Enter Contact Number"
                            group="basicInformation"
                            onChange={handleChange}
                            name="contactNumber"
                        />

                        <FormField
                            label="LinkedIn"
                            placeholder="Paste LinkedIn Profile URL"
                            group="basicInformation"
                            onChange={handleChange}
                            name="linkedUrl"
                        />

                        <FormField
                            label="Designation"
                            type="select"
                            required
                            name="designation"
                            group="basicInformation"
                            onChange={handleChange}
                            options={[
                                "Consultant",
                                "Senior Consultant",
                                "Principle"
                            ]}
                        />

                    </div>

                </section>



                <section className="form-section">

                    <h3 className="section-title">
                        Organization Details
                    </h3>

                    <div className="form-grid">

                        <FormField
                            label="Department"
                            type="select"
                            required
                            group="organizationDetails"
                            onChange={handleChange}
                            name="department"
                            options={[
                                "Digital Consulting Developement",
                                "Digital Consulting Design Sutdio",
                            ]}
                        />

                        <FormField
                            label="Line Manager"
                            type="select"
                            required
                            group="organizationDetails"
                            onChange={handleChange}
                            name="manager"
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
                            label="Region"
                            type="select"
                            required
                            group="organizationDetails"
                            onChange={handleChange}
                            name="region"
                            options={[
                                "VSI",
                                "MEA",
                                "KSA",
                                "PK",
                                "Oman",
                            ]}
                        />

                        <FormField
                            label="Location"
                            type="select"
                            required
                            group="organizationDetails"
                            onChange={handleChange}
                            name="location"
                            options={[
                                "Karachi",
                                "Lahore",
                                "Islamabad",
                            ]}
                        />

                        <FormField
                            label="Stack"
                            type="select"
                            required
                            group="organizationDetails"
                            onChange={handleChange}
                            name="stack"
                            options={[
                                "React",
                                "Angular",
                                "UI Developer",
                                "Full stack developer",
                                "UI Designer",
                                "UX Design"
                            ]}
                        />

                        <FormField
                            label="Billing Status"
                            type="select"
                            required
                            group="organizationDetails"
                            onChange={handleChange}
                            name="billingInfo"
                            options={[
                                "Billable",
                                "Talent Pool",
                                "Partially Billable",
                            ]}
                        />

                    </div>

                </section>


                <section className="form-section">

                    <h3 className="section-title">
                        Leave Information
                    </h3>

                    <div className="form-grid">

                        <FormField
                            label="Annual Leave"
                            type="number"
                            placeholder="30"
                            group="leaveInformation"
                            onChange={handleChange}
                            name="annualLeave"
                        />

                        <FormField
                            label="Sick Leave"
                            type="number"
                            group="leaveInformation"
                            onChange={handleChange}
                            name="sickLeave"
                            placeholder="15"
                        />

                    </div>

                </section>



                <section className="form-section">

                    <h3 className="section-title">
                        Profile Picture
                    </h3>

                    <UploadBox
                        type="file"
                        name="file"
                        group="uploadDocument"
                        onChange={handleChange}
                    />

                </section>



                <section className="form-section">

                    <h3 className="section-title">
                        Additional Comments
                    </h3>

                    <FormField
                        label="Comments"
                        type="textarea"
                        name="comments"
                        group="additionalInformation"
                        onChange={handleChange}
                        placeholder="Write comments here..."
                    />

                </section>

            </form>
        </div>
    );
};

export default UserDetailsForm;