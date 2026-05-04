<script lang="ts">
	import OrbitTokenNode from '../../atom/orbit-token-node/index.svelte';
	import { L6_TOKEN_DEFINITIONS } from '../orbit-control-definitions/index';

	let { opened = false }: { opened?: boolean } = $props();

	const nodes = [
		{
			id: 'component-size',
			icon: 'component-size',
			label: 'Component Size',
			index: 0,
			count: 2,
			radius: '68px'
		},
		{ id: 'style', icon: 'style', label: 'Style', index: 1, count: 2, radius: '68px' }
	] as const;

	const toTransform = (index: number, count: number, radius: string) =>
		`transform: rotate(${(360 / count) * index}deg) translate(${radius}) rotate(${-(360 / count) * index}deg);`;
</script>

{#if opened}
	{#each nodes as node}
		<OrbitTokenNode
			id={node.id}
			icon={node.icon}
			label={node.label}
			{opened}
			definition={L6_TOKEN_DEFINITIONS[node.id]}
			style={toTransform(node.index, node.count, node.radius)}
		/>
	{/each}
{/if}
