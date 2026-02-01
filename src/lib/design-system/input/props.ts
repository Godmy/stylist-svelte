import type { CompactSize } from '../tokens/sizes';
import type { InputVariant } from './variants';

export interface InputProps {
  variant?: InputVariant;
  size?: CompactSize;
  disabled?: boolean;
  error?: boolean;
  class?: string | null;
}
