<script lang="ts">
	import { getContext } from 'svelte';
  import { createToggleGroupItemState } from '$stylist/control/function/state/toggle-group-item';
	import type { ToggleGroupItemProps } from '$stylist/control/interface/component/toggles';

	let props: ToggleGroupItemProps = $props();

	type ToggleGroupContext = {
		updateValue: (val: string) => void;
		value: string | string[] | null | undefined;
		disabled: boolean;
	};

	const context = getContext<ToggleGroupContext>('toggleGroup') ?? {
		updateValue: () => {},
		value: null,
		disabled: false
	};

	const updateValue = context.updateValue;
	const groupValue = context.value;
	const groupDisabled = context.disabled;

  const state = createToggleGroupItemState({ ...props, groupValue, groupDisabled });

	let itemDisabled = $derived(props.disabled || groupDisabled);

	let classes = $derived(
    state.classes
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






