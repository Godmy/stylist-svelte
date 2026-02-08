<script lang="ts">
	import { ProgressBarStyleManager } from '$stylist/design-system/presets/interaction/interaction-presets';
	import type { IProgressBarProps } from '$stylist/design-system/presets/interaction/interaction-presets';

	/**
	 * ProgressBar component - Visual indicator of task completion
	 *
	 * SOLID Principles applied:
	 *
	 * Single Responsibility Principle: This component is responsible only for displaying a progress bar.
	 * Open/Closed Principle: The component is closed for modification but open for extension via CSS classes.
	 * Liskov Substitution Principle: ProgressBar can be substituted with other progress indicators without breaking functionality.
	 * Interface Segregation Principle: IProgressBarProps provides a focused interface for the component.
	 * Dependency Inversion Principle: Component depends on abstractions (styles manager and types) rather than concretions.
	 */
	const props = $props<
		{
			value: number;
			max?: number;
			label?: string;
			showPercentage?: boolean;
			size?: 'sm' | 'md' | 'lg';
			variant?: 'primary' | 'success' | 'warning' | 'danger';
		} & IProgressBarProps
	>();

	// Set default values
	const value = props.value;
	const max = props.max ?? 100;
	const label = props.label;
	const showPercentage = props.showPercentage ?? true;
	const size = props.size ?? 'md';
	const variant = props.variant ?? 'primary';

	// Calculate percentage
	const percentage = $derived(Math.min(Math.max((value / max) * 100, 0), 100));

	// Generate the CSS classes using the style manager
	const containerClass = $derived(ProgressBarStyleManager.generateContainerClass(props.class));
	const labelWrapperClass = $derived(ProgressBarStyleManager.generateLabelWrapperClass());
	const labelClass = $derived(ProgressBarStyleManager.generateLabelClass());
	const trackClass = $derived(ProgressBarStyleManager.generateTrackClass(size));
	const fillClass = $derived(ProgressBarStyleManager.generateFillClass(size, variant));
	const fillStyle = $derived(`width: ${percentage}%`);
</script>

<div class={containerClass}>
	{#if label || showPercentage}
		<div class={labelWrapperClass}>
			{#if label}
				<span class={labelClass}>{label}</span>
			{/if}
			{#if showPercentage}
				<span class={labelClass}>{percentage.toFixed(0)}%</span>
			{/if}
		</div>
	{/if}
	<div class={trackClass}>
		<div
			class={fillClass}
			style={fillStyle}
			role="progressbar"
			aria-valuenow={value}
			aria-valuemin={0}
			aria-valuemax={max}
			aria-label={label}
		></div>
	</div>
</div>
