<script lang="ts">
	import { Icon as BaseIcon } from '$stylist';
	import { createIconPickerState } from '$stylist/input/function/state/icon-picker';
	import { IconPickerStyleManager } from '$stylist/media/class/style-manager/icon-picker';
	import type { ThemeIconPickerRecipe } from '$stylist/media/interface/recipe/icon-picker';
	import type { Snippet } from 'svelte';

	let props: ThemeIconPickerRecipe = $props();
	const state = createIconPickerState(props);
</script>

<div class={state.rootClass} {...state.restProps}>
	<div class={state.headerClass}>
		{#if state.title}
			<h3 class={state.titleClass}>{state.title}</h3>
		{/if}

		{#if state.showSearch}
			<div class={state.searchContainerClass}>
				<div class={state.searchIconClass}>
					<BaseIcon name={IconPickerStyleManager.searchIconName} />
				</div>
				<input
					type="text"
					class={state.searchInputClass}
					placeholder={state.searchPlaceholder}
					value={state.searchQuery}
					oninput={(event) => state.setSearchQuery((event.target as HTMLInputElement).value)}
				/>
			</div>
		{/if}
	</div>

	<div class={state.gridClass}>
		{#each state.filteredIcons as icon}
			{@const IconComponent = icon.component as Snippet<[{ class: string }]>}
			<button
				type="button"
				class={state.itemClassName(icon)}
				onclick={() => state.selectIcon(icon)}
				title={icon.name}
			>
				<div class={state.iconContainerClass}>
					{@render IconComponent({ class: 'w-6 h-6' })}
				</div>
				<div class={state.iconNameClass}>
					{icon.name}
				</div>
			</button>
		{/each}
	</div>
</div>

