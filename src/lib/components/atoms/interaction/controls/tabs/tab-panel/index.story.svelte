<script lang="ts">
	import { Story } from '$stylist/design-system/playground';
	import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
	import { Tabs } from '$stylist/components/molecules/interaction/controls/tabs';
	import TabPanel from './index.svelte';
	import TabList from '../tab-list/index.svelte';
	import Tab from '../tab/index.svelte';
	import TabPanels from '../tab-panels/index.svelte';

	const controls: ControlConfig[] = [
		{ name: 'selectedId', type: 'select', defaultValue: 'docs', options: ['docs', 'api', 'faq'] },
		{ name: 'panelsClass', type: 'text', defaultValue: 'rounded-xl border border-[--color-border-primary] bg-[--color-background-primary] p-4' },
		{ name: 'disabledApi', type: 'boolean', defaultValue: false }
	];
</script>

<Story component={TabPanel} title="TabPanel" description="Panel shown only for the active tab id." {controls}>
	{#snippet children(values: any)}
		<Tabs selectedId={values.selectedId}>
			<TabList class="mb-3">
				<Tab id="docs">Documentation</Tab>
				<Tab id="api" disabled={values.disabledApi}>API</Tab>
				<Tab id="faq">FAQ</Tab>
			</TabList>
			<TabPanels class={values.panelsClass}>
				<TabPanel id="docs">Setup guide and usage examples.</TabPanel>
				<TabPanel id="api">Endpoints, schemas, and request examples.</TabPanel>
				<TabPanel id="faq">Answers to frequently asked questions.</TabPanel>
			</TabPanels>
		</Tabs>
	{/snippet}
</Story>
