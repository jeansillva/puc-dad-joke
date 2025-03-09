import styles from "./styles.module.css";
import { useCopyText } from "@src/hooks/useCopytext";

import { Button } from "@src/components/Button";
import { faCheck, faCopy } from "@src/lib/fontawesome/solid";
import { FontAwesomeIcon } from "@src/lib/fontawesome";

export type JokeProps = {
  text: string;
};

export function Joke({ text }: JokeProps) {
  const { copied, copyTextToClipboard } = useCopyText();

  function handleCopy() {
    copyTextToClipboard(text);
  }

  return (
    <div className={styles.joke}>
      <p>{text}</p>
      <Button variant="secondary" onClick={handleCopy}>
        <FontAwesomeIcon icon={copied ? faCheck : faCopy} />
        {copied ? "Copiado!" : "Copiar"}
      </Button>
    </div>
  );
}
