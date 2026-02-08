<script lang="ts">
	import { getContext } from 'svelte';
	import type { ToggleGroupItemProps } from '$stylist/design-system/attributes';
	import { getToggleGroupItemClasses } from '$stylist/design-system/presets';

	let props: ToggleGroupItemProps = $props();

	type ToggleGroupContext = {
		updateValue: (val: string) => void;
		value: string | string[] | null | undefined;
		disabled: boolean;
	};

	let {
		updateValue,
		value: groupValue,
		disabled: groupDisabled
	}: ToggleGroupContext = getContext('toggleGroup');

	let itemDisabled = $derived(props.disabled || groupDisabled);

	let isActive = $derived(() => {
		if (Array.isArray(groupValue)) {
			return groupValue.includes(props.value);
		}
		return groupValue === props.value;
	});

	let classes = $derived(getToggleGroupItemClasses(isActive(), itemDisabled));

	function handleClick() {
		if (!itemDisabled && updateValue) {
			updateValue(props.value);
		}
	}

	const restProps = $derived(
		(() => {
			const { value: _value, disabled: _disabled, children: _children, ...rest } = props;
			return rest;
		})()
	);
</script>

<button class={classes} disabled={itemDisabled} onclick={handleClick} type="button" {...restProps}>
	{@render props.children?.()}
</button>
