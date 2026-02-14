<script lang="ts">
	import { getContext } from 'svelte';
	import type { ToggleGroupItemProps } from '$stylist/design-system/props';
	import { mergeClasses } from '$stylist/utils/classes';

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

	let classes = $derived(
		mergeClasses(
			'inline-flex items-center justify-center rounded-md px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
			isActive() ? 'bg-primary text-primary-foreground shadow-sm' : 'text-muted-foreground hover:bg-muted hover:text-foreground',
			itemDisabled ? 'opacity-50 cursor-not-allowed' : ''
		)
	);

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




