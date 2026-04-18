import type { TokenSize } from '$stylist/layout/type/enum/size';

/** Слот иконки — одиночная или парная (лево/право) */
export interface SlotIcon {
	/** Иконка (имя токена или SVG-строка) */
	icon?: string;
	/** Иконка слева от контента */
	iconLeft?: string;
	/** Иконка справа от контента */
	iconRight?: string;
	/** Размер иконки по токену */
	iconSize?: TokenSize;
}
