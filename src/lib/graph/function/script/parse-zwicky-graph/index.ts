import { ZWICKY_DOMAIN_COLOR } from '$stylist/graph/const/record/zwicky-domain-color';
import type { GraphJsonInput } from '$stylist/graph/type/struct/graph-json-input';
import type { ZwickyNode } from '$stylist/graph/type/struct/zwicky-node';

export function parseZwickyGraph(input: GraphJsonInput): {
	nodes: ZwickyNode[];
	edges: readonly [string, string][];
} {
	const paths = Object.keys(input.dependencies);
	const allPaths = new Set<string>(paths);

	for (const deps of Object.values(input.dependencies)) {
		for (const dep of deps) {
			allPaths.add(dep);
		}
	}

	const nodes: ZwickyNode[] = Array.from(allPaths).map((path) => {
		const parts = path.split('\\');
		const domain = parts[0] ?? '';
		const cluster = parts[1] ?? '';
		const joint = parts[2] ?? '';
		const family = parts[3] ?? '';
		const color = ZWICKY_DOMAIN_COLOR[domain] ?? [0.5, 0.5, 0.5];

		return {
			id: path,
			path,
			domain,
			cluster,
			joint,
			family,
			level: 'family',
			x: 0,
			y: 0,
			z: 0,
			size: 0.5,
			color,
			dependencyIds: input.dependencies[path] ?? []
		};
	});

	const edges: [string, string][] = [];

	for (const [from, deps] of Object.entries(input.dependencies)) {
		for (const to of deps) {
			if (allPaths.has(to)) {
				edges.push([from, to]);
			}
		}
	}

	return { nodes, edges };
}
