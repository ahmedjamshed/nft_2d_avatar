import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { RootState } from '..'
import { UsedAvatar } from '../../types'

const BASE_URL = `${process.env.PUBLIC_URL}/api`;

const UsedAvatarsAdapter = createEntityAdapter<UsedAvatar>({
    selectId: (trait) => trait.id,
})

export const getID = createAsyncThunk('usedAvatarSlice/getID', async (uniqueID: string, { getState }) => {
    const state = getState() as RootState
    if (usedAvatarsSelectors.selectById(state, uniqueID)) {
        return { id: uniqueID }
    }
    const response = await axios.get(`${BASE_URL}/`, { params: { uniqueID } })
    if (!response.data) {
        return { id: uniqueID }
    }
    return { id: '' }
}
)

export const insertID = createAsyncThunk('usedAvatarSlice/insertID', async (uniqueID: string, { getState }) => {
    const state = getState() as RootState
    if (usedAvatarsSelectors.selectById(state, uniqueID)) {
        return { id: uniqueID }
    }
    const response = await axios.post(`${BASE_URL}/`, { uniqueID })
    if (response.data) {
        return { id: uniqueID }
    }
    return { id: '' }
}
)

const initialState = UsedAvatarsAdapter.getInitialState()
const usedAvatarSlice = createSlice({
    name: 'usedAvatarSlice',
    initialState,
    reducers: {
        upsertUsedAvatar: UsedAvatarsAdapter.updateOne
    },
    extraReducers: (builder) => {
        builder
            .addCase(getID.fulfilled, (state, action) => {
                if (action.payload)
                    UsedAvatarsAdapter.upsertOne(state, action.payload)
            })
            .addCase(insertID.fulfilled, (state, action) => {
                if (action.payload)
                    UsedAvatarsAdapter.upsertOne(state, action.payload)
            })
    },
})

export const { upsertUsedAvatar } = usedAvatarSlice.actions
export const usedAvatarsSelectors = UsedAvatarsAdapter.getSelectors<RootState>(state => state.usedAvatars)
export default usedAvatarSlice.reducer