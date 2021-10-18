import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { RootState } from '..'
import { UsedAvatar } from '../../types'

const BASE_URL = `${process.env.PUBLIC_URL}/api`;

const UsedAvatarsAdapter = createEntityAdapter<UsedAvatar>({
    selectId: (trait) => trait.uniqueID,
})

export const getID = createAsyncThunk('usedAvatarSlice/getID', async (uniqueID: string, { getState }) => {
    const response = await axios.get(`${BASE_URL}/`, { params: { uniqueID } })
    return { id: uniqueID, status: response.data['result'] }
})

export const insertID = createAsyncThunk('usedAvatarSlice/insertID', async (uniqueID: string, { getState }) => {
    const data = { uniqueID }
    const response = await axios.post<any>(`${BASE_URL}/`, data)
    return { id: uniqueID, status: response.data['result'] }
})

const initialState = UsedAvatarsAdapter.getInitialState()
const usedAvatarSlice = createSlice({
    name: 'usedAvatarSlice',
    initialState,
    reducers: {
        // upsertUsedAvatar: UsedAvatarsAdapter.updateOne
    },
    extraReducers: (builder) => {
        // builder
        //     .addCase(getID.fulfilled, (state, action) => {
        //         if (action.payload)
        //             UsedAvatarsAdapter.upsertOne(state, action.payload)
        //     })
        //     .addCase(insertID.fulfilled, (state, action) => {
        //         if (action.payload)
        //             UsedAvatarsAdapter.upsertOne(state, action.payload)
        //     })
    },
})

// export const { upsertUsedAvatar } = usedAvatarSlice.actions
export const usedAvatarsSelectors = UsedAvatarsAdapter.getSelectors<RootState>(state => state.usedAvatars)
export default usedAvatarSlice.reducer