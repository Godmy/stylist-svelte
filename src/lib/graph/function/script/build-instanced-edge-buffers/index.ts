import type { ZwickyNode } from '$stylist/graph/type/struct/zwicky-node';

export function buildInstancedEdgeBuffers(
	nodes: readonly ZwickyNode[],
	edges: readonly [string, string][],
	selectedId: string | null,
	domainFilter: ReadonlySet<string>,
	clusterFilter: ReadonlySet<string>
): Float32Array {
	const nodeIndex = new Map<string, ZwickyNode>();
	for (const node of nodes) nodeIndex.set(node.id, node);

	const hasDomainFilter = domainFilter.size > 0;
	const hasClusterFilter = clusterFilter.size > 0;

	const data = new Float32Array(edges.length * 12);
	let written = 0;

	for (const [fromId, toId] of edges) {
		const from = nodeIndex.get(fromId);
		const to = nodeIndex.get(toId);
		if (!from || !to) continue;

		const fromDomainOk = !hasDomainFilter || domainFilter.has(from.domain);
		const toDomainOk = !hasDomainFilter || domainFilter.has(to.domain);
		const fromClusterOk = !hasClusterFilter || clusterFilter.has(from.cluster);
		const toClusterOk = !hasClusterFilter || clusterFilter.has(to.cluster);

		if (!fromDomainOk || !toDomainOk || !fromClusterOk || !toClusterOk) continue;

		const isActive = selectedId !== null && (fromId === selectedId || toId === selectedId);
		const brightness = isActive ? 1.0 : 0.20;
		const r = from.color[0] * brightness;
		const g = from.color[1] * brightness;
		const b = from.color[2] * brightness;

		const base = written * 12;
		data[base]     = from.x; data[base + 1] = from.y; data[base + 2] = from.z;
		data[base + 3] = r;      data[base + 4] = g;      data[base + 5] = b;
		data[base + 6] = to.x;  data[base + 7] = to.y;   data[base + 8] = to.z;
		data[base + 9] = r;      data[base + 10] = g;     data[base + 11] = b;
		written++;
	}

	return written < edges.length ? data.slice(0, written * 12) : data;
}
