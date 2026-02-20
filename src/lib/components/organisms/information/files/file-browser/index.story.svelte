<script lang="ts">
  import { Story } from '$stylist/playground';
  import type { ControlConfig } from '$stylist/playground';

  import FileBrowser from './index.svelte';

  let {
    id = '',
    title = '',
    description = '',
    controls = [
      { name: 'showPreview', type: 'boolean', defaultValue: true },
      { name: 'showSize', type: 'boolean', defaultValue: true },
      { name: 'multiSelect', type: 'boolean', defaultValue: false }
    ]
  } = $props<{
    id?: string;
    title?: string;
    description?: string;
    controls?: ControlConfig[]
  }>();

  type FolderItem = {
    id: string;
    name: string;
    children?: FolderItem[];
    expanded?: boolean;
    selected?: boolean;
    type?: 'folder' | 'file';
    icon?: any;
    data?: any;
  };

  const items: FolderItem[] = [
    {
      id: 'folder1',
      name: 'Documents',
      type: 'folder',
      children: [
        {
          id: 'folder1-1',
          name: 'Work',
          type: 'folder',
          children: [
            { id: 'file1', name: 'report.pdf', type: 'file' },
            { id: 'file2', name: 'presentation.pptx', type: 'file' },
            { id: 'folder1-1-1', name: 'Archives', type: 'folder', children: [] }
          ]
        },
        {
          id: 'folder1-2',
          name: 'Personal',
          type: 'folder',
          children: [
            { id: 'file3', name: 'budget.xlsx', type: 'file' },
            { id: 'file4', name: 'notes.txt', type: 'file' }
          ]
        }
      ]
    }
  ];

  function handleSelect(item: FolderItem) {
    console.log('Selected:', item.name);
  }

  function handleExpand(item: FolderItem) {
    console.log('Expanded:', item.name);
  }
</script>

<Story
  {id}
  {title}
  {description}
  component={FileBrowser}
  category="Organisms"
  controls={controls}
>
  {#snippet children(props)}
    <section class="sb-organisms-file-browser grid w-full gap-8 lg:grid-cols-[1fr_1fr]">
      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-primary] p-6 shadow-sm">
        <p class="text-sm font-semibold uppercase tracking-wide text-[--color-text-secondary]">
          Primary File Browser Example
        </p>
        <p class="mt-1 text-[--color-text-primary]">Interactive file browser with customizable options.</p>

        <div class="mt-6">
          <FileBrowser
            items={items}
            showPreview={props.showPreview}
            showSize={props.showSize}
            multiSelect={props.multiSelect}
            onSelect={handleSelect}
            onExpand={handleExpand}
          />
        </div>
      </div>

      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-secondary] p-6 shadow-sm">
        <h3 class="text-base font-semibold text-[--color-text-primary]">File Browser Variations</h3>
        <p class="text-sm text-[--color-text-secondary]">
          Different file browser configurations with various options.
        </p>

        <div class="mt-5 space-y-4">
          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">Without Preview</p>
            <div>
              <FileBrowser
                items={items}
                showPreview={false}
                onSelect={handleSelect}
              />
            </div>
          </article>

          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">Multi Select</p>
            <div>
              <FileBrowser
                items={items}
                multiSelect={true}
                onSelect={handleSelect}
              />
            </div>
          </article>
        </div>
      </div>
    </section>
  {/snippet}
</Story>
    },
    {
      id: 'folder2',
      name: 'Images',
      type: 'folder',
      children: [
        { id: 'file5', name: 'photo1.jpg', type: 'file' },
        { id: 'file6', name: 'photo2.png', type: 'file' }
      ]
    },
    {
      id: 'file7',
      name: 'important.txt',
      type: 'file'
    }
  ];

  let showItemCount: boolean = true;
  let enableSelection: boolean = true;
  let defaultExpanded: boolean = false;
  let disabled: boolean = false;
</script>

<div class="p-4">
  <h1 class="text-lg font-semibold mb-4">FileBrowser Component</h1>

  <div class="mb-6 p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">Interactive FileBrowser</h2>
    <div class="max-w-md mx-auto border rounded p-4">
      <FileBrowser 
        {items}
        {showItemCount}
        {enableSelection}
        {defaultExpanded}
        {disabled}
        onItemSelect={(item) => {
          console.log('Item selected:', item.name);
        }}
        onItemToggle={(item, expanded) => {
          console.log('Item toggled:', { name: item.name, expanded });
        }}
        onItemAction={(item, action) => {
          console.log('Item action:', { name: item.name, action });
        }}
      />
    </div>

    <div class="mt-4 flex flex-wrap gap-2">
      <div class="flex items-end">
        <label for="show-item-count" class="flex items-center gap-1">
          <input id="show-item-count" type="checkbox" bind:checked={showItemCount} />
          Show Item Count
        </label>
      </div>

      <div class="flex items-end">
        <label for="enable-selection" class="flex items-center gap-1">
          <input id="enable-selection" type="checkbox" bind:checked={enableSelection} />
          Enable Selection
        </label>
      </div>

      <div class="flex items-end">
        <label for="default-expanded" class="flex items-center gap-1">
          <input id="default-expanded" type="checkbox" bind:checked={defaultExpanded} />
          Default Expanded
        </label>
      </div>

      <div class="flex items-end">
        <label for="filebrowser-disabled" class="flex items-center gap-1">
          <input id="filebrowser-disabled" type="checkbox" bind:checked={disabled} />
          Disabled
        </label>
      </div>
    </div>
  </div>

  <div class="p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">FileBrowser Variations</h2>
    <div class="space-y-4">
      <div>
        <h3 class="text-sm font-medium mb-2">With All Folders Expanded</h3>
        <div class="max-w-md mx-auto border rounded p-4">
          <FileBrowser 
            {items}
            defaultExpanded={true}
          />
        </div>
      </div>
      <div>
        <h3 class="text-sm font-medium mb-2">Without Item Counts</h3>
        <div class="max-w-md mx-auto border rounded p-4">
          <FileBrowser 
            {items}
            showItemCount={false}
          />
        </div>
      </div>
    </div>
  </div>
</div>
