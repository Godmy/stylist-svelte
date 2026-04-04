import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { TokenDensity } from '$stylist/layout/type/enum/density';
import type { LayoutShape } from '$stylist/layout/type/struct/item';

/** Управление размерами, плотностью и формой элемента */
export interface ISizable {
	/** Размер по токену */
	size?: TokenSize;
	/** Плотность (compact / default / comfortable) */
	density?: TokenDensity;
	/** Форма (rounded, pill, circular, rectangular) */
	shape?: LayoutShape;
	/** Внешние отступы (CSS margin или токен) */
	layoutMargin?: string;
	/** Внутренние отступы (CSS padding или токен) */
	layoutPadding?: string;
	/** Отступ между элементами (gutter/gap) */
	layoutGutter?: string;
	/** Растянуть на всю доступную ширину (100%) */
	fullWidth?: boolean;
}
