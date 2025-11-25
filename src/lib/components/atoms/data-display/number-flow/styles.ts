import type { INumberFlowStyleClasses } from './types';
import {
  NUMBER_FLOW_CLASS,
  REDUCED_MOTION_CLASS,
  ANIMATING_CLASS,
  PREFIX_CLASS,
  SUFFIX_CLASS,
  DIGIT_CONTAINER_CLASS,
  DIGIT_FACE_CLASS,
  DIGIT_OLD_CLASS,
  DIGIT_CURRENT_CLASS,
  SR_ONLY_CLASS
} from './constant';

/**
 * Style utility class following Single Responsibility Principle
 * Responsible only for managing NumberFlow styling logic
 */
export class NumberFlowStyleManager {
  static getContainerClasses(animating: boolean, reducedMotion: boolean, className: string): string {
    return `${NUMBER_FLOW_CLASS} ${animating ? 'animating' : ''} ${reducedMotion ? REDUCED_MOTION_CLASS : ''} ${className}`.trim();
  }

  static getPrefixClasses(): string {
    return PREFIX_CLASS;
  }

  static getSuffixClasses(): string {
    return SUFFIX_CLASS;
  }

  static getDigitContainerClasses(): string {
    return DIGIT_CONTAINER_CLASS;
  }

  static getDigitFaceClasses(): string {
    return DIGIT_FACE_CLASS;
  }

  static getDigitOldClasses(): string {
    return DIGIT_OLD_CLASS;
  }

  static getDigitCurrentClasses(): string {
    return DIGIT_CURRENT_CLASS;
  }

  static getScreenReaderClasses(): string {
    return SR_ONLY_CLASS;
  }

  static getAllClasses(animating: boolean, reducedMotion: boolean, className: string): string {
    return this.getContainerClasses(animating, reducedMotion, className);
  }
}