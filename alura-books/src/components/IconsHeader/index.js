import profile from "../../images/assets/perfil.svg";
import bag from "../../images/assets/sacola.svg";
import styled from "styled-components";

const icons = [profile, bag];

const Icons = styled.ul`
  display: flex;
  align-items: center;
`;

const Icon = styled.li`
  margin-right: 40px;
  width: 25px;
`;

export default function IconsHeader() {
  return (
    <Icons>
      {icons.map((icon) => (
        <Icon>
          <img src={icon}></img>
        </Icon>
      ))}
    </Icons>
  );
}
