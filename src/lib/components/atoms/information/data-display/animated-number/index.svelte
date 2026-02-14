<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import type { AnimatedNumberProps } from '$stylist/design-system';
	import { createAnimatedNumberState } from '../state.svelte';

	type Props = AnimatedNumberProps & HTMLAttributes<HTMLSpanElement>;

	let props: Props = $props();
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
