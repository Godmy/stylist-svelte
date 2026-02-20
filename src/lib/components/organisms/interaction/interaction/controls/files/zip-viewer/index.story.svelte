<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';

  import ZipViewer from './index.svelte';

  type ZipEntry = {
    id: string;
    name: string;
    type: 'file' | 'directory';
    size?: number;
    compressedSize?: number;
    modified?: Date;
    isText?: boolean;
    path: string;
    parentPath?: string;
  };

  const primaryEntries: ZipEntry[] = [
    { id: '1', name: 'design-system/', type: 'directory', path: 'design-system/' },
    {
      id: '2',
      name: 'components/',
      type: 'directory',
      path: 'design-system/components/',
      parentPath: 'design-system/'
    },
    {
      id: '3',
      name: 'Button.svelte',
      type: 'file',
      path: 'design-system/components/Button.svelte',
      parentPath: 'design-system/components/',
      size: 3420,
      isText: true,
      modified: new Date()
    },
    {
      id: '4',
      name: 'Select.svelte',
      type: 'file',
      path: 'design-system/components/Select.svelte',
      parentPath: 'design-system/components/',
      size: 4192,
      isText: true,
      modified: new Date()
    },
    {
      id: '5',
      name: 'tokens/',
      type: 'directory',
      path: 'design-system/tokens/',
      parentPath: 'design-system/'
    },
    {
      id: '6',
      name: 'colors.json',
      type: 'file',
      path: 'design-system/tokens/colors.json',
      parentPath: 'design-system/tokens/',
      size: 1820,
      isText: true,
      modified: new Date()
    },
    { id: '7', name: 'README.md', type: 'file', path: 'README.md', size: 1096, isText: true, modified: new Date() }
  ];

  const variantArchives = [
    {
      name: 'QA results',
      files: 48,
      description: 'Archive with regression screenshots grouped per platform.'
    },
    {
      name: 'Translation bundle',
      files: 26,
      description: 'Contains JSON locales with nested folders for every language.'
    },
    {
      name: 'Crash report',
      files: 5,
      description: 'Minidumps + diagnostics zipped for support teams.'
    }
  ];

  type Props = {
    searchable?: boolean;
    showPath?: boolean;
    enableFiltering?: boolean;
    defaultExpanded?: boolean;
  };

  const controls: ControlConfig[] = [
    { name: 'searchable', type: 'boolean', defaultValue: true },
    { name: 'showPath', type: 'boolean', defaultValue: true },
    { name: 'enableFiltering', type: 'boolean', defaultValue: true },
    { name: 'defaultExpanded', type: 'boolean', defaultValue: true }
  ];
</script>

<Story
  id="organisms-zip-viewer"
  title="Organisms / Interaction / Controls / Files / ZipViewer"
  component={ZipViewer}
  category="Organisms/Interaction/Controls/Files"
  description="Inspect the contents of backup archives, crash bundles, or exported design systems."
  controls={controls}
>
  {#snippet children(props)}
    <section class="sb-organisms-zip-viewer grid w-full gap-8 lg:grid-cols-[1.25fr_0.75fr]">
      <div class="rounded-[2.5rem] border border-[--color-border-primary] bg-[--color-background-primary] p-6 shadow-sm">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-semibold uppercase tracking-wide text-[--color-text-secondary]">Design system bundle</p>
            <p class="text-lg text-[--color-text-primary]">Explore directories, view metadata, and preview text entries.</p>
          </div>
          <div class="rounded-full bg-[--color-background-secondary] px-3 py-1 text-xs font-semibold text-[--color-text-primary]">
            {primaryEntries.length} entries
          </div>
        </div>

        <div class="mt-6 rounded-2xl border border-[--color-border-primary] bg-[--color-background-secondary] p-4">
          <ZipViewer
            entries={primaryEntries}
            searchable={props.searchable}
            showPath={props.showPath}
            enableFiltering={props.enableFiltering}
            defaultExpanded={props.defaultExpanded}
          />
        </div>
      </div>

      <div class="rounded-[2.5rem] border border-[--color-border-primary] bg-[--color-background-secondary] p-6 shadow-sm">
        <h3 class="text-base font-semibold text-[--color-text-primary]">Common archive types</h3>
        <p class="text-sm text-[--color-text-secondary]">ZipViewer is reusable for QA drops, translation packs, or audit exports.</p>

        <div class="mt-5 space-y-4">
          {#each variantArchives as archive}
            <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm font-semibold text-[--color-text-primary]">{archive.name}</p>
                  <p class="text-xs text-[--color-text-secondary]">{archive.description}</p>
                </div>
                <span class="rounded-full bg-[--color-background-secondary] px-3 py-0.5 text-xs font-semibold text-[--color-text-primary]">
                  {archive.files} files
                </span>
              </div>
            </article>
          {/each}
        </div>
      </div>
    </section>
  {/snippet}
</Story>


