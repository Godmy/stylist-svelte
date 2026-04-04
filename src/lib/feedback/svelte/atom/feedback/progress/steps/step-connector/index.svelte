<script lang="ts">
	import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
	import type { Snippet } from 'svelte';

	import type { IStepConnectorProps } from '$stylist/feedback/interface/component/feedback/other';
	import { mergeClasses } from '$stylist/layout/function/script/join-class-names';
	/**
	 * StepConnector component - Connects steps in a progress indicator
	 *
	 * Following SOLID principles:
	 * - Single Responsibility: Only handles component rendering and state
	 * - Open/Closed: Extendable through properties but closed for modification
	 * - Liskov Substitution: Can be substituted with other connector components
	 * - Interface Segregation: Small focused interface
	 * - Dependency Inversion: Depends on abstractions (interfaces) rather than concretions
	 *
	 * @param status - Status of the step connector ('pending' | 'active' | 'completed' | 'error')
	 * @param children - Snippet content for the connector (if not using default content)
	 * @returns An accessible, styled step connector element
	 */
	let {
		status = 'pending',
		class: className = '',
		children,
		...restProps
	} = $props<
		{
			status?: 'pending' | 'active' | 'completed' | 'error';
			class?: string;
			children?: Snippet;
		} & InteractionHTMLAttributes<HTMLDivElement>
	>();

	let classes = $derived(
		mergeClasses(
			'step-connector',
			status === 'active' ? 'active' : '',
			status === 'completed' ? 'completed' : '',
			className
		)
	);
</script>

<div {...restProps} class={classes}>
	{#if children}
		{@render children?.()}
	{/if}
</div>






