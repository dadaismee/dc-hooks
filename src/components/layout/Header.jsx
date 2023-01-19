import React, { useEffect, useRef, useState } from "react";
import { Link } from "gatsby";
import { menuItems } from "../../data/menuItems";
import styled from "styled-components";
import MenuButton from "../buttons/MenuButton";
import MenuTooltip from "../tooltips/MenuTooltip";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();
  const tooltipRef = useRef();

  function handleClick(e) {
    e.preventDefault();
    setIsOpen(!isOpen);
  }

  function handleClickOutside(e) {
    if (
      ref.current &&
      !ref.current.contains(e.target) &&
      tooltipRef.current &&
      !tooltipRef.current.contains(e.target)
    ) {
      e.preventDefault();
      setIsOpen(false);
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <Wrapper>
        <Link to="/ ">
          <img src="/images/logos/logo.svg" alt="logo" />
        </Link>
        <MenuWrapper count={menuItems.length} ref={ref}>
          {menuItems.map((item, index) =>
            item.link === "/account" ? (
              <MenuButton
                item={item}
                key={index}
                onClick={(e) => handleClick(e)}
              />
            ) : (
              <MenuButton item={item} key={index} />
            )
          )}
          <HamburgerWrapper>
            <MenuButton
              item={{
                title: "",
                image: "/images/icons/hamburger.svg",
                link: "/",
              }}
              onClick={(e) => handleClick(e)}
            />
          </HamburgerWrapper>
        </MenuWrapper>
        <div ref={tooltipRef}>
          <MenuTooltip isOpen={isOpen} />
        </div>
      </Wrapper>
    </>
  );
};

export default Header;

const Wrapper = styled.div`
  position: absolute;
  top: 60px;
  display: grid;
  grid-template-columns: 44px auto;
  width: 100%;
  justify-content: space-between;
  padding: 0 30px;
  align-items: center;

  @media (max-width: 760px) {
    top: 30px;
  }
  @media (max-width: 450px) {
    top: 20px;
    padding: 0 20px;
  }
`;

const MenuWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(${(props) => props.count}, auto);
  gap: 30px;

  @media (max-width: 760px) {
    > a {
      display: none;
    }
    grid-template-columns: auto;
  }
`;

const HamburgerWrapper = styled.div`
  display: none;

  @media (max-width: 760px) {
    display: block;
  }
`;
