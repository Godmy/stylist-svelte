<script lang="ts">
	import createRichTextState from './state.svelte';
	import type { RecipeRichText } from '$stylist/typography/interface/recipe/rich-text';
	import type { SlotRichText } from '$stylist/typography/interface/slot/rich-text';

	let props: RecipeRichText = $props();
	const state = createRichTextState(props);

	function createSegmentStyle(
		segment: NonNullable<SlotRichText['segments']>[number],
		disabled: boolean
	): string | undefined {
		const declarations: string[] = [];
		const textDecorations: string[] = [];

		if (!disabled && segment.color) {
			declarations.push(`color: ${segment.color}`);
		}

		if (!disabled && segment.backgroundColor) {
			declarations.push(`background-color: ${segment.backgroundColor}`);
		}

		if (segment.underline) {
			textDecorations.push('underline');
		}

		if (segment.strikeThrough) {
			textDecorations.push('line-through');
		}

		if (textDecorations.length > 0) {
			declarations.push(`text-decoration-line: ${textDecorations.join(' ')}`);
			declarations.push('text-decoration-thickness: 0.08em');
		}

		return declarations.length > 0 ? `${declarations.join('; ')};` : undefined;
	}

	function createSegmentRel(
		segment: NonNullable<SlotRichText['segments']>[number]
	): string | undefined {
		if (segment.rel) {
			return segment.rel;
		}

		if (segment.target === '_blank') {
			return 'noopener noreferrer';
		}

		return undefined;
	}
</script>

<svelte:element
	this={state.wrapperTag}
	{...state.restProps}
	class={state.classes}
	style={state.style}
>
	{#if state.html}
		<div class="c-typography-rich-text__html">
			{@html state.html}
		</div>
	{:else}
		{#each state.segments as segment (segment.key)}
			{#if segment.href}
				<a
					href={segment.href}
					target={segment.target}
					title={segment.title}
					rel={createSegmentRel(segment)}
					class="c-typography-rich-text__link"
				>
					<svelte:element
						this={segment.tag}
						class="c-typography-rich-text__segment"
						data-bold={segment.bold ? 'true' : 'false'}
						data-italic={segment.italic ? 'true' : 'false'}
						data-highlight={segment.highlight ? 'true' : 'false'}
						style={createSegmentStyle(segment, state.disabled)}
					>
						{segment.text}
					</svelte:element>
				</a>
			{:else}
				<svelte:element
					this={segment.tag}
					class="c-typography-rich-text__segment"
					data-bold={segment.bold ? 'true' : 'false'}
					data-italic={segment.italic ? 'true' : 'false'}
					data-highlight={segment.highlight ? 'true' : 'false'}
					style={createSegmentStyle(segment, state.disabled)}
				>
					{segment.text}
				</svelte:element>
			{/if}
		{/each}
	{/if}
</svelte:element>

<style>
	.c-typography-rich-text {
		display: inline;
		font-size: var(--typography-font-size, var(--text-size-md, 1rem));
		font-weight: var(--typography-font-weight, 400);
		font-family: var(--typography-font-family, inherit);
		line-height: var(--typography-line-height, 1.5);
		letter-spacing: var(--typography-letter-spacing, normal);
		color: var(--typography-color, var(--color-text-primary));
		white-space: pre-wrap;
		word-break: break-word;
	}

	.c-typography-rich-text--block {
		display: block;
	}

	.c-typography-rich-text--disabled {
		color: var(--color-text-tertiary);
	}

	.c-typography-rich-text__segment {
		color: inherit;
		font-weight: inherit;
		font-style: normal;
		font-family: inherit;
		line-height: inherit;
		letter-spacing: inherit;
		text-decoration-color: currentColor;
	}

	.c-typography-rich-text__segment[data-bold='true'] {
		font-weight: var(--font-weight-bold, 700);
	}

	.c-typography-rich-text__segment[data-italic='true'] {
		font-style: italic;
	}

	.c-typography-rich-text__segment[data-highlight='true'] {
		background-color: var(--color-warning-200, rgb(254 240 138 / 0.9));
		border-radius: 0.2em;
		padding-inline: 0.05em;
	}

	.c-typography-rich-text__segment:is(code) {
		padding-inline: 0.3em;
		padding-block: 0.12em;
		border-radius: 0.35rem;
		background: var(--color-background-secondary);
		font-family: var(
			--font-family-mono,
			ui-monospace,
			SFMono-Regular,
			'SF Mono',
			Consolas,
			monospace
		);
		font-size: 0.92em;
	}

	.c-typography-rich-text__segment:is(sub),
	.c-typography-rich-text__segment:is(sup) {
		font-size: 0.72em;
		line-height: 0;
	}

	.c-typography-rich-text__link {
		color: var(--color-primary-600);
		text-decoration: none;
		text-underline-offset: 0.12em;
		transition: color 140ms ease;
	}

	.c-typography-rich-text__link:hover {
		color: var(--color-primary-700);
	}

	.c-typography-rich-text__link:focus-visible {
		outline: none;
		box-shadow: 0 0 0 2px var(--color-primary-500);
		border-radius: 0.25rem;
	}

	.c-typography-rich-text--disabled .c-typography-rich-text__link {
		color: inherit;
		pointer-events: none;
	}

	.c-typography-rich-text__html {
		display: flow-root;
		color: inherit;
		font: inherit;
		line-height: inherit;
		letter-spacing: inherit;
	}

	:global(.c-typography-rich-text__html > :first-child) {
		margin-block-start: 0;
	}

	:global(.c-typography-rich-text__html > :last-child) {
		margin-block-end: 0;
	}

	:global(.c-typography-rich-text__html p) {
		margin-block: 0.75em;
	}

	:global(.c-typography-rich-text__html h1),
	:global(.c-typography-rich-text__html h2),
	:global(.c-typography-rich-text__html h3) {
		margin-block: 0.85em 0.35em;
		color: inherit;
		font-family: inherit;
		line-height: 1.2;
	}

	:global(.c-typography-rich-text__html h1) {
		font-size: 1.875em;
		font-weight: var(--font-weight-bold, 700);
	}

	:global(.c-typography-rich-text__html h2) {
		font-size: 1.5em;
		font-weight: var(--font-weight-semibold, 600);
	}

	:global(.c-typography-rich-text__html h3) {
		font-size: 1.25em;
		font-weight: var(--font-weight-semibold, 600);
	}

	:global(.c-typography-rich-text__html blockquote) {
		margin-block: 1em;
		margin-inline: 0;
		padding-inline-start: 1em;
		border-inline-start: 0.25rem solid var(--color-border-primary);
		color: var(--color-text-secondary);
	}

	:global(.c-typography-rich-text__html ul),
	:global(.c-typography-rich-text__html ol) {
		margin-block: 0.75em;
		padding-inline-start: 1.5em;
	}

	:global(.c-typography-rich-text__html ul) {
		list-style: disc;
	}

	:global(.c-typography-rich-text__html ol) {
		list-style: decimal;
	}

	:global(.c-typography-rich-text__html li) {
		margin-block: 0.25em;
		padding-inline-start: 0.2em;
	}

	:global(.c-typography-rich-text__html a) {
		color: var(--color-primary-600);
		text-decoration-line: underline;
		text-underline-offset: 0.12em;
	}

	:global(.c-typography-rich-text__html img) {
		display: block;
		max-width: 100%;
		height: auto;
		margin-block: 1em;
		border-radius: var(--border-radius-base, 0.375rem);
	}

	:global(.c-typography-rich-text__html hr) {
		margin-block: 1.25em;
		border: 0;
		border-block-start: 1px solid var(--color-border-primary);
	}

	:global(.c-typography-rich-text__html b),
	:global(.c-typography-rich-text__html strong) {
		font-weight: var(--font-weight-bold, 700);
	}

	:global(.c-typography-rich-text__html i),
	:global(.c-typography-rich-text__html em) {
		font-style: italic;
	}

	:global(.c-typography-rich-text__html u) {
		text-decoration-line: underline;
		text-decoration-thickness: 0.08em;
	}
</style>
