import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <div className="margin">
      <ul>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "menuStyle activeItem" : "menuStyle pendingItem"
            }
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "menuStyle activeItem" : "menuStyle pendingItem"
            }
            to="/income"
          >
            Income Details
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "menuStyle activeItem" : "menuStyle pendingItem"
            }
            to="/expense"
          >
            Expense Details
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
