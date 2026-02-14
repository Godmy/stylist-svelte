<script lang="ts">
	import { createCharacterCountState, INPUT_FIELD_PRESET } from '$stylist/design-system/models/characters-count.svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	/**
	 * CharacterCount component - displays current/max character count with color indication
	 *
	 * @param current - Current character count
	 * @param max - Maximum character count
	 * @param showPercentage - Whether to show percentage
	 * @param content - Snippet content for the character count
	 * @returns Accessible, styled character count indicator
	 */

	
	type CharacterCountProps = {
		current?: number;
		max?: number;
		showPercentage?: boolean;
		content?: import('svelte').Snippet;
		class?: string;
		variant?: (typeof INPUT_FIELD_PRESET.variants)[number];
		size?: 'sm' | 'md' | 'lg';
	};

	let {
		current = 0,
		max = 100,
		variant = INPUT_FIELD_PRESET.defaults.variant,
		size = INPUT_FIELD_PRESET.defaults.size,
		showPercentage = false,
		content,
		class: className = '',
		...restProps
	}: CharacterCountProps & HTMLAttributes<HTMLDivElement> = $props();

	// Calculate derived values
	const percentage = $derived(max > 0 ? Math.min(100, (current / max) * 100) : 0);
	const ratio = $derived(current / max);

	const message = $derived(
		showPercentage ? `${Math.round(percentage)}% (${current}/${max})` : `${current}/${max}`
	);

	const charCountState = $derived(createCharacterCountState(ratio, { 
		variant,
		size,
		class: className 
	}));
	let colorClass = $derived(charCountState.colorClass);

	let classes = $derived([charCountState.classes, colorClass].filter(Boolean).join(' '));
</script>

<div class={classes} {...restProps}>
	{#if content}
		{@render content()}
	{:else}
		{message}
	{/if}
</div>





