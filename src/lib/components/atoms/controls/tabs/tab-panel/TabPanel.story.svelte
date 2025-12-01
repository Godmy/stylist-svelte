<script lang="ts">
  import { Tabs } from '../tabs';
  import { TabList } from '../tab-list';
  import { Tab } from '../tab';
  import TabPanel from './TabPanel.svelte';
  import { TabPanels } from '../tab-panels';

  let selectedTabId: string = 'tab1';

  function handleTabChange(id: string) {
    console.log('Tab changed to:', id);
    selectedTabId = id;
  }

  // Content snippets for tab panels - using Svelte 5 snippet syntax
  let tabContent1 = () => {
    return `<div>
      <h3 class="text-lg font-semibold mb-2">Tab Panel 1 Content</h3>
      <p>This is the content for the first tab panel.</p>
      <p>TabPanel components hold the content that appears when their corresponding tab is active.</p>
      <ul class="list-disc pl-5 mt-2">
        <li>TabPanel content is hidden when not active</li>
        <li>Only the active tab's panel is shown</li>
        <li>Content can be complex and interactive</li>
      </ul>
    </div>`;
  };

  let tabContent2 = () => {
    return `<div>
      <h3 class="text-lg font-semibold mb-2">Tab Panel 2 Content</h3>
      <p>This is the content for the second tab panel.</p>
      <div class="mt-2 p-3 bg-green-100 rounded">
        <p>Each TabPanel has an id that corresponds to a Tab's id.</p>
        <p>This allows the system to know which content to show when a tab is selected.</p>
      </div>
    </div>`;
  };

  let tabContent3 = () => {
    return `<div>
      <h3 class="text-lg font-semibold mb-2">Tab Panel 3 Content</h3>
      <p>This is the content for the third tab panel.</p>
      <p>Tab Panels can contain any kind of content including forms, images, or other components.</p>
    </div>`;
  };
</script>

<div class="p-4">
  <h1 class="text-lg font-semibold mb-4">TabPanel Component</h1>

  <div class="mb-6 p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">Interactive TabPanel</h2>
    <div class="flex flex-col gap-4">
      <Tabs selectedId={selectedTabId} onTabChange={handleTabChange}>
        {#snippet content()}
          <TabList>
            {#snippet content()}
              <Tab id="tab1">Tab 1</Tab>
              <Tab id="tab2">Tab 2</Tab>
              <Tab id="tab3">Tab 3</Tab>
            {/snippet}
          </TabList>
          <TabPanels>
            {#snippet content()}
              <TabPanel id="tab1">{@html tabContent1()}</TabPanel>
              <TabPanel id="tab2">{@html tabContent2()}</TabPanel>
              <TabPanel id="tab3">{@html tabContent3()}</TabPanel>
            {/snippet}
          </TabPanels>
        {/snippet}
      </Tabs>
    </div>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
    <div class="p-4 border rounded">
      <h2 class="text-md font-semibold mb-2">TabPanel with Form Content</h2>
      <Tabs onTabChange={(id: string) => console.log('Form tabs changed:', id)}>
        {#snippet content()}
          <TabList>
            {#snippet content()}
              <Tab id="form-tab1">User Info</Tab>
              <Tab id="form-tab2">Preferences</Tab>
            {/snippet}
          </TabList>
          <TabPanels>
            {#snippet content()}
              <TabPanel id="form-tab1">
                <div>
                  <h3 class="text-lg font-semibold mb-2">User Information</h3>
                  <form class="space-y-3">
                    <div>
                      <label for="user-name" class="block text-sm font-medium mb-1">Name</label>
                      <input
                        id="user-name"
                        name="user-name"
                        type="text"
                        class="w-full px-3 py-2 border rounded-md"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div>
                      <label for="user-email" class="block text-sm font-medium mb-1">Email</label>
                      <input
                        id="user-email"
                        name="user-email"
                        type="email"
                        class="w-full px-3 py-2 border rounded-md"
                        placeholder="Enter your email"
                      />
                    </div>
                  </form>
                </div>
              </TabPanel>
              <TabPanel id="form-tab2">
                <div>
                  <h3 class="text-lg font-semibold mb-2">Preferences</h3>
                  <form class="space-y-3">
                    <div class="flex items-center">
                      <input 
                        type="checkbox" 
                        id="notifications" 
                        class="mr-2" 
                      />
                      <label for="notifications">Receive notifications</label>
                    </div>
                    <div class="flex items-center">
                      <input 
                        type="checkbox" 
                        id="newsletter" 
                        class="mr-2" 
                      />
                      <label for="newsletter">Subscribe to newsletter</label>
                    </div>
                  </form>
                </div>
              </TabPanel>
            {/snippet}
          </TabPanels>
        {/snippet}
      </Tabs>
    </div>

    <div class="p-4 border rounded">
      <h2 class="text-md font-semibold mb-2">TabPanel with Rich Content</h2>
      <Tabs onTabChange={(id: string) => console.log('Rich content tabs changed:', id)}>
        {#snippet content()}
          <TabList>
            {#snippet content()}
              <Tab id="rich-tab1">Description</Tab>
              <Tab id="rich-tab2">Specifications</Tab>
              <Tab id="rich-tab3">Reviews</Tab>
            {/snippet}
          </TabList>
          <TabPanels>
            {#snippet content()}
              <TabPanel id="rich-tab1">
                <div>
                  <h3 class="text-lg font-semibold mb-2">Product Description</h3>
                  <p>This product is designed to provide excellent functionality with a focus on user experience. It features a modern design and intuitive interface.</p>
                  <p>Designed for professionals who need reliable and efficient tools for their daily work.</p>
                </div>
              </TabPanel>
              <TabPanel id="rich-tab2">
                <div>
                  <h3 class="text-lg font-semibold mb-2">Technical Specifications</h3>
                  <ul class="list-disc pl-5 space-y-1">
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
                  <h3 class="text-lg font-semibold mb-2">Customer Reviews</h3>
                  <div class="space-y-3">
                    <div class="p-3 bg-gray-50 rounded">
                      <p class="font-medium">John D.</p>
                      <p>Great product! Highly recommend.</p>
                    </div>
                    <div class="p-3 bg-gray-50 rounded">
                      <p class="font-medium">Sarah M.</p>
                      <p>Excellent quality and fast shipping.</p>
                    </div>
                  </div>
                </div>
              </TabPanel>
            {/snippet}
          </TabPanels>
        {/snippet}
      </Tabs>
    </div>
  </div>

  <div class="p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">Default TabPanel</h2>
    <Tabs>
      {#snippet content()}
        <TabList>
          {#snippet content()}
            <Tab id="default-tab1">Info</Tab>
            <Tab id="default-tab2">Details</Tab>
          {/snippet}
        </TabList>
        <TabPanels>
          {#snippet content()}
            <TabPanel id="default-tab1">
              <div>
                <h3 class="text-lg font-semibold mb-2">Information Panel</h3>
                <p>This is the content area for the first tab panel.</p>
                <p>TabPanel automatically handles visibility based on which tab is selected.</p>
              </div>
            </TabPanel>
            <TabPanel id="default-tab2">
              <div>
                <h3 class="text-lg font-semibold mb-2">Details Panel</h3>
                <p>This is the content area for the second tab panel.</p>
                <p>Only one panel is visible at a time based on the active tab.</p>
              </div>
            </TabPanel>
          {/snippet}
        </TabPanels>
      {/snippet}
    </Tabs>
  </div>
</div>