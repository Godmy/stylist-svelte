/**
 * CanvasImageEditor — редактор изображений..
 *
 * LEGO-состав:
 *   IMediaSlot        (information) — media (Media)
 */
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { IMediaSlot } from '$stylist/media/interface/proto/media-slot';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface CanvasImageEditorRecipe
	extends RecordArchitectureMerge<[
		IMediaSlot,
		ThemeAttributes<HTMLCanvasElement>
	]>
{
	/** Ширина холста */
	width?: number;
	/** Высота холста */
	height?: number;
	/** Включен ли режим обрезки */
	cropEnabled?: boolean;
	/** Тип фильтра */
	filter?: 'none' | 'grayscale' | 'sepia' | 'invert' | 'blur' | 'brightness' | 'contrast' | 'saturate' | 'hue-rotate';
	/** Область обрезки */
	cropArea?: { x: number; y: number; width: number; height: number };
	/** Яркость (0-200) */
	brightness?: number;
	/** Контраст (0-200) */
	contrast?: number;
	/** Насыщенность (0-200) */
	saturation?: number;
	/** Оттенок (0-360) */
	hue?: number;
}
