import type { HTMLAttributes } from 'svelte/elements';
import type { InformationHTMLAttributes } from '$stylist/design-system/html/attributes/information';
import type { TokenSize } from '$stylist/design-system/tokens/architecture/size';
import type { TokenAlignment } from '$stylist/design-system/tokens/architecture/alignment';
import type { TokenAppearance } from '$stylist/design-system/tokens/information/appearance';
import type { TokenPropertyType as PropType } from '$stylist/design-system/tokens/information/property-type';
import type { TokenBorderStyle as LineStyle } from '$stylist/design-system/tokens/architecture/border-style';

import type { TokenCodeLanguage } from '$stylist/design-system/tokens/information/code-language';
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
  size?: TokenSize;
  variant?: TokenAppearance;
  showLabel?: boolean;
  label?: string;
  tooltip?: string;
  tooltipPosition?: TokenAlignment;
  disabled?: boolean;
  onToggle?: (inWishlist: boolean) => void;
  onSuccess?: () => void;
  onError?: (error: string) => void;
}

export interface CodeEditorProps extends Omit<InformationHTMLAttributes<HTMLDivElement>, 'oninput'> {
  code?: string;
  language?: TokenCodeLanguage;
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



