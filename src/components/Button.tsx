import { Slot } from '@radix-ui/react-slot';
import { clsx } from "clsx";
import { ReactNode } from 'react';

export interface ButtonProps {
  children: ReactNode;
  asChild? : boolean;
}

export function Button({children, asChild}: ButtonProps) {
  const Component = asChild ? Slot : 'button';

  return (
    <Component className={clsx(
      'py-4 px-3 bg-cyan-500 rounded font-semibold text-sm text-back w-full transition-colors hover:bg-cyan-300 focus:ring-2 ring-wite'
    )}>
      {children}
    </Component>
  )
}
