import type { ZwickyNode } from '$stylist/graph/type/struct/zwicky-node';

export function buildInstancedEdgeBuffers(
	nodes: readonly ZwickyNode[],
	edges: readonly [string, string][],
	selectedId: string | null
): Float32Array {
	const nodeIndex = new Map<string, ZwickyNode>();

	for (const node of nodes) {
		nodeIndex.set(node.id, node);
	}

	// 6 floats per vertex (xyz + rgb), 2 vertices per edge
	const data = new Float32Array(edges.length * 12);
	let written = 0;

	for (const [fromId, toId] of edges) {
		const from = nodeIndex.get(fromId);
		const to = nodeIndex.get(toId);

		if (!from || !to) {
			continue;
		}

		const isActive =
			selectedId !== null && (fromId === selectedId || toId === selectedId);

		// Dim unrelated edges; brighten active edges
		const brightness = isActive ? 1.0 : 0.28;
		const r = from.color[0] * brightness;
		const g = from.color[1] * brightness;
		const b = from.color[2] * brightness;

		const base = written * 12;
		data[base] = from.x;
		data[base + 1] = from.y;
		data[base + 2] = from.z;
		data[base + 3] = r;
		data[base + 4] = g;
		data[base + 5] = b;

		data[base + 6] = to.x;
		data[base + 7] = to.y;
		data[base + 8] = to.z;
		data[base + 9] = r;
		data[base + 10] = g;
		data[base + 11] = b;

		written++;
	}

	return written < edges.length ? data.slice(0, written * 12) : data;
}
