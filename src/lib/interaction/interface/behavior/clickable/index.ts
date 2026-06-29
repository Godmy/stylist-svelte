import type { GestureContract } from '$stylist/interaction/type/struct/gesture/gesture-contract';
import type { TokenCursor } from '$stylist/interaction/type/alias/cursor';

export interface BehaviorClickable extends Partial<GestureContract> {
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
