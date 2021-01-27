import React, { useState, useCallback } from "react";
import Form from "./Form";
const NoteForm = ({ value, dispatch }) => {
  const [values, setValues] = useState(value);
  const changeHandler = useCallback(
    (event) => {
      setValues((prevState) => {
        return { ...prevState, [event.target.name]: event.target.value };
      });
    },
    [values]
  );
  const clickHandler = useCallback(() => {
    if (values.head.length && values.text.length) dispatch(values);
  }, [values]);
  return (
    <Form
      changeHandler={changeHandler}
      clickHandler={clickHandler}
      values={values}
    />
  );
};
export default NoteForm;
