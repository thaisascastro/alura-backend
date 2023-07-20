import profile from "../../images/assets/perfil.svg";
import bag from "../../images/assets/sacola.svg";
import "./style.css";

export default function IconsHeader() {
  const icons = [profile, bag];

  return (
    <ul className="icons">
      {icons.map((icon) => (
        <li className="icons-li">
          <img src={icon}></img>
        </li>
      ))}
    </ul>
  );
}
