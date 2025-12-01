<script lang="ts">
  import FileBrowser from './FileBrowser.svelte';

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

  let items: FolderItem[] = [
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