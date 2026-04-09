<script lang="ts">
	import type { IFormHelperTextProps } from '$stylist/input/interface/component/input/other';
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
