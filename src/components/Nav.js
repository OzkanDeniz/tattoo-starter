import {navData} from "../data"


const Nav = () => {
  const {items} = navData
  return <nav>
    <ul className="flex gap-x-[58px]">
      {items.map((item,index)=>(
        <li key={index}>
          <a className="link" href={item.href}>{item.name}</a>
        </li>
      ))}
    </ul>
    </nav>;
};

export default Nav;
