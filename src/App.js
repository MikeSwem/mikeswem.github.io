import React from "react";
import styled, { css } from "styled-components";

const Header = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-context: space-around;
  padding: 30px 160px;
  color: white;
  transition: 0.5s ease-in-out;
`;

const NavigationBlock = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
  position: fixed;
  bottom: ${({ open }) => (open ? `0%;` : `100%;`)};
  transition: 0.5s ease-in-out;
  z-index: -80;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Hamburger = styled.div`
  width: 20px;
  height: 25px;
  position: fixed;
  right: 12%;
  top: 18px;
  margin: 12px auto;
  -webkit-transform: ${({ open }) =>
    open ? `rotate(135deg);` : `rotate(0deg);`};
  -moz-transform: ${({ open }) => (open ? `rotate(135deg);` : `rotate(0deg);`)};
  -o-transform: ${({ open }) => (open ? `rotate(135deg);` : `rotate(0deg);`)};
  transform: ${({ open }) => (open ? `rotate(135deg);` : `rotate(0deg);`)};
  -webkit-transition: 0.5s ease-in-out;
  -moz-transition: 0.5s ease-in-out;
  -o-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;
  cursor: pointer;
  span:nth-child(1) {
    top: ${({ open }) => (open ? `18px;` : `0px;`)};
  }
  span:nth-child(2) {
    top: 8px;
    opacity: ${({ open }) => (open ? `0;` : `100;`)};
    left: ${({ open }) => (open ? `-60px;` : `0px;`)};
  }
  span:nth-child(3) {
    top: ${({ open }) => (open ? `18px;` : `16px;`)};
    -webkit-transform: ${({ open }) =>
      open ? `rotate(-90deg)` : `rotate(0deg)`};
    -moz-transform: ${({ open }) => (open ? `rotate(-90deg)` : `rotate(0deg)`)};
    -o-transform: ${({ open }) => (open ? `rotate(-90deg)` : `rotate(0deg)`)};
    transform: ${({ open }) => (open ? `rotate(-90deg)` : `rotate(0deg)`)};
  }
`;

const HamburgerLayer = styled.span`
  display: block;
  position: absolute;
  height: 3px;
  width: 100%;
  background: ${({ open }) => (open ? `white;` : `white;`)};
  border-radius: 9px;
  opacity: 1;
  left: 0;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.25s ease-in-out;
  -moz-transition: 0.25s ease-in-out;
  -o-transition: 0.25s ease-in-out;
  transition: 0.25s ease-in-out;
`;

const MenuBlock = styled.h1`
  color: white;
`;

const RightBlock = styled.div`
  width: 30%;
  height: 95%;
  z-index: -80;
  background: black;
  position: absolute;
  right: 0px;
  top: 0px;
`;

function App() {
  const [open, setOpen] = React.useState(false);
  console.log("open", open);
  return (
    <>
      <RightBlock />
      <NavigationBlock open={open}>
        <MenuBlock>Hello</MenuBlock>
      </NavigationBlock>
      <Header
        open={open}
        style={!open ? { color: "black" } : { color: "white" }}
      >
        {`{} Michael Swemmer`}
        <>
          <Hamburger open={open} onClick={() => setOpen(!open)}>
            <HamburgerLayer open={open} />
            <HamburgerLayer open={open} />
            <HamburgerLayer open={open} />
          </Hamburger>
        </>
      </Header>
    </>
  );
}

export default App;
