<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';
	import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';
	import type { TokenSize } from '$stylist/layout/type/enum/size';
	import type { IInputBaseProps } from '$stylist/input/interface/component/input/other';
	import { createAdvancedInputState } from '$stylist/input/function/state/advanced-input';

	let props: IInputBaseProps<TokenAppearance, TokenSize> &
		Omit<HTMLInputAttributes, 'size' | 'class' | 'autocomplete' | 'id' | 'disabled'> = $props();
	const state = createAdvancedInputState(props);
</script>

<div class={state.containerClass}>
	{#if props.label}
		<label class={state.labelClass} for="advanced-input">{props.label}</label>
	{/if}
	<input
		id="advanced-input"
		type={props.type ?? 'text'}
		class={state.inputClass}
		placeholder={props.placeholder ?? ''}
		bind:value={props.value}
		disabled={props.disabled ?? false}
	/>
</div>
