<script lang="ts">
  import SkeletonCircle from '../SkeletonCircle.svelte';
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';

  let size = $state(48);
  let showContent = $state(false);

  const controls: ControlConfig[] = [
    { name: 'size', type: 'number', min: 16, max: 120, step: 4, defaultValue: 48 },
    { name: 'showContent', type: 'boolean', defaultValue: false }
  ];
</script>

<Story
  id="atoms-skeleton-circle"
  title="SkeletonCircle"
  component={SkeletonCircle}
  category="Atoms"
  description="Circular skeleton placeholder for avatar or badge loading states."
  tags={['loading', 'placeholder']}
  controls={controls}
>
  {#snippet children()}
    {#snippet initials()}
      <span class="text-xs font-semibold text-white drop-shadow">UI</span>
    {/snippet}

    <div class="space-y-6 p-6">
      <div class="flex items-center gap-4">
        <SkeletonCircle size={size} content={showContent ? initials : undefined} />
        <div class="text-sm text-gray-500">
          Adjust the diameter to mimic avatars, chips or compact media previews.
        </div>
      </div>

      <div class="grid gap-3 sm:grid-cols-2">
        <label class="flex flex-col gap-1 text-sm">
          Size ({size}px)
          <input type="range" min="16" max="120" step="4" bind:value={size} />
        </label>
        <label class="flex items-center gap-2 text-sm">
          <input type="checkbox" bind:checked={showContent} />
          Show initials placeholder
        </label>
      </div>
    </div>
  {/snippet}
</Story>
