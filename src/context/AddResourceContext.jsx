import { createContext, React, useState } from "react";
import { useAddUserMutation } from "../store/slices/Resources";

const addResourceContext = createContext()

function ResourceProvider({ children }) {

    const [
        addUser,
        {
            isLoading,
            isSuccess,
            isError,
            error,
        },
    ] = useAddUserMutation();

    /* ---------------- Stepper ---------------- */

    const [currentStep, setCurrentStep] = useState(1);

    const goNextStep = () => {
        setCurrentStep(prev => Math.min(prev + 1, 2));
    };

    const goPrevStep = () => {
        setCurrentStep(prev => Math.max(prev - 1, 1));
    };

    /* ---------------- Form State ---------------- */

    const [formData, setFormData] = useState({

        userDetails: {

            basicInformation: {
                employeeId: "",
                employeeName: "",
                email: "",
                contactNumber: "",
                linkedUrl: "",
                designation: "",
            },

            organizationDetails: {
                department: "",
                manager: "",
                location: "",
                region: "",
                stack: "",
                billingInfo: "",
            },

            leaveInformation: {
                annualLeave: "",
                sickLeave: "",
            },

            uploadDocument: {
                file: "",
            },

            additionalInformation: {
                comments: "",
            },

        },

        projectDetails: [
            {
                projectName: "",
                projectManager: "",
                client: "",
                allocation: "",
                billingStatus: "",
                projectRole: "",
                startDate: "",
                endDate: "",
                workingHours: "",
                utilization: "",
                comments: "",
                documents: null,
            },
        ],

    });

    /* ---------------- User Details ---------------- */

    const handleChange = (e) => {

        const { name, value, dataset } = e.target;

        setFormData(prev => ({
            ...prev,

            userDetails: {

                ...prev.userDetails,

                [dataset.group]: {

                    ...prev.userDetails[dataset.group],

                    [name]: value,

                },

            },

        }));
    };

    /* ---------------- Project Details ---------------- */

    const handleProjectChange = (index, e) => {

        const { name, value } = e.target;

        setFormData(prev => {

            const updatedProjects = [...prev.projectDetails];

            updatedProjects[index] = {

                ...updatedProjects[index],

                [name]: value,

            };

            return {

                ...prev,

                projectDetails: updatedProjects,

            };

        });

    };

    const addProject = () => {

        setFormData(prev => ({

            ...prev,

            projectDetails: [

                ...prev.projectDetails,

                {
                    projectName: "",
                    projectManager: "",
                    client: "",
                    allocation: "",
                    billingStatus: "",
                    projectRole: "",
                    startDate: "",
                    endDate: "",
                    workingHours: "",
                    utilization: "",
                    comments: "",
                    documents: null,
                },

            ],

        }));

    };

    const removeProject = (index) => {

        setFormData(prev => ({

            ...prev,

            projectDetails: prev.projectDetails.filter(
                (_, i) => i !== index
            ),

        }));

    };

    /* ---------------- Submit ---------------- */

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await addUser(formData).unwrap();

            console.log("User added successfully:", response);

            alert("Resource added successfully!");


            setFormData({
                userDetails: {

                    basicInformation: {
                        employeeId: "",
                        employeeName: "",
                        email: "",
                        contactNumber: "",
                        linkedUrl: "",
                        designation: "",
                    },

                    organizationDetails: {
                        department: "",
                        manager: "",
                        location: "",
                        region: "",
                        stack: "",
                        billingInfo: "",
                    },

                    leaveInformation: {
                        annualLeave: "",
                        sickLeave: "",
                    },

                    uploadDocument: {
                        file: "",
                    },

                    additionalInformation: {
                        comments: "",
                    },

                },

                projectDetails: [
                    {
                        projectName: "",
                        projectManager: "",
                        client: "",
                        allocation: "",
                        billingStatus: "",
                        projectRole: "",
                        startDate: "",
                        endDate: "",
                        workingHours: "",
                        utilization: "",
                        comments: "",
                        documents: null,
                    },
                ],

            });

        } catch (err) {
            console.error("Failed to add resource:", err);

            alert(
                err?.data?.message || "Something went wrong!"
            );
        }
    };

    /* ---------------- Context ---------------- */

    const valueToShare = {
        currentStep,
        goNextStep,
        goPrevStep,

        formData,
        setFormData,

        handleChange,
        handleProjectChange,

        addProject,
        removeProject,

        handleSubmit,

    };

    return (
        <addResourceContext.Provider value={valueToShare}>
            {children}
        </addResourceContext.Provider>
    );
}

export { ResourceProvider };
export default addResourceContext;