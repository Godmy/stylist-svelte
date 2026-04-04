import type { HTMLInputAttributes } from 'svelte/elements';
import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';
import type { TOKEN_SIZE } from '$stylist/layout/const/enum/size';

export interface IFileInputProps extends Omit<HTMLInputAttributes, 'size'> {
  value?: File | File[];
  multiple?: boolean;
  accept?: string;
  disabled?: boolean;
  variant?: TokenAppearance;
  size?: (typeof TOKEN_SIZE)[number];
  placeholder?: string;
  onFileChange?: (files: File | File[] | null) => void;
  class?: string;
}
