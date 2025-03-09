import styles from "./styles.module.css";

import { FontAwesomeIcon } from "@src/lib/fontawesome";
import { useCopyText } from "@src/hooks/useCopytext";
import { faCheck, faCopy, faShareFromSquare } from "@src/lib/fontawesome/solid";

export type JokeCardProps = {
    joke: string;
};

export function JokeCard({ joke }: JokeCardProps) {
    const { copied, copyTextToClipboard } = useCopyText();

    function handleCopy() {
        copyTextToClipboard(joke);
    }

    return (
        <div className={styles.card}>

            <div className={styles.cardContent}>
                <p>{joke}</p>
            </div>

            <div className={styles.cardFooter}>

                <a onClick={(e) => { e.preventDefault(); handleCopy(); }}>
                    <FontAwesomeIcon icon={copied ? faCheck : faCopy} />
                    {copied ? "Copiado!" : "Copiar"}
                </a>

                <a onClick={(e) => e.preventDefault()}>
                    <FontAwesomeIcon icon={faShareFromSquare} />
                    Share on Twitter
                </a>

            </div>
        </div>
    );
}