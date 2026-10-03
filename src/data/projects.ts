import agendaContato from '../assets/images/projects/agenda-contato.webp';
import calculadoraImc from '../assets/images/projects/calculadora-imc.webp';
import cloneDisneyPlus from '../assets/images/projects/clone-disneyplus.webp';
import divertidamente from '../assets/images/projects/divertidamente.webp';
import emailMarketingNike from '../assets/images/projects/email-marketing-nike.webp';
import eventoAniversario from '../assets/images/projects/evento-aniversario.webp';

export type Project = {
  title: string;
  description: string;
  stack: string[];
  image: string;
  link: string;
  repo: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: 'Agenda de Contatos',
    description:
      'Gerenciador de contatos com categorias, busca e edição. Estado global com Redux Toolkit e tipagem de ponta a ponta.',
    stack: ['React', 'TypeScript', 'Redux Toolkit', 'styled-components'],
    image: agendaContato,
    link: 'https://agenda-contato-three.vercel.app',
    repo: 'https://github.com/FlaviaaMenegossi/agenda-contato',
    featured: true,
  },
  {
    title: 'Calculadora de IMC',
    description: 'Monitor de saúde em etapas que calcula o IMC em tempo real, com tema claro e escuro.',
    stack: ['React', 'Vite'],
    image: calculadoraImc,
    link: 'https://calculadora-imc-liart-eight.vercel.app',
    repo: 'https://github.com/FlaviaaMenegossi/calculadora-imc',
  },
  {
    title: 'Divertida Mente 2',
    description: 'Landing page temática do filme Divertida Mente 2, com layout responsivo.',
    stack: ['HTML', 'Sass', 'JavaScript', 'Gulp'],
    image: divertidamente,
    link: 'https://divertidamente-delta.vercel.app',
    repo: 'https://github.com/FlaviaaMenegossi/divertidamente',
  },
  {
    title: 'Clone Disney+',
    description: 'Página inicial inspirada no Disney+, com seção de planos e layout responsivo.',
    stack: ['HTML', 'Sass', 'JavaScript', 'Gulp'],
    image: cloneDisneyPlus,
    link: 'https://clone-disneyplus-zeta-one.vercel.app',
    repo: 'https://github.com/FlaviaaMenegossi/clone_disneyplus',
  },
  {
    title: 'E-mail Marketing Nike',
    description: 'Newsletter no estilo Nike, com HTML e CSS inline compatíveis com clientes de e-mail.',
    stack: ['HTML', 'CSS inline'],
    image: emailMarketingNike,
    link: 'https://email-marketing-nike.vercel.app',
    repo: 'https://github.com/FlaviaaMenegossi/email_marketing_nike',
  },
  {
    title: 'Convite de Aniversário',
    description: 'Página de evento com contagem regressiva e confirmação de presença.',
    stack: ['HTML', 'Sass', 'JavaScript', 'Gulp'],
    image: eventoAniversario,
    link: 'https://projeto-evento-aniversario-five.vercel.app',
    repo: 'https://github.com/FlaviaaMenegossi/projeto-evento-aniversario',
  },
];
