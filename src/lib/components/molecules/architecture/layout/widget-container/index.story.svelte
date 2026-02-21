<script lang="ts">
	import { Story } from '$stylist/design-system/playground';
	import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
	import WidgetContainer from './index.svelte';

	const controls: ControlConfig[] = [
		{ name: 'title', type: 'text', defaultValue: 'Deployment status' },
		{ name: 'subtitle', type: 'text', defaultValue: 'Region: us-east-1' },
		{ name: 'collapsible', type: 'boolean', defaultValue: true },
		{ name: 'initiallyCollapsed', type: 'boolean', defaultValue: false },
		{ name: 'maximizable', type: 'boolean', defaultValue: true }
	];
</script>

<Story component={WidgetContainer} title="WidgetContainer" description="Card-like widget shell with controls and collapse behavior." {controls}>
	{#snippet children(values: any)}
		<WidgetContainer
			title={values.title}
			subtitle={values.subtitle}
			collapsible={values.collapsible}
			initiallyCollapsed={values.initiallyCollapsed}
			maximizable={values.maximizable}
		>
			{#snippet content()}
				<div class="text-sm text-[--color-text-secondary]">No incidents detected in the last 24 hours.</div>
			{/snippet}
		</WidgetContainer>
	{/snippet}
</Story>
