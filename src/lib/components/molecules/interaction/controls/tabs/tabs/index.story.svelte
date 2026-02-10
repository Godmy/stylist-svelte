<script lang="ts">
	import Tabs from './index.svelte';
	import TabList from '../tab-list/index.svelte';
	import { Tab } from '../tab';
	import TabPanel from '../tab-panel/index.svelte';
	import TabPanels from '../tab-panels/index.svelte';

	let selectedTabId: string = 'tab1';

	function handleTabChange(id: string) {
		console.log('Tab changed to:', id);
		selectedTabId = id;
	}
</script>

<div class="p-4">
	<h1 class="mb-4 text-lg font-semibold">Tabs Component</h1>

	<div class="mb-6 rounded border p-4">
		<h2 class="text-md mb-2 font-semibold">Interactive Tabs</h2>
		<div class="flex flex-col gap-4">
			<Tabs selectedId={selectedTabId} onTabChange={handleTabChange} class="w-full">
				<TabList>
					<Tab id="tab1">Getting Started</Tab>
					<Tab id="tab2">Documentation</Tab>
					<Tab id="tab3">Examples</Tab>
				</TabList>
				<TabPanels>
					<TabPanel id="tab1">
						<div>
							<h3 class="mb-2 text-lg font-semibold">Main Tabs Content</h3>
							<p>This is the content for the first tab within the Tabs component.</p>
							<p>The Tabs component manages the selected state and tab changes.</p>
						</div>
					</TabPanel>
					<TabPanel id="tab2">
						<div>
							<h3 class="mb-2 text-lg font-semibold">Secondary Content</h3>
							<p>This is the content for the second tab.</p>
							<div class="mt-2 rounded bg-purple-100 p-3">
								<p>
									The Tabs component provides context to TabList, Tab, TabPanels, and TabPanel
									components.
								</p>
							</div>
						</div>
					</TabPanel>
					<TabPanel id="tab3">
						<div>
							<h3 class="mb-2 text-lg font-semibold">Additional Information</h3>
							<p>This is the content for the third tab.</p>
							<p>
								Tabs coordinate with all the other tab components to create a cohesive interface.
							</p>
						</div>
					</TabPanel>
				</TabPanels>
			</Tabs>
		</div>
	</div>

	<div class="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2">
		<div class="rounded border p-4">
			<h2 class="text-md mb-2 font-semibold">Tabs with Controlled State</h2>
			<Tabs
				selectedId="controlled-tab2"
				onTabChange={(id: string) => console.log('Controlled tabs changed to:', id)}
			>
				<TabList>
					<Tab id="controlled-tab1">Home</Tab>
					<Tab id="controlled-tab2">Dashboard</Tab>
					<Tab id="controlled-tab3">Settings</Tab>
				</TabList>
				<TabPanels>
					<TabPanel id="controlled-tab1">
						<div>
							<h3 class="mb-2 text-lg font-semibold">Home Panel</h3>
							<p>This is the home panel content.</p>
							<p>The Tabs component is initialized with a specific tab selected.</p>
						</div>
					</TabPanel>
					<TabPanel id="controlled-tab2">
						<div>
							<h3 class="mb-2 text-lg font-semibold">Dashboard Panel</h3>
							<p>This is the dashboard panel content.</p>
							<p>This panel is shown by default due to the selectedId prop.</p>
						</div>
					</TabPanel>
					<TabPanel id="controlled-tab3">
						<div>
							<h3 class="mb-2 text-lg font-semibold">Settings Panel</h3>
							<p>This is the settings panel content.</p>
							<p>Users can switch to this tab using the tab controls.</p>
						</div>
					</TabPanel>
				</TabPanels>
			</Tabs>
		</div>

		<div class="rounded border p-4">
			<h2 class="text-md mb-2 font-semibold">Tabs with Custom Styling</h2>
			<Tabs
				selectedId="custom-tab1"
				onTabChange={(id: string) => console.log('Custom tabs changed:', id)}
				class="rounded-lg border-2 border-blue-200"
			>
				<TabList class="rounded-t-lg bg-blue-100">
					<Tab id="custom-tab1">Profile</Tab>
					<Tab id="custom-tab2">Projects</Tab>
					<Tab id="custom-tab3">Activity</Tab>
				</TabList>
				<TabPanels class="rounded-b-lg bg-blue-50 p-4">
					<TabPanel id="custom-tab1">
						<div>
							<h3 class="mb-2 text-lg font-semibold">User Profile</h3>
							<p>User profile information would be displayed here.</p>
							<p>The Tabs component can be styled with custom CSS classes.</p>
						</div>
					</TabPanel>
					<TabPanel id="custom-tab2">
						<div>
							<h3 class="mb-2 text-lg font-semibold">Projects</h3>
							<p>Information about user projects would be shown here.</p>
							<p>Styling can be applied to the Tabs container and its child components.</p>
						</div>
					</TabPanel>
					<TabPanel id="custom-tab3">
						<div>
							<h3 class="mb-2 text-lg font-semibold">Activity</h3>
							<p>User activity feed would appear in this panel.</p>
							<p>The Tabs component passes styling classes down to its children.</p>
						</div>
					</TabPanel>
				</TabPanels>
			</Tabs>
		</div>
	</div>

	<div class="rounded border p-4">
		<h2 class="text-md mb-2 font-semibold">Default Tabs</h2>
		<Tabs>
			<TabList>
				<Tab id="default-tab1">Info</Tab>
				<Tab id="default-tab2">Details</Tab>
			</TabList>
			<TabPanels>
				<TabPanel id="default-tab1">
					<div>
						<h3 class="mb-2 text-lg font-semibold">Information Panel</h3>
						<p>This is the default content panel.</p>
						<p>Without a selectedId, the first tab is automatically selected.</p>
					</div>
				</TabPanel>
				<TabPanel id="default-tab2">
					<div>
						<h3 class="mb-2 text-lg font-semibold">Details Panel</h3>
						<p>This contains additional details.</p>
						<p>The Tabs component manages state internally when no callbacks are provided.</p>
					</div>
				</TabPanel>
			</TabPanels>
		</Tabs>
	</div>
</div>
