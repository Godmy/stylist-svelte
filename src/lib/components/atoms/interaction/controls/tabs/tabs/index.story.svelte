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
  <h1 class="text-lg font-semibold mb-4">Tabs Component</h1>

  <div class="mb-6 p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">Interactive Tabs</h2>
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
              <h3 class="text-lg font-semibold mb-2">Main Tabs Content</h3>
              <p>This is the content for the first tab within the Tabs component.</p>
              <p>The Tabs component manages the selected state and tab changes.</p>
            </div>
          </TabPanel>
          <TabPanel id="tab2">
            <div>
              <h3 class="text-lg font-semibold mb-2">Secondary Content</h3>
              <p>This is the content for the second tab.</p>
              <div class="mt-2 p-3 bg-purple-100 rounded">
                <p>The Tabs component provides context to TabList, Tab, TabPanels, and TabPanel components.</p>
              </div>
            </div>
          </TabPanel>
          <TabPanel id="tab3">
            <div>
              <h3 class="text-lg font-semibold mb-2">Additional Information</h3>
              <p>This is the content for the third tab.</p>
              <p>Tabs coordinate with all the other tab components to create a cohesive interface.</p>
            </div>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
    <div class="p-4 border rounded">
      <h2 class="text-md font-semibold mb-2">Tabs with Controlled State</h2>
      <Tabs selectedId="controlled-tab2" onTabChange={(id: string) => console.log('Controlled tabs changed to:', id)}>
        <TabList>
          <Tab id="controlled-tab1">Home</Tab>
          <Tab id="controlled-tab2">Dashboard</Tab>
          <Tab id="controlled-tab3">Settings</Tab>
        </TabList>
        <TabPanels>
          <TabPanel id="controlled-tab1">
            <div>
              <h3 class="text-lg font-semibold mb-2">Home Panel</h3>
              <p>This is the home panel content.</p>
              <p>The Tabs component is initialized with a specific tab selected.</p>
            </div>
          </TabPanel>
          <TabPanel id="controlled-tab2">
            <div>
              <h3 class="text-lg font-semibold mb-2">Dashboard Panel</h3>
              <p>This is the dashboard panel content.</p>
              <p>This panel is shown by default due to the selectedId prop.</p>
            </div>
          </TabPanel>
          <TabPanel id="controlled-tab3">
            <div>
              <h3 class="text-lg font-semibold mb-2">Settings Panel</h3>
              <p>This is the settings panel content.</p>
              <p>Users can switch to this tab using the tab controls.</p>
            </div>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>

    <div class="p-4 border rounded">
      <h2 class="text-md font-semibold mb-2">Tabs with Custom Styling</h2>
      <Tabs
        selectedId="custom-tab1"
        onTabChange={(id: string) => console.log('Custom tabs changed:', id)}
        class="border-2 border-blue-200 rounded-lg"
      >
        <TabList class="bg-blue-100 rounded-t-lg">
          <Tab id="custom-tab1">Profile</Tab>
          <Tab id="custom-tab2">Projects</Tab>
          <Tab id="custom-tab3">Activity</Tab>
        </TabList>
        <TabPanels class="bg-blue-50 p-4 rounded-b-lg">
          <TabPanel id="custom-tab1">
            <div>
              <h3 class="text-lg font-semibold mb-2">User Profile</h3>
              <p>User profile information would be displayed here.</p>
              <p>The Tabs component can be styled with custom CSS classes.</p>
            </div>
          </TabPanel>
          <TabPanel id="custom-tab2">
            <div>
              <h3 class="text-lg font-semibold mb-2">Projects</h3>
              <p>Information about user projects would be shown here.</p>
              <p>Styling can be applied to the Tabs container and its child components.</p>
            </div>
          </TabPanel>
          <TabPanel id="custom-tab3">
            <div>
              <h3 class="text-lg font-semibold mb-2">Activity</h3>
              <p>User activity feed would appear in this panel.</p>
              <p>The Tabs component passes styling classes down to its children.</p>
            </div>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  </div>

  <div class="p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">Default Tabs</h2>
    <Tabs>
      <TabList>
        <Tab id="default-tab1">Info</Tab>
        <Tab id="default-tab2">Details</Tab>
      </TabList>
      <TabPanels>
        <TabPanel id="default-tab1">
          <div>
            <h3 class="text-lg font-semibold mb-2">Information Panel</h3>
            <p>This is the default content panel.</p>
            <p>Without a selectedId, the first tab is automatically selected.</p>
          </div>
        </TabPanel>
        <TabPanel id="default-tab2">
          <div>
            <h3 class="text-lg font-semibold mb-2">Details Panel</h3>
            <p>This contains additional details.</p>
            <p>The Tabs component manages state internally when no callbacks are provided.</p>
          </div>
        </TabPanel>
      </TabPanels>
    </Tabs>
  </div>
</div>



