import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_hi_list = createAsyncThunk(
  "his/api_v1_hi_list",
  async payload => {
    const response = await apiService.api_v1_hi_list(payload)
    return response.data
  }
)
export const api_v1_hi_create = createAsyncThunk(
  "his/api_v1_hi_create",
  async payload => {
    const response = await apiService.api_v1_hi_create(payload)
    return response.data
  }
)
export const api_v1_hi_retrieve = createAsyncThunk(
  "his/api_v1_hi_retrieve",
  async payload => {
    const response = await apiService.api_v1_hi_retrieve(payload)
    return response.data
  }
)
export const api_v1_hi_update = createAsyncThunk(
  "his/api_v1_hi_update",
  async payload => {
    const response = await apiService.api_v1_hi_update(payload)
    return response.data
  }
)
export const api_v1_hi_partial_update = createAsyncThunk(
  "his/api_v1_hi_partial_update",
  async payload => {
    const response = await apiService.api_v1_hi_partial_update(payload)
    return response.data
  }
)
export const api_v1_hi_destroy = createAsyncThunk(
  "his/api_v1_hi_destroy",
  async payload => {
    const response = await apiService.api_v1_hi_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const hisSlice = createSlice({
  name: "his",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_hi_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_hi_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_hi_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_hi_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_hi_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_hi_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_hi_retrieve.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_hi_retrieve.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_hi_retrieve.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_hi_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_hi_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_hi_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_hi_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_hi_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_hi_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_hi_destroy.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_hi_destroy.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_hi_destroy.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_hi_list,
  api_v1_hi_create,
  api_v1_hi_retrieve,
  api_v1_hi_update,
  api_v1_hi_partial_update,
  api_v1_hi_destroy,
  slice: hisSlice
}
