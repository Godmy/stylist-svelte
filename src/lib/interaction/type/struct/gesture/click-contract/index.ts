import type { GestureContract } from '..';

/**
 * Контракт для кликабельных элементов
 */
export type ClickContract = GestureContract & {
	/** Обработчик клика */
	onClick?: (event: MouseEvent) => void;
	/** Обработчик двойного клика */
	onDblClick?: (event: MouseEvent) => void;
	/** Обработчик контекстного меню */
	onContextMenu?: (event: MouseEvent) => void;
}
