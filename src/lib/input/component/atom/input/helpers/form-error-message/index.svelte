<script lang="ts">
	import type { SlotFormErrorMessage as IFormErrorMessageProps } from '$stylist/input/interface/slot/form-error-message';
	import { createFormErrorMessageState } from '$stylist/input/function/state/form-error-message';

	let props: IFormErrorMessageProps = $props();
	const state = createFormErrorMessageState(props);
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
