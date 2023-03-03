import { createReducer } from "@reduxjs/toolkit";
import { CREATE_USER, DELETE_USER, EDIT_USER } from "../actions/actionTypes";

const initialState = {
    "user":{
        // "name": "",
        // "email": "",
        // "password": "",
        // "mobNo": null,
        // "photo": "",
        // "vehicle": {
        //   "name": "porsche 911",
        //   "number": "MH 24 Y 5923",
        //   "cNumber": "540804565804",
        //   "bYear": 2010,
        //   "cylenderNo": 6
        // }
      }
}
export const userReducer =createReducer(initialState,(builder)=>{
    builder.addCase(CREATE_USER,(state,action)=>{
        state.user = action.payload
    })
    .addCase(DELETE_USER,(state,action)=>{
        state.user = {}
    })
    // .addCase(EDIT_USER,(state,action)=>{
    //     state.user
    // })
})