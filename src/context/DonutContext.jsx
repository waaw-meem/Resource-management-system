import React, { createContext, useMemo, useState } from "react";
import { useGetResourcesQuery } from "../store/slices/Resources";

const DonutContext = createContext();

function DonutProvider({ children }) {
    const { data: resources } = useGetResourcesQuery();

    /* ---------------- Dashboard Charts ---------------- */

    const developmentResources = useMemo(() => {
        return resources?.filter(
            (resource) => resource.department === "Development"
        ) || [];
    }, [resources]);

    const studioResources = useMemo(() => {
        return resources?.filter(
            (resource) => resource.department === "Studio"
        ) || [];
    }, [resources]);

    const developmentCount = useMemo(() => {
        return developmentResources.reduce((acc, resource) => {
            acc[resource.stack] = (acc[resource.stack] || 0) + 1;
            return acc;
        }, {});
    }, [developmentResources]);

    const studioCount = useMemo(() => {
        return studioResources.reduce((acc, resource) => {
            acc[resource.stack] = (acc[resource.stack] || 0) + 1;
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