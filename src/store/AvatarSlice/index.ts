import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import { RootState } from '..'
import { Trait } from '../../types'
import TRAITS from '../../configs/Traits.json';
import CATEGORIES from '../../configs/Categories.json';

const AvatarAdapter = createEntityAdapter<Trait>({
    selectId: (trait) => trait.category, // category id to apply only one trait from a category.
    sortComparer: (a, b) => { 
        const zIndexA = CATEGORIES.find((cat) => cat.name === a.category)?.zIndex || 0
        const zIndexB = CATEGORIES.find((cat) => cat.name === b.category)?.zIndex || 0
        return zIndexA - zIndexB
    },
})

const emptyState = AvatarAdapter.getInitialState()
const initialState = AvatarAdapter.setAll(emptyState, TRAITS.slice(0, 2) as Trait[])
const avatarSlice = createSlice({
    name: 'avatarSlice',
    initialState,
    reducers: {
        upsertTraitToAvatar: AvatarAdapter.upsertOne,
        removeTraitFromAvatar: AvatarAdapter.removeOne,
        resetAvatar: () => initialState
    },
})

export const { upsertTraitToAvatar, removeTraitFromAvatar, resetAvatar } = avatarSlice.actions
export const avatarSelectors = AvatarAdapter.getSelectors<RootState>(state => state.avatar)
export default avatarSlice.reducer