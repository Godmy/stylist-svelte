<script lang="ts">
	import { Story } from '$stylist/design-system/playground';
	import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
	import { Tabs } from '$stylist/components/molecules/interaction/controls/tabs';
	import TabList from './index.svelte';
	import Tab from '../tab/index.svelte';
	import TabPanels from '../tab-panels/index.svelte';
	import TabPanel from '../tab-panel/index.svelte';

	const controls: ControlConfig[] = [
		{ name: 'selectedId', type: 'select', defaultValue: 'profile', options: ['profile', 'billing', 'security'] },
		{ name: 'size', type: 'select', defaultValue: 'md', options: ['sm', 'md', 'lg'] },
		{ name: 'disabled', type: 'boolean', defaultValue: false },
		{ name: 'class', type: 'text', defaultValue: 'mb-3' }
	];
</script>

<Story component={TabList} title="TabList" description="Container that arranges tabs and handles disabled state." {controls}>
	{#snippet children(values: any)}
		<Tabs selectedId={values.selectedId} size={values.size}>
			<TabList class={values.class} disabled={values.disabled}>
				<Tab id="profile">Profile</Tab>
				<Tab id="billing">Billing</Tab>
				<Tab id="security">Security</Tab>
			</TabList>
			<TabPanels class="rounded-xl border border-[--color-border-primary] bg-[--color-background-primary] p-4">
				<TabPanel id="profile">Public profile and personal details.</TabPanel>
				<TabPanel id="billing">Payment methods and invoices.</TabPanel>
				<TabPanel id="security">Password, sessions, and 2FA.</TabPanel>
			</TabPanels>
		</Tabs>
	{/snippet}
</Story>
