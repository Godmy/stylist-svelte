<script lang="ts">
	import type { AvatarSelectorProps } from '$stylist/user/interface/recipe/avatar-selector';
	import createAvatarSelectorState from '$stylist/user/function/state/avatar-selector/index.svelte';

	let props: AvatarSelectorProps = $props();
	const state = createAvatarSelectorState(props);

	const restProps = $derived.by(() => {
		const {
			class: _class,
			src: _src,
			alt: _alt,
			size: _size,
			children: _children,
			...rest
		} = props;
		return rest;
	});
</script>

<div
	class={['c-avatar-selector', state.className].filter(Boolean).join(' ')}
	data-size={state.size}
>
	<img src={state.src} alt={state.alt} class="c-avatar-selector__image" />
	{#if state.hasChildren}
		<div class="c-avatar-selector__badge">
			{#if state.children}{#if state.children}{@render state.children()}{/if}{/if}
		</div>
	{/if}
</div>

<style>
	.c-avatar-selector {
		position: relative;
		display: inline-block;
	}
	.c-avatar-selector__image {
		border-radius: 9999px;
		object-fit: cover;
	}
	.c-avatar-selector[data-size='sm'] .c-avatar-selector__image {
		width: 2rem;
		height: 2rem;
	}
	.c-avatar-selector[data-size='md'] .c-avatar-selector__image {
		width: 3rem;
		height: 3rem;
	}
	.c-avatar-selector[data-size='lg'] .c-avatar-selector__image {
		width: 4rem;
		height: 4rem;
	}
	.c-avatar-selector[data-size='xl'] .c-avatar-selector__image {
		width: 6rem;
		height: 6rem;
	}
	.c-avatar-selector__badge {
		position: absolute;
		right: 0;
		bottom: 0;
	}
</style>
