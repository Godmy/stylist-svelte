/**
 * Размеры спиннера загрузки
 */
export type LoadingOverlaySpinnerSize = 'sm' | 'md' | 'lg';

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
  spinnerSize?: LoadingOverlaySpinnerSize;
}