<script lang="ts">
	import { SkeletonStyleManager } from '$stylist/design-system/presets/interaction/interaction-presets';
	import type { ISkeletonProps } from '$stylist/design-system/presets/interaction/interaction-presets';

	/**
	 * SkeletonText component - displays a text-like loading placeholder
	 *
	 * SOLID Principles applied:
	 *
	 * Single Responsibility Principle: This component is responsible only for displaying a text-like skeleton loading placeholder.
	 * Open/Closed Principle: The component is closed for modification but open for extension via CSS classes.
	 * Liskov Substitution Principle: SkeletonText can be substituted with other text-like loading placeholders without breaking functionality.
	 * Interface Segregation Principle: ISkeletonTextProps provides a focused interface for the component.
	 * Dependency Inversion Principle: Component depends on abstractions (styles manager and types) rather than concretions.
	 */
	const props = $props<
		{
			width?: string;
			content?: any;
		} & ISkeletonProps
	>();

	// Set default values
	const width = props.width ?? '100%';
	const content = props.content;

	// Generate the CSS class using the style manager
	const combinedClass = $derived(SkeletonStyleManager.generateClass(props.class));

	// Calculate style
	const style = $derived(`width: ${width};`);
</script>

<div class={combinedClass} {style} {...props}>
	{#if content}
		{@render content()}
	{/if}
</div>
