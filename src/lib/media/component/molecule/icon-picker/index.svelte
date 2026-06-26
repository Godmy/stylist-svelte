<script lang="ts">
	import BaseIcon from '$stylist/svg/component/atom/icon/index.svelte';
	import createIconPickerState from '$stylist/media/function/state/icon-picker/index.svelte';
	import type { RecipeThemeIconPicker } from '$stylist/information/interface/recipe/icon-picker';
	import type { Snippet } from 'svelte';

	const SearchIconName = 'search';

	let props: RecipeThemeIconPicker = $props();
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
					<BaseIcon name={SearchIconName} />
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

<style>
</style>
