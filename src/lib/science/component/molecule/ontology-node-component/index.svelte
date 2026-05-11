<script lang="ts">
	import Icon from '$stylist/media/component/atom/icon/index.svelte';
	import type { OntologyNodeComponentProps } from '$stylist/science/type/struct/ontology-node-component';
	import { createOntologyNodeComponentState } from '$stylist/science/function/state/ontology-node-component';

	let props: OntologyNodeComponentProps = $props();
	const state = createOntologyNodeComponentState(props);
</script>

<div class={state.baseClasses}>
	<div class="flex w-full items-center justify-center">
		<Icon name={state.style.icon} class="mr-1 h-4 w-4 text-current" />
		{#if props.showLabel}
			<span class="max-w-[80px] truncate" title={state.label}>{state.label}</span>
		{/if}
	</div>

	{#if props.node.attributes && props.node.attributes.length > 0}
		<div class="mt-1 flex flex-wrap justify-center gap-1 text-[0.6rem] opacity-[var(--opacity-75)]">
			{#each props.node.attributes as attr}
				<span class="bg-opacity-[var(--opacity-10)] rounded bg-current px-1">{attr}</span>
			{/each}
		</div>
	{/if}
</div>
