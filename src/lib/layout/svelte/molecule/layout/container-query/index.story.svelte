<script lang="ts">
	import { Story } from '$stylist/development/svelte/playground';
	import type { InterfaceControllerSettings } from '$stylist/development/type/struct/interface-controller-settings';
	import ContainerQuery from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{ name: 'containerType', type: 'select', defaultValue: 'inline-size', options: ['inline-size', 'size', 'normal'] },
		{ name: 'containerName', type: 'text', defaultValue: '' }
	];
</script>

<Story component={ContainerQuery} title="ContainerQuery" description="Establishes a CSS container context for @container query breakpoints in child components." {controls}>
	{#snippet children(values: any)}
		<!--
			Resize this story panel to see the container query in action.
			@sm: applies when container width >= 640px
		-->
		<ContainerQuery
			containerType={values.containerType}
			containerName={values.containerName || undefined}
			class="w-full border border-[--color-border-primary] rounded-lg p-4"
		>
			{#snippet children()}
				<div class="text-sm text-[--color-text-secondary] @sm:text-base @sm:font-semibold @sm:text-[--color-text-primary]">
					Resize me — this text changes style when container ≥ 640px
				</div>
				<div class="mt-3 block @sm:flex @sm:gap-4">
					<div class="rounded border border-[--color-border-primary] p-2 text-xs mb-2 @sm:mb-0">Panel A</div>
					<div class="rounded border border-[--color-border-primary] p-2 text-xs">Panel B</div>
				</div>
			{/snippet}
		</ContainerQuery>
	{/snippet}
</Story>
