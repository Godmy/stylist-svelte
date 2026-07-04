<script lang="ts">
	import type { RecipeThemeLink } from '$stylist/typography/interface/recipe/link';
	import createLinkState from '$stylist/typography/function/state/link/index.svelte';

	let props: RecipeThemeLink = $props();

	const state = createLinkState(props);
	const children = $derived(props.children);

	const restProps = $derived(
		(() => {
			const {
				class: _class,
				children: _children,
				tone: _tone,
				fontSize: _fontSize,
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
	data-tone={state.tone}
	data-font-size={state.fontSize}
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

	.c-typography-link[data-font-size='3'] {
		font-size: var(--font-size-3, 0.75rem);
	}

	.c-typography-link[data-font-size='4'] {
		font-size: var(--font-size-4, 1rem);
	}

	.c-typography-link[data-font-size='5'] {
		font-size: var(--font-size-5, 1.25rem);
	}

	.c-typography-link[data-font-size='6'] {
		font-size: var(--font-size-6, 1.5rem);
	}

	.c-typography-link[data-font-size='8'] {
		font-size: var(--font-size-8, 2rem);
	}

	.c-typography-link[data-font-size='10'] {
		font-size: var(--font-size-10, 2.5rem);
	}

	.c-typography-link[data-font-size='12'] {
		font-size: var(--font-size-12, 3rem);
	}

	.c-typography-link[data-font-size='16'] {
		font-size: var(--font-size-16, 4rem);
	}

	.c-typography-link[data-font-size='20'] {
		font-size: var(--font-size-20, 5rem);
	}

	.c-typography-link[data-tone='primary'] {
		--typography-link-color: var(--color-primary-600);
		--typography-link-hover-color: var(--color-primary-700);
	}

	.c-typography-link[data-tone='secondary'] {
		--typography-link-color: var(--color-secondary-600);
		--typography-link-hover-color: var(--color-secondary-700);
	}

	.c-typography-link[data-tone='tertiary'] {
		--typography-link-color: var(--color-text-tertiary);
		--typography-link-hover-color: var(--color-text-primary);
	}

	.c-typography-link[data-tone='accent'] {
		--typography-link-color: var(--color-primary-600);
		--typography-link-hover-color: var(--color-primary-700);
	}

	.c-typography-link[data-tone='success'] {
		--typography-link-color: var(--color-success-600);
		--typography-link-hover-color: var(--color-success-700);
	}

	.c-typography-link[data-tone='warning'] {
		--typography-link-color: var(--color-warning-700);
		--typography-link-hover-color: var(--color-warning-800, var(--color-warning-700));
	}

	.c-typography-link[data-tone='danger'] {
		--typography-link-color: var(--color-danger-600);
		--typography-link-hover-color: var(--color-danger-700);
	}

	.c-typography-link[data-tone='inverse'] {
		--typography-link-color: var(--color-text-inverse);
		--typography-link-hover-color: var(--color-text-inverse);
	}

	.c-typography-link:hover {
		color: var(
			--typography-link-hover-color,
			var(--typography-link-color, var(--color-primary-600))
		);
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
