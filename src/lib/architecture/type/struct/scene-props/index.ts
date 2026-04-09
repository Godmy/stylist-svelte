import type { HTMLAttributes } from 'svelte/elements';

export type SceneProps = {
	title?: string;
	rotateHint?: string;
	zoomHint?: string;
	canvasClass?: string;
	overlayClass?: string;
} & HTMLAttributes<HTMLDivElement>;
