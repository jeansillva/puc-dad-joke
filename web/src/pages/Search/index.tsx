import styles from "./styles.module.css";
import JokeService, { Joke as IJoke } from "@src/services/JokeService";

import { Button } from "../../components/Button";
import { Joke } from "./components/Joke";
import { useEffect, useState } from "react";

export function Search() {
  const [jokes, setJokes] = useState<IJoke[]>();
  const [totalOfItems, setTotalOfItems] = useState(0);
  const [query, setQuery] = useState<string | undefined>(undefined);
  const [searchedTerm, setSearchedTerm] = useState("");

  async function getJokes() {
    try {
      const response = await JokeService.getJokes({ query });
      setJokes(response.jokes);
      setTotalOfItems(response.totalOfItems);
    } catch (error) {
      console.log("Error: ", error);
    }
  }

  useEffect(() => {
    getJokes();
  }, [query]);

  function handleSearch() {
    if (searchedTerm === "") {
      console.log("Search term is empty");
    }
    setQuery(searchedTerm);
  }

// 3- Listagem de piadas na Search Joke, com opção de busca.

  return (
    <div style={{ padding: "50px 80px" }}>

      <div className={styles.heading}>

        <span className="styles">
          <strong>{totalOfItems}</strong> piadas encontradas
        </span>

        <div className={styles.search}>
          <input
            value={searchedTerm}
            onChange={(e) => setSearchedTerm(e.target.value)}
            type="text"
            placeholder="Pesquise algo.."/>

          <Button onClick={handleSearch}>Pesquisar</Button>

        </div>

      </div>

      <div className={styles.content}>

        <span>Joke</span>

        <div className={styles.jokes}>
          {jokes?.map((joke) => (
            <Joke key={joke.id} text={joke.text} />
          ))}
        </div>
        
      </div>

    </div>
  );
}
