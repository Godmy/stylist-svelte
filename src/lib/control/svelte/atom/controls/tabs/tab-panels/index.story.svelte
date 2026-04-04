<script lang="ts">
	import { Story } from '$stylist/development/svelte/playground';
	import type { InterfaceControllerSettings } from '$stylist/development/type/struct/interface-controller-settings/interface-controller-settings';
	import { Tabs } from '$stylist/control/svelte/molecule/controls/tabs';
	import TabPanels from './index.svelte';
	import TabList from '../tab-list/index.svelte';
	import Tab from '../tab/index.svelte';
	import TabPanel from '../tab-panel/index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{ name: 'selectedId', type: 'select', defaultValue: 'summary', options: ['summary', 'files', 'logs'] },
		{ name: 'class', type: 'text', defaultValue: 'rounded-xl border border-[--color-border-primary] bg-[--color-background-primary] p-5' }
	];
</script>

<Story component={TabPanels} title="TabPanels" description="Container that groups tab panels into a consistent content region." {controls}>
	{#snippet children(values: any)}
		<Tabs selectedId={values.selectedId}>
			<TabList class="mb-3">
				<Tab id="summary">Summary</Tab>
				<Tab id="files">Files</Tab>
				<Tab id="logs">Logs</Tab>
			</TabList>
			<TabPanels class={values.class}>
				<TabPanel id="summary">Service health and rollout status.</TabPanel>
				<TabPanel id="files">Latest uploaded assets and versions.</TabPanel>
				<TabPanel id="logs">Live logs and monitoring events.</TabPanel>
			</TabPanels>
		</Tabs>
	{/snippet}
</Story>



