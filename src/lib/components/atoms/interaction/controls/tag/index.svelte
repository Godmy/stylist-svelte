<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { X } from 'lucide-svelte';

	import type { TagProps } from '$stylist/design-system/props';
	import { createTagState } from '$stylist/design-system/models/tag.svelte';

	type Props = TagProps & HTMLAttributes<HTMLSpanElement>;
	let props: Props = $props();
	const restProps = $derived(
		(() => {
			const {
				class: _class,
				text: _text,
				variant: _variant,
				size: _size,
				closable: _closable,
				disabled: _disabled,
				icon: _icon,
				content: _content,
				...rest
			} = props;
			return rest;
		})()
	);

	const state = createTagState(props);
	const icon = $derived(props.icon);
	const content = $derived(props.content);

	function handleClose() {
		if (state.disabled) return;
		props.onClose?.();
	}
</script>

<span class={state.classes} {...restProps}>
	{#if icon}
		<span class="flex items-center" aria-hidden="true">
			{@render icon()}
		</span>
	{/if}

	<span>
		{#if content}
			{@render content()}
		{:else if state.text}
			{state.text}
		{/if}
	</span>

	{#if state.closable}
		<button
			type="button"
			class={state.closeButtonClasses}
			onclick={handleClose}
			disabled={state.disabled}
			aria-label="Remove tag"
		>
			<X class={state.closeButtonIconClasses} />
		</button>
	{/if}
</span>



