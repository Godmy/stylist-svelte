import { ZWICKY_LAYOUT_SCALE } from '$stylist/graph/const/value/zwicky-layout-scale';
import { ZWICKY_CLUSTER_ORDER } from '$stylist/graph/const/array/zwicky-cluster-order';
import type { ZwickyNode } from '$stylist/graph/type/struct/zwicky-node';

// X position for each cluster lane — follows assembly direction left→right
const CLUSTER_X: Record<string, number> = Object.fromEntries(
	ZWICKY_CLUSTER_ORDER.map((c, i) => [c, ZWICKY_LAYOUT_SCALE.clusterXFirst + i * ZWICKY_LAYOUT_SCALE.clusterXSpacing])
);

export function layoutZwickyNodes(nodes: ZwickyNode[]): void {
	const { domainZStep, laneScatterX, laneScatterY, laneScatterZ, goldenAngle } = ZWICKY_LAYOUT_SCALE;

	// Group: cluster → domain → [nodes]
	const clusterMap = new Map<string, Map<string, ZwickyNode[]>>();
	const domainSet = new Set<string>();

	for (const node of nodes) {
		if (!clusterMap.has(node.cluster)) clusterMap.set(node.cluster, new Map());
		const domMap = clusterMap.get(node.cluster)!;
		if (!domMap.has(node.domain)) domMap.set(node.domain, []);
		domMap.get(node.domain)!.push(node);
		domainSet.add(node.domain);
	}

	const domains = Array.from(domainSet).sort();
	const nDomains = domains.length;
	// Center domains along Z axis
	const domainZ = new Map(
		domains.map((d, i) => [d, (i - (nDomains - 1) / 2) * domainZStep])
	);

	for (const [cluster, domMap] of clusterMap) {
		const baseX = CLUSTER_X[cluster] ?? 0;

		for (const [domain, families] of domMap) {
			const baseZ = domainZ.get(domain) ?? 0;
			const n = families.length;

			for (let i = 0; i < n; i++) {
				const node = families[i];

				// Golden phyllotaxis gives uniform coverage, no overlaps
				const r = Math.sqrt((i + 0.5) / n);
				const theta = i * goldenAngle;

				// Constrain X scatter to stay within lane; spread Y vertically
				node.x = baseX + r * laneScatterX * Math.cos(theta);
				node.y = r * laneScatterY * Math.sin(theta);
				node.z = baseZ + r * laneScatterZ * Math.cos(theta + Math.PI / 3);

				node.size = 0.42 + Math.min(node.dependencyIds.length * 0.045, 0.45);
			}
		}
	}
}
