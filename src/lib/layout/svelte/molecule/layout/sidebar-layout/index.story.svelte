<script lang="ts">
	import { Story } from '$stylist/development/svelte/playground';
	import type { InterfaceControllerSettings } from '$stylist/development/type/struct/interface-controller-settings';
	import SidebarLayout from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{ name: 'side', type: 'select', defaultValue: 'left', options: ['left', 'right'] },
		{ name: 'sidebarWidth', type: 'select', defaultValue: 'md', options: ['xs', 'sm', 'md', 'lg', 'xl'] },
		{ name: 'gap', type: 'select', defaultValue: 'md', options: ['none', 'sm', 'md', 'lg', 'xl'] },
		{ name: 'collapsed', type: 'boolean', defaultValue: false },
		{ name: 'responsive', type: 'boolean', defaultValue: true }
	];
</script>

<Story component={SidebarLayout} title="SidebarLayout" description="Two-panel layout with a fixed-width sidebar and flexible main content area." {controls}>
	{#snippet children(values: any)}
		<SidebarLayout
			side={values.side}
			sidebarWidth={values.sidebarWidth}
			gap={values.gap}
			collapsed={values.collapsed}
			responsive={values.responsive}
			class="h-64 border border-[--color-border-primary] rounded-lg overflow-hidden"
		>
			{#snippet sidebar()}
				<div class="h-full bg-[--color-background-secondary] p-3 text-sm text-[--color-text-secondary]">
					Sidebar
				</div>
			{/snippet}
			{#snippet children()}
				<div class="h-full p-4 text-sm text-[--color-text-primary]">
					Main content area
				</div>
			{/snippet}
		</SidebarLayout>
	{/snippet}
</Story>
