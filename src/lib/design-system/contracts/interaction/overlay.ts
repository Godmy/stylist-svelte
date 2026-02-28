import type { ComponentSize } from '$stylist/design-system/tokens/architecture/component-size';

/**
 * Типы пропсов для компонента LoadingOverlay
 */
export interface ILoadingOverlayProps {
  /**
   * Отображать ли оверлей загрузки
   */
  loading?: boolean;

  /**
   * Сообщение, отображаемое во время загрузки
   */
  message?: string;

  /**
   * Размер спиннера
   */
  spinnerSize?: ComponentSize;
}