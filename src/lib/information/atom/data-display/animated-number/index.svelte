<script lang="ts">
	import type { InformationHTMLAttributes } from '$stylist/information/type/attribute/item';
	import type { AnimatedNumberProps } from '$stylist';
	import { createAnimatedNumberState } from '$stylist/information/state/animated-number';

	let props: AnimatedNumberProps & InformationHTMLAttributes<HTMLSpanElement> = $props();
	const state = createAnimatedNumberState(props);
	const restProps = $derived(
		(() => {
			const {
				class: _class,
				value: _value,
				format: _format,
				prefix: _prefix,
				suffix: _suffix,
				separator: _separator,
				decimals: _decimals,
				...rest
			} = props;
			return rest;
		})()
	);
</script>

<span class={state.classes} {...restProps}>
	{state.prefix}{state.formattedValue}{state.suffix}
</span>


