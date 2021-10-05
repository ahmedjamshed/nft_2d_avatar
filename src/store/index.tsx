import { useState } from "react"
import CategoriesData from "../configs/categoriesData"
import { Category, Trait } from "../types"
import { AppProvider } from "./AppContext"


const Store = (props: any) => {
    const [selectedCategory, setSelectedCategory] = useState<Category>(CategoriesData[0])
    const [avatarTraits, setAvatarTraits] = useState<Trait[]>([
        CategoriesData[0].traits[0],
        CategoriesData[1].traits[0],
        CategoriesData[3].traits[0],
    ])

    return <AppProvider value={{ selectedCategory, setSelectedCategory, avatarTraits }}>
        {props.children}
    </AppProvider>
}
export default Store