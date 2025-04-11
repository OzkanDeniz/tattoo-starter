import {navData} from "../data"


const Nav = () => {
  const {items} = navData
  return <nav>
    <ul>
      {items.map((item,index)=>(
        <li key={index}>
          <a href={item.href}>{item.name}</a>
        </li>
      ))}
    </ul>
    </nav>;
};

export default Nav;
