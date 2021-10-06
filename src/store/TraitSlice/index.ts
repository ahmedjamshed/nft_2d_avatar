import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import { RootState } from '..'
import { Trait } from '../../types'
import TRAITS from '../../configs/Traits.json';

const TraitAdapter = createEntityAdapter<Trait>({
    selectId: (trait) => trait.id,
    sortComparer: (a, b) => a.id.localeCompare(b.id),
  })

const emptyState = TraitAdapter.getInitialState()
const initialState = TraitAdapter.setAll(emptyState, TRAITS as Trait[])
const traitSlice = createSlice({
  name: 'traitSlice',
  initialState,
  reducers: {},
})

// export const { } = categorySlice.actions
export const traitSelectors = TraitAdapter.getSelectors<RootState>(state => state.traits)
export default traitSlice.reducer