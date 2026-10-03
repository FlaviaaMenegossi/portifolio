import type { ComponentPropsWithoutRef } from 'react';
import * as S from './styles';

type Common = { variant?: S.Variant };
type AnchorProps = Common & ComponentPropsWithoutRef<'a'> & { href: string };
type ButtonProps = Common & ComponentPropsWithoutRef<'button'> & { href?: never };

export type NeonButtonProps = AnchorProps | ButtonProps;

/** Renderiza um link quando recebe `href`; caso contrário, um `<button>`. */
export function NeonButton({ variant = 'primary', ...props }: NeonButtonProps) {
  if (props.href !== undefined) {
    return <S.Button $variant={variant} {...(props as AnchorProps)} />;
  }

  return <S.Button as="button" $variant={variant} {...(props as ButtonProps)} />;
}
