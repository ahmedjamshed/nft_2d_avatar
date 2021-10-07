import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import { RootState } from '..'
import { Trait } from '../../types'
import TRAITS from '../../configs/Traits.json';

const AvatarAdapter = createEntityAdapter<Trait>({
    selectId: (trait) => trait.category, // category id to apply only one trat from a category.
    sortComparer: (a, b) => a.category.localeCompare(b.category),
})

const emptyState = AvatarAdapter.getInitialState()
const initialState = AvatarAdapter.setAll(emptyState, TRAITS.slice(0, 2) as Trait[])
const avatarSlice = createSlice({
    name: 'avatarSlice',
    initialState,
    reducers: {
        upsertTraitToAvatar: AvatarAdapter.upsertOne,
        removeTraitFromAvatar: AvatarAdapter.removeOne
    },
})

export const { upsertTraitToAvatar, removeTraitFromAvatar } = avatarSlice.actions
export const avatarSelectors = AvatarAdapter.getSelectors<RootState>(state => state.avatar)
export default avatarSlice.reducer