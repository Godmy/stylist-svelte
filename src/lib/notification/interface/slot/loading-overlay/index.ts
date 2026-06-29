import type { TokenSize } from '$stylist/layout/type/alias/size';

/**
 * Типы пропсов для компонента LoadingOverlay
 */
export interface SlotLoadingOverlay {
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
