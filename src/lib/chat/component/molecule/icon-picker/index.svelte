<script lang="ts">
	import BaseIcon from '$stylist/svg/component/atom/icon/index.svelte';
	import createIconPickerState from './state.svelte';
	import type { RecipeIconPicker } from '$stylist/chat/interface/recipe/icon-picker';

	const SearchIconName = 'search';

	let props: RecipeIconPicker = $props();
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

	<div
		class={state.gridClass}
		style={`grid-template-columns: repeat(${state.columns}, minmax(0, 1fr))`}
	>
		{#each state.filteredIcons as icon}
			<button
				type="button"
				class={state.itemClassName(icon)}
				onclick={() => state.selectIcon(icon)}
				title={icon.name}
			>
				<div class={state.iconContainerClass}>
					<BaseIcon name={icon.icon} />
				</div>
				<div class={state.iconNameClass}>
					{icon.name}
				</div>
			</button>
		{/each}
	</div>
</div>

<style>
	.icon-picker {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		width: 100%;
	}
	.icon-picker__header {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}
	.icon-picker__title {
		margin: 0;
		font-size: 1rem;
		font-weight: 600;
		color: var(--color-text-primary);
	}
	.icon-picker__search-container {
		position: relative;
		display: flex;
		align-items: center;
	}
	.icon-picker__search-icon {
		position: absolute;
		left: 0.75rem;
		display: flex;
		align-items: center;
		color: var(--color-text-tertiary);
	}
	.icon-picker__search-input {
		box-sizing: border-box;
		width: 100%;
		padding: 0.6rem 0.75rem 0.6rem 2.25rem;
		border: 1px solid var(--color-border-primary);
		border-radius: 0.5rem;
		background: var(--color-background-primary);
		font: inherit;
		color: var(--color-text-primary);
		outline: none;
		transition:
			border-color 140ms ease,
			box-shadow 140ms ease;
	}
	.icon-picker__search-input:focus {
		border-color: var(--color-primary-500);
		box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-primary-500) 18%, transparent);
	}
	.icon-picker__grid {
		display: grid;
		gap: 0.5rem;
	}
	.icon-picker__item {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.35rem;
		padding: 0.6rem 0.4rem;
		border: 1px solid transparent;
		border-radius: 0.5rem;
		background: transparent;
		cursor: pointer;
		transition:
			background-color 140ms ease,
			border-color 140ms ease;
	}
	.icon-picker__item:hover {
		background: var(--color-background-secondary);
	}
	.icon-picker__item--selected {
		border-color: var(--color-primary-500);
		background: color-mix(in srgb, var(--color-primary-500) 10%, transparent);
	}
	.icon-picker__icon-container {
		display: flex;
		align-items: center;
		justify-content: center;
		color: var(--color-text-secondary);
	}
	.icon-picker__icon-name {
		max-width: 100%;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		font-size: 0.7rem;
		color: var(--color-text-tertiary);
	}
</style>
