import type { ClickContract, GestureContract } from '$stylist/interaction/type/struct/gesture';
import type { TokenCursor } from '$stylist/interaction/type/enum/cursor';
import type { Snippet } from 'svelte';

/**
 * Прото-интерфейс для кликабельных элементов
 * Расширяет GestureContract дополнительными свойствами
 */
export interface IClickable extends Partial<GestureContract> {
	/** Обработчик клика */
	onClick?: (event: MouseEvent) => void;
	/** Обработчик двойного клика */
	onDblClick?: (event: MouseEvent) => void;
	/** Контекстное меню (правая кнопка) */
	onContextMenu?: (event: MouseEvent) => void;
	/** Идёт загрузка (блокирует клик и показывает индикатор) */
	loading?: boolean;
	/** Курсор при наведении */
	cursor?: TokenCursor;
}

/**
 * Props для кликабельного компонента
 */
export interface ClickProps extends IClickable {
	variant?: 'default' | 'primary' | 'secondary' | 'ghost' | 'link';
	class?: string;
	children?: Snippet;
}
