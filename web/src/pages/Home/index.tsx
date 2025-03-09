import { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@src/lib/fontawesome";
import { faShuffle } from "../../lib/fontawesome/solid";
import { toast } from "@src/lib/react-toastify";

import { Button } from "@src/components/Button";
import { JokeCard } from "./components/JokeCard";
import styles from "./styles.module.css";

import JokeService, { Joke } from "@src/services/JokeService";

// 2- Geração de piada aleatória na Home.

export function Home() {
  const [randomJoke, setRandomJoke] = useState<Joke>();
  const [error, setError] = useState(false);

  function fetchJoke() {
    setError(false);

    JokeService.getRandomJoke()
      .then((joke) => {
        setRandomJoke(joke);
      })
      .catch(() => {
        setError(true);
        toast("Falha ao buscar piada.", { type: "error" });
      });
  }

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <main>

      <div className={styles.heading}>
        <h1>"Piadas aleatórias de Tiozão (em inglês):"</h1>

        <Button onClick={fetchJoke}>
          <FontAwesomeIcon icon={faShuffle}/> Piada Aleatória
        </Button>
      </div>

      <div className={styles.content}>
        <JokeCard joke={error ? "Algo deu errado!" : randomJoke?.text ?? ""} />
      </div>

    </main>
  );
}
