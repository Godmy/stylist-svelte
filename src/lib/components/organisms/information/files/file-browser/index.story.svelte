<script lang="ts">
  import { Story } from '$stylist/playground';
  import type { ControlConfig } from '$stylist/playground';

  import FileBrowser from './index.svelte';

  let {
    id = '',
    title = '',
    description = '',
    controls = [
      { name: 'showSize', type: 'boolean', defaultValue: true }
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
  {#snippet children(values: any)}
    <section class="sb-organisms-file-browser grid w-full gap-8 lg:grid-cols-[1fr_1fr]">
      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-primary] p-6 shadow-sm">
        <p class="text-sm font-semibold uppercase tracking-wide text-[--color-text-secondary]">
          Primary File Browser Example
        </p>
        <p class="mt-1 text-[--color-text-primary]">Interactive file browser with customizable options.</p>

        <div class="mt-6">
          <FileBrowser
            items={items}
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
              />
            </div>
          </article>

          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">Multi Select</p>
            <div>
              <FileBrowser
                items={items}
              />
            </div>
          </article>
        </div>
      </div>
    </section>
  {/snippet}
</Story>
