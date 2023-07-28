import styled from "styled-components";

const Option = styled.li`
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  padding: 0 5px;
  cursor: pointer;
  min-width: 120px;
`;

const Options = styled.ul`
  display: flex;
`;

export default function OptionsHeader() {
  const textOptions = ["CATEGORIAS", "FAVORITOS", "MINHA ESTANTE"];

  return (
    <Options>
      {textOptions.map((options) => (
        <Option className="option">
          <p>{options}</p>
        </Option>
      ))}
    </Options>
  );
}
