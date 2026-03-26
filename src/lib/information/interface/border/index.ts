import type { InformationHTMLAttributes } from '$stylist/information/type/attribute/item';
import type { TokenBorderStyle } from '$stylist/architecture/type/token/border-style';
import type { TokenSize } from '$stylist/architecture/type/token/size';

export interface BorderProps extends InformationHTMLAttributes<HTMLDivElement> {
	/** Стиль границы */
	borderStyle?: TokenBorderStyle;
	/** Толщина границы */
	borderWidth?: TokenSize | string;
	/** Цвет границы */
	borderColor?: string;
	/** Закругление углов */
	borderRadius?: TokenSize | string;
	/** Показать только верхнюю границу */
	borderTop?: boolean;
	/** Показать только нижнюю границу */
	borderBottom?: boolean;
	/** Показать только левую границу */
	borderLeft?: boolean;
	/** Показать только правую границу */
	borderRight?: boolean;
	/** Анимация границы */
	animated?: boolean;
}
