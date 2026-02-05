import type { Orientation } from './layout';
import type { CompactSize } from './sizes';
import type { ColorVariant } from './variants';

export type InlineCodeVariant = 'default' | 'subtle';
export type LinkVariant = 'default' | ColorVariant | 'muted';
export type SyntaxHighlightedCodeVariant = 'default' | 'terminal' | 'diff';

export const DEFAULT_ABBR_TITLE = '';
export const ABBR_CLASSES = 'underline decoration-dotted cursor-help';
export const DEFINITION_DESCRIPTION_CLASSES = 'text-sm text-[--color-text-secondary]';
export const DEFINITION_TERM_CLASSES = 'font-medium text-[--color-text-primary]';
export const EM_CLASSES = 'italic';
export const HIGHLIGHT_CLASSES = 'bg-yellow-200 text-[--color-text-primary]';

export const DEFAULT_INLINE_CODE_VARIANT: InlineCodeVariant = 'default';
export const INLINE_CODE_BASE_CLASSES = 'font-mono px-1.5 py-0.5 rounded';
export const INLINE_CODE_CLASSES: Record<InlineCodeVariant, string> = {
  default: 'bg-slate-100 text-slate-800',
  subtle: 'bg-slate-50 text-slate-700'
};

export const KBD_CLASSES =
  'inline-flex items-center rounded border border-slate-300 bg-slate-50 px-1.5 py-0.5 text-xs font-medium text-slate-800';

export const DEFAULT_LINK_VARIANT: LinkVariant = 'default';
export const DEFAULT_LINK_SIZE: CompactSize = 'md';
export const DEFAULT_LINK_DISABLED = false;
export const DEFAULT_LINK_UNDERLINE = true;
export const LINK_VARIANT_CLASSES: Record<LinkVariant, string> = {
  default: 'text-[--color-text-primary]',
  primary: 'text-[--color-primary-600]',
  secondary: 'text-[--color-secondary-600]',
  success: 'text-[--color-success-600]',
  warning: 'text-[--color-warning-600]',
  danger: 'text-[--color-danger-600]',
  info: 'text-[--color-info-600]',
  gray: 'text-[--color-gray-600]',
  muted: 'text-[--color-text-tertiary]'
};
export const LINK_SIZE_CLASSES: Record<CompactSize, string> = {
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg'
};
export const LINK_DISABLED_CLASSES = 'opacity-50 pointer-events-none';
export const LINK_HOVER_CLASSES = 'hover:opacity-80';
export const LINK_UNDERLINE_CLASSES = 'underline underline-offset-2';

export const DEFAULT_SEPARATOR_ORIENTATION: Orientation = 'horizontal';
export const DEFAULT_SEPARATOR_DECORATIVE = false;
export const SEPARATOR_CLASSES: Record<Orientation, string> = {
  horizontal: 'w-full border-t border-[--color-border-secondary]',
  vertical: 'h-full border-l border-[--color-border-secondary]'
};

export const DEFAULT_SYNTAX_HIGHLIGHTED_CODE_VARIANT: SyntaxHighlightedCodeVariant = 'default';
export const DEFAULT_SYNTAX_HIGHLIGHTED_CODE_SIZE: CompactSize = 'md';
export const SYNTAX_HIGHLIGHTED_CODE_CONTAINER_BASE_CLASSES = 'rounded-md';
export const SYNTAX_HIGHLIGHTED_CODE_CLASSES = 'font-mono text-sm';
