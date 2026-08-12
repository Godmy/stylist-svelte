import type { HTMLAttributes } from 'svelte/elements';
import type { TokenColorTone } from '$stylist/theme/type/alias/color-tone';
export interface SlotClick extends HTMLAttributes<HTMLDivElement> {
	/** Обработчик клика */
	onClick?: (event: MouseEvent) => void;
	/** Обработчик двойного клика */
	onDblClick?: (event: MouseEvent) => void;
	/** Обработчик нажатия правой кнопки */
	onContextMenu?: (event: MouseEvent) => void;
	/** Обработчик начала нажатия */
	onMouseDown?: (event: MouseEvent) => void;
	/** Обработчик окончания нажатия */
	onMouseUp?: (event: MouseEvent) => void;
	/** Обработчик наведения */
	onMouseEnter?: (event: MouseEvent) => void;
	/** Обработчик ухода курсора */
	onMouseLeave?: (event: MouseEvent) => void;
	/** Блокировка клика */
	disabled?: boolean;
	/** Вариант отображения */
	variant?: TokenColorTone;
	/** Показывать эффект нажатия */
	pressEffect?: boolean;
	/** Показывать эффект наведения */
	hoverEffect?: boolean;
	/** Курсор */
	cursor?: 'pointer' | 'default' | 'grab' | 'not-allowed' | string;
}
