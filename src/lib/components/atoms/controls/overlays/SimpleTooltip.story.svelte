<script lang="ts">
  import SimpleTooltip from './SimpleTooltip.svelte';
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';

  type TooltipPosition = 'top' | 'right' | 'bottom' | 'left';

  let content = $state('Tooltip content');
  let position = $state<TooltipPosition>('top');
  let persist = $state(false);
  let isHovered = $state(false);

  const controls: ControlConfig[] = [
    { name: 'content', type: 'text', defaultValue: 'Tooltip content' },
    { name: 'position', type: 'select', options: ['top', 'right', 'bottom', 'left'], defaultValue: 'top' },
    { name: 'persist', type: 'boolean', defaultValue: false }
  ];

  function show() {
    isHovered = true;
  }

  function hide() {
    isHovered = false;
  }
</script>

<Story
  id="atoms-simple-tooltip"
  title="SimpleTooltip"
  component={SimpleTooltip}
  category="Atoms"
  description="Lightweight tooltip for single-line helper text."
  tags={['tooltip', 'overlay']}
  controls={controls}
>
  <div class="flex flex-col gap-6 p-8">
    <div
      class="relative inline-flex"
      onmouseenter={show}
      onmouseleave={hide}
      onfocusin={show}
      onfocusout={hide}
      role="presentation"
    >
      <button class="rounded-md bg-blue-600 px-4 py-2 text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2">
        Hover or focus me
      </button>
      <SimpleTooltip
        visible={persist || isHovered}
        content={content}
        position={position}
      />
    </div>

    <div class="space-y-3 text-sm">
      <label class="flex flex-col gap-1">
        Content
        <input
          type="text"
          bind:value={content}
          class="rounded border border-gray-300 px-3 py-1 focus:border-blue-500 focus:outline-none"
        />
      </label>

      <label class="flex flex-col gap-1">
        Position
        <select bind:value={position} class="rounded border border-gray-300 px-3 py-1 focus:border-blue-500 focus:outline-none">
          <option value="top">Top</option>
          <option value="right">Right</option>
          <option value="bottom">Bottom</option>
          <option value="left">Left</option>
        </select>
      </label>

      <label class="flex items-center gap-2">
        <input type="checkbox" bind:checked={persist} />
        Always visible
      </label>
    </div>
  </div>
</Story>
