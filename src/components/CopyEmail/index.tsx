import { useState } from 'react';
import { PiCheck, PiCopy } from 'react-icons/pi';
import { profile } from '../../data/profile';
import * as S from './styles';

/** E-mail visível com botão de copiar (funciona mesmo sem app de e-mail configurado). */
export function CopyEmail() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2400);
    } catch {
      window.getSelection()?.selectAllChildren(document.getElementById('email-address')!);
    }
  };

  return (
    <S.Box>
      <S.Address id="email-address" href={`mailto:${profile.email}`}>
        {profile.email}
      </S.Address>
      <S.Button type="button" onClick={copy} $copied={copied}>
        {copied ? <PiCheck aria-hidden="true" /> : <PiCopy aria-hidden="true" />}
        <span aria-live="polite">{copied ? 'Copiado' : 'Copiar'}</span>
      </S.Button>
    </S.Box>
  );
}
