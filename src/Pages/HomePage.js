import React from "react";
import NoteForm from "../components/NoteForm";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import { addNote } from "../store/actions";
const HomePage = () => {
  const dispatch = useDispatch();
  const clickHandler = (values) => {
    dispatch(addNote({ ...values, id: uuid() }));
  };
  return (
    <>
      <h1>Add your Note</h1>
      <NoteForm dispatch={clickHandler} value={{ head: "", text: "" }} />
    </>
  );
};
export default HomePage;
