<script lang="ts">
	import type { ThemeLinkRecipe } from '$stylist/typography/interface/recipe/link';
	import createLinkState from '$stylist/typography/function/state/link/index.svelte';

	let props: ThemeLinkRecipe = $props();

	const state = createLinkState(props);
	const children = $derived(props.children);

	const restProps = $derived(
		(() => {
			const {
				class: _class,
				children: _children,
				variant: _variant,
				size: _size,
				disabled: _disabled,
				underline: _underline,
				href: _href,
				target: _target,
				text: _text,
				...rest
			} = props;
			return rest;
		})()
	);
</script>

<a
	href={state.href}
	class={state.classes}
	target={state.target}
	data-appearance={state.variant}
	data-size={state.size}
	data-underline={state.underline ? 'true' : 'false'}
	data-disabled={state.disabled ? 'true' : 'false'}
	aria-disabled={state.disabled ? 'true' : undefined}
	tabindex={state.disabled ? -1 : undefined}
	{...restProps}
>
	{#if children}
		{@render children()}
	{:else if state.text}
		{state.text}
	{/if}
</a>

<style>
	.c-typography-link {
		display: inline-flex;
		align-items: center;
		gap: 0.25rem;
		color: var(--typography-link-color, var(--color-primary-600));
		font-weight: 500;
		text-decoration: none;
		text-underline-offset: 0.12em;
		transition:
			color 140ms ease,
			opacity 140ms ease,
			background-color 140ms ease,
			box-shadow 140ms ease;
	}

	.c-typography-link[data-underline='true'] {
		text-decoration: underline;
	}

	.c-typography-link[data-size='xs'] {
		font-size: var(--text-size-xs, 0.75rem);
	}

	.c-typography-link[data-size='sm'],
	.c-typography-link[data-size='1/3'],
	.c-typography-link[data-size='2/5'] {
		font-size: var(--text-size-sm, 0.875rem);
	}

	.c-typography-link[data-size='md'],
	.c-typography-link[data-size='1/2'],
	.c-typography-link[data-size='3/5'] {
		font-size: var(--text-size-md, 1rem);
	}

	.c-typography-link[data-size='lg'],
	.c-typography-link[data-size='2/3'] {
		font-size: var(--text-size-lg, 1.125rem);
	}

	.c-typography-link[data-size='xl'],
	.c-typography-link[data-size='3/4'] {
		font-size: var(--text-size-xl, 1.25rem);
	}

	.c-typography-link[data-size='2xl'],
	.c-typography-link[data-size='full'] {
		font-size: var(--text-size-2xl, 1.5rem);
	}

	.c-typography-link[data-appearance='default'] {
		--typography-link-color: var(--color-text-primary);
		--typography-link-hover-color: var(--color-primary-600);
	}

	.c-typography-link[data-appearance='primary'],
	.c-typography-link[data-appearance='solid'],
	.c-typography-link[data-appearance='link'] {
		--typography-link-color: var(--color-primary-600);
		--typography-link-hover-color: var(--color-primary-700);
	}

	.c-typography-link[data-appearance='secondary'] {
		--typography-link-color: var(--color-secondary-600);
		--typography-link-hover-color: var(--color-secondary-700);
	}

	.c-typography-link[data-appearance='success'] {
		--typography-link-color: var(--color-success-600);
		--typography-link-hover-color: var(--color-success-700);
	}

	.c-typography-link[data-appearance='warning'] {
		--typography-link-color: var(--color-warning-700);
		--typography-link-hover-color: var(--color-warning-800, var(--color-warning-700));
	}

	.c-typography-link[data-appearance='danger'],
	.c-typography-link[data-appearance='error'] {
		--typography-link-color: var(--color-danger-600);
		--typography-link-hover-color: var(--color-danger-700);
	}

	.c-typography-link[data-appearance='info'] {
		--typography-link-color: var(--color-info-600);
		--typography-link-hover-color: var(--color-info-700);
	}

	.c-typography-link[data-appearance='subtle'],
	.c-typography-link[data-appearance='flat'] {
		--typography-link-color: var(--color-text-secondary);
		--typography-link-hover-color: var(--color-text-primary);
	}

	.c-typography-link[data-appearance='neutral'],
	.c-typography-link[data-appearance='gray'] {
		--typography-link-color: var(--color-neutral-600);
		--typography-link-hover-color: var(--color-neutral-700);
	}

	.c-typography-link[data-appearance='dark'] {
		--typography-link-color: var(--color-neutral-800);
		--typography-link-hover-color: var(--color-neutral-900);
	}

	.c-typography-link[data-appearance='light'] {
		--typography-link-color: var(--color-neutral-300);
		--typography-link-hover-color: var(--color-neutral-400);
	}

	.c-typography-link[data-appearance='outline'] {
		padding: 0.2rem 0.55rem;
		border: 1px solid var(--color-border-primary);
		border-radius: 999px;
		--typography-link-color: var(--color-text-primary);
		--typography-link-hover-color: var(--color-text-primary);
	}

	.c-typography-link[data-appearance='ghost'] {
		padding: 0.2rem 0.4rem;
		border-radius: 0.5rem;
		--typography-link-color: var(--color-text-primary);
		--typography-link-hover-color: var(--color-text-primary);
	}

	.c-typography-link[data-appearance='elevated'] {
		padding: 0.2rem 0.55rem;
		border-radius: 999px;
		box-shadow: var(--shadow-sm, 0 1px 2px rgb(0 0 0 / 0.08));
		--typography-link-color: var(--color-text-primary);
		--typography-link-hover-color: var(--color-text-primary);
	}

	.c-typography-link:hover {
		color: var(
			--typography-link-hover-color,
			var(--typography-link-color, var(--color-primary-600))
		);
	}

	.c-typography-link[data-appearance='ghost']:hover,
	.c-typography-link[data-appearance='outline']:hover {
		background: var(--color-background-secondary);
	}

	.c-typography-link[data-appearance='elevated']:hover {
		box-shadow: var(--shadow-md, 0 4px 12px rgb(0 0 0 / 0.12));
	}

	.c-typography-link:focus-visible {
		outline: none;
		box-shadow: 0 0 0 2px var(--color-primary-500);
	}

	.c-typography-link[data-disabled='true'] {
		opacity: var(--opacity-50, 0.5);
		pointer-events: none;
		cursor: not-allowed;
	}
</style>
