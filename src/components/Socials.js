import { socialData } from "../data";

const Socials = () => {
  return (
    <ul>
      {socialData.map((item, index) => (
        <li key={index}>
          <a href={item.href}>{item.icon}</a>
        </li>
      ))}
    </ul>
  );
};

export default Socials;
