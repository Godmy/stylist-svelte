<script lang="ts">
  import { Tabs } from '../tabs';
  import { TabList } from '../tab-list';
  import Tab from './Tab.svelte';
  import { TabPanel } from '../tab-panel';
  import { TabPanels } from '../tab-panels';

  let selectedTabId: string = 'tab1';
  
  function handleTabChange(id: string) {
    console.log('Tab changed to:', id);
    selectedTabId = id;
  }

  // Content snippets for tab panels
  let tabContent1 = () => {
    return `<div>
      <h3 class="text-lg font-semibold mb-2">Tab 1 Content</h3>
      <p>This is the content for the first tab. You can put any content here.</p>
      <ul class="list-disc pl-5 mt-2">
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </div>`;
  };

  let tabContent2 = () => {
    return `<div>
      <h3 class="text-lg font-semibold mb-2">Tab 2 Content</h3>
      <p>This is the content for the second tab. It can contain different content than other tabs.</p>
      <div class="mt-2 p-3 bg-blue-100 rounded">
        <p>This is a special content area for tab 2.</p>
      </div>
    </div>`;
  };

  let tabContent3 = () => {
    return `<div>
      <h3 class="text-lg font-semibold mb-2">Tab 3 Content</h3>
      <p>This is the content for the third tab.</p>
      <p>Each tab can have unique content and styling.</p>
    </div>`;
  };
</script>

<div class="p-4">
  <h1 class="text-lg font-semibold mb-4">Tab Components</h1>

  <div class="mb-6 p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">Interactive Tabs</h2>
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
      <h2 class="text-md font-semibold mb-2">Tabs with Two Items</h2>
      <Tabs onTabChange={(id: string) => console.log('Two tabs changed:', id)}>
        {#snippet content()}
          <TabList>
            {#snippet content()}
              <Tab id="two-tab1">First</Tab>
              <Tab id="two-tab2">Second</Tab>
            {/snippet}
          </TabList>
          <TabPanels>
            {#snippet content()}
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
            {/snippet}
          </TabPanels>
        {/snippet}
      </Tabs>
    </div>

    <div class="p-4 border rounded">
      <h2 class="text-md font-semibold mb-2">Tabs with Different Content</h2>
      <Tabs onTabChange={(id: string) => console.log('Different content tabs changed:', id)}>
        {#snippet content()}
          <TabList>
            {#snippet content()}
              <Tab id="diff-tab1">Profile</Tab>
              <Tab id="diff-tab2">Settings</Tab>
              <Tab id="diff-tab3">Messages</Tab>
            {/snippet}
          </TabList>
          <TabPanels>
            {#snippet content()}
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
            {/snippet}
          </TabPanels>
        {/snippet}
      </Tabs>
    </div>
  </div>

  <div class="p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">Default Tabs</h2>
    <Tabs>
      {#snippet content()}
        <TabList>
          {#snippet content()}
            <Tab id="default-tab1">Default Tab</Tab>
            <Tab id="default-tab2">Another Tab</Tab>
          {/snippet}
        </TabList>
        <TabPanels>
          {#snippet content()}
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
          {/snippet}
        </TabPanels>
      {/snippet}
    </Tabs>
  </div>
</div>