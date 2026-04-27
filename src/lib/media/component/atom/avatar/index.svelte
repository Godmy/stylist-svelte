<script lang="ts">
	import type { InformationHTMLAttributes } from '$stylist/information/type/struct';
	import { createAvatarState } from '$stylist/media/function/state/avatar';
	import type { AvatarProps } from '$stylist/media/interface/recipe/avatar-avatar-props';
	import type { AvatarSize } from '$stylist/media/type/alias/avatar-size';
	import type { AvatarUserStatus } from '$stylist/media/type/alias/avatar-user-status';

	let props: AvatarProps & InformationHTMLAttributes<HTMLDivElement> = $props();
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
