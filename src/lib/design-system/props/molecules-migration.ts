import type { HTMLAttributes } from 'svelte/elements';

export interface ProductSearchProps extends Omit<HTMLAttributes<HTMLDivElement>, 'oninput'> {
  placeholder?: string;
  class?: string;
  suggestions?: string[];
  onSearch?: (query: string) => void;
  onSuggestionSelect?: (suggestion: string) => void;
}

export type WishlistButtonVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'ghost' | 'link';
export type WishlistButtonSize = 'sm' | 'md' | 'lg';
export type WishlistTooltipPosition = 'top' | 'bottom' | 'left' | 'right';

export interface WishlistButtonProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onchange'> {
  inWishlist?: boolean;
  class?: string;
  buttonClass?: string;
  size?: WishlistButtonSize;
  variant?: WishlistButtonVariant;
  showLabel?: boolean;
  label?: string;
  tooltip?: string;
  tooltipPosition?: WishlistTooltipPosition;
  disabled?: boolean;
  onToggle?: (inWishlist: boolean) => void;
  onSuccess?: () => void;
  onError?: (error: string) => void;
}

export type CodeLanguage =
  | 'javascript'
  | 'typescript'
  | 'html'
  | 'css'
  | 'svelte'
  | 'json'
  | 'markdown'
  | 'python'
  | 'java'
  | 'csharp'
  | 'cpp'
  | 'go'
  | 'rust'
  | 'sql'
  | 'yaml'
  | 'xml';

export interface CodeEditorProps extends Omit<HTMLAttributes<HTMLDivElement>, 'oninput'> {
  code?: string;
  language?: CodeLanguage;
  height?: string;
  width?: string;
  readOnly?: boolean;
  showLineNumbers?: boolean;
  fontSize?: number;
  showCopyButton?: boolean;
  class?: string;
  onCodeChange?: (code: string) => void;
}

export type PropType = 'string' | 'number' | 'boolean' | 'enum';

export interface PropDefinition {
  name: string;
  type: PropType;
  required?: boolean;
  defaultValue?: string | number | boolean;
  description?: string;
  options?: string[];
  min?: number;
  max?: number;
  step?: number;
}

export interface PropsEditorProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onchange'> {
  propDefinitions?: PropDefinition[];
  propValues?: Record<string, unknown>;
  class?: string;
  onPropChange?: (name: string, value: unknown) => void;
}

export type EdgeStyle = 'solid' | 'dashed' | 'dotted' | 'bold' | 'tapered' | 'invisible';

export interface GraphvizDirectedEdgeProps extends Omit<HTMLAttributes<SVGElement>, 'style'> {
  id: string;
  sourceX: number;
  sourceY: number;
  targetX: number;
  targetY: number;
  label?: string;
  color?: string;
  width?: number;
  style?: EdgeStyle;
  selected?: boolean;
  highlight?: boolean;
  class?: string;
}
