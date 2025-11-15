// Define the size type
export type AccordionIconSize = 'sm' | 'md' | 'lg';

// Define the props type
export interface AccordionIconProps {
  isOpen?: boolean;
  size?: AccordionIconSize;
  class?: string;
}