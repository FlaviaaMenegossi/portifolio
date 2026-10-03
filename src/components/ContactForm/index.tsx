import { useRef, useState, type FormEvent } from 'react';
import { PiCheckCircle, PiPaperPlaneTilt, PiWarningCircle } from 'react-icons/pi';
import { profile } from '../../data/profile';
import { NeonButton } from '../NeonButton';
import * as S from './styles';

type Fields = { nome: string; email: string; mensagem: string };
type Errors = Partial<Record<keyof Fields, string>>;
type Status = 'idle' | 'sending' | 'success' | 'mail' | 'error';

const validate = ({ nome, email, mensagem }: Fields): Errors => {
  const errors: Errors = {};
  if (!nome.trim()) errors.nome = 'Informe seu nome.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) errors.email = 'Informe um e-mail válido, como voce@empresa.com.';
  if (mensagem.trim().length < 10) errors.mensagem = 'Escreva pelo menos uma frase (10 caracteres).';
  return errors;
};

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>('idle');

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Fields;
    const found = validate(data);
    setErrors(found);

    const firstInvalid = Object.keys(found)[0];
    if (firstInvalid) {
      form.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
      return;
    }

    // Sem Formspree configurado: abre o app de e-mail com a mensagem pronta
    if (!profile.formspreeId) {
      const subject = encodeURIComponent(`Contato pelo portfólio: ${data.nome}`);
      const body = encodeURIComponent(`${data.mensagem}\n\n${data.nome}\n${data.email}`);
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
      setStatus('mail');
      return;
    }

    setStatus('sending');
    try {
      const response = await fetch(`https://formspree.io/f/${profile.formspreeId}`, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
      });
      if (!response.ok) throw new Error(String(response.status));
      form.reset();
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  const fieldProps = (name: keyof Fields) => ({
    id: `contato-${name}`,
    name,
    'aria-invalid': errors[name] ? true : undefined,
    'aria-describedby': errors[name] ? `contato-${name}-erro` : undefined,
    onChange: () => errors[name] && setErrors((prev) => ({ ...prev, [name]: undefined })),
  });

  const sending = status === 'sending';

  return (
    <S.Form ref={formRef} onSubmit={onSubmit} noValidate aria-label="Enviar mensagem">
      <S.Row>
        <S.Field>
          <S.Label htmlFor="contato-nome">Nome</S.Label>
          <S.Input {...fieldProps('nome')} type="text" autoComplete="name" placeholder="Como você se chama" required />
          {errors.nome && <S.Error id="contato-nome-erro">{errors.nome}</S.Error>}
        </S.Field>
        <S.Field>
          <S.Label htmlFor="contato-email">E-mail</S.Label>
          <S.Input
            {...fieldProps('email')}
            type="email"
            autoComplete="email"
            inputMode="email"
            spellCheck={false}
            placeholder="voce@empresa.com"
            required
          />
          {errors.email && <S.Error id="contato-email-erro">{errors.email}</S.Error>}
        </S.Field>
      </S.Row>
      <S.Field>
        <S.Label htmlFor="contato-mensagem">Mensagem</S.Label>
        <S.Textarea {...fieldProps('mensagem')} rows={5} placeholder="Conte sobre a vaga ou o projeto" required />
        {errors.mensagem && <S.Error id="contato-mensagem-erro">{errors.mensagem}</S.Error>}
      </S.Field>

      <NeonButton type="submit" disabled={sending} style={{ width: '100%' }}>
        {sending ? (
          <>
            <S.Spinner aria-hidden="true" />
            Enviando…
          </>
        ) : (
          <>
            Enviar mensagem
            <PiPaperPlaneTilt aria-hidden="true" />
          </>
        )}
      </NeonButton>

      <div aria-live="polite">
        {status === 'success' && (
          <S.Status $tone="success">
            <PiCheckCircle aria-hidden="true" />
            Mensagem enviada. Vou responder no e-mail que você informou.
          </S.Status>
        )}
        {status === 'mail' && (
          <S.Status $tone="neutral">
            <PiCheckCircle aria-hidden="true" />
            Abrimos o seu app de e-mail com a mensagem pronta. Se ele não abriu, copie o endereço ao lado.
          </S.Status>
        )}
        {status === 'error' && (
          <S.Status $tone="error">
            <PiWarningCircle aria-hidden="true" />
            Não foi possível enviar agora. Tente de novo ou escreva direto para {profile.email}.
          </S.Status>
        )}
      </div>
    </S.Form>
  );
}
