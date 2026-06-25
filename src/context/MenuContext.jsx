import React, { createContext, useState } from 'react';

const MenuContext = createContext();

const MenuProvider = ({ children }) => {

    const [isNotificationOpen, setIsNotificationOpen] = useState(false);

    const valueToShare = {
        isNotificationOpen,
        setIsNotificationOpen
    };

    return (
        <MenuContext.Provider value={valueToShare}>
            {children}
        </MenuContext.Provider>
    );
};

export { MenuProvider };
export default MenuContext;