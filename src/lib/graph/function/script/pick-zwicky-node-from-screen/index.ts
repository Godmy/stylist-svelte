import type { ZwickyNode } from '$stylist/graph/type/struct/zwicky-node';
import type { Camera } from '$stylist/graph/class/manager/camera';

export function pickZwickyNodeFromScreen(
	nodes: readonly ZwickyNode[],
	camera: Camera | null,
	canvas: HTMLCanvasElement | null,
	clientX: number,
	clientY: number
): ZwickyNode | null {
	if (!camera || !canvas) {
		return null;
	}

	const rect = canvas.getBoundingClientRect();
	const ndcX = ((clientX - rect.left) / rect.width) * 2 - 1;
	const ndcY = -((clientY - rect.top) / rect.height) * 2 + 1;

	const view = camera.getViewMatrix().toArray();
	const proj = camera.getProjectionMatrix().toArray();

	// Unproject two points to get ray (near and far plane)
	const invVP = invertMat4(multiplyMat4(proj, view));
	if (!invVP) return null;

	const near = transformVec4(invVP, [ndcX, ndcY, -1, 1]);
	const far = transformVec4(invVP, [ndcX, ndcY, 1, 1]);

	const rayOrigin = [near[0] / near[3], near[1] / near[3], near[2] / near[3]] as const;
	const farWorld = [far[0] / far[3], far[1] / far[3], far[2] / far[3]] as const;
	const rayDir = normalize([
		farWorld[0] - rayOrigin[0],
		farWorld[1] - rayOrigin[1],
		farWorld[2] - rayOrigin[2]
	]);

	let closestNode: ZwickyNode | null = null;
	let closestT = Infinity;

	for (const node of nodes) {
		const ox = node.x - rayOrigin[0];
		const oy = node.y - rayOrigin[1];
		const oz = node.z - rayOrigin[2];

		const b = ox * rayDir[0] + oy * rayDir[1] + oz * rayDir[2];
		const c = ox * ox + oy * oy + oz * oz - node.size * node.size;
		const disc = b * b - c;

		if (disc < 0) continue;

		const t = b - Math.sqrt(disc);
		if (t > 0 && t < closestT) {
			closestT = t;
			closestNode = node;
		}
	}

	return closestNode;
}

function multiplyMat4(a: number[], b: number[]): number[] {
	const out = new Array<number>(16).fill(0);
	for (let row = 0; row < 4; row++) {
		for (let col = 0; col < 4; col++) {
			let sum = 0;
			for (let k = 0; k < 4; k++) {
				sum += a[row + k * 4] * b[k + col * 4];
			}
			out[row + col * 4] = sum;
		}
	}
	return out;
}

function invertMat4(m: number[]): number[] | null {
	const det =
		m[0] * (m[5] * m[10] * m[15] + m[9] * m[14] * m[7] + m[13] * m[6] * m[11]
			- m[13] * m[10] * m[7] - m[9] * m[6] * m[15] - m[5] * m[14] * m[11])
		- m[4] * (m[1] * m[10] * m[15] + m[9] * m[14] * m[3] + m[13] * m[2] * m[11]
			- m[13] * m[10] * m[3] - m[9] * m[2] * m[15] - m[1] * m[14] * m[11])
		+ m[8] * (m[1] * m[6] * m[15] + m[5] * m[14] * m[3] + m[13] * m[2] * m[7]
			- m[13] * m[6] * m[3] - m[5] * m[2] * m[15] - m[1] * m[14] * m[7])
		- m[12] * (m[1] * m[6] * m[11] + m[5] * m[10] * m[3] + m[9] * m[2] * m[7]
			- m[9] * m[6] * m[3] - m[5] * m[2] * m[11] - m[1] * m[10] * m[7]);

	if (Math.abs(det) < 1e-8) return null;

	const inv = 1 / det;
	return [
		inv * (m[5] * m[10] * m[15] - m[5] * m[14] * m[11] - m[9] * m[6] * m[15] + m[9] * m[14] * m[7] + m[13] * m[6] * m[11] - m[13] * m[10] * m[7]),
		inv * (-m[1] * m[10] * m[15] + m[1] * m[14] * m[11] + m[9] * m[2] * m[15] - m[9] * m[14] * m[3] - m[13] * m[2] * m[11] + m[13] * m[10] * m[3]),
		inv * (m[1] * m[6] * m[15] - m[1] * m[14] * m[7] - m[5] * m[2] * m[15] + m[5] * m[14] * m[3] + m[13] * m[2] * m[7] - m[13] * m[6] * m[3]),
		inv * (-m[1] * m[6] * m[11] + m[1] * m[10] * m[7] + m[5] * m[2] * m[11] - m[5] * m[10] * m[3] - m[9] * m[2] * m[7] + m[9] * m[6] * m[3]),
		inv * (-m[4] * m[10] * m[15] + m[4] * m[14] * m[11] + m[8] * m[6] * m[15] - m[8] * m[14] * m[7] - m[12] * m[6] * m[11] + m[12] * m[10] * m[7]),
		inv * (m[0] * m[10] * m[15] - m[0] * m[14] * m[11] - m[8] * m[2] * m[15] + m[8] * m[14] * m[3] + m[12] * m[2] * m[11] - m[12] * m[10] * m[3]),
		inv * (-m[0] * m[6] * m[15] + m[0] * m[14] * m[7] + m[4] * m[2] * m[15] - m[4] * m[14] * m[3] - m[12] * m[2] * m[7] + m[12] * m[6] * m[3]),
		inv * (m[0] * m[6] * m[11] - m[0] * m[10] * m[7] - m[4] * m[2] * m[11] + m[4] * m[10] * m[3] + m[8] * m[2] * m[7] - m[8] * m[6] * m[3]),
		inv * (m[4] * m[9] * m[15] - m[4] * m[13] * m[11] - m[8] * m[5] * m[15] + m[8] * m[13] * m[7] + m[12] * m[5] * m[11] - m[12] * m[9] * m[7]),
		inv * (-m[0] * m[9] * m[15] + m[0] * m[13] * m[11] + m[8] * m[1] * m[15] - m[8] * m[13] * m[3] - m[12] * m[1] * m[11] + m[12] * m[9] * m[3]),
		inv * (m[0] * m[5] * m[15] - m[0] * m[13] * m[7] - m[4] * m[1] * m[15] + m[4] * m[13] * m[3] + m[12] * m[1] * m[7] - m[12] * m[5] * m[3]),
		inv * (-m[0] * m[5] * m[11] + m[0] * m[9] * m[7] + m[4] * m[1] * m[11] - m[4] * m[9] * m[3] - m[8] * m[1] * m[7] + m[8] * m[5] * m[3]),
		inv * (-m[4] * m[9] * m[14] + m[4] * m[13] * m[10] + m[8] * m[5] * m[14] - m[8] * m[13] * m[6] - m[12] * m[5] * m[10] + m[12] * m[9] * m[6]),
		inv * (m[0] * m[9] * m[14] - m[0] * m[13] * m[10] - m[8] * m[1] * m[14] + m[8] * m[13] * m[2] + m[12] * m[1] * m[10] - m[12] * m[9] * m[2]),
		inv * (-m[0] * m[5] * m[14] + m[0] * m[13] * m[6] + m[4] * m[1] * m[14] - m[4] * m[13] * m[2] - m[12] * m[1] * m[6] + m[12] * m[5] * m[2]),
		inv * (m[0] * m[5] * m[10] - m[0] * m[9] * m[6] - m[4] * m[1] * m[10] + m[4] * m[9] * m[2] + m[8] * m[1] * m[6] - m[8] * m[5] * m[2])
	];
}

function transformVec4(m: number[], v: readonly [number, number, number, number]): [number, number, number, number] {
	return [
		m[0] * v[0] + m[4] * v[1] + m[8] * v[2] + m[12] * v[3],
		m[1] * v[0] + m[5] * v[1] + m[9] * v[2] + m[13] * v[3],
		m[2] * v[0] + m[6] * v[1] + m[10] * v[2] + m[14] * v[3],
		m[3] * v[0] + m[7] * v[1] + m[11] * v[2] + m[15] * v[3]
	];
}

function normalize(v: [number, number, number]): [number, number, number] {
	const len = Math.sqrt(v[0] * v[0] + v[1] * v[1] + v[2] * v[2]);
	if (len < 1e-8) return [0, 0, 1];
	return [v[0] / len, v[1] / len, v[2] / len];
}
