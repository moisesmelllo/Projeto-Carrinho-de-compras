import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isOpen: false, // Modal is initially closed
  // Add other initial state properties if needed
}

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true
    },
    closeModal: (state, action) => {
      state.isOpen = false
    },
  },
})

export const { openModal, closeModal } = modalSlice.actions

export default modalSlice.reducer
