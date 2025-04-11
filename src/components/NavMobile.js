import { navData } from "../data";
import Socials from "./Socials";

const NavMobile = () => {
  const { items } = navData;
  return (
    <nav className="w-full h-full flex flex-col bg-green-500 justify-evenly overflow-hidden">
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <a href={item.href}>{item.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavMobile;
