import type { ZwickyNode } from '$stylist/graph/type/struct/zwicky-node';
import type { InstancedDrawData } from '$stylist/graph/type/struct/instanced-draw-data';

export function buildInstancedNodeBuffers(
	nodes: readonly ZwickyNode[],
	hoveredId: string | null,
	selectedId: string | null
): InstancedDrawData {
	const count = nodes.length;
	const instancePositions = new Float32Array(count * 3);
	const instanceColors = new Float32Array(count * 3);
	const instanceSizes = new Float32Array(count);
	const instanceHighlights = new Float32Array(count);

	for (let i = 0; i < count; i++) {
		const node = nodes[i];
		const base3 = i * 3;

		instancePositions[base3] = node.x;
		instancePositions[base3 + 1] = node.y;
		instancePositions[base3 + 2] = node.z;

		const isSelected = node.id === selectedId;
		const isHovered = node.id === hoveredId;
		const highlight = isSelected ? 1.0 : isHovered ? 0.6 : 0.0;

		instanceColors[base3] = node.color[0];
		instanceColors[base3 + 1] = node.color[1];
		instanceColors[base3 + 2] = node.color[2];

		instanceSizes[i] = node.size * (isSelected ? 1.8 : isHovered ? 1.3 : 1.0);
		instanceHighlights[i] = highlight;
	}

	return { instancePositions, instanceColors, instanceSizes, instanceHighlights, count };
}
