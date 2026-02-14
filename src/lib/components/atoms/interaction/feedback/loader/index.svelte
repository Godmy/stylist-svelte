<script lang="ts">
	import type { ILoaderProps } from '$stylist/design-system/props';
	import { mergeClasses } from '$stylist/utils/classes';

	/**
	 * Loader component - displays a loading spinner
	 *
	 * SOLID Principles applied:
	 *
	 * Single Responsibility Principle: This component is responsible only for displaying a loading indicator.
	 * Open/Closed Principle: The component is closed for modification but open for extension via CSS classes.
	 * Liskov Substitution Principle: Loader can be substituted with other loading indicators without breaking functionality.
	 * Interface Segregation Principle: ILoaderProps provides a focused interface for the component.
	 * Dependency Inversion Principle: Component depends on abstractions (styles manager and types) rather than concretions.
	 */
	const props = $props<
		{
			class?: string;
		} & ILoaderProps
	>();
	const restProps = $derived(
		(() => {
			const { class: _class, ...rest } = props;
			return rest;
		})()
	);

	// Generate the CSS class using the style manager
	const combinedClass = $derived(mergeClasses('loader-container', props.class));

	// Default accessibility properties
	const role = 'status';
	const ariaLabel = 'Loading...';
</script>

<div class={combinedClass} {role} aria-label={ariaLabel} {...restProps}>
	<span
		class="!absolute !-m-px !h-px !w-px !overflow-hidden !border-0 !p-0 !whitespace-nowrap ![clip:rect(0,0,0,0)]"
		>{ariaLabel}</span
	>
</div>



