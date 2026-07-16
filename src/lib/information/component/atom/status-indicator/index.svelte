<script lang="ts">
	import createStatusIndicatorState from '$stylist/information/function/state/status-indicator/index.svelte';
	import type { RecipeStatusIndicator } from '$stylist/information/interface/recipe/status-indicator';

	let props: RecipeStatusIndicator = $props();

	const state = createStatusIndicatorState(props);

	const restProps = $derived(
		(() => {
			const {
				class: _class,
				status: _status,
				appearance: _appearance,
				label: _label,
				customColor: _customColor,
				size: _size,
				showLabel: _showLabel,
				indicatorClass: _indicatorClass,
				labelClass: _labelClass,
				children: _children,
				...rest
			} = props;
			return rest;
		})()
	);
</script>

{#if state.isSimpleMode}
	<span class={state.classes} {...restProps}>
		<span class={state.dotClasses}></span>
		{#if state.label}<span>{state.label}</span>{/if}
	</span>
{:else}
	<div class={state.containerClasses} {...restProps}>
		<span class={state.indicatorClasses} style={state.indicatorStyle}></span>
		{#if state.showLabel}
			<span class={state.labelClasses}>{state.label}</span>
		{/if}
	</div>
{/if}

<style>
	.status-indicator {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		width: fit-content;
		max-width: 100%;
		color: var(--color-text-secondary);
		font-size: 0.875rem;
		line-height: 1.25rem;
	}

	.status-indicator__dot,
	.status-indicator__indicator {
		display: inline-block;
		flex: 0 0 auto;
		border-radius: 999px;
		background: currentColor;
	}

	.status-indicator__dot {
		width: 0.625rem;
		height: 0.625rem;
	}

	.status-indicator__dot--online,
	.status-indicator__indicator--success {
		color: var(--color-success-500);
	}

	.status-indicator__dot--offline,
	.status-indicator__indicator--neutral,
	.status-indicator__indicator--gray,
	.status-indicator__indicator--default,
	.status-indicator__indicator--subtle,
	.status-indicator__indicator--flat {
		color: var(--color-neutral-500);
	}

	.status-indicator__dot--away,
	.status-indicator__indicator--warning {
		color: var(--color-warning-500);
	}

	.status-indicator__dot--busy,
	.status-indicator__indicator--danger,
	.status-indicator__indicator--error {
		color: var(--color-danger-500);
	}

	.status-indicator__dot--typing,
	.status-indicator__indicator--primary,
	.status-indicator__indicator--info,
	.status-indicator__indicator--solid,
	.status-indicator__indicator--link {
		color: var(--color-primary-500);
	}

	.status-indicator__indicator--secondary {
		color: var(--color-secondary-500, var(--color-neutral-600));
	}

	.status-indicator__indicator--dark {
		color: var(--color-neutral-800);
	}

	.status-indicator__indicator--outline,
	.status-indicator__indicator--ghost,
	.status-indicator__indicator--elevated,
	.status-indicator__indicator--light {
		color: var(--color-text-secondary);
	}

	.status-indicator__indicator--xs,
	.status-indicator__indicator--1-4 {
		width: 0.375rem;
		height: 0.375rem;
	}

	.status-indicator__indicator--sm,
	.status-indicator__indicator--1-3,
	.status-indicator__indicator--2-5 {
		width: 0.5rem;
		height: 0.5rem;
	}

	.status-indicator__indicator--md,
	.status-indicator__indicator--1-2,
	.status-indicator__indicator--3-5 {
		width: 0.625rem;
		height: 0.625rem;
	}

	.status-indicator__indicator--lg,
	.status-indicator__indicator--2-3 {
		width: 0.75rem;
		height: 0.75rem;
	}

	.status-indicator__indicator--xl,
	.status-indicator__indicator--3-4 {
		width: 1rem;
		height: 1rem;
	}

	.status-indicator__indicator--2xl,
	.status-indicator__indicator--full {
		width: 1.25rem;
		height: 1.25rem;
	}

	.status-indicator__label {
		min-width: 0;
		overflow-wrap: anywhere;
		color: var(--color-text-primary);
	}
</style>
