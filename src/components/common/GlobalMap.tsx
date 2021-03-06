import { useEffect, useState } from "react";
import styled from 'styled-components';
import { MdOutlineOtherHouses, MdAddBox, MdCardGiftcard, MdPersonOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router';

const GlobalMapWrap = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  height: 50px;
  width: 100%;
  background-color: #fff;
  border-top: 1px solid #ddd;
  z-index: 1000;
`

const LinkWrap = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  max-width: 700px;
  margin: 0 auto;
  height: inherit;
  svg {
    width: 1.5rem;
    height: auto;
    transition:transform .3s ease-in-out;
    &:hover,
    &.active {
      transform: scale(1.2);
      color: #d9a450;
      cursor: pointer;
    }
    &:nth-child(2) {
      margin: 0 40px;
    }
  }
`

const GlobalNav = () => {
  let location = useLocation();
  let [current, setCurrent] = useState("list");

  useEffect(() => {
    if (location.pathname.includes("add")) {
      setCurrent("add")
    } else if (location.pathname.includes("profile")) {
      setCurrent("profile")
    } else if (location.pathname.includes("event")) {
      setCurrent("event")
    } else {
      setCurrent("list")
    }
  }, [location])

  return (
    <>
      <GlobalMapWrap>
        <LinkWrap>
          <Link to="/">
            <MdOutlineOtherHouses className={current === "list" ? "active" : ''}/>
          </Link>
          <Link to="/add">
            <MdAddBox className={current === "add" ? "active" : ''}/>
          </Link>
          <Link to="/event">
            <MdCardGiftcard className={current === "event" ? "active" : ''}/>
          </Link>
          <Link to="/profile">
            <MdPersonOutline className={current === "profile" ? "active" : ''}/>
          </Link>
        </LinkWrap>
      </GlobalMapWrap>
    </>
  );
}

export default GlobalNav;
 