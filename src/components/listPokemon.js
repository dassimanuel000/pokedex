
import { Link } from "react-router-dom";
import { getlistPokemon } from "../data";

export default function listPokemon() {
  let listPokemon = getlistPokemon();
  return (
    <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}
      >
        {listPokemon.map((lists) => (
          <Link
            style={{ display: "block", margin: "1rem 0" }}
            to={`/listPokemon/${lists.number}`}
            key={lists.number}
          >
            {lists.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}