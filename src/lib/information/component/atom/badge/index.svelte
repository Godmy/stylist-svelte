<script lang="ts">
	import createBadgeState from '$stylist/information/function/state/badge/index.svelte';
	import type { RecipeBadge } from '$stylist/information/interface/recipe/badge';

	let props: RecipeBadge = $props();

	const state = createBadgeState(props);
	const children = $derived(props.children);
	const label = $derived(props.label);

	const restProps = $derived(
		(() => {
			const {
				class: _class,
				children: _children,
				disabled: _disabled,
				label: _label,
				size: _size,
				variant: _variant,
				...rest
			} = props;
			return rest;
		})()
	);
</script>

<span class={state.classes} aria-disabled={props.disabled || undefined} {...restProps}>
	{#if children}
		{@render children()}
	{:else if label}
		{label}
	{/if}
</span>

<style>
	.badge {
		display: inline-flex;
		align-items: center;
		width: fit-content;
		max-width: 100%;
		border: 1px solid transparent;
		border-radius: 999px;
		font-weight: 650;
		line-height: 1.15;
		white-space: nowrap;
		vertical-align: middle;
	}

	.badge--default,
	.badge--flat {
		background: var(--color-background-secondary);
		color: var(--color-text-primary);
	}

	.badge--primary,
	.badge--info {
		background: var(--color-primary-100);
		color: var(--color-primary-800);
	}

	.badge--secondary {
		background: var(--color-secondary-100);
		color: var(--color-secondary-800);
	}

	.badge--success {
		background: var(--color-success-100);
		color: var(--color-success-800);
	}

	.badge--warning {
		background: var(--color-warning-100);
		color: var(--color-warning-800);
	}

	.badge--danger,
	.badge--error {
		background: var(--color-danger-100);
		color: var(--color-danger-800);
	}

	.badge--gray,
	.badge--neutral {
		background: var(--color-neutral-100);
		color: var(--color-neutral-800);
	}

	.badge--solid {
		background: var(--color-primary-600);
		color: var(--color-text-inverse);
	}

	.badge--outline {
		border-color: var(--color-border-primary);
		background: transparent;
		color: var(--color-text-primary);
	}

	.badge--ghost {
		background: transparent;
		color: var(--color-text-primary);
	}

	.badge--link {
		background: transparent;
		color: var(--color-primary-600);
		text-decoration: underline;
		text-underline-offset: 0.125rem;
	}

	.badge--subtle,
	.badge--light {
		background: var(--color-neutral-50);
		color: var(--color-text-primary);
	}

	.badge--dark {
		background: var(--color-neutral-800);
		color: var(--color-text-inverse);
	}

	.badge--elevated {
		background: var(--color-background-primary);
		color: var(--color-text-primary);
		box-shadow: var(--shadow-sm, 0 1px 2px rgb(15 23 42 / 0.08));
	}

	.badge--size-xs,
	.badge--size-1-4 {
		padding: 0.125rem 0.375rem;
		font-size: 0.625rem;
	}

	.badge--size-sm,
	.badge--size-1-3,
	.badge--size-2-5 {
		padding: 0.125rem 0.5rem;
		font-size: 0.75rem;
	}

	.badge--size-md,
	.badge--size-1-2,
	.badge--size-3-5 {
		padding: 0.125rem 0.625rem;
		font-size: 0.875rem;
	}

	.badge--size-lg,
	.badge--size-2-3 {
		padding: 0.25rem 0.75rem;
		font-size: 1rem;
	}

	.badge--size-xl,
	.badge--size-3-4 {
		padding: 0.375rem 0.875rem;
		font-size: 1.125rem;
	}

	.badge--size-2xl,
	.badge--size-full {
		padding: 0.5rem 1rem;
		font-size: 1.25rem;
	}

	.badge--disabled {
		opacity: 0.5;
		pointer-events: none;
	}
</style>
