import { NavLink } from "react-router-dom";

export default function NavLinkAnimated({ to, label }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `nav-underline font-medium ${isActive ? "active text-blue-700" : ""}`
      }
    >
      {label}
    </NavLink>
  );
}
