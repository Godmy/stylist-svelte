import type { TokenSize } from '$stylist/layout/type/enum/size';

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
  spinnerSize?: TokenSize;
}



