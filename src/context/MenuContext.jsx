import React, { createContext, useState } from 'react';

const MenuContext = createContext();

const MenuProvider = ({ children }) => {

    const [isNotificationOpen, setIsNotificationOpen] = useState(false);
    const [isSettingOpen, setIsSettingOpen] = useState(false);

    const openSettingConfiguration = () => {
        setIsSettingOpen(!isSettingOpen);
    }

    const valueToShare = {
        isNotificationOpen,
        setIsNotificationOpen,
        isSettingOpen,
        setIsSettingOpen,
        openSettingConfiguration
    };

    return (
        <MenuContext.Provider value={valueToShare}>
            {children}
        </MenuContext.Provider>
    );
};

export { MenuProvider };
export default MenuContext;