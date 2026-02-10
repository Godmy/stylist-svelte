<script lang="ts">
	import type { ISkeletonProps } from '$stylist/design-system/presets/interaction/interaction-presets';
	import { mergeClasses } from '$stylist/utils/classes';

	/**
	 * SkeletonCircle component - displays a circular loading placeholder
	 *
	 * SOLID Principles applied:
	 *
	 * Single Responsibility Principle: This component is responsible only for displaying a circular skeleton loading placeholder.
	 * Open/Closed Principle: The component is closed for modification but open for extension via CSS classes.
	 * Liskov Substitution Principle: SkeletonCircle can be substituted with other circular loading placeholders without breaking functionality.
	 * Interface Segregation Principle: ISkeletonProps provides a focused interface for the component.
	 * Dependency Inversion Principle: Component depends on abstractions (styles manager and types) rather than concretions.
	 */
	const props = $props<
		{
			size?: number;
			content?: any;
		} & ISkeletonProps
	>();

	// Set default values
	const size = props.size ?? 40;
	const content = props.content;

	// Generate the CSS class using the style manager
	const combinedClass = $derived(
		mergeClasses('skeleton-container', 'variant-circular', props.class)
	);

	// Calculate style
	const style = $derived(`width: ${size}px; height: ${size}px;`);
</script>

<div class={combinedClass} {style} {...props}>
	{#if content}
		{@render content()}
	{/if}
</div>
