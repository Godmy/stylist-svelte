import { ZWICKY_LAYOUT_SCALE } from '$stylist/graph/const/value/zwicky-layout-scale';
import type { ZwickyNode } from '$stylist/graph/type/struct/zwicky-node';

const CLUSTER_Y_ORDER: Record<string, number> = {
	data: 0,
	const: 1,
	type: 2,
	interface: 3,
	class: 4,
	function: 5,
	component: 6
};

export function layoutZwickyNodes(nodes: ZwickyNode[]): void {
	const { domainRadius, familyMaxRadius, clusterYStep, goldenAngle } = ZWICKY_LAYOUT_SCALE;

	// Group: domain → cluster → [nodes]
	const domainMap = new Map<string, Map<string, ZwickyNode[]>>();

	for (const node of nodes) {
		if (!domainMap.has(node.domain)) {
			domainMap.set(node.domain, new Map());
		}
		const clusterMap = domainMap.get(node.domain)!;
		if (!clusterMap.has(node.cluster)) {
			clusterMap.set(node.cluster, []);
		}
		clusterMap.get(node.cluster)!.push(node);
	}

	const domains = Array.from(domainMap.keys()).sort();
	const nDomains = domains.length;

	for (let di = 0; di < nDomains; di++) {
		const domain = domains[di];
		const angle = (2 * Math.PI * di) / nDomains;

		// Domain center on large ring
		const domainX = domainRadius * Math.cos(angle);
		const domainZ = domainRadius * Math.sin(angle);

		// Tangent direction (perpendicular to radius) for spreading families
		const tanX = -Math.sin(angle);
		const tanZ = Math.cos(angle);

		const clusterMap = domainMap.get(domain)!;

		for (const [cluster, families] of clusterMap) {
			const clusterY = (CLUSTER_Y_ORDER[cluster] ?? 3) * clusterYStep;
			const nFamilies = families.length;

			for (let fi = 0; fi < nFamilies; fi++) {
				const node = families[fi];

				// Sunflower phyllotaxis for even disc coverage
				const r = familyMaxRadius * Math.sqrt((fi + 0.5) / nFamilies);
				const theta = fi * goldenAngle;

				const localX = r * Math.cos(theta);
				const localZ = r * Math.sin(theta);

				// Rotate local disc to face outward from domain ring
				node.x = domainX + tanX * localX + Math.cos(angle) * localZ;
				node.y = clusterY;
				node.z = domainZ + tanZ * localX + Math.sin(angle) * localZ;

				// Size slightly larger for nodes with more dependencies
				const depCount = node.dependencyIds.length;
				node.size = 0.42 + Math.min(depCount * 0.04, 0.4);
			}
		}
	}
}
