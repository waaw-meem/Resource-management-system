import React, { createContext, useMemo } from "react";
import { useGetResourcesQuery } from "../store/slices/Resources";

const DonutContext = createContext();

function DonutProvider({ children }) {
    const { data: resources } = useGetResourcesQuery();

    /* ---------------- Dashboard Charts ---------------- */

    const developmentResources = useMemo(() => {
        return resources?.filter(
            (resource) => resource.userDetails.organizationDetails.department === "Digital Consulting Developement"
        ) || [];
    }, [resources]);

    const studioResources = useMemo(() => {
        return resources?.filter(
            (resource) => resource.userDetails.organizationDetails.department === "Studio"
        ) || [];
    }, [resources]);

    const developmentCount = useMemo(() => {
        return developmentResources.reduce((acc, resource) => {
            acc[resource.userDetails.organizationDetails.stack] = (acc[resource.userDetails.organizationDetails.stack] || 0) + 1;
            return acc;
        }, {});
    }, [developmentResources]);

    const studioCount = useMemo(() => {
        return studioResources.reduce((acc, resource) => {
            acc[resource.userDetails.organizationDetails.stack] = (acc[resource.userDetails.organizationDetails.stack] || 0) + 1;
            return acc;
        }, {});
    }, [studioResources]);

    const developmentLabels = Object.keys(developmentCount);
    const developmentSeries = Object.values(developmentCount);

    const studioLabels = Object.keys(studioCount);
    const studioSeries = Object.values(studioCount);



    const valueToShare = {

        developmentLabels,
        developmentSeries,

        studioLabels,
        studioSeries,

        resources,


    };

    return (
        <DonutContext.Provider value={valueToShare}>
            {children}
        </DonutContext.Provider>
    );
}

export { DonutProvider };
export default DonutContext;