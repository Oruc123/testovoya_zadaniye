import * as types from "./constants";

export const addNote = (note) => (dispatch) => {
  dispatch({ type: types.ADD_NOTE, payload: note });
};
export const deleteNote = (id) => (dispatch) => {
  dispatch({ type: types.DELETE_NOTE, payload: id });
};

export const editNote = (note) => (dispatch) => {
  dispatch({ type: types.EDIT_NOTE, payload: note });
};
