import { NavLink } from "react-router";
import { FontAwesomeIcon } from "../../lib/fontawesome";
import {
  faMagnifyingGlass,
  faPenToSquare,
  faShuffle,
} from "../../lib/fontawesome/solid";
import styles from "./styles.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <p>Puc Dad Joke</p>
      
      <div className={styles.links}>
        <NavLink className={({ isActive }) => (isActive ? styles.active : "")} to="/">
          <FontAwesomeIcon icon={faShuffle} />
          Piada Aleatória
        </NavLink>

        <NavLink to="search" className={({ isActive }) => (isActive ? styles.active : "")}>
        <FontAwesomeIcon icon={faMagnifyingGlass}/>
          Pesquisar piadas
        </NavLink>

        <NavLink to="submit" className={({ isActive }) => (isActive ? styles.active : "")}><FontAwesomeIcon icon={faPenToSquare} />
          Enviar nova piada
        </NavLink>
      </div>
    </header>
  );
};