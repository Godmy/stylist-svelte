<script lang="ts">
	import type { RecipeDot } from '$stylist/information/interface/recipe/dot';
	import createDotState from '$stylist/information/function/state/dot/index.svelte';

	let props: RecipeDot = $props();

	const state = createDotState(props);

	const restProps = $derived(
		(() => {
			const { class: _class, color: _color, size: _size, ...rest } = props;
			return rest;
		})()
	);
</script>

<span class={state.classes} {...restProps}></span>

<style>
	.dot {
		display: inline-block;
		flex: 0 0 auto;
		border-radius: 999px;
		background: currentColor;
		vertical-align: middle;
	}

	.dot--default,
	.dot--gray,
	.dot--neutral,
	.dot--subtle,
	.dot--light,
	.dot--flat {
		color: var(--color-neutral-500);
	}

	.dot--primary,
	.dot--info,
	.dot--solid,
	.dot--link {
		color: var(--color-primary-500);
	}

	.dot--secondary {
		color: var(--color-secondary-500, var(--color-neutral-600));
	}

	.dot--success {
		color: var(--color-success-500);
	}

	.dot--warning {
		color: var(--color-warning-500);
	}

	.dot--danger,
	.dot--error {
		color: var(--color-danger-500);
	}

	.dot--dark {
		color: var(--color-neutral-800);
	}

	.dot--outline,
	.dot--ghost,
	.dot--elevated {
		color: var(--color-text-secondary);
	}

	.dot--xs,
	.dot--1-4 {
		width: 0.375rem;
		height: 0.375rem;
	}

	.dot--sm,
	.dot--1-3,
	.dot--2-5 {
		width: 0.5rem;
		height: 0.5rem;
	}

	.dot--md,
	.dot--1-2,
	.dot--3-5 {
		width: 0.625rem;
		height: 0.625rem;
	}

	.dot--lg,
	.dot--2-3 {
		width: 0.75rem;
		height: 0.75rem;
	}

	.dot--xl,
	.dot--3-4 {
		width: 1rem;
		height: 1rem;
	}

	.dot--2xl,
	.dot--full {
		width: 1.25rem;
		height: 1.25rem;
	}
</style>
