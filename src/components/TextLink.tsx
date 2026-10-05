import type { AnchorHTMLAttributes, ReactNode } from 'react';

interface TextLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
}

export function TextLink({ children, className = '', ...props }: TextLinkProps) {
  const linkClassName = ['text-link', className].filter(Boolean).join(' ');

  return (
    <a className={linkClassName} {...props}>
      {children}
    </a>
  );
}