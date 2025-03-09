import { useState } from "react";

// 5 - Funcionalidade de copiar as piadas para a área de transferência.
export function useCopyText() {
  const [copied, setCopied] = useState(false);

  function copyTextToClipboard(text: string) {

    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(text)
        .then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 1000);
        })
        .catch((error) => {
          console.error("Falha ao copiar:", error);
        });
    } else {
      console.error("Clipboard API não suportada.");
    }
  }

  return {
    copyTextToClipboard,
    copied,
  };
}
