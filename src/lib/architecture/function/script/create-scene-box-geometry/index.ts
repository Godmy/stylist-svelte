import type { SceneGeometry } from '$stylist/architecture/type/struct/scene-geometry';

export function createSceneBoxGeometry(
	width: number,
	height: number,
	depth: number,
	color: readonly [number, number, number]
): SceneGeometry {
	const hx = width / 2;
	const hy = height / 2;
	const hz = depth / 2;
	const positions = new Float32Array([
		-hx, -hy, hz, hx, -hy, hz, hx, hy, hz,
		-hx, -hy, hz, hx, hy, hz, -hx, hy, hz,
		-hx, -hy, -hz, -hx, hy, -hz, hx, hy, -hz,
		-hx, -hy, -hz, hx, hy, -hz, hx, -hy, -hz,
		-hx, hy, -hz, -hx, hy, hz, hx, hy, hz,
		-hx, hy, -hz, hx, hy, hz, hx, hy, -hz,
		-hx, -hy, -hz, hx, -hy, -hz, hx, -hy, hz,
		-hx, -hy, -hz, hx, -hy, hz, -hx, -hy, hz,
		hx, -hy, -hz, hx, hy, -hz, hx, hy, hz,
		hx, -hy, -hz, hx, hy, hz, hx, -hy, hz,
		-hx, -hy, -hz, -hx, -hy, hz, -hx, hy, hz,
		-hx, -hy, -hz, -hx, hy, hz, -hx, hy, -hz
	]);
	const colors = new Float32Array(Array.from({ length: 36 }, () => color).flat());

	return { positions, colors, vertexCount: 36 };
}
