import { cva, VariantProps } from 'class-variance-authority';
import Link from 'next/link';
import { cn } from '../_libs';

const buttonVariants = cva(
  [
    'relative',
    'inline-flex',
    'items-center',
    'justify-center',
    'rounded-lg',
    'py-2',
    'px-3',
    'text-sm',
    'transition-colors',
    'h-full',
  ],
  {
    variants: {
      intent: {
        cyan: 'bg-cyan-500 text-white',
        white:
          'border border-gray-300 hover:border-gray-400 text-gray-700 active:bg-gray-100 active:text-gray-700/80',
        black:
          'bg-gray-800 hover:bg-gray-900 text-white font-semibold active:bg-gray-800 active:text-white/80',
      },
    },
    defaultVariants: {
      intent: 'cyan',
    },
  },
);

type ButtonVariantsType = VariantProps<typeof buttonVariants>;

interface ButtonProps extends ButtonVariantsType {
  children: React.ReactNode;
  className?: string;
  href?: string;
}

function Button({ intent, children, className, href }: ButtonProps) {
  if (href !== undefined && href !== '') {
    return (
      <Link href={href} className={cn(buttonVariants({ intent }), className)}>
        {children}
      </Link>
    );
  }
  return <button className={cn(buttonVariants({ intent }), className)}>{children}</button>;
}

export default Button;
