import React from "react";
import useResourceContext from "../../../hooks/useResourceContext";
import ProjectDetailsForm from "./ProjectDetailsForm";

const ProjectDetailSection = () => {

    const {
        formData,
        handleProjectChange,
        removeProject,
    } = useResourceContext();

    return (
        <>
            {formData.projectDetails.map((project, index) => (

                <ProjectDetailsForm
                    key={index}
                    project={project}
                    index={index}
                    onChange={handleProjectChange}
                    onRemove={removeProject}
                />

            ))}
        </>
    );
};

export default ProjectDetailSection;