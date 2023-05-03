import { createContext, useState, useEffect } from "react";

// import PRODUCTS from '../helper/shop-data.json'
import SHOP_DATA from "../helper/shop-data";
import { addCollectionAndDocument, getCategoriesAndDocuments } from "../utils/firebase/firebase";

export const CategoriesContext = createContext({
    categoriesMap: [],
});
export const CategoriesProvider = ({children}) => {
    const [categoriesMap, setCategoriesMap] = useState({});
    // useEffect(() => {
    //     addCollectionAndDocument("categories", SHOP_DATA)
    // },[])


    useEffect(() => {
        const getCategoriesMap = async () =>{
            const categoryMap = await getCategoriesAndDocuments();
           
            setCategoriesMap(categoryMap)
        }
        getCategoriesMap();
    },[])
    
    const value = {categoriesMap}
    return(
        <CategoriesContext.Provider value={value}>
            {children}
        </CategoriesContext.Provider>
    )
}