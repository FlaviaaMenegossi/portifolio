import type { IconType } from 'react-icons';
import { PiPackage, PiTestTube, PiGitBranch, PiBracketsCurly, PiStack } from 'react-icons/pi';
import {
  SiCss,
  SiCypress,
  SiEslint,
  SiGit,
  SiGrunt,
  SiGulp,
  SiHtml5,
  SiJavascript,
  SiLess,
  SiPrettier,
  SiReact,
  SiRedux,
  SiSass,
  SiStyledcomponents,
  SiTestinglibrary,
  SiTypescript,
  SiVercel,
  SiVite,
  SiVuedotjs,
} from 'react-icons/si';

export type Tech = {
  name: string;
  icon: IconType;
};

export type Skill = {
  icon: IconType;
  title: string;
  description: string;
  techs: Tech[];
};

// Baseado nas tecnologias usadas nos repositórios de github.com/FlaviaaMenegossi
export const skills: Skill[] = [
  {
    icon: PiBracketsCurly,
    title: 'Front-end',
    description: 'A base de tudo: marcação semântica, estilos organizados e JavaScript moderno.',
    techs: [
      { name: 'HTML5', icon: SiHtml5 },
      { name: 'CSS3', icon: SiCss },
      { name: 'Sass', icon: SiSass },
      { name: 'Less', icon: SiLess },
      { name: 'JavaScript', icon: SiJavascript },
    ],
  },
  {
    icon: PiStack,
    title: 'Frameworks',
    description: 'Componentes tipados, estado global e estilos que vivem junto do código.',
    techs: [
      { name: 'React', icon: SiReact },
      { name: 'Vue.js', icon: SiVuedotjs },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'Redux Toolkit', icon: SiRedux },
      { name: 'styled-components', icon: SiStyledcomponents },
    ],
  },
  {
    icon: PiTestTube,
    title: 'Testes e Qualidade',
    description: 'Testes de componente e de ponta a ponta, com código padronizado.',
    techs: [
      { name: 'Testing Library', icon: SiTestinglibrary },
      { name: 'Cypress', icon: SiCypress },
      { name: 'ESLint', icon: SiEslint },
      { name: 'Prettier', icon: SiPrettier },
    ],
  },
  {
    icon: PiGitBranch,
    title: 'Build e Deploy',
    description: 'Versionamento, automação de build e publicação contínua.',
    techs: [
      { name: 'Git', icon: SiGit },
      { name: 'Vite', icon: SiVite },
      { name: 'Gulp', icon: SiGulp },
      { name: 'Grunt', icon: SiGrunt },
      { name: 'Parcel', icon: PiPackage },
      { name: 'Vercel', icon: SiVercel },
    ],
  },
];
