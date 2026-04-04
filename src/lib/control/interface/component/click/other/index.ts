import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';

export interface ClickProps extends InteractionHTMLAttributes<HTMLDivElement> {
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
	variant?: TokenAppearance;
	/** Показывать эффект нажатия */
	pressEffect?: boolean;
	/** Показывать эффект наведения */
	hoverEffect?: boolean;
	/** Курсор */
	cursor?: 'pointer' | 'default' | 'grab' | 'not-allowed' | string;
}
