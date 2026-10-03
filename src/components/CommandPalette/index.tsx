import { useEffect, useMemo, useRef, useState, type KeyboardEvent } from 'react';
import type { IconType } from 'react-icons';
import {
  PiArrowRight,
  PiBrowser,
  PiCopy,
  PiGithubLogo,
  PiLinkedinLogo,
  PiMagnifyingGlass,
} from 'react-icons/pi';
import { navLinks } from '../../data/navigation';
import { profile } from '../../data/profile';
import { projects } from '../../data/projects';
import * as S from './styles';

type Command = {
  id: string;
  group: string;
  label: string;
  hint?: string;
  icon: IconType;
  run: () => void;
};

type CommandPaletteProps = {
  open: boolean;
  onClose: () => void;
};

const normalize = (text: string) =>
  text
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase();

const openTab = (url: string) => window.open(url, '_blank', 'noopener,noreferrer');

/** Paleta de comandos (Ctrl+K): navegação rápida pelo portfólio, no estilo do VS Code. */
export function CommandPalette({ open, onClose }: CommandPaletteProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(0);

  const commands = useMemo<Command[]>(
    () => [
      ...navLinks.map((link) => ({
        id: `nav-${link.id}`,
        group: 'Ir para',
        label: link.label,
        icon: PiArrowRight,
        run: () => document.getElementById(link.id)?.scrollIntoView(),
      })),
      ...projects.map((project) => ({
        id: `project-${project.title}`,
        group: 'Projetos',
        label: project.title,
        hint: project.stack[0],
        icon: PiBrowser,
        run: () => openTab(project.link),
      })),
      {
        id: 'copy-email',
        group: 'Contato',
        label: 'Copiar e-mail',
        hint: profile.email,
        icon: PiCopy,
        run: () => void navigator.clipboard?.writeText(profile.email),
      },
      { id: 'github', group: 'Contato', label: 'Abrir GitHub', icon: PiGithubLogo, run: () => openTab(profile.github) },
      { id: 'linkedin', group: 'Contato', label: 'Abrir LinkedIn', icon: PiLinkedinLogo, run: () => openTab(profile.linkedin) },
    ],
    [],
  );

  const results = useMemo(() => {
    const q = normalize(query.trim());
    return q ? commands.filter((c) => normalize(`${c.group} ${c.label} ${c.hint ?? ''}`).includes(q)) : commands;
  }, [commands, query]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open && !dialog.open) {
      setQuery('');
      setActive(0);
      dialog.showModal();
      inputRef.current?.focus();
    } else if (!open && dialog.open) {
      dialog.close();
    }
  }, [open]);

  useEffect(() => setActive(0), [query]);

  const execute = (command: Command | undefined) => {
    if (!command) return;
    onClose();
    // Espera o diálogo fechar para a rolagem não brigar com o foco devolvido
    window.setTimeout(command.run, 60);
  };

  const onKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      setActive((i) => (i + 1) % Math.max(results.length, 1));
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      setActive((i) => (i - 1 + results.length) % Math.max(results.length, 1));
    } else if (event.key === 'Enter') {
      event.preventDefault();
      execute(results[active]);
    }
  };

  const groups = [...new Set(results.map((c) => c.group))];

  return (
    <S.Dialog
      ref={dialogRef}
      aria-label="Paleta de comandos"
      onClose={onClose}
      onClick={(event) => event.target === dialogRef.current && onClose()}
    >
      <S.Search>
        <PiMagnifyingGlass aria-hidden="true" />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          onKeyDown={onKeyDown}
          placeholder="Buscar seção, projeto ou contato…"
          aria-label="Buscar comando"
          role="combobox"
          aria-expanded="true"
          aria-controls="palette-list"
          aria-activedescendant={results[active] ? `palette-${results[active].id}` : undefined}
          autoComplete="off"
          spellCheck={false}
        />
        <S.Kbd>Esc</S.Kbd>
      </S.Search>

      {results.length === 0 ? (
        <S.Empty>Nada encontrado para “{query}”. Tente “projetos” ou “e-mail”.</S.Empty>
      ) : (
        <S.List id="palette-list" role="listbox" aria-label="Comandos">
          {groups.map((group) => (
            <S.Group key={group} role="presentation">
              <span aria-hidden="true">{group}</span>
              <ul role="group" aria-label={group}>
                {results
                  .filter((c) => c.group === group)
                  .map((command) => {
                    const index = results.indexOf(command);
                    const Icon = command.icon;
                    return (
                      <S.Option
                        key={command.id}
                        id={`palette-${command.id}`}
                        role="option"
                        aria-selected={index === active}
                        $active={index === active}
                        onMouseMove={() => setActive(index)}
                        onClick={() => execute(command)}
                      >
                        <Icon aria-hidden="true" />
                        {command.label}
                        {command.hint && <small>{command.hint}</small>}
                      </S.Option>
                    );
                  })}
              </ul>
            </S.Group>
          ))}
        </S.List>
      )}

      <S.Footer aria-hidden="true">
        <span>
          <S.Kbd>↑</S.Kbd>
          <S.Kbd>↓</S.Kbd> navegar
        </span>
        <span>
          <S.Kbd>Enter</S.Kbd> abrir
        </span>
        <span>
          <S.Kbd>Esc</S.Kbd> fechar
        </span>
      </S.Footer>
    </S.Dialog>
  );
}
