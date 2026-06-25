import { createSceneAtom } from '$stylist/graph/function/script/create-scene-atom';
import type { SceneGraph } from '$stylist/graph/type/struct/scene-graph/scene-graph';
import type { SceneAtom } from '$stylist/graph/type/struct/scene-atom/scene-atom';
import type { SceneMolecule } from '$stylist/graph/type/struct/scene-molecule';
import type { GraphConnection } from '$stylist/graph/type/struct/graph-connection';
import type { GraphNode } from '$stylist/graph/type/struct/graph-node';

export function createDemoSceneGraph(): SceneGraph {
	const nodes: readonly GraphNode[] = [
		{
			id: 'graph-core',
			label: 'Graph Core',
			description: '3D graph runtime',
			position: { x: 0, y: 0.6, z: 0 },
			size: 1.65,
			accent: [0.29, 0.78, 0.94]
		},
		{
			id: 'node-model',
			label: 'Nodes',
			description: 'Spatial entities',
			position: { x: -4.8, y: 0.1, z: -2.2 },
			size: 1.15,
			accent: [0.58, 0.83, 0.46]
		},
		{
			id: 'connection-model',
			label: 'Connections',
			description: 'Typed relations',
			position: { x: 4.7, y: 0.1, z: -2.1 },
			size: 1.15,
			accent: [1, 0.68, 0.3]
		},
		{
			id: 'webgl-runtime',
			label: 'WebGL',
			description: 'Rendering pipeline',
			position: { x: -3.6, y: 0.2, z: 3.6 },
			size: 1.25,
			accent: [0.73, 0.52, 1]
		},
		{
			id: 'interaction',
			label: 'Interaction',
			description: 'Hover and selection',
			position: { x: 3.5, y: 0.2, z: 3.7 },
			size: 1.25,
			accent: [1, 0.42, 0.5]
		},
		{
			id: 'camera',
			label: 'Camera',
			description: '3D viewport controls',
			position: { x: 0, y: -0.25, z: 6.1 },
			size: 0.95,
			accent: [0.45, 0.95, 0.78]
		}
	] as const;
	const connections: readonly GraphConnection[] = [
		{
			id: 'core-to-nodes',
			startId: 'graph-core',
			endId: 'node-model',
			strength: 0.92,
			accent: [0.58, 0.83, 0.46]
		},
		{
			id: 'core-to-connections',
			startId: 'graph-core',
			endId: 'connection-model',
			strength: 0.92,
			accent: [1, 0.68, 0.3]
		},
		{
			id: 'nodes-to-webgl',
			startId: 'node-model',
			endId: 'webgl-runtime',
			strength: 0.68,
			accent: [0.48, 0.7, 1]
		},
		{
			id: 'connections-to-interaction',
			startId: 'connection-model',
			endId: 'interaction',
			strength: 0.68,
			accent: [1, 0.42, 0.5]
		},
		{
			id: 'webgl-to-camera',
			startId: 'webgl-runtime',
			endId: 'camera',
			strength: 0.58,
			accent: [0.73, 0.52, 1]
		},
		{
			id: 'interaction-to-camera',
			startId: 'interaction',
			endId: 'camera',
			strength: 0.58,
			accent: [0.45, 0.95, 0.78]
		},
		{
			id: 'nodes-to-connections',
			startId: 'node-model',
			endId: 'connection-model',
			strength: 0.42,
			accent: [0.34, 0.79, 0.92]
		}
	] as const;
	const nodeMap = new Map(nodes.map((node) => [node.id, node]));
	const atoms: SceneAtom[] = [];

	atoms.push(
		createSceneAtom({
			id: 'graph-floor',
			kind: 'surface',
			geometry: { type: 'box', width: 13.8, height: 0.08, depth: 10.8, color: [0.055, 0.07, 0.105] },
			material: { kind: 'surface' },
			transform: { position: { x: 0, y: -0.72, z: 1.65 } },
			selectable: false,
			boundsRadius: 6.8,
			metadata: { label: 'Graph surface' }
		})
	);

	for (const connection of connections) {
		const start = nodeMap.get(connection.startId);
		const end = nodeMap.get(connection.endId);

		if (!start || !end) {
			continue;
		}

		const dx = end.position.x - start.position.x;
		const dz = end.position.z - start.position.z;
		const length = Math.hypot(dx, dz);
		const strength = connection.strength ?? 0.5;
		const y = Math.min(start.position.y, end.position.y) - 0.18;

		atoms.push(
			createSceneAtom({
				id: `connection-${connection.id}`,
				kind: 'connection',
				geometry: {
					type: 'box',
					width: length,
					height: 0.07 + strength * 0.05,
					depth: 0.07 + strength * 0.05,
					color: connection.accent ?? [0.28, 0.58, 0.72]
				},
				material: {
					kind: strength > 0.75 ? 'connection-strong' : 'connection',
					color: connection.accent
				},
				transform: {
					position: {
						x: (start.position.x + end.position.x) / 2,
						y,
						z: (start.position.z + end.position.z) / 2
					},
					rotation: { y: -Math.atan2(dz, dx) }
				},
				selectable: false,
				boundsRadius: Math.max(0.35, length / 2),
				metadata: { label: connection.label ?? `${start.label} -> ${end.label}` }
			})
		);
	}

	for (const node of nodes) {
		const size = node.size ?? 1;
		const accent = node.accent ?? [0.34, 0.79, 0.92];

		atoms.push(
			createSceneAtom({
				id: `halo-${node.id}`,
				kind: 'node-halo',
				geometry: {
					type: 'box',
					width: size * 1.7,
					height: 0.12,
					depth: size * 1.7,
					color: accent
				},
				material: { kind: 'node-halo', color: accent },
				transform: {
					position: { x: node.position.x, y: node.position.y - 0.36, z: node.position.z },
					rotation: { y: 0.18 }
				},
				selectable: false,
				boundsRadius: size,
				metadata: { label: `${node.label} halo` }
			}),
			createSceneAtom({
				id: `node-${node.id}`,
				kind: 'node',
				geometry: {
					type: 'box',
					width: size * 1.05,
					height: size * 0.72,
					depth: size * 1.05,
					color: [0.84, 0.88, 0.94]
				},
				material: { kind: 'node-core' },
				transform: {
					position: node.position,
					rotation: { y: node.id === 'graph-core' ? 0.78 : 0.38 },
					scale: { x: 1, y: node.id === 'graph-core' ? 1.14 : 1, z: 1 }
				},
				motion: node.id === 'graph-core' ? { spin: { y: 0.18 } } : undefined,
				moleculeId: 'graph-runtime',
				boundsRadius: size * 0.85,
				metadata: {
					label: node.label,
					description: node.description,
					tags: ['graph', 'webgl']
				}
			})
		);
	}

	const molecules: readonly SceneMolecule[] = [
		{
			id: 'graph-runtime',
			label: 'Standalone WebGL Graph',
			atoms
		}
	];

	return {
		id: 'standalone-graph',
		label: 'Standalone WebGL graph',
		nodes,
		connections,
		molecules,
		atoms,
		boundsRadius: 8.4,
		focusTarget: { x: 0, y: 0.05, z: 1.35 },
		defaultPreset: 'iso'
	};
}
