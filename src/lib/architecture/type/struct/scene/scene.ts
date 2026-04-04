import type { HTMLAttributes } from 'svelte/elements';

export type SceneProps = {
	title?: string;
	rotateHint?: string;
	zoomHint?: string;
	canvasClass?: string;
	overlayClass?: string;
} & HTMLAttributes<HTMLDivElement>;

export type SceneGeometry = {
	positions: Float32Array;
	colors: Float32Array;
	vertexCount: number;
};

export type SceneBufferSet = {
	position: WebGLBuffer;
	color: WebGLBuffer;
	vertexArray: WebGLVertexArrayObject | null;
	vertexCount: number;
};
