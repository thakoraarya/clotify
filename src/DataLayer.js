import { useContext, useReducer, createContext } from "react";

export const DataLayerContext = createContext();
export const DataLayer = ({ initialState, reducer, children }) => (
    <DataLayer.provider value={useReducer(reducer, initialState)}>
        {children}
    </DataLayer.provider >
)

export const useDataLayerContext =()=> useContext(DataLayerContext);