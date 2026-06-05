<script lang="ts">
	import type { SlotColorPicker as IColorPickerProps } from '$stylist/input/interface/slot/color-picker';
	import createColorPickerState from '$stylist/input/function/state/color-picker/index.svelte';

	let props: IColorPickerProps = $props();
	const state = createColorPickerState(props);
</script>

<div class={state.containerClass}>
	<div class="flex items-center gap-3">
		<label
			for="color-picker-input"
			class="block text-sm font-medium text-[var(--color-text-primary)]"
		>
			{state.label}
		</label>
		<div class="flex items-center gap-2">
			<div
				class={`h-8 w-8 rounded-md border border-[var(--color-border-primary)] ${state.pickerClass}`}
				style={`background-color: ${state.selectedColor};`}
				role="presentation"
			>
				<input
					id="color-picker-input"
					type="color"
					class={`h-8 w-8 cursor-pointer opacity-[var(--opacity-0)] ${state.inputClass}`}
					bind:value={state.selectedColor}
					oninput={state.handleInput}
					onchange={state.handleChange}
					{...props}
				/>
			</div>
			<input
				type="text"
				class={`w-24 rounded-md border border-[var(--color-border-primary)] px-3 py-1 text-sm shadow-sm focus:border-[var(--color-primary-500)] focus:ring-blue-500 focus:outline-none ${state.inputClass}`}
				bind:value={state.selectedColor}
				oninput={state.handleInput}
				onchange={state.handleChange}
				{...props}
			/>
		</div>
	</div>

	{#if state.helperText}
		<p class="mt-1 text-xs text-[var(--color-text-secondary)]">{state.helperText}</p>
	{/if}

	{#if state.error}
		<p class="mt-1 text-xs text-[var(--color-danger-600)]">{state.error}</p>
	{/if}
</div>
