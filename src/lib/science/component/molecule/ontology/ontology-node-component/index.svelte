<script lang="ts">
	import { Icon } from '$stylist';
	import type { OntologyNodeComponentProps } from '$stylist/science/type/struct/ontology-node-component';
	import { createOntologyNodeComponentState } from '$stylist/science/function/state/ontology-node-component';

	let props: OntologyNodeComponentProps = $props();
	const state = createOntologyNodeComponentState(props);
</script>

<div class={state.baseClasses}>
  <div class="flex items-center justify-center w-full">
    <Icon name={state.style.icon} class="h-4 w-4 mr-1 text-current" />
    {#if props.showLabel}
      <span class="truncate max-w-[80px]" title={state.label}>{state.label}</span>
    {/if}
  </div>

  {#if props.node.attributes && props.node.attributes.length > 0}
    <div class="mt-1 text-[0.6rem] opacity-[var(--opacity-75)] flex flex-wrap justify-center gap-1">
      {#each props.node.attributes as attr}
        <span class="bg-current bg-opacity-[var(--opacity-10)] px-1 rounded">{attr}</span>
      {/each}
    </div>
  {/if}
</div>



