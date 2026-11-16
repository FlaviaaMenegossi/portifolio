import { useEffect, useRef } from 'react';
import * as S from './styles';

/** Brilho roxo que segue o mouse pela página inteira, por trás do conteúdo. */
export function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Só em aparelhos com mouse (no celular não há ponteiro para seguir)
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    const glow = glowRef.current;
    if (!glow) return;

    let frame = 0;
    let x = 0;
    let y = 0;

    // Atualiza direto no estilo, uma vez por quadro, sem re-renderizar o React
    const onPointerMove = (event: PointerEvent) => {
      if (event.pointerType !== 'mouse') return;
      x = event.clientX;
      y = event.clientY;
      if (frame) return;
      frame = requestAnimationFrame(() => {
        glow.style.setProperty('--x', `${x}px`);
        glow.style.setProperty('--y', `${y}px`);
        glow.dataset.visible = 'true';
        frame = 0;
      });
    };

    const onLeave = () => {
      glow.dataset.visible = 'false';
    };

    window.addEventListener('pointermove', onPointerMove, { passive: true });
    document.documentElement.addEventListener('mouseleave', onLeave);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('pointermove', onPointerMove);
      document.documentElement.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return <S.Glow ref={glowRef} aria-hidden="true" data-visible="false" />;
}
