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
  return <div>Header</div>;
};

export default Header;
