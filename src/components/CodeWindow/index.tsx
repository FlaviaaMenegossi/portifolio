import * as S from './styles';

/** Resumo profissional escrito como um objeto TypeScript. */
export function CodeWindow() {
  return (
    <S.Window>
      <S.Bar>
        <i aria-hidden="true" />
        <i aria-hidden="true" />
        <i aria-hidden="true" />
        flavia.ts
      </S.Bar>
      <S.Code role="region" aria-label="Resumo profissional em formato de código" tabIndex={0}>
        <code>
          <S.Line>
            <span className="c">{'// quem sou eu, em uma constante'}</span>
          </S.Line>
          <S.Line>
            <span className="k">const</span> <span className="v">flavia</span> <span className="p">=</span> {'{'}
          </S.Line>
          <S.Line>
            {'  '}cargo<span className="p">:</span> <span className="s">'Desenvolvedora Front-end'</span>,
          </S.Line>
          <S.Line>
            {'  '}stack<span className="p">:</span> [<span className="s">'React'</span>, <span className="s">'TypeScript'</span>,{' '}
            <span className="s">'Redux'</span>],
          </S.Line>
          <S.Line>
            {'  '}estilos<span className="p">:</span> [<span className="s">'styled-components'</span>, <span className="s">'Sass'</span>],
          </S.Line>
          <S.Line>
            {'  '}testes<span className="p">:</span> [<span className="s">'Testing Library'</span>, <span className="s">'Cypress'</span>],
          </S.Line>
          <S.Line>
            {'  '}buscando<span className="p">:</span> <span className="s">'primeira vaga em front-end'</span>,
          </S.Line>
          <S.Line>
            {'  '}disponivel<span className="p">:</span> <span className="b">true</span>,
          </S.Line>
          <S.Line>
            {'}'}
            <S.Caret aria-hidden="true" />
          </S.Line>
        </code>
      </S.Code>
    </S.Window>
  );
}
