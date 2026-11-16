export const profile = {
  name: 'Flavia Menegossi',
  role: 'Desenvolvedora Front-end',
  email: 'flavinhamene12@gmail.com',
  github: 'https://github.com/FlaviaaMenegossi',
  linkedin: 'https://www.linkedin.com/in/flaviamenegossi/',
  // WhatsApp com código do país (55) e DDD, só números
  whatsapp: '5511994042642',
  whatsappMessage: 'Olá, Flavia! Vi seu portfólio e gostaria de conversar.',
  // Frases que o hero alterna, como um terminal digitando
  taglines: ['Desenvolvedora Front-end', 'React + TypeScript', 'Interfaces acessíveis', 'Do layout ao deploy'],
  // Números reais do GitHub e da Vercel (atualizar quando mudarem)
  stats: [
    { value: 54, label: 'repositórios públicos no GitHub' },
    { value: 24, label: 'sites publicados na Vercel' },
    { value: 6, label: 'projetos em destaque aqui' },
  ],
  // Envio do formulário pelo Formspree (o ID é público, aparece no navegador de qualquer forma).
  // VITE_FORMSPREE_ID, se preenchida, troca o formulário sem mexer no código.
  formspreeId: (import.meta.env.VITE_FORMSPREE_ID as string | undefined) || 'moedezvg',
};

/** Link que abre uma conversa no WhatsApp com a mensagem já escrita. */
export const whatsappUrl = `https://wa.me/${profile.whatsapp}?text=${encodeURIComponent(profile.whatsappMessage)}`;
