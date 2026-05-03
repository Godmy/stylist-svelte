<script lang="ts">
	import type { SlotFormHelperText as IFormHelperTextProps } from '$stylist/input/interface/slot/form-helper-text';
	import { createFormHelperTextState } from '$stylist/input/function/state/form-helper-text';

	let props: IFormHelperTextProps = $props();
	const state = createFormHelperTextState(props);
	const restProps = $derived.by(() => {
		const { class: _class, text: _text, variant: _variant, ...rest } = props;
		return rest;
	});
</script>

<p class={state.classes} {...restProps}>
	{props.text ?? ''}
</p>
