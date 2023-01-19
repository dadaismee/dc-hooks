import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const MenuButton = ({ item, onClick }) => {
  return (
    <>
      <Link to={item.link} onClick={onClick}>
        <MenuItem title={item.title}>
          <img src={item.image} alt={item.title} />
          {item.title}
        </MenuItem>
      </Link>
    </>
  );
};

export default MenuButton;

const MenuItem = styled.div`
  display: grid;
  color: white;
  grid-template-columns: 24px auto;
  gap: ${(props) => (props.title ? "10px" : "0px")};
  align-items: center;
  padding: 10px;
  transition: 0.5s ease-out;
  border-radius: 10px;

  :hover {
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1),
      inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
  }
`;
