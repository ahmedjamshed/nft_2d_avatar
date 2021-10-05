import { createContext } from "react";
import CategoriesData from "../configs/categoriesData";
import { Category, Trait } from "../types";

const PLACEHOLDER = {
    selectedCategory: CategoriesData[0],
    setSelectedCategory: (cat: Category) => {},
    avatarTraits: new Array<Trait>()
} 

const AppContext = createContext(PLACEHOLDER)
export const AppProvider = AppContext.Provider
export default AppContext