import {
  BASE_CAPTION_CLASSES,
  MUTED_CAPTION_CLASSES,
  DEFAULT_TEXT_CAPTION_CLASSES
} from './constant';

export class CaptionStyleManager {
  static getCaptionClasses(
    muted: boolean,
    className: string | undefined
  ): string {
    const classes = [
      BASE_CAPTION_CLASSES,
      muted ? MUTED_CAPTION_CLASSES : DEFAULT_TEXT_CAPTION_CLASSES,
      className
    ];
    return classes.filter(Boolean).join(' ');
  }
}
