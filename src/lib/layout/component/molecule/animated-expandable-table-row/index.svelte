<script lang="ts">
	import createAnimatedExpandableTableRowState from '$stylist/layout/function/state/animated-expandable-table-row/index.svelte';
	import type { AnimatedExpandableTableRowProps } from '$stylist/layout/type/struct/animated-expandable-table-row';
	import BaseIcon from '$stylist/svg/component/atom/icon/index.svelte';

	const ChevronDown = 'chevron-down';
	const ChevronUp = 'chevron-up';

	let props: AnimatedExpandableTableRowProps = $props();
	const state = createAnimatedExpandableTableRowState(props);
</script>

<tr {...state.restProps} class={['aet-row', state.className].filter(Boolean).join(' ')}>
	{#if state.expandable}
		<td class="aet-row__expand-cell">
			<button
				class="aet-row__toggle"
				onclick={state.toggle}
				aria-expanded={state.isExpanded}
				aria-label={state.isExpanded ? 'Collapse' : 'Expand'}
			>
				{#if state.isExpanded}
					{#if state.collapseIcon}
						{@html state.collapseIcon}
					{:else}
						<BaseIcon name={ChevronUp} class="aet-row__icon" />
					{/if}
				{:else if state.expandIcon}
					{@html state.expandIcon}
				{:else}
					<BaseIcon name={ChevronDown} class="aet-row__icon" />
				{/if}
			</button>
		</td>
	{/if}

	{#if state.children}{@render state.children()}{/if}
</tr>

{#if state.isExpanded}
	<tr class="aet-row__expanded">
		<td
			colspan={state.expandable ? state.colspan : state.colspan - 1}
			class="aet-row__expanded-cell"
		>
			<div class="aet-row__details">
				{@render state.details()}
			</div>
		</td>
	</tr>
{/if}

<style>
	.aet-row__expand-cell {
		width: 3rem;
		padding: 1rem 1.5rem;
		font-size: 0.875rem;
		white-space: nowrap;
		color: var(--color-text-secondary);
	}

	.aet-row__toggle {
		background: none;
		border: none;
		cursor: pointer;
		padding: 0;
		display: flex;
		align-items: center;
		transition: transform var(--duration-200, 200ms) var(--animation-ease, ease);
	}

	.aet-row__toggle:active {
		transform: scale(0.95);
	}

	.aet-row__toggle:focus {
		outline: none;
	}

	:global(.aet-row__icon) {
		width: 1.25rem;
		height: 1.25rem;
		color: var(--color-text-secondary);
	}

	.aet-row__expanded-cell {
		border-top: none;
		background-color: var(--color-background-secondary);
		padding: 1rem 1.5rem;
		font-size: 0.875rem;
		color: var(--color-text-primary);
	}

	.aet-row__details {
		padding: 1rem;
		animation: aet-slide-down var(--duration-300, 300ms) var(--animation-ease-out, ease-out);
	}

	@keyframes aet-slide-down {
		from {
			max-height: 0;
			opacity: 0;
			transform: translateY(-10px);
		}
		to {
			max-height: 500px;
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>
