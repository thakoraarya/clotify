import { useContext, useReducer, createContext } from "react";
import { initialState } from "./Reducer";

export const DataLayerContext = createContext();
const DataLayer = ({ initialState, reducer, children }) => (
    <DataLayer.provider value={useReducer(reducer, initialState)}>
        {children}
    </DataLayer.provider >
)

export default DataLayer();
export const useDataLayerContext =()=> useContext(DataLayerContext);
// export const initialState();