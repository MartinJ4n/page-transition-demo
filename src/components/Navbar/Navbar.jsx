import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const NavbarSC = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;

  & a {
    color: #f8b195;
    text-decoration: none;
    font-size: 20px;
    margin: 0 1em;
  }
`;

const LinkSC = styled.div`
  color: ${(props) => (props.selected === true ? "#ffffff" : "f8b195")};
  transition: all 0.6s ease-in 0.2s;
`;

const Navbar = () => {
  const location = useLocation();
  const initialBars = [
    { path: "/", name: "Home", selected: true },
    { path: "/about", name: "About", selected: false },
    { path: "/feedback", name: "Feedback", selected: false },
  ];

  const [bars, setBars] = useState(initialBars);

  useEffect(() => {
    const updatedBars = [...bars];

    for (const element of updatedBars) {
      element.selected = false;
    }

    if (location.pathname === "/") {
      updatedBars[0].selected = true;
      return setBars(updatedBars);
    } else if (location.pathname === "/about") {
      updatedBars[1].selected = true;
      return setBars(updatedBars);
    } else if (location.pathname === "/feedback") {
      updatedBars[2].selected = true;
      return setBars(updatedBars);
    }
  }, [location]);

  return (
    <NavbarSC>
      {bars.map(({ path, name, selected }) => (
        <Link key={path} to={path}>
          <LinkSC selected={selected}>{name}</LinkSC>
        </Link>
      ))}
    </NavbarSC>
  );
};

export default Navbar;
