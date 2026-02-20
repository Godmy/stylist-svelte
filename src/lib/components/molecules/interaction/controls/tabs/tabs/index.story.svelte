<script lang="ts">
  import Story from '$stylist/design-system/playground/Story.svelte';
  import Tabs from './index.svelte';
  import TabList from '../tab-list/index.svelte';
  import { Tab } from '$stylist/components/atoms/interaction/controls/tabs/tab';
  import TabPanel from '../tab-panel/index.svelte';
  import TabPanels from '../tab-panels/index.svelte';
  import type { ControlType } from '$stylist/design-system/tokens/controls';

  const controls = [
    {
      name: 'selectedId',
      type: 'text' as ControlType,
      defaultValue: 'tab1',
      description: 'ID of the selected tab'
    }
  ];

  function handleTabChange(id: string) {
    console.log('Tab changed to:', id);
  }
</script>

<Story
  {controls}
  title="Tabs Component"
  description="A component to organize content into tabbed sections"
  let:controlValues
>
  <Tabs selectedId={controlValues.selectedId} onValueChange={handleTabChange} class="w-full">
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
</Story>