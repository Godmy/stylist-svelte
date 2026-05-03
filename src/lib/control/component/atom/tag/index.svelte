<script lang="ts">
	import { Icon as BaseIcon } from '$stylist/media';
const X = 'x';
	import { createTagState } from '$stylist/control/function/state/tag';
	import type { TagProps } from '$stylist/control/type/struct/tag-props';

	let props: TagProps = $props();
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
			onclick={state.handleClose}
			disabled={state.disabled}
			aria-label="Remove tag"
		>
			<BaseIcon name={X} class={state.closeButtonIconClasses} />
		</button>
	{/if}
</span>





