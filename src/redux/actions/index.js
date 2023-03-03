import { createAction } from "@reduxjs/toolkit";
import { CREATE_USER,DELETE_USER, EDIT_USER } from "./actionTypes";

export const createUser = createAction(CREATE_USER);

export const deleteUser = createAction(DELETE_USER);

export const editUser = createAction(EDIT_USER);