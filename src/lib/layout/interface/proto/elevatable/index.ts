import type { TokenOpacity } from '$stylist/architecture/type/enum/opacity';

/** Управление высотой над поверхностью (тень, z-index) и прозрачностью */
export interface IElevatable {
	/** Уровень поднятия над поверхностью (0–13) */
	layoutElevation?: number;
	/** Прозрачность по токену */
	opacity?: TokenOpacity;
}
