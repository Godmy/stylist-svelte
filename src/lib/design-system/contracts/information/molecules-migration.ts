import type { HTMLAttributes } from 'svelte/elements';
import type { InformationHTMLAttributes } from '$stylist/design-system/html/attributes/information';
import type { ComponentSize } from '$stylist/design-system/tokens/architecture/component-size';
import type { Alignment } from '$stylist/design-system/tokens/architecture/alignments';
import type { SemanticVariant } from '$stylist/design-system/tokens/interaction/variants';
import type { PropType } from '$stylist/design-system/tokens/interaction/prop-types';
import type { Style as LineStyle } from '$stylist/design-system/tokens/architecture/style';

import type { CodeLanguage } from '$stylist/design-system/tokens/information/code-language';
export interface ProductSearchProps extends Omit<InformationHTMLAttributes<HTMLDivElement>, 'oninput'> {
  placeholder?: string;
  class?: string;
  suggestions?: string[];
  onSearch?: (query: string) => void;
  onSuggestionSelect?: (suggestion: string) => void;
}

export interface WishlistButtonProps extends Omit<InformationHTMLAttributes<HTMLDivElement>, 'onchange'> {
  inWishlist?: boolean;
  class?: string;
  buttonClass?: string;
  size?: ComponentSize;
  variant?: SemanticVariant;
  showLabel?: boolean;
  label?: string;
  tooltip?: string;
  tooltipPosition?: Alignment;
  disabled?: boolean;
  onToggle?: (inWishlist: boolean) => void;
  onSuccess?: () => void;
  onError?: (error: string) => void;
}

export interface CodeEditorProps extends Omit<InformationHTMLAttributes<HTMLDivElement>, 'oninput'> {
  code?: string;
  language?: CodeLanguage;
  height?: string;
  width?: string;
  readOnly?: boolean;
  showLineNumbers?: boolean;
  FONT_SIZE?: number;
  showCopyButton?: boolean;
  class?: string;
  onCodeChange?: (code: string) => void;
}

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

export interface PropsEditorProps extends Omit<InformationHTMLAttributes<HTMLDivElement>, 'onchange'> {
  propDefinitions?: PropDefinition[];
  propValues?: Record<string, unknown>;
  class?: string;
  onPropChange?: (name: string, value: unknown) => void;
}

export interface GraphvizDirectedEdgeProps extends Omit<HTMLAttributes<SVGElement>, 'style'> {
  id: string;
  sourceX: number;
  sourceY: number;
  targetX: number;
  targetY: number;
  label?: string;
  color?: string;
  width?: number;
  style?: LineStyle;
  selected?: boolean;
  highlight?: boolean;
  class?: string;
}

