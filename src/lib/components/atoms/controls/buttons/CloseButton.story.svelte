<script lang="ts">
  import CloseButton from './CloseButton.svelte';
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';

  type ButtonSize = 'sm' | 'md' | 'lg';
  type ButtonVariant = 'solid' | 'outline' | 'ghost';

  let size = $state<ButtonSize>('md');
  let variant = $state<ButtonVariant>('ghost');
  let ariaLabel = $state('Close dialog');

  const controls: ControlConfig[] = [
    { name: 'size', type: 'select', options: ['sm', 'md', 'lg'], defaultValue: 'md' },
    { name: 'variant', type: 'select', options: ['solid', 'outline', 'ghost'], defaultValue: 'ghost' },
    { name: 'ariaLabel', type: 'text', defaultValue: 'Close dialog' }
  ];
</script>

<Story
  id="atoms-close-button"
  title="CloseButton"
  component={CloseButton}
  category="Atoms"
  description="Icon-only button for dismissing dialogs, alerts or chips."
  tags={['button', 'close', 'dismiss']}
  controls={controls}
>
  <div class="flex flex-col gap-6 p-6 max-w-sm">
    <div class="flex items-center gap-4">
      <CloseButton size={size} variant={variant} aria-label={ariaLabel} />
      <span class="text-sm text-gray-500">
        Hover to preview focus and variant styles.
      </span>
    </div>

    <div class="space-y-3 rounded-lg border border-dashed border-gray-200 p-4">
      <label class="flex flex-col gap-1 text-sm">
        Aria label
        <input
          type="text"
          bind:value={ariaLabel}
          class="rounded border border-gray-300 px-3 py-1 text-sm focus:border-blue-500 focus:outline-none"
        />
      </label>

      <label class="flex flex-col gap-1 text-sm">
        Size
        <select
          bind:value={size}
          class="rounded border border-gray-300 px-3 py-1 text-sm focus:border-blue-500 focus:outline-none"
        >
          <option value="sm">Small</option>
          <option value="md">Medium</option>
          <option value="lg">Large</option>
        </select>
      </label>

      <label class="flex flex-col gap-1 text-sm">
        Variant
        <select
          bind:value={variant}
          class="rounded border border-gray-300 px-3 py-1 text-sm focus:border-blue-500 focus:outline-none"
        >
          <option value="solid">Solid</option>
          <option value="outline">Outline</option>
          <option value="ghost">Ghost</option>
        </select>
      </label>
    </div>
  </div>
</Story>
