import React from "react";

export default ({ values, clickHandler, changeHandler }) => (
  <div className="add-note-wrapper">
    <div className="head_input">
      <label>Head</label>
      <input
        onChange={changeHandler}
        value={values.head}
        className="input"
        name="head"
      />

      {!values.head.length && (
        <small className="error">Please fill the field</small>
      )}
    </div>
    <div className="textarea">
      <textarea
        onChange={changeHandler}
        value={values.text}
        name="text"
        rows="12"
        className="input"
      ></textarea>
      {!values.text && <small className="error">Please fill the field</small>}
    </div>
    <button onClick={clickHandler} className="btn" type="button">
      Submit
    </button>
  </div>
);
