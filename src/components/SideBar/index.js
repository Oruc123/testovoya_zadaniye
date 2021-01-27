import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import MoreNav from "./MoreNav";
const SideBar = () => {
  const notes = useSelector((state) => state);

  return (
    <ul className="sidebar">
      {notes.map((el) => {
        return (
          <li key={el.id}>
            <NavLink
              activeClassName="navlink-active"
              className="navlink"
              to={`/notes/${el.id}`}
            >
              {el.head}
            </NavLink>
            <MoreNav id={el.id} />
          </li>
        );
      })}
    </ul>
  );
};
export default SideBar;
