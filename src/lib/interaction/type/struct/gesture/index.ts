import type { TokenAnimation } from '$stylist/interaction/type/enum/animation';
import type { TokenDuration } from '$stylist/interaction/type/enum/duration';
import type { TokenEasing } from '$stylist/interaction/type/enum/easing';
import type { TokenCursor } from '$stylist/interaction/type/enum/cursor';

/**
 * Базовый контракт для всех жестов
 */
export interface GestureContract {
	/** Отключает взаимодействие */
	disabled: boolean;
	/** Токен анимации */
	animation: TokenAnimation;
	/** Токен длительности */
	duration: TokenDuration;
	/** Токен easing функции */
	easing: TokenEasing;
	/** Токен курсора */
	cursor: TokenCursor;
	/** Эффект нажатия */
	pressEffect: boolean;
	/** Эффект наведения */
	hoverEffect: boolean;
}

/**
 * Контракт для кликабельных элементов
 */
export interface ClickContract extends GestureContract {
	/** Обработчик клика */
	onClick?: (event: MouseEvent) => void;
	/** Обработчик двойного клика */
	onDblClick?: (event: MouseEvent) => void;
	/** Обработчик контекстного меню */
	onContextMenu?: (event: MouseEvent) => void;
}

/**
 * Контракт для draggable элементов
 */
export interface DragContract extends GestureContract {
	/** Разрешить перетаскивание */
	draggable: boolean;
	/** Разрешить drop зону */
	dropzone: boolean;
	/** Данные для передачи при drag */
	dragData?: any;
	/** Обработчик начала перетаскивания */
	onDragStart?: (event: DragEvent) => void;
	/** Обработчик перетаскивания */
	onDrag?: (event: DragEvent) => void;
	/** Обработчик окончания перетаскивания */
	onDragEnd?: (event: DragEvent) => void;
	/** Обработчик входа в drop зону */
	onDragEnter?: (event: DragEvent) => void;
	/** Обработчик выхода из drop зоны */
	onDragLeave?: (event: DragEvent) => void;
	/** Обработчик нахождения над drop зоной */
	onDragOver?: (event: DragEvent) => void;
	/** Обработчик сброса */
	onDrop?: (event: DragEvent) => void;
}

/**
 * Контракт для hoverable элементов
 */
export interface HoverContract extends GestureContract {
	/** Обработчик наведения */
	onMouseEnter?: (event: MouseEvent) => void;
	/** Обработчик ухода с элемента */
	onMouseLeave?: (event: MouseEvent) => void;
}

/**
 * Контракт для focusable элементов
 */
export interface FocusContract extends GestureContract {
	/** Обработчик фокуса */
	onFocus?: (event: FocusEvent) => void;
	/** Обработчик потери фокуса */
	onBlur?: (event: FocusEvent) => void;
}
