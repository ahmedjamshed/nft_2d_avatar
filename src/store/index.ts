// import { useEffect, useState } from "react"
// import CategoriesData from "../configs/categoriesData"
// import { Category, Trait } from "../types"
// import { AppProvider } from "./AppContext"


// const Store = (props: any) => {
//     const [selectedCategory, setSelectedCategory] = useState<Category>(CategoriesData[0])
//     const [avatarTraits, setAvatarTraits] = useState<Map<string, Trait>>(new Map<string, Trait>())

//     useEffect(() => {
//         const map = new Map().set(CategoriesData[0].name, CategoriesData[0].traits[0])
//             .set(CategoriesData[1].name, CategoriesData[1].traits[0])
//         setAvatarTraits(map)
//     }, [])

//     return <AppProvider value={{ selectedCategory, setSelectedCategory, avatarTraits }}>
//         {props.children}
//     </AppProvider>
// }
// export default Store

import { configureStore } from '@reduxjs/toolkit'
import AvatarSlice from './AvatarSlice'
import CategorySlice from './CategorySlice'
import TraitSlice from './TraitSlice'
import UsedAvatarsSlice from './UsedAvatarsSlice'

const store = configureStore({
  reducer: {
    categories: CategorySlice,
    traits: TraitSlice,
    avatar: AvatarSlice,
    usedAvatars: UsedAvatarsSlice
  },
})
export type RootState = ReturnType<typeof store.getState>
export default store