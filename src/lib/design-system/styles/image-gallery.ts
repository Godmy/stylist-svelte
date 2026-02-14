export class ImageGalleryStyleManager {
  static getHostClasses(className: string = ''): string {
    return `w-full ${className}`.trim();
  }

  static getImageContainerClasses(imageClass: string = ''): string {
    return `relative overflow-hidden rounded-lg ${imageClass}`.trim();
  }

  static getImageClasses(imageClass: string = ''): string {
    return `w-full h-auto object-cover ${imageClass}`.trim();
  }

  static getNavigationButtonClasses(navigationClass: string = ''): string {
    return `absolute top-1/2 transform -translate-y-1/2 bg-[--color-bg-overlay] text-[--color-text-inverse] p-2 rounded-full hover:bg-[--color-bg-overlay-hover] ${navigationClass}`.trim();
  }

  static getLeftNavigationButtonClasses(navigationClass: string = ''): string {
    return `absolute top-1/2 left-2 transform -translate-y-1/2 bg-[--color-bg-overlay] text-[--color-text-inverse] p-2 rounded-full hover:bg-[--color-bg-overlay-hover] ${navigationClass}`.trim();
  }

  static getRightNavigationButtonClasses(navigationClass: string = ''): string {
    return `absolute top-1/2 right-2 transform -translate-y-1/2 bg-[--color-bg-overlay] text-[--color-text-inverse] p-2 rounded-full hover:bg-[--color-bg-overlay-hover] ${navigationClass}`.trim();
  }

  static getImageCounterClasses(): string {
    return 'absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-[--color-bg-overlay] text-[--color-text-inverse] text-sm px-3 py-1 rounded-full';
  }

  static getCaptionClasses(captionClass: string = ''): string {
    return `mt-2 text-center text-[--color-text-secondary] ${captionClass}`.trim();
  }

  static getThumbnailsContainerClasses(): string {
    return 'flex overflow-x-auto mt-4 space-x-2 py-2';
  }

  static getThumbnailClasses(isSelected: boolean, thumbnailClass: string = ''): string {
    const baseClasses = 'flex-shrink-0 cursor-pointer rounded-md overflow-hidden border-2';
    const selectedClass = isSelected ? 'border-[--color-primary-500]' : 'border-transparent';

    return `${baseClasses} ${selectedClass} ${thumbnailClass}`.trim();
  }

  static getThumbnailImageClasses(): string {
    return 'w-16 h-16 object-cover';
  }

  static getFullscreenOverlayClasses(): string {
    return 'fixed inset-0 bg-[--color-bg-overlay] z-50 flex items-center justify-center';
  }

  static getFullscreenCloseButtonClasses(): string {
    return 'absolute top-4 right-4 text-[--color-text-inverse] p-2 rounded-full hover:bg-[--color-bg-overlay-hover]';
  }

  static getFullscreenLeftButtonClasses(): string {
    return 'absolute left-4 text-[--color-text-inverse] p-2 rounded-full hover:bg-[--color-bg-overlay-hover]';
  }

  static getFullscreenRightButtonClasses(): string {
    return 'absolute right-4 text-[--color-text-inverse] p-2 rounded-full hover:bg-[--color-bg-overlay-hover]';
  }

  static getFullscreenImageContainerClasses(): string {
    return 'flex flex-col items-center max-w-4xl max-h-full';
  }

  static getFullscreenImageClasses(): string {
    return 'max-h-[80vh] object-contain';
  }

  static getFullscreenCaptionClasses(captionClass: string = ''): string {
    return `mt-4 text-center text-[--color-text-inverse] ${captionClass}`.trim();
  }

  static getFullscreenCounterClasses(): string {
    return 'mt-4 text-[--color-text-inverse] text-sm';
  }
}
