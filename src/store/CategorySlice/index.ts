import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '..'
import { Category } from '../../types'
import CATEGORIES from '../../configs/Categories.json';

const CategoryAdapter = createEntityAdapter<Category>({
    selectId: (category) => category.name,
    sortComparer: (a, b) => a.zIndex - b.zIndex,
})

interface StateType {
    selectedCategory: Category | undefined
}

const emptyState = CategoryAdapter.getInitialState<StateType>({ selectedCategory: undefined })
const initialState = CategoryAdapter.setAll(emptyState, CATEGORIES as Category[])

const categorySlice = createSlice({
    name: 'categorySlice',
    initialState,
    reducers: {
        selectCategory(state, action: PayloadAction<Category>) {
            state.selectedCategory = action.payload
        },
    },
})

export const { selectCategory } = categorySlice.actions
export const categorySelectors = CategoryAdapter.getSelectors<RootState>(state => state.categories)
export default categorySlice.reducer