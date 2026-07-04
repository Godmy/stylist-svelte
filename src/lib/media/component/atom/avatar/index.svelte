<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import type { SlotThemeBorder } from '$stylist/theme/interface/slot/theme-border';
	import type { BehaviorTypography } from '$stylist/typography/interface/behavior/typography';
	import type { RecipeAvatar } from '$stylist/media/interface/recipe/avatar';
	import { createAvatarState } from '$stylist/media/function/state/avatar/index.svelte';

	let props: RecipeAvatar & HTMLAttributes<HTMLDivElement> & SlotThemeBorder & BehaviorTypography = $props();
	const state = createAvatarState(props);
</script>

<div {...state.restProps} class={state.avatarClasses}>
	{#if state.src}
		<img src={state.src} alt={state.alt || state.name || 'Avatar'} class={state.imageClasses} />
	{:else}
		<div class={state.fallbackClasses}>
			{state.initials}
		</div>
	{/if}

	{#if state.showStatus && state.status}
		<span class={state.statusIndicatorClasses}></span>
	{/if}
</div>
