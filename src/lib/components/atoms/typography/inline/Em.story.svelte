<script lang="ts">
  import Em from './Em.svelte';
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';

  type EmStoryProps = {
    text: string;
    tone: 'default' | 'accent' | 'warning';
  };

  const controls: ControlConfig[] = [
    { name: 'text', type: 'text', defaultValue: 'edge cases and prototypes' },
    { name: 'tone', type: 'select', defaultValue: 'default', options: ['default', 'accent', 'warning'] }
  ];

  function toneClass(tone: EmStoryProps['tone']) {
    switch (tone) {
      case 'accent':
        return 'text-indigo-600';
      case 'warning':
        return 'text-amber-600';
      default:
        return 'text-gray-900 dark:text-gray-50';
    }
  }
</script>

<Story
  id="atoms-em"
  title="Em"
  component={Em}
  category="Atoms"
  description="Inline emphasis element rendered with italic treatment."
  tags={['typography', 'inline']}
  controls={controls}
>
  {#snippet children(props: EmStoryProps)}
    <div class="space-y-6">
      <p class="rounded-2xl border border-gray-200/80 bg-white/80 p-5 text-base text-gray-700 shadow-sm dark:border-gray-800 dark:bg-gray-900/40 dark:text-gray-200">
        Ship confidently by carving time for <Em className={toneClass(props.tone)}>{props.text}</Em> before launch.
      </p>

      <p class="text-sm text-gray-500 dark:text-gray-400">
        Use {'<Em>'} when you need voice or tone emphasis without changing semantics.
      </p>
    </div>
  {/snippet}
</Story>

