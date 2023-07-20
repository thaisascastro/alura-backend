import "./style.css";

export default function OptionsHeader() {
  const textOptions = ["CATEGORIAS", "FAVORITOS", "MINHA ESTANTE"];

  return (
    <ul className="options">
      {textOptions.map((options) => (
        <li className="option">
          <p>{options}</p>
        </li>
      ))}
    </ul>
  );
}
