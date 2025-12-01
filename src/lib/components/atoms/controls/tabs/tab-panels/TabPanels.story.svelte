<script lang="ts">
  import { Tabs } from '../tabs';
  import { TabList } from '../tab-list';
  import { Tab } from '../tab';
  import { TabPanel } from '../tab-panel';
  import TabPanels from './TabPanels.svelte';

  let selectedTabId: string = 'tab1';

  function handleTabChange(id: string) {
    console.log('Tab changed to:', id);
    selectedTabId = id;
  }

  let tabContent1 = () => {
    return `<div>
      <h3 class="text-lg font-semibold mb-2">Tab Panels 1 Content</h3>
      <p>This is the content for the first tab panel within the TabPanels container.</p>
      <p>TabPanels acts as a container for multiple TabPanel components.</p>
    </div>`;
  };

  let tabContent2 = () => {
    return `<div>
      <h3 class="text-lg font-semibold mb-2">Tab Panels 2 Content</h3>
      <p>This is the content for the second tab panel.</p>
      <div class="mt-2 p-3 bg-yellow-100 rounded">
        <p>TabPanels provides a consistent container for all tab content panels.</p>
      </div>
    </div>`;
  };

  let tabContent3 = () => {
    return `<div>
      <h3 class="text-lg font-semibold mb-2">Tab Panels 3 Content</h3>
      <p>This is the content for the third tab panel.</p>
      <p>Only the active tab's panel is visible within the TabPanels container.</p>
    </div>`;
  };
</script>

<div class="p-4">
  <h1 class="text-lg font-semibold mb-4">TabPanels Component</h1>

  <div class="mb-6 p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">Interactive TabPanels</h2>
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
          <TabPanels class="bg-white p-4 rounded-b border-l border-r border-b">
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
      <h2 class="text-md font-semibold mb-2">TabPanels with Two Items</h2>
      <Tabs onTabChange={(id: string) => console.log('Two tabs changed:', id)}>
        {#snippet content()}
          <TabList>
            {#snippet content()}
              <Tab id="two-tab1">Overview</Tab>
              <Tab id="two-tab2">Details</Tab>
            {/snippet}
          </TabList>
          <TabPanels class="bg-gray-50 p-6">
            {#snippet content()}
              <TabPanel id="two-tab1">
                <div>
                  <h3 class="text-lg font-semibold mb-2">Overview Content</h3>
                  <p>This provides a high-level overview of the content.</p>
                  <p>TabPanels container ensures consistent styling for all panels.</p>
                </div>
              </TabPanel>
              <TabPanel id="two-tab2">
                <div>
                  <h3 class="text-lg font-semibold mb-2">Detailed Information</h3>
                  <p>This contains more detailed information about the subject.</p>
                  <p>The TabPanels component manages which panel is currently visible.</p>
                </div>
              </TabPanel>
            {/snippet}
          </TabPanels>
        {/snippet}
      </Tabs>
    </div>

    <div class="p-4 border rounded">
      <h2 class="text-md font-semibold mb-2">TabPanels with Rich Content</h2>
      <Tabs onTabChange={(id: string) => console.log('Rich content tabs changed:', id)}>
        {#snippet content()}
          <TabList>
            {#snippet content()}
              <Tab id="rich-tab1">About</Tab>
              <Tab id="rich-tab2">Features</Tab>
              <Tab id="rich-tab3">Usage</Tab>
            {/snippet}
          </TabList>
          <TabPanels class="bg-blue-50 p-4">
            {#snippet content()}
              <TabPanel id="rich-tab1">
                <div>
                  <h3 class="text-lg font-semibold mb-2">About This Product</h3>
                  <p>This product is designed with user experience in mind.</p>
                  <p>It features a modern architecture that provides excellent performance and reliability.</p>
                </div>
              </TabPanel>
              <TabPanel id="rich-tab2">
                <div>
                  <h3 class="text-lg font-semibold mb-2">Key Features</h3>
                  <ul class="list-disc pl-5 space-y-1">
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
                  <h3 class="text-lg font-semibold mb-2">How to Use</h3>
                  <ol class="list-decimal pl-5 space-y-1">
                    <li>Install the package using your preferred package manager</li>
                    <li>Import the components you need</li>
                    <li>Follow the documentation for implementation examples</li>
                    <li>Customize as needed for your project</li>
                  </ol>
                </div>
              </TabPanel>
            {/snippet}
          </TabPanels>
        {/snippet}
      </Tabs>
    </div>
  </div>

  <div class="p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">Default TabPanels</h2>
    <Tabs>
      {#snippet content()}
        <TabList>
          {#snippet content()}
            <Tab id="default-tab1">Content</Tab>
            <Tab id="default-tab2">Information</Tab>
          {/snippet}
        </TabList>
        <TabPanels>
          {#snippet content()}
            <TabPanel id="default-tab1">
              <div>
                <h3 class="text-lg font-semibold mb-2">Content Panel</h3>
                <p>This is where the main content for the first tab goes.</p>
                <p>TabPanels provides a container that only shows the active panel.</p>
              </div>
            </TabPanel>
            <TabPanel id="default-tab2">
              <div>
                <h3 class="text-lg font-semibold mb-2">Information Panel</h3>
                <p>This contains additional information in the second tab panel.</p>
                <p>The TabPanels component handles the visibility logic automatically.</p>
              </div>
            </TabPanel>
          {/snippet}
        </TabPanels>
      {/snippet}
    </Tabs>
  </div>
</div>