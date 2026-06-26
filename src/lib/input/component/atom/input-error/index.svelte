<script lang="ts">
	import type { SlotInputError as IInputErrorProps } from '$stylist/input/interface/slot/input-error';
	import createInputErrorState from '$stylist/input/function/state/input-error/index.svelte';

	let props: IInputErrorProps = $props();
	const state = createInputErrorState(props);
	const restProps = $derived.by(() => {
		const { class: _class, text: _text, visible: _visible, ...rest } = props;
		return rest;
	});
</script>

{#if props.visible ?? true}
	<p class={state.classes} {...restProps}>
		{props.text ?? ''}
	</p>
{/if}

<style>
</style>
