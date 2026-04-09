import type { SceneGeometry } from '$stylist/architecture/type/struct/scene-geometry';

export function createSceneRoomGeometry(size = 20): SceneGeometry {
	const halfSize = size / 2;
	const positions = new Float32Array([
		-halfSize, -halfSize, -halfSize, halfSize, -halfSize, -halfSize, halfSize, -halfSize, halfSize,
		-halfSize, -halfSize, -halfSize, halfSize, -halfSize, halfSize, -halfSize, -halfSize, halfSize,
		-halfSize, halfSize, -halfSize, -halfSize, halfSize, halfSize, halfSize, halfSize, halfSize,
		-halfSize, halfSize, -halfSize, halfSize, halfSize, halfSize, halfSize, halfSize, -halfSize,
		-halfSize, -halfSize, -halfSize, -halfSize, halfSize, -halfSize, halfSize, halfSize, -halfSize,
		-halfSize, -halfSize, -halfSize, halfSize, halfSize, -halfSize, halfSize, -halfSize, -halfSize,
		-halfSize, -halfSize, halfSize, halfSize, -halfSize, halfSize, halfSize, halfSize, halfSize,
		-halfSize, -halfSize, halfSize, halfSize, halfSize, halfSize, -halfSize, halfSize, halfSize,
		-halfSize, -halfSize, -halfSize, -halfSize, halfSize, -halfSize, -halfSize, halfSize, halfSize,
		-halfSize, -halfSize, -halfSize, -halfSize, halfSize, halfSize, -halfSize, -halfSize, halfSize,
		halfSize, -halfSize, -halfSize, halfSize, -halfSize, halfSize, halfSize, halfSize, halfSize,
		halfSize, -halfSize, -halfSize, halfSize, halfSize, halfSize, halfSize, halfSize, -halfSize
	]);

	const colors = new Float32Array([
		0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3,
		0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3,
		0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5,
		0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5,
		...Array(72).fill(0.4)
	]);

	return { positions, colors, vertexCount: 36 };
}
