import { tv } from 'tailwind-variants';

export const button = tv({
  base: 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
  variants: {
    variant: {
      primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
      secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
      success: 'bg-success text-success-foreground hover:bg-success/90',
      warning: 'bg-warning text-warning-foreground hover:bg-warning/90',
      danger: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
      ghost: 'hover:bg-accent hover:text-accent-foreground',
      link: 'text-primary underline-offset-4 hover:underline',
      info: 'bg-blue-500 text-white hover:bg-blue-600'
    },
    size: {
      sm: 'h-9 px-3 py-2 text-xs',
      md: 'h-10 px-4 py-2 text-sm',
      lg: 'h-11 px-8 py-2 text-base',
      xl: 'h-12 px-10 py-3 text-lg'
    },
    disabled: {
      true: 'opacity-50 pointer-events-none'
    },
    loading: {
      true: 'cursor-not-allowed'
    }
  },
  compoundVariants: [
    {
      variant: 'primary',
      disabled: true,
      class: 'opacity-50 pointer-events-none'
    },
    {
      variant: 'secondary',
      disabled: true,
      class: 'opacity-50 pointer-events-none'
    }
  ],
  defaultVariants: {
    variant: 'primary',
    size: 'md'
  }
});