<script lang="ts">
  import Tabs from '../tabs/index.svelte';
  import TabList from './index.svelte';
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
  <h1 class="text-lg font-semibold mb-4">TabList Component</h1>

  <div class="mb-6 p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">Interactive TabList</h2>
    <div class="flex flex-col gap-4">
      <Tabs selectedId={selectedTabId} onTabChange={handleTabChange}>
        <TabList class="bg-gray-50 p-2 rounded-t">
          <Tab id="tab1">Tab 1</Tab>
          <Tab id="tab2">Tab 2</Tab>
          <Tab id="tab3">Tab 3</Tab>
        </TabList>
        <TabPanels>
          <TabPanel id="tab1">
            <div>
              <h3 class="text-lg font-semibold mb-2">Tab 1 Content</h3>
              <p>This is the content for the first tab. You can put any content here.</p>
              <ul class="list-disc pl-5 mt-2">
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
              </ul>
            </div>
          </TabPanel>
          <TabPanel id="tab2">
            <div>
              <h3 class="text-lg font-semibold mb-2">Tab 2 Content</h3>
              <p>This is the content for the second tab. It can contain different content than other tabs.</p>
              <div class="mt-2 p-3 bg-blue-100 rounded">
                <p>This is a special content area for tab 2.</p>
              </div>
            </div>
          </TabPanel>
          <TabPanel id="tab3">
            <div>
              <h3 class="text-lg font-semibold mb-2">Tab 3 Content</h3>
              <p>This is the content for the third tab.</p>
              <p>Each tab can have unique content and styling.</p>
            </div>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
    <div class="p-4 border rounded">
      <h2 class="text-md font-semibold mb-2">TabList with Two Items</h2>
      <Tabs onTabChange={(id: string) => console.log('Two tabs changed:', id)}>
        <TabList class="bg-gray-100 p-3 rounded-lg">
          <Tab id="two-tab1">First</Tab>
          <Tab id="two-tab2">Second</Tab>
        </TabList>
        <TabPanels>
          <TabPanel id="two-tab1">
            <div>
              <h3 class="text-lg font-semibold mb-2">First Tab</h3>
              <p>Content for the first tab in a two-tab interface.</p>
            </div>
          </TabPanel>
          <TabPanel id="two-tab2">
            <div>
              <h3 class="text-lg font-semibold mb-2">Second Tab</h3>
              <p>Content for the second tab in a two-tab interface.</p>
            </div>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>

    <div class="p-4 border rounded">
      <h2 class="text-md font-semibold mb-2">TabList with Different Content</h2>
      <Tabs onTabChange={(id: string) => console.log('Different content tabs changed:', id)}>
        <TabList class="bg-blue-50 p-2">
          <Tab id="diff-tab1">Profile</Tab>
          <Tab id="diff-tab2">Settings</Tab>
          <Tab id="diff-tab3">Messages</Tab>
        </TabList>
        <TabPanels>
          <TabPanel id="diff-tab1">
            <div>
              <h3 class="text-lg font-semibold mb-2">User Profile</h3>
              <p>Profile information and settings would go here.</p>
            </div>
          </TabPanel>
          <TabPanel id="diff-tab2">
            <div>
              <h3 class="text-lg font-semibold mb-2">Settings</h3>
              <p>Application settings would go here.</p>
            </div>
          </TabPanel>
          <TabPanel id="diff-tab3">
            <div>
              <h3 class="text-lg font-semibold mb-2">Messages</h3>
              <p>Message content would go here.</p>
            </div>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  </div>

  <div class="p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">Default TabList</h2>
    <Tabs>
      <TabList>
        <Tab id="default-tab1">Default Tab</Tab>
        <Tab id="default-tab2">Another Tab</Tab>
      </TabList>
      <TabPanels>
        <TabPanel id="default-tab1">
          <div>
            <h3 class="text-lg font-semibold mb-2">Default Tab Content</h3>
            <p>This is the default content for the first tab.</p>
          </div>
        </TabPanel>
        <TabPanel id="default-tab2">
          <div>
            <h3 class="text-lg font-semibold mb-2">Another Tab Content</h3>
            <p>This is the content for the second tab.</p>
          </div>
        </TabPanel>
      </TabPanels>
    </Tabs>
  </div>
</div>



