<script lang="ts">
	import type { BreadcrumbDropdownRecipe } from '$stylist/navigation/interface/recipe/breadcrumb-dropdown';
	import { createBreadcrumbDropdownState } from '$stylist/navigation/function/state/breadcrumb-dropdown';
	import type { BreadcrumbDropdownItem } from '$stylist/navigation/type/struct/breadcrumbs-props/breadcrumb-dropdown-item';

	let props: BreadcrumbDropdownRecipe & {
		open?: boolean;
		items?: BreadcrumbDropdownItem[];
		onSelect?: (targetId: string) => void;
		class?: string;
	} = $props();

	const state = createBreadcrumbDropdownState(props);
</script>

{#if state.open && state.items.length > 0}
	<div class={state.dropdownClass} {...state.restProps}>
		{#each state.items as item (item.id)}
			<button type="button" class={state.itemClass} onclick={() => state.handleSelect(item.targetId)}>
				<span class={state.itemLabelClass}>{item.label}</span>
				{#if item.description}
					<span class={state.itemDescriptionClass}>{item.description}</span>
				{/if}
			</button>
		{/each}
	</div>
{/if}
