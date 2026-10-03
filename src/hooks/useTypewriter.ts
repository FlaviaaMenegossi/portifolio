import { useEffect, useState } from 'react';
import { useReducedMotion } from './useReducedMotion';

/** Digita e apaga cada frase em sequência, como um terminal. Sem animação, mostra a primeira. */
export function useTypewriter(phrases: string[], { typeMs = 70, deleteMs = 35, holdMs = 1800 } = {}) {
  const reduced = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [text, setText] = useState(reduced ? phrases[0] : '');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reduced) {
      setText(phrases[0]);
      return;
    }

    const phrase = phrases[index % phrases.length];
    let timeout: number;

    if (!deleting && text === phrase) {
      timeout = window.setTimeout(() => setDeleting(true), holdMs);
    } else if (deleting && text === '') {
      setDeleting(false);
      setIndex((i) => i + 1);
    } else {
      timeout = window.setTimeout(
        () => setText(deleting ? phrase.slice(0, text.length - 1) : phrase.slice(0, text.length + 1)),
        deleting ? deleteMs : typeMs,
      );
    }

    return () => window.clearTimeout(timeout);
  }, [text, deleting, index, phrases, reduced, typeMs, deleteMs, holdMs]);

  return text;
}
