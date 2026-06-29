import type { ZwickyNode } from '$stylist/graph/type/struct/zwicky-node';
import type { InstancedDrawData } from '$stylist/graph/type/struct/instanced-draw-data';

export function buildInstancedNodeBuffers(
	nodes: readonly ZwickyNode[],
	hoveredId: string | null,
	selectedId: string | null,
	domainFilter: ReadonlySet<string>,
	clusterFilter: ReadonlySet<string>
): InstancedDrawData {
	const count = nodes.length;
	const instancePositions = new Float32Array(count * 3);
	const instanceColors = new Float32Array(count * 3);
	const instanceSizes = new Float32Array(count);
	const instanceHighlights = new Float32Array(count);
	const hasDomainFilter = domainFilter.size > 0;
	const hasClusterFilter = clusterFilter.size > 0;

	for (let i = 0; i < count; i++) {
		const node = nodes[i];
		const base3 = i * 3;

		instancePositions[base3] = node.x;
		instancePositions[base3 + 1] = node.y;
		instancePositions[base3 + 2] = node.z;

		const domainOk = !hasDomainFilter || domainFilter.has(node.domain);
		const clusterOk = !hasClusterFilter || clusterFilter.has(node.cluster);
		const visible = domainOk && clusterOk;

		const isSelected = node.id === selectedId;
		const isHovered = node.id === hoveredId;

		if (visible) {
			instanceColors[base3] = node.color[0];
			instanceColors[base3 + 1] = node.color[1];
			instanceColors[base3 + 2] = node.color[2];
			instanceSizes[i] = node.size * (isSelected ? 1.8 : isHovered ? 1.3 : 1.0);
			instanceHighlights[i] = isSelected ? 1.0 : isHovered ? 0.6 : 0.0;
		} else {
			instanceColors[base3] = 0.18;
			instanceColors[base3 + 1] = 0.20;
			instanceColors[base3 + 2] = 0.26;
			instanceSizes[i] = node.size * 0.22;
			instanceHighlights[i] = 0.0;
		}
	}

	return { instancePositions, instanceColors, instanceSizes, instanceHighlights, count };
}
