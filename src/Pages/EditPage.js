import React from "react";
import NoteForm from "../components/NoteForm";
import { useDispatch, useSelector } from "react-redux";
import { editNote } from "../store/actions";
import { useParams } from "react-router-dom";
const EditPage = () => {
  const { id } = useParams();
  const note = useSelector((state) => state.find((el) => el.id === id));
  const dispatch = useDispatch();
  const clickHandler = (values) => {
    dispatch(editNote({ ...values, id }));
  };

  if (note) {
    return (
      <>
        <h1>Edit your note</h1>
        <NoteForm dispatch={clickHandler} value={note} />
      </>
    );
  }
  return <h1>Not found</h1>;
};
export default EditPage;
