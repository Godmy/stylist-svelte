<script lang="ts">
  import CharacterCount from './CharacterCount.svelte';
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';

  let text = $state('Snap your thoughts here...');
  let max = $state(120);
  let showPercentage = $state(true);

  const controls: ControlConfig[] = [
    { name: 'max', type: 'number', min: 40, max: 500, step: 10, defaultValue: 120 },
    { name: 'showPercentage', type: 'boolean', defaultValue: true }
  ];
</script>

<Story
  id="atoms-character-count"
  title="CharacterCount"
  component={CharacterCount}
  category="Atoms"
  description="Displays the current input length with contextual coloring."
  tags={['form', 'input', 'helper']}
  controls={controls}
>
  <div class="space-y-4 p-6">
    <label class="flex flex-col gap-2 text-sm">
      Message
      <textarea
        bind:value={text}
        rows="4"
        maxlength={max}
        class="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
      ></textarea>
    </label>
    <CharacterCount current={text.length} {max} {showPercentage} />

    <div class="grid gap-3 md:grid-cols-2">
      <label class="flex flex-col gap-1 text-sm">
        Max characters ({max})
        <input type="range" min="40" max="500" step="10" bind:value={max} />
      </label>
      <label class="flex items-center gap-2 text-sm">
        <input type="checkbox" bind:checked={showPercentage} />
        Show percentage
      </label>
    </div>
  </div>
</Story>
