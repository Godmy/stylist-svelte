<script lang="ts">
	import Button from '$stylist/button/component/atom/button/index.svelte';
	import SlotCheckbox from '$stylist/control/component/atom/checkbox/index.svelte';
	import Select from '$stylist/control/component/molecule/selector/index.svelte';
	import type { FilterPanelProps } from '$stylist/control/type/object/filter-panel/filterpanel-props';
	import createFilterPanelState from './state.svelte';
	import { handleFilterChange } from '$stylist/control/function/script/filter-panel/handle-filter-change';
	import { handleReset } from '$stylist/control/function/script/filter-panel/handle-reset';
	import type { FilterPanelLayout } from '$stylist/control/type/alias/filter-panel-layout';

	const { onFilterChange, onReset, ...rest }: FilterPanelProps = $props();
	const state = createFilterPanelState(rest);
</script>

<div class={state.rootClass}>
	<div class={state.filterSectionClass}>
		<div class={state.filterHeaderClass}>Node Types</div>
		<div class={state.filterOptionsClass}>
			<div class={state.filterItemClass}>
				<SlotCheckbox
					id="showObjects"
					label="Show Objects"
					checked={state.objectsVisible}
					onchange={(event) => {
						state.objectsVisible = (event.target as HTMLInputElement).checked;
						handleFilterChange(state, onFilterChange);
					}}
				/>
			</div>
			<div class={state.filterItemClass}>
				<SlotCheckbox
					id="showInterfaces"
					label="Show Interfaces"
					checked={state.interfacesVisible}
					onchange={(event) => {
						state.interfacesVisible = (event.target as HTMLInputElement).checked;
						handleFilterChange(state, onFilterChange);
					}}
				/>
			</div>
			<div class={state.filterItemClass}>
				<SlotCheckbox
					id="showUnions"
					label="Show Unions"
					checked={state.unionsVisible}
					onchange={(event) => {
						state.unionsVisible = (event.target as HTMLInputElement).checked;
						handleFilterChange(state, onFilterChange);
					}}
				/>
			</div>
			<div class={state.filterItemClass}>
				<SlotCheckbox
					id="showEnums"
					label="Show Enums"
					checked={state.enumsVisible}
					onchange={(event) => {
						state.enumsVisible = (event.target as HTMLInputElement).checked;
						handleFilterChange(state, onFilterChange);
					}}
				/>
			</div>
			<div class={state.filterItemClass}>
				<SlotCheckbox
					id="showScalars"
					label="Show Scalars"
					checked={state.scalarsVisible}
					onchange={(event) => {
						state.scalarsVisible = (event.target as HTMLInputElement).checked;
						handleFilterChange(state, onFilterChange);
					}}
				/>
			</div>
			<div class={state.filterItemClass}>
				<SlotCheckbox
					id="showInputs"
					label="Show Inputs"
					checked={state.inputsVisible}
					onchange={(event) => {
						state.inputsVisible = (event.target as HTMLInputElement).checked;
						handleFilterChange(state, onFilterChange);
					}}
				/>
			</div>
		</div>
	</div>

	<div class={state.filterSectionClass}>
		<div class={state.filterHeaderClass}>Layout</div>
		<div class={state.layoutControlsClass}>
			<Select
				id="layout-select"
				label="Select Layout"
				value={state.currentLayout}
				onSelect={(value: string | string[]) => {
					state.currentLayout = (Array.isArray(value) ? value[0] : value) as FilterPanelLayout;
					handleFilterChange(state, onFilterChange);
				}}
				options={[
					{ value: 'force-directed', label: 'Force Directed' },
					{ value: 'hierarchical', label: 'Hierarchical' },
					{ value: 'circular', label: 'Circular' },
					{ value: 'grid', label: 'Grid' }
				]}
			/>
		</div>
	</div>

	<Button
		variant="ghost"
		size="sm"
		class="reset-btn"
		style="align-self: flex-start; margin-top: 0.5rem;"
		onclick={() => handleReset(state, onFilterChange, onReset)}
	>
		Reset Filters
	</Button>
</div>

<style>
	.filter-panel {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding: 1rem;
		background-color: var(--color-background-secondary);
		border-radius: var(--layout-border-radius-lg, 0.5rem);
		border: 1px solid var(--color-border-primary);
	}

	.filter-section {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.filter-header {
		font-weight: var(--typography-font-weight-semibold, 600);
		font-size: var(--typography-font-size-3, 0.75rem);
		color: var(--color-text-primary);
		padding-bottom: 0.25rem;
		border-bottom: 1px solid var(--color-border-primary);
	}

	.filter-options {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.filter-item {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.layout-controls {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}
</style>
