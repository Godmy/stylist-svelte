<script lang="ts">
	import BaseIcon from '$stylist/svg/component/atom/icon/index.svelte';
	import type { SlotTimePicker as ITimePickerProps } from '$stylist/calendar/interface/slot/time-picker';
	import createTimePickerState from '$stylist/calendar/function/state/time-picker/index.svelte';

	const Clock = 'clock';

	let props: ITimePickerProps = $props();
	const state = createTimePickerState(props);
</script>

<div class={`time-picker ${state.className}`.trim()}>
	<div class="time-picker__input-wrap">
		<input
			use:state.timeInputAction
			type="text"
			class={`time-picker__input ${state.disabled ? 'time-picker__input--disabled' : 'time-picker__input--active'}`}
			readonly
			value={state.selectedTime}
			onclick={state.toggleDropdown}
			disabled={state.disabled}
			{...props}
		/>
		<button
			type="button"
			class="time-picker__icon-btn"
			onclick={state.toggleDropdown}
			disabled={state.disabled}
		>
			<BaseIcon
				name={Clock}
				style="width: 1rem; height: 1rem; color: var(--color-text-secondary)"
			/>
		</button>
	</div>

	{#if state.isOpen}
		<div
			use:state.timePickerAction
			class={`time-picker__dropdown ${state.dropdownClass}`}
			onclick={(e: Event) => e.stopPropagation()}
			onkeydown={(e: KeyboardEvent) => e.stopPropagation()}
			role="dialog"
			tabindex={0}
		>
			{#each state.timeOptions as time}
				<div
					class={`time-picker__option ${state.selectedTime === time ? 'time-picker__option--selected' : ''}`}
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

<style>
	.time-picker {
		position: relative;
		width: 100%;
	}

	.time-picker__input-wrap {
		position: relative;
		width: 100%;
	}

	.time-picker__input {
		box-sizing: border-box;
		width: 100%;
		border-radius: var(--border-radius-base, 0.375rem);
		border: 1px solid var(--color-border-primary);
		padding: 0.625rem 2.5rem 0.625rem 0.75rem;
	}

	.time-picker__input:focus {
		outline: none;
		box-shadow: 0 0 0 2px var(--color-primary-200);
	}

	.time-picker__input--active {
		cursor: pointer;
	}

	.time-picker__input--disabled {
		cursor: not-allowed;
		background-color: var(--color-background-secondary);
		color: var(--color-text-tertiary);
	}

	.time-picker__icon-btn {
		position: absolute;
		inset-block: 0;
		inset-inline-end: 0;
		border-start-end-radius: var(--border-radius-base, 0.375rem);
		border-end-end-radius: var(--border-radius-base, 0.375rem);
		padding-inline: 0.75rem;
		background: none;
		border: none;
		cursor: pointer;
	}

	.time-picker__icon-btn:hover {
		background-color: var(--color-background-secondary);
	}

	.time-picker__dropdown {
		position: absolute;
		z-index: var(--z-index-docked);
		inset-inline: 0;
		box-sizing: border-box;
		margin-block-start: 0.25rem;
		max-height: 12rem;
		width: 100%;
		overflow-y: auto;
		border-radius: var(--border-radius-base, 0.375rem);
		border: 1px solid var(--color-border-primary);
		background-color: var(--color-background-primary);
		padding: 0.5rem;
		box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
	}

	.time-picker__option {
		cursor: pointer;
		padding: 0.5rem;
		border-radius: var(--border-radius-sm, 0.25rem);
	}

	.time-picker__option:hover {
		background-color: var(--color-background-secondary);
	}

	.time-picker__option--selected {
		background-color: var(--color-primary-100);
	}
</style>
