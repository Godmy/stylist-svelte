<script lang="ts">
	import { createCharacterCountState } from '$stylist/design-system/runtime/input-state/index';
	import type { InteractionHTMLAttributes } from '$stylist/design-system/html/attributes/interaction';
	import type { TokenAppearance } from '$stylist/design-system/tokens/information/appearance';
	import { TOKEN_SIZE } from '$stylist/design-system/tokens/architecture/size';

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
		variant?: TokenAppearance;
		size?: (typeof TOKEN_SIZE)[number];
	};

	let {
		current = 0,
		max = 100,
		variant = 'default',
		size = 'md',
		showPercentage = false,
		content,
		class: className = '',
		...restProps
	}: CharacterCountProps & InteractionHTMLAttributes<HTMLDivElement> = $props();

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















