<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';

  import DraggableCard from './index.svelte';

  const variants = ['default', 'minimal', 'compact'] as const;

  type Props = {
    variant: (typeof variants)[number];
    showHandle: boolean;
    showMenu: boolean;
    disabled: boolean;
  };

  const controls: ControlConfig[] = [
    { name: 'variant', type: 'select', options: [...variants], defaultValue: 'default' },
    { name: 'showHandle', type: 'boolean', defaultValue: true },
    { name: 'showMenu', type: 'boolean', defaultValue: true },
    { name: 'disabled', type: 'boolean', defaultValue: false }
  ];

  const card = {
    id: 'CARD-204',
    title: 'Finalize billing flows',
    description: 'Audit coupon entry + tax exemptions before the launch.',
    tags: ['beta', 'billing', 'priority'],
    dueDate: new Date(Date.now() + 3 * 86400000),
    assignedTo: 'Maya Patel'
  };

  let status = $state('Waiting for interactionвЂ¦');

  const updateStatus = (message: string) => {
    status = `${new Date().toLocaleTimeString()}: ${message}`;
  };
</script>

<Story
  id="organisms-draggable-card"
  title="Organisms / Interaction / Card / DraggableCard"
  component={DraggableCard}
  category="Organisms/Interaction/Card"
  description="Self-contained card with drag handle, metadata, and action menu."
  controls={controls}
>
  {#snippet children(args)}
    <section class="sb-organisms-draggable-card grid w-full gap-8 lg:grid-cols-[1fr_1fr]">
      <div class="rounded-[2.5rem] border border-[--color-border-primary] bg-[--color-background-primary] p-6 shadow-sm">
        <header class="mb-4 flex items-center justify-between">
          <div>
            <p class="text-sm font-semibold uppercase tracking-wide text-[--color-text-secondary]">Kanban lane</p>
            <p class="text-lg text-[--color-text-primary]">Drag the card to trigger demos of drag callbacks.</p>
          </div>
          <span class="rounded-full bg-[--color-background-secondary] px-4 py-1 text-xs font-semibold text-[--color-text-primary]">
            {args.variant as (typeof variants)[number]} variant
          </span>
        </header>

        <div class="h-[320px] rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-secondary] p-6">
          <DraggableCard
            data={card}
            variant={args.variant as (typeof variants)[number]}
            disabled={args.disabled as boolean}
            showHandle={args.showHandle as boolean}
            showMenu={args.showMenu as boolean}
            onDragStart={() => updateStatus('Drag started')}
            onDragEnd={() => updateStatus('Drag finished')}
            onCardClick={() => updateStatus('Card clicked')}
          />
        </div>
      </div>

      <div class="rounded-[2.5rem] border border-[--color-border-primary] bg-[--color-background-secondary] p-6 shadow-sm">
        <h3 class="text-base font-semibold text-[--color-text-primary]">Event feed</h3>
        <p class="text-sm text-[--color-text-secondary]">Use callbacks to update logs, analytics, or reorder lists.</p>
        <div class="mt-4 rounded-2xl border border-[--color-border-primary] bg-[--color-background-primary] px-4 py-3 text-sm">
          {status}
        </div>
        <ul class="mt-4 space-y-2 text-xs text-[--color-text-secondary]">
          <li>вЂў `onDragStart(data)` fired when dragging begins.</li>
          <li>вЂў `onDragEnd(data)` fired after drop.</li>
          <li>вЂў `onCardClick(data)` and `onContextMenu(data, event)` for extra affordances.</li>
        </ul>
      </div>
    </section>
  {/snippet}
</Story>


