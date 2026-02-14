<script lang="ts">
  import FileListItem from './index.svelte';

  let item = {
    id: 'file1',
    name: 'document.pdf',
    type: 'document' as const,
    size: 1028000,
    modified: new Date(Date.now() - 86400000),
    created: new Date(Date.now() - 172800000),
    path: '/documents/file.pdf',
    owner: 'john.doe',
    selected: false
  };

  let showThumbnail = false;
  let showSize = true;
  let showModified = true;
  let showOwner = true;
  let enableSelection = true;
  let disabled = false;
  let variant: 'default' | 'compact' = 'default';
</script>

<div class="p-4">
  <h1 class="text-lg font-semibold mb-4">FileListItem Component</h1>

  <div class="mb-6 p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">Interactive FileListItem</h2>
    <div class="border rounded">
      <FileListItem 
        {item}
        {showThumbnail}
        {showSize}
        {showModified}
        {showOwner}
        {enableSelection}
        {disabled}
        {variant}
        onItemSelect={(item) => {
          console.log('Item selected:', item.name, 'Selected:', item.selected);
        }}
        onItemDoubleClick={(item) => {
          console.log('Item double-clicked:', item.name);
        }}
        onItemAction={(item, action) => {
          console.log('Item action:', { name: item.name, action });
        }}
      />
    </div>

    <div class="mt-4 flex flex-wrap gap-2">
      <div class="flex items-end">
        <label for="show-thumbnail" class="flex items-center gap-1">
          <input id="show-thumbnail" type="checkbox" bind:checked={showThumbnail} />
          Show Thumbnail
        </label>
      </div>

      <div class="flex items-end">
        <label for="show-size" class="flex items-center gap-1">
          <input id="show-size" type="checkbox" bind:checked={showSize} />
          Show Size
        </label>
      </div>

      <div class="flex items-end">
        <label for="show-modified" class="flex items-center gap-1">
          <input id="show-modified" type="checkbox" bind:checked={showModified} />
          Show Modified
        </label>
      </div>

      <div class="flex items-end">
        <label for="show-owner" class="flex items-center gap-1">
          <input id="show-owner" type="checkbox" bind:checked={showOwner} />
          Show Owner
        </label>
      </div>

      <div class="flex items-end">
        <label for="enable-selection" class="flex items-center gap-1">
          <input id="enable-selection" type="checkbox" bind:checked={enableSelection} />
          Enable Selection
        </label>
      </div>

      <div class="flex items-end">
        <label for="filelist-disabled" class="flex items-center gap-1">
          <input id="filelist-disabled" type="checkbox" bind:checked={disabled} />
          Disabled
        </label>
      </div>

      <div>
        <label for="variant" class="block text-sm mb-1">Variant:</label>
        <select
          id="variant"
          bind:value={variant}
          class="border rounded p-1"
        >
          <option value="default">Default</option>
          <option value="compact">Compact</option>
        </select>
      </div>
    </div>
  </div>

  <div class="p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">FileListItem Variations</h2>
    <div class="space-y-4">
      <div>
        <h3 class="text-sm font-medium mb-2">Folder Item</h3>
        <div class="border rounded">
          <FileListItem 
            item={{
              id: 'folder1',
              name: 'Project Files',
              type: 'folder',
              size: 2048576,
              modified: new Date(),
              created: new Date(Date.now() - 86400000),
              path: '/projects',
              owner: 'jane.doe',
              selected: false
            }}
          />
        </div>
      </div>
      <div>
        <h3 class="text-sm font-medium mb-2">Image Item</h3>
        <div class="border rounded">
          <FileListItem 
            item={{
              id: 'img1',
              name: 'screenshot.png',
              type: 'image',
              size: 3072000,
              modified: new Date(Date.now() - 432000000),
              created: new Date(Date.now() - 518400000),
              path: '/images/screenshot.png',
              owner: 'admin',
              selected: true
            }}
          />
        </div>
      </div>
      <div>
        <h3 class="text-sm font-medium mb-2">Compact Variant</h3>
        <div class="border rounded">
          <FileListItem 
            item={{
              id: 'file2',
              name: 'data.xlsx',
              type: 'document',
              size: 1572864,
              modified: new Date(Date.now() - 1296000000),
              created: new Date(Date.now() - 1382400000),
              path: '/reports/data.xlsx',
              owner: 'manager',
              selected: false
            }}
            variant="compact"
          />
        </div>
      </div>
    </div>
  </div>
</div>