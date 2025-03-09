import styles from "./styles.module.css";

import { FormEvent } from "react";
import { useNavigate } from "react-router";
import { toast } from "@src/lib/react-toastify";
import { Button } from "../../components/Button";
import JokeService from "@src/services/JokeService";

export function Submit() {
  const navigate = useNavigate();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const joke = formData.get("joke") as string;

    if (!joke.trim()) {
      toast("Por favor, escreva uma piada antes de enviar", { type: "warning" });
      return;
    }

    try {
      await JokeService.createJoke({ joke });
      toast("Piada enviada com sucesso", { type: "success" });
      navigate("/search");
    } catch (error) {
      console.log(error);
      toast("Ocorreu um erro, piada não enviada", { type: "error" });
    }
  }

  // 4 - Criação de novas piadas na página Submit.
  return (
    <div style={{ padding: "50px 80px" }}>

      <div className={styles.description}>
        <p>
          Todas as piadas enviadas serão revisadas para garantir que não sejam
          duplicadas e sejam apropriadas para o site.
        </p>
      </div>

      <form onSubmit={handleSubmit}>

        <label>
          <span>Piada:</span>
          <textarea className={styles.textArea} name="joke" required />
        </label>

        <Button type="submit">Enviar</Button>

      </form>

    </div>
  );
}
