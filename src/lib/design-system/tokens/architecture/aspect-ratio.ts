/** Aspect ratio tokens */
export const ASPECT_RATIO = {
	square: '1 / 1',
	video: '16 / 9',
	wideVideo: '21 / 9',
	portrait: '3 / 4',
	landscape: '4 / 3',
	golden: '1.618 / 1',
	photo: '3 / 2'
} as const;

export type AspectRatio = (typeof ASPECT_RATIO)[keyof typeof ASPECT_RATIO];
