import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    achievements: [],
};

const achievementsSlice = createSlice({
    name: 'achievements',
    initialState,
    reducers: {
        addAchievement: (state, action) => {
            // не добавлять дубликаты по id
            const exists = state.achievements.some(a => a.id === action.payload.id);
            if (!exists) {
                state.achievements.push(action.payload);
            }
        },
        resetAchievements: (state) => {
            state.achievements = [];
        },
    },
});

export const { addAchievement, resetAchievements } = achievementsSlice.actions;

export default achievementsSlice.reducer;
