import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as MoreIcon } from "../../assets/more.svg";
import { useDispatch } from "react-redux";
import { deleteNote } from "../../store/actions";

const MoreNav = ({ id }) => {
  const [open, setOpen] = useState(false);
  const openMoreNav = () => {
    setOpen(!open);
  };
  const dispatch = useDispatch();
  const deletehandler = (e) => {
    e.preventDefault();
    dispatch(deleteNote(id));
  };
  const dropdownRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside, true);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);
  return (
    <>
      <span onClick={openMoreNav} className="more-button">
        <MoreIcon width="16px" />
      </span>
      {open && (
        <div ref={dropdownRef} className="dropdown">
          <a onClick={deletehandler} href="#">
            Delete
          </a>
          <NavLink to={`/edit/${id}`}>Edit</NavLink>
        </div>
      )}
    </>
  );
};
export default MoreNav;
