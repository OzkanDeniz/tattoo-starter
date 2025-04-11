import { useEffect, useState } from "react";
// import header data
import { headerData } from "../data";
// import components
import Nav from "./Nav";
import NavMobile from "./NavMobile";
import Social from "./Socials";
// import icons
import { TiThMenuOutline } from "react-icons/ti";

const Header = () => {
  // destructure header data
  const { logo } = headerData;
  // header state 
  const [isActive, setIsActive] = useState(false)
  // nav mobile state
  const [navMobile, setNavMobile] = useState(false)
  // scroll event
  useEffect(()=>{
    window.addEventListener("scroll", ()=>{
      window.scrollY > 50 ? setIsActive(true) : setIsActive(false)
    })
  })
  return <header className={`${isActive ? "bg-red-500" : "bg-green-500"} fixed left-0 right-0 top-0 z-10`}>Header</header>;
};

export default Header;
