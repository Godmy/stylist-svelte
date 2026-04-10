<script lang="ts">
	import { createSwitchState } from '$stylist/control/function/state/switch';
	import type { SwitchProps } from '$stylist/control/type/struct/switch-props';

	let {
		id,
		label = '',
		description = '',
		size = 'md',
		disabled = false,
		checked = $bindable<boolean>(false),
		required = false,
		class: className = '',
		ariaLabel,
		name,
		...restProps
	}: SwitchProps = $props();

	const state = createSwitchState({
		id,
		label,
		description,
		size,
		disabled,
		checked,
		required,
		class: className,
		ariaLabel
	});

	const generatedId = $derived(id || `switch-${Math.random().toString(36).substr(2, 9)}`);
	const descriptionId = $derived(description ? `${generatedId}-description` : undefined);
	const trackClasses = $derived(state.getTrackClasses(checked, disabled));
	const knobClasses = $derived(state.getKnobClasses(checked, size));
	const inputClasses = $derived(state.getInputClasses(disabled));
	const labelContainerClasses = $derived('flex flex-col gap-1');
	const labelClasses = $derived(state.getLabelClasses(disabled));
	const descriptionClasses = 'text-sm text-[var(--color-text-secondary)]';
</script>

<label class={state.containerClasses}>
	<span class={trackClasses}>
		<input
			id={generatedId}
			{name}
			type="checkbox"
			bind:checked
			disabled={disabled}
			required={required}
			class={inputClasses}
			aria-label={ariaLabel || label}
			aria-describedby={descriptionId}
			aria-checked={checked ? 'true' : 'false'}
			role="switch"
			{...restProps}
		/>
		<span class={knobClasses} aria-hidden="true"></span>
	</span>

	{#if label || description}
		<span class={labelContainerClasses}>
			{#if label}
				<span class={labelClasses}>
					{label}
					{#if required}
						<span class="text-[var(--color-danger-500)] ml-1" aria-hidden="true">*</span>
					{/if}
				</span>
			{/if}
			{#if description}
				<span id={descriptionId} class={descriptionClasses}>
					{description}
				</span>
			{/if}
		</span>
	{/if}
</label>
