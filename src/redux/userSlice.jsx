
import { createSlice } from "@reduxjs/toolkit";


export const userSlice = createSlice({
    name : "users_state",
    initialState : {
        allusers : []
    },
    reducers : {
        saveAllUsers : (state,action) => {
            state.allusers = action.payload.allusers
        },
        
        addUser : (state,action) => {
            return {
                ...state,
                allusers: [...state.allusers, action.payload.newUser],
            };
        }, 

        deleteUser : (state,action) => {
            let sliceIndex;
            
            for(let i=0;i<state.allusers.length;i++){
                if(state.allusers[i].id === action.payload.id) { sliceIndex=i; break; }
            }

            state.allusers.slice(sliceIndex,1);
        },

        updateUser : (state,action) => {
            const updateUserIndex = state.allusers.findIndex((user) => user.id===action.payload.updatedUser.id);

            if(updateUserIndex != -1){
                const updatedAllUsers = [...state.allusers]
                updatedAllUsers[updateUserIndex] = action.payload.updatedUser;

                return {
                    ...state,
                    allusers : updatedAllUsers,
                };
            }
        }
    },

    
});

export const { saveAllUsers , addUser , deleteUser , updateUser } = userSlice.actions
export default userSlice.reducer