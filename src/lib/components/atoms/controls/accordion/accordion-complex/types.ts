export interface ComplexAccordionProps {
  multiple?: boolean;
  defaultValue?: string[];
  value?: string[];
  onValueChange?: (value: string[]) => void;
  class?: string;
  content?: any;
  [key: string]: any;
}