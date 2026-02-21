/**
 * Токены соотношений сторон - Aspect ratios для изображений, видео и контейнеров
 *
 * @example
 * ```ts
 * import { aspectRatio } from '$stylist/design-system/tokens';
 *
 * const videoContainer = {
 *   aspectRatio: aspectRatio.video
 * };
 *
 * const avatar = {
 *   aspectRatio: aspectRatio.square
 * };
 * ```
 */

/**
 * Объект, содержащий значения соотношений сторон
 * Используется для поддержания пропорций элементов
 *
 * @property {string} square - Квадрат (1:1)
 * @property {string} video - Стандартное видео (16:9)
 * @property {string} wideVideo - Широкое видео (21:9)
 * @property {string} portrait - Портрет (3:4)
 * @property {string} landscape - Альбом (4:3)
 * @property {string} golden - Золотое сечение (1.618:1)
 * @property {string} photo - Стандартное фото (3:2)
 */
export const aspectRatio = {
	square: '1 / 1',
	video: '16 / 9',
	wideVideo: '21 / 9',
	portrait: '3 / 4',
	landscape: '4 / 3',
	golden: '1.618 / 1',
	photo: '3 / 2'
} as const;

/**
 * Тип, представляющий возможные значения соотношений сторон
 */
export type AspectRatio = (typeof aspectRatio)[keyof typeof aspectRatio];

/**
 * Объект, объединяющий все токены соотношений сторон
 */
export const aspects = {
	ratio: aspectRatio
} as const;
