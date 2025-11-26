import type { CodeBlockVariant, CodeBlockSize } from './types';
import {
  BASE_CODE_BLOCK_CLASSES,
  CODE_BLOCK_VARIANT_CLASSES,
  CODE_BLOCK_SIZE_CLASSES
} from './constant';

export class CodeBlockStyleManager {
  static getCodeBlockClasses(
    variant: CodeBlockVariant,
    size: CodeBlockSize,
    className: string | undefined
  ): string {
    const classes = [
      BASE_CODE_BLOCK_CLASSES,
      CODE_BLOCK_VARIANT_CLASSES[variant],
      CODE_BLOCK_SIZE_CLASSES[size],
      className
    ];
    return classes.filter(Boolean).join(' ');
  }
}
