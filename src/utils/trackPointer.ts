import type { PointerEvent } from 'react';

/** Grava a posição do ponteiro no elemento (--mx/--my), para efeitos de brilho que seguem o mouse. */
export const trackPointer = (event: PointerEvent<HTMLElement>) => {
  const rect = event.currentTarget.getBoundingClientRect();
  event.currentTarget.style.setProperty('--mx', `${event.clientX - rect.left}px`);
  event.currentTarget.style.setProperty('--my', `${event.clientY - rect.top}px`);
};
