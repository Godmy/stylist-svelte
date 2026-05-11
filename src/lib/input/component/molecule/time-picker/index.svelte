<script lang="ts">
	import { Icon as BaseIcon } from '$stylist/media';
	import type { SlotTimePicker as ITimePickerProps } from '$stylist/input/interface/slot/time-picker';
	import { createTimePickerState } from '$stylist/input/function/state/time-picker';

	const Clock = 'clock';

	let props: ITimePickerProps = $props();
	const state = createTimePickerState(props);
</script>

<div class={`relative ${state.className}`.trim()}>
	<div class="relative">
		<input
			use:state.timeInputAction
			type="text"
			class={`w-full rounded-md border border-[var(--color-border-primary)] p-2 pr-10 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none ${
				state.disabled
					? 'cursor-not-allowed bg-[var(--color-background-secondary)] text-[var(--color-text-tertiary)]'
					: 'cursor-pointer'
			}`}
			readonly
			value={state.selectedTime}
			onclick={state.toggleDropdown}
			disabled={state.disabled}
			{...props}
		/>
		<button
			type="button"
			class="absolute top-0 right-0 h-full rounded-r-md px-3 hover:bg-[var(--color-background-secondary)]"
			onclick={state.toggleDropdown}
			disabled={state.disabled}
		>
			<BaseIcon name={Clock} class="h-4 w-4 text-[var(--color-text-secondary)]" />
		</button>
	</div>

	{#if state.isOpen}
		<div
			use:state.timePickerAction
			class={`absolute z-[var(--z-index-docked)] mt-1 max-h-60 w-full overflow-y-auto rounded-md border border-[var(--color-border-primary)] bg-[var(--color-background-primary)] p-2 shadow-lg ${state.dropdownClass}`}
			onclick={(e: Event) => e.stopPropagation()}
			onkeydown={(e: KeyboardEvent) => e.stopPropagation()}
			role="dialog"
			tabindex={0}
		>
			{#each state.timeOptions as time}
				<div
					class={`cursor-pointer p-2 hover:bg-[var(--color-background-secondary)] ${
						state.selectedTime === time ? 'bg-[var(--color-primary-100)]' : ''
					}`}
					onclick={() => {
						state.selectedTime = time;
						state.updateValue();
						state.isOpen = false;
					}}
					onkeydown={(e: KeyboardEvent) => {
						if (e.key === 'Enter' || e.key === ' ') {
							e.preventDefault();
							state.selectedTime = time;
							state.updateValue();
							state.isOpen = false;
						}
					}}
					role="option"
					aria-selected={state.selectedTime === time}
					tabindex={0}
				>
					{time}
				</div>
			{/each}
		</div>
	{/if}
</div>
