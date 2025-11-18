import type { IImageStyleClasses } from './types';
import {
  CONTAINER_CLASSES,
  IMAGE_WRAPPER_CLASSES,
  IMAGE_CLASSES_BASE,
  IMAGE_CLASSES_LOADED,
  IMAGE_CLASSES_NOT_LOADED,
  IMAGE_TRANSITION_CLASSES
} from './constant';

/**
 * Style utility class following Single Responsibility Principle
 * Responsible only for managing image styling logic
 */
export class ImageStyleManager {
  static getContainerClasses(): string {
    return CONTAINER_CLASSES;
  }

  static getWrapperClasses(): string {
    return IMAGE_WRAPPER_CLASSES;
  }

  static getImageClasses(className: string, loaded: boolean): string {
    const loadedStateClass = loaded ? IMAGE_CLASSES_LOADED : IMAGE_CLASSES_NOT_LOADED;
    return `${IMAGE_CLASSES_BASE} ${loadedStateClass} ${IMAGE_TRANSITION_CLASSES} ${className}`.trim();
  }

  static getAllClasses(className: string, loaded: boolean): string {
    const imageClasses = this.getImageClasses(className, loaded);
    return imageClasses;
  }
}