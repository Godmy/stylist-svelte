<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';
	import { TogglesStyleManager } from '$stylist/design-system/styles/interaction/toggles';
	import type { CompactSize } from '$stylist/design-system/tokens/architecture/sizes';

	type Props = {
		/** Уникальный ID для switch */
		id?: string;
		/** Лейбл переключателя */
		label?: string;
		/** Описание переключателя */
		description?: string;
		/** Размер переключателя */
		size?: CompactSize;
		/** Отключен ли переключатель */
		disabled?: boolean;
		/** Состояние checked (поддерживает two-way binding) */
		checked?: boolean;
		/** Обязательное ли поле */
		required?: boolean;
		/** Дополнительные CSS классы */
		class?: string;
		/** Aria label */
		ariaLabel?: string;
	} & Omit<HTMLInputAttributes, 'size' | 'checked'>;

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
	}: Props = $props();

	// Generate unique ID if not provided
	const generatedId = $derived(id || `switch-${Math.random().toString(36).substr(2, 9)}`);
	const descriptionId = $derived(description ? `${generatedId}-description` : undefined);

	// Classes using style manager
	const containerClasses = $derived(
		`flex items-start gap-3 ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`
	);
	const trackClasses = $derived(TogglesStyleManager.getSwitchTrackClasses(size, disabled, checked));
	const knobClasses = $derived(TogglesStyleManager.getSwitchKnobClasses(size, disabled, checked));
	const inputClasses = $derived(TogglesStyleManager.getSwitchInputClasses(disabled));
	const labelContainerClasses = $derived('flex flex-col gap-1');
	const labelClasses = $derived('text-sm font-medium leading-5 text-[var(--color-text-primary)]');
	const descriptionClasses = $derived('text-xs text-[var(--color-text-secondary)]');
</script>

<label class={containerClasses}>
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
