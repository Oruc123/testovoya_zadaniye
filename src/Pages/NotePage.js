import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Content from "../components/NoteContent";

const NotePage = () => {
  const { id } = useParams();
  const note = useSelector((state) => state.find((el) => el.id === id));
  return <Content note={note} />;
};
export default NotePage;
