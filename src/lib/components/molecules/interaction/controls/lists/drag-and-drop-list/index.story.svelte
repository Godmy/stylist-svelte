<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';

  import DragAndDropList from './index.svelte';

  type Props = {
    variant: 'card' | 'minimal';
    disabled: boolean;
  };

  const controls: ControlConfig[] = [
    { name: 'variant', type: 'select', options: ['card', 'minimal'], defaultValue: 'card' },
    { name: 'disabled', type: 'boolean', defaultValue: false }
  ];

  type DragItem = {
    id: string;
    title: string;
    content?: string;
  };

  const initialItems: DragItem[] = [
    { id: '1', title: 'Define north star', content: 'Set success metrics for the next launch.' },
    { id: '2', title: 'Sync with design', content: 'Review motion specs for onboarding.' },
    { id: '3', title: 'QA checkout', content: 'Verify discount flows on mobile.' },
    { id: '4', title: 'Plan rollout', content: 'Confirm phased release with GTM.' }
  ];

  let items = $state<DragItem[]>([...initialItems]);

  function handleItemsChange(updated: DragItem[]) {
    items = updated;
  }
</script>

<Story
  id="molecules-drag-and-drop-list"
  title="DragAndDropList"
  component={DragAndDropList}
  category="Molecules"
  description="Reorderable list component for backlog grooming, playlists, or priority queues."
  controls={controls}
>
  {#snippet children(props: any)}
    <section class="grid w-full gap-8 lg:grid-cols-[1.05fr_0.95fr]">
      <div class="rounded-[2.5rem] border border-[--color-border-primary] bg-[--color-background-primary] p-6 shadow-sm">
        <header class="flex items-center justify-between">
          <div>
            <p class="text-sm font-semibold uppercase tracking-wide text-[--color-text-secondary]">Sprint priorities</p>
            <p class="text-lg text-[--color-text-primary]">
              Drag cards to reprioritize tasks. Variant toggles minimal vs. card styling.
            </p>
          </div>
          <span class="rounded-full bg-[--color-background-secondary] px-4 py-1 text-xs font-semibold text-[--color-text-primary]">
            {props.variant} variant
          </span>
        </header>

        <DragAndDropList
          items={items}
          variant={props.variant}
          disabled={props.disabled}
          onItemsChange={handleItemsChange}
        />
      </div>

      <div class="rounded-[2.5rem] border border-[--color-border-primary] bg-[--color-background-secondary] p-6 shadow-sm">
        <h3 class="text-base font-semibold text-[--color-text-primary]">Current order</h3>
        <ol class="mt-4 space-y-3 text-sm text-[--color-text-primary]">
          {#each items as item, index}
            <li class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] px-4 py-3">
              <span class="font-semibold">#{index + 1} · {item.title}</span>
              <p class="text-xs text-[--color-text-secondary]">{item.content}</p>
            </li>
          {/each}
        </ol>
      </div>
    </section>
  {/snippet}
</Story>



