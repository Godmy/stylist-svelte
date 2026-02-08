<script lang="ts">
	import Tabs from '../tabs/index.svelte';
	import TabList from '../tab-list/index.svelte';
	import { Tab } from '../tab';
	import TabPanel from '../tab-panel/index.svelte';
	import TabPanels from './index.svelte';

	let selectedTabId: string = 'tab1';

	function handleTabChange(id: string) {
		console.log('Tab changed to:', id);
		selectedTabId = id;
	}
</script>

<div class="p-4">
	<h1 class="mb-4 text-lg font-semibold">TabPanels Component</h1>

	<div class="mb-6 rounded border p-4">
		<h2 class="text-md mb-2 font-semibold">Interactive TabPanels</h2>
		<div class="flex flex-col gap-4">
			<Tabs selectedId={selectedTabId} onTabChange={handleTabChange}>
				<TabList>
					<Tab id="tab1">Tab 1</Tab>
					<Tab id="tab2">Tab 2</Tab>
					<Tab id="tab3">Tab 3</Tab>
				</TabList>
				<TabPanels class="rounded-b border-r border-b border-l bg-white p-4">
					<TabPanel id="tab1">
						<div>
							<h3 class="mb-2 text-lg font-semibold">Tab Panels 1 Content</h3>
							<p>This is the content for the first tab panel within the TabPanels container.</p>
							<p>TabPanels acts as a container for multiple TabPanel components.</p>
						</div>
					</TabPanel>
					<TabPanel id="tab2">
						<div>
							<h3 class="mb-2 text-lg font-semibold">Tab Panels 2 Content</h3>
							<p>This is the content for the second tab panel.</p>
							<div class="mt-2 rounded bg-yellow-100 p-3">
								<p>TabPanels provides a consistent container for all tab content panels.</p>
							</div>
						</div>
					</TabPanel>
					<TabPanel id="tab3">
						<div>
							<h3 class="mb-2 text-lg font-semibold">Tab Panels 3 Content</h3>
							<p>This is the content for the third tab panel.</p>
							<p>Only the active tab's panel is visible within the TabPanels container.</p>
						</div>
					</TabPanel>
				</TabPanels>
			</Tabs>
		</div>
	</div>

	<div class="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2">
		<div class="rounded border p-4">
			<h2 class="text-md mb-2 font-semibold">TabPanels with Two Items</h2>
			<Tabs onTabChange={(id: string) => console.log('Two tabs changed:', id)}>
				<TabList>
					<Tab id="two-tab1">Overview</Tab>
					<Tab id="two-tab2">Details</Tab>
				</TabList>
				<TabPanels class="bg-gray-50 p-6">
					<TabPanel id="two-tab1">
						<div>
							<h3 class="mb-2 text-lg font-semibold">Overview Content</h3>
							<p>This provides a high-level overview of the content.</p>
							<p>TabPanels container ensures consistent styling for all panels.</p>
						</div>
					</TabPanel>
					<TabPanel id="two-tab2">
						<div>
							<h3 class="mb-2 text-lg font-semibold">Detailed Information</h3>
							<p>This contains more detailed information about the subject.</p>
							<p>The TabPanels component manages which panel is currently visible.</p>
						</div>
					</TabPanel>
				</TabPanels>
			</Tabs>
		</div>

		<div class="rounded border p-4">
			<h2 class="text-md mb-2 font-semibold">TabPanels with Rich Content</h2>
			<Tabs onTabChange={(id: string) => console.log('Rich content tabs changed:', id)}>
				<TabList>
					<Tab id="rich-tab1">About</Tab>
					<Tab id="rich-tab2">Features</Tab>
					<Tab id="rich-tab3">Usage</Tab>
				</TabList>
				<TabPanels class="bg-blue-50 p-4">
					<TabPanel id="rich-tab1">
						<div>
							<h3 class="mb-2 text-lg font-semibold">About This Product</h3>
							<p>This product is designed with user experience in mind.</p>
							<p>
								It features a modern architecture that provides excellent performance and
								reliability.
							</p>
						</div>
					</TabPanel>
					<TabPanel id="rich-tab2">
						<div>
							<h3 class="mb-2 text-lg font-semibold">Key Features</h3>
							<ul class="list-disc space-y-1 pl-5">
								<li>Intuitive user interface</li>
								<li>Cross-platform compatibility</li>
								<li>Advanced customization options</li>
								<li>Comprehensive documentation</li>
								<li>Active community support</li>
							</ul>
						</div>
					</TabPanel>
					<TabPanel id="rich-tab3">
						<div>
							<h3 class="mb-2 text-lg font-semibold">How to Use</h3>
							<ol class="list-decimal space-y-1 pl-5">
								<li>Install the package using your preferred package manager</li>
								<li>Import the components you need</li>
								<li>Follow the documentation for implementation examples</li>
								<li>Customize as needed for your project</li>
							</ol>
						</div>
					</TabPanel>
				</TabPanels>
			</Tabs>
		</div>
	</div>

	<div class="rounded border p-4">
		<h2 class="text-md mb-2 font-semibold">Default TabPanels</h2>
		<Tabs>
			<TabList>
				<Tab id="default-tab1">Content</Tab>
				<Tab id="default-tab2">Information</Tab>
			</TabList>
			<TabPanels>
				<TabPanel id="default-tab1">
					<div>
						<h3 class="mb-2 text-lg font-semibold">Content Panel</h3>
						<p>This is where the main content for the first tab goes.</p>
						<p>TabPanels provides a container that only shows the active panel.</p>
					</div>
				</TabPanel>
				<TabPanel id="default-tab2">
					<div>
						<h3 class="mb-2 text-lg font-semibold">Information Panel</h3>
						<p>This contains additional information in the second tab panel.</p>
						<p>The TabPanels component handles the visibility logic automatically.</p>
					</div>
				</TabPanel>
			</TabPanels>
		</Tabs>
	</div>
</div>
