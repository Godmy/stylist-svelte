<script lang="ts">
	import Tabs from '../tabs/index.svelte';
	import TabList from '../tab-list/index.svelte';
	import { Tab } from '$stylist/components/atoms/interaction/controls/tabs/tab';
	import TabPanel from './index.svelte';
	import TabPanels from '../tab-panels/index.svelte';

	let selectedTabId: string = 'tab1';

	function handleTabChange(id: string) {
		console.log('Tab changed to:', id);
		selectedTabId = id;
	}
</script>

<div class="p-4">
	<h1 class="mb-4 text-lg font-semibold">TabPanel Component</h1>

	<div class="mb-6 rounded border p-4">
		<h2 class="text-md mb-2 font-semibold">Interactive TabPanel</h2>
		<div class="flex flex-col gap-4">
			<Tabs selectedId={selectedTabId} onValueChange={handleTabChange}>
				<TabList>
					<Tab id="tab1">Tab 1</Tab>
					<Tab id="tab2">Tab 2</Tab>
					<Tab id="tab3">Tab 3</Tab>
				</TabList>
				<TabPanels>
					<TabPanel id="tab1">
						<div>
							<h3 class="mb-2 text-lg font-semibold">Tab Panel 1 Content</h3>
							<p>This is the content for the first tab panel.</p>
							<p>
								TabPanel components hold the content that appears when their corresponding tab is
								active.
							</p>
							<ul class="mt-2 list-disc pl-5">
								<li>TabPanel content is hidden when not active</li>
								<li>Only the active tab's panel is shown</li>
								<li>Content can be complex and interactive</li>
							</ul>
						</div>
					</TabPanel>
					<TabPanel id="tab2">
						<div>
							<h3 class="mb-2 text-lg font-semibold">Tab Panel 2 Content</h3>
							<p>This is the content for the second tab panel.</p>
							<div class="mt-2 rounded bg-green-100 p-3">
								<p>Each TabPanel has an id that corresponds to a Tab's id.</p>
								<p>This allows the system to know which content to show when a tab is selected.</p>
							</div>
						</div>
					</TabPanel>
					<TabPanel id="tab3">
						<div>
							<h3 class="mb-2 text-lg font-semibold">Tab Panel 3 Content</h3>
							<p>This is the content for the third tab panel.</p>
							<p>
								Tab Panels can contain any kind of content including forms, images, or other
								components.
							</p>
						</div>
					</TabPanel>
				</TabPanels>
			</Tabs>
		</div>
	</div>

	<div class="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2">
		<div class="rounded border p-4">
			<h2 class="text-md mb-2 font-semibold">TabPanel with Form Content</h2>
			<Tabs onValueChange={(id: string) => console.log('Form tabs changed:', id)}>
				<TabList>
					<Tab id="form-tab1">User Info</Tab>
					<Tab id="form-tab2">Preferences</Tab>
				</TabList>
				<TabPanels>
					<TabPanel id="form-tab1">
						<div>
							<h3 class="mb-2 text-lg font-semibold">User Information</h3>
							<form class="space-y-3">
								<div>
									<label for="user-name" class="mb-1 block text-sm font-medium">Name</label>
									<input
										id="user-name"
										name="user-name"
										type="text"
										class="w-full rounded-md border px-3 py-2"
										placeholder="Enter your name"
									/>
								</div>
								<div>
									<label for="user-email" class="mb-1 block text-sm font-medium">Email</label>
									<input
										id="user-email"
										name="user-email"
										type="email"
										class="w-full rounded-md border px-3 py-2"
										placeholder="Enter your email"
									/>
								</div>
							</form>
						</div>
					</TabPanel>
					<TabPanel id="form-tab2">
						<div>
							<h3 class="mb-2 text-lg font-semibold">Preferences</h3>
							<form class="space-y-3">
								<div class="flex items-center">
									<input type="checkbox" id="notifications" class="mr-2" />
									<label for="notifications">Receive notifications</label>
								</div>
								<div class="flex items-center">
									<input type="checkbox" id="newsletter" class="mr-2" />
									<label for="newsletter">Subscribe to newsletter</label>
								</div>
							</form>
						</div>
					</TabPanel>
				</TabPanels>
			</Tabs>
		</div>

		<div class="rounded border p-4">
			<h2 class="text-md mb-2 font-semibold">TabPanel with Rich Content</h2>
			<Tabs onValueChange={(id: string) => console.log('Rich content tabs changed:', id)}>
				<TabList>
					<Tab id="rich-tab1">Description</Tab>
					<Tab id="rich-tab2">Specifications</Tab>
					<Tab id="rich-tab3">Reviews</Tab>
				</TabList>
				<TabPanels>
					<TabPanel id="rich-tab1">
						<div>
							<h3 class="mb-2 text-lg font-semibold">Product Description</h3>
							<p>
								This product is designed to provide excellent functionality with a focus on user
								experience. It features a modern design and intuitive interface.
							</p>
							<p>
								Designed for professionals who need reliable and efficient tools for their daily
								work.
							</p>
						</div>
					</TabPanel>
					<TabPanel id="rich-tab2">
						<div>
							<h3 class="mb-2 text-lg font-semibold">Technical Specifications</h3>
							<ul class="list-disc space-y-1 pl-5">
								<li>Material: Premium quality materials</li>
								<li>Dimensions: 10 x 8 x 5 inches</li>
								<li>Weight: 2.5 lbs</li>
								<li>Color: Available in multiple options</li>
								<li>Warranty: 2-year limited warranty</li>
							</ul>
						</div>
					</TabPanel>
					<TabPanel id="rich-tab3">
						<div>
							<h3 class="mb-2 text-lg font-semibold">Customer Reviews</h3>
							<div class="space-y-3">
								<div class="rounded bg-gray-50 p-3">
									<p class="font-medium">John D.</p>
									<p>Great product! Highly recommend.</p>
								</div>
								<div class="rounded bg-gray-50 p-3">
									<p class="font-medium">Sarah M.</p>
									<p>Excellent quality and fast shipping.</p>
								</div>
							</div>
						</div>
					</TabPanel>
				</TabPanels>
			</Tabs>
		</div>
	</div>

	<div class="rounded border p-4">
		<h2 class="text-md mb-2 font-semibold">Default TabPanel</h2>
		<Tabs>
			<TabList>
				<Tab id="default-tab1">Info</Tab>
				<Tab id="default-tab2">Details</Tab>
			</TabList>
			<TabPanels>
				<TabPanel id="default-tab1">
					<div>
						<h3 class="mb-2 text-lg font-semibold">Information Panel</h3>
						<p>This is the content area for the first tab panel.</p>
						<p>TabPanel automatically handles visibility based on which tab is selected.</p>
					</div>
				</TabPanel>
				<TabPanel id="default-tab2">
					<div>
						<h3 class="mb-2 text-lg font-semibold">Details Panel</h3>
						<p>This is the content area for the second tab panel.</p>
						<p>Only one panel is visible at a time based on the active tab.</p>
					</div>
				</TabPanel>
			</TabPanels>
		</Tabs>
	</div>
</div>




