<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';

  import DropZone from './index.svelte';

  type DemoDropItem = {
    id: string;
    name: string;
    type: string;
    size?: number;
  };

  type Props = {
    accept: string;
    multiple: boolean;
    disabled: boolean;
    preview: boolean;
    maxSize: number;
    maxItems: number;
    label: string;
    description: string;
  };

  const controls: ControlConfig[] = [
    { name: 'accept', type: 'text', defaultValue: 'image/*,.pdf' },
    { name: 'multiple', type: 'boolean', defaultValue: true },
    { name: 'disabled', type: 'boolean', defaultValue: false },
    { name: 'preview', type: 'boolean', defaultValue: true },
    { name: 'maxSize', type: 'number', defaultValue: 5 * 1024 * 1024, min: 1024 },
    { name: 'maxItems', type: 'number', defaultValue: 5, min: 1, max: 10 },
    { name: 'label', type: 'text', defaultValue: 'Drop files here' },
    { name: 'description', type: 'text', defaultValue: 'or click to browse' }
  ];

  let droppedItems = $state<DemoDropItem[]>([]);

  function handleDrop(items: DemoDropItem[]) {
    droppedItems = items;
  }
</script>

<Story
  id="organisms-drop-zone"
  title="Organisms / Interaction / Controls / Files / DropZone"
  component={DropZone}
  category="Organisms/Interaction/Controls/Files"
  description="A drag-and-drop surface with optional previews and validation controls."
  controls={controls}
>
  {#snippet children(props)}
    <section class="sb-organisms-drop-zone grid w-full gap-8 lg:grid-cols-[1.15fr_0.85fr]">
      <div class="rounded-[2.5rem] border border-[--color-border-primary] bg-[--color-background-primary] p-6 shadow-sm">
        <header class="space-y-2">
          <p class="text-sm font-semibold uppercase tracking-wide text-[--color-text-secondary]">Uploader</p>
          <p class="text-lg text-[--color-text-primary]">
            Configure accepted types, maximum size, and preview behavior.
          </p>
        </header>

        <div class="mt-6">
          <DropZone
            accept={props.accept}
            multiple={props.multiple}
            disabled={props.disabled}
            preview={props.preview}
            maxSize={props.maxSize}
            maxItems={props.maxItems}
            label={props.label}
            description={props.description}
            onDrop={handleDrop}
          />
        </div>
      </div>

      <div class="rounded-[2.5rem] border border-[--color-border-primary] bg-[--color-background-secondary] p-6 shadow-sm">
        <h3 class="text-base font-semibold text-[--color-text-primary]">Recent drops</h3>
        <p class="text-sm text-[--color-text-secondary]">As you drop files we mirror the payload below.</p>

        {#if droppedItems.length === 0}
          <div class="mt-6 rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4 text-sm text-[--color-text-secondary]">
            Waiting for the first file - drag something over the panel or use the browse button.
          </div>
        {:else}
          <ul class="mt-6 space-y-3">
            {#each droppedItems as item}
              <li class="rounded-2xl border border-[--color-border-primary] bg-[--color-background-primary] px-4 py-3 text-sm">
                <div class="flex items-center justify-between">
                  <span class="font-semibold text-[--color-text-primary]">{item.name}</span>
                  <span class="text-xs text-[--color-text-secondary]">{item.type || 'unknown'}</span>
                </div>
                {#if item.size}
                  <p class="text-xs text-[--color-text-secondary]">{(item.size / 1024).toFixed(1)} KB</p>
                {/if}
              </li>
            {/each}
          </ul>
        {/if}
      </div>
    </section>
  {/snippet}
</Story>


