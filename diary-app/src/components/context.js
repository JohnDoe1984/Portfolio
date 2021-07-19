import React from 'react';

export const Context = React.createContext();

const value = {
    list: []
}

export const StoreProviderComponent = ({ children }) => {
    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider >
    )
}