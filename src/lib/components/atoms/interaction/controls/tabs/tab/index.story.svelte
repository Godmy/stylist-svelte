<script lang="ts">
	import { Story } from '$stylist/design-system/playground';
	import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
	import { Tabs } from '$stylist/components/molecules/interaction/controls/tabs';
	import Tab from './index.svelte';
	import TabList from '../tab-list/index.svelte';
	import TabPanels from '../tab-panels/index.svelte';
	import TabPanel from '../tab-panel/index.svelte';

	const controls: ControlConfig[] = [
		{ name: 'selectedId', type: 'select', defaultValue: 'overview', options: ['overview', 'activity', 'settings'] },
		{ name: 'size', type: 'select', defaultValue: 'md', options: ['sm', 'md', 'lg'] },
		{ name: 'variant', type: 'select', defaultValue: 'primary', options: ['primary', 'secondary', 'ghost', 'outline'] },
		{ name: 'disableSettings', type: 'boolean', defaultValue: false }
	];
</script>

<Story component={Tab} title="Tab" description="Single tab item used inside Tabs." {controls}>
	{#snippet children(values: any)}
		<Tabs selectedId={values.selectedId} size={values.size} variant={values.variant}>
			<TabList class="mb-3">
				<Tab id="overview">Overview</Tab>
				<Tab id="activity">Activity</Tab>
				<Tab id="settings" disabled={values.disableSettings}>Settings</Tab>
			</TabList>
			<TabPanels class="rounded-xl border border-[--color-border-primary] bg-[--color-background-primary] p-4">
				<TabPanel id="overview">Project summary and latest highlights.</TabPanel>
				<TabPanel id="activity">Recent actions, updates, and timeline events.</TabPanel>
				<TabPanel id="settings">Configuration options for this workspace.</TabPanel>
			</TabPanels>
		</Tabs>
	{/snippet}
</Story>
