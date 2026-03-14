<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/defaults/interaction/controls';
  import CopyableCode from './index.svelte';

  const controls: ControlConfig[] = [
    { name: 'language', type: 'select', options: ['javascript', 'typescript', 'python', 'json', 'bash'], defaultValue: 'javascript' },
    { name: 'title', type: 'text', defaultValue: 'Install example' },
    { name: 'code', type: 'text', defaultValue: 'npm install stylist-svelte\n\n# run locally\nyarn dev' }
  ];
</script>

<Story
  id="molecules-copyable-code-block"
  title="Molecules / Information / Development / CopyableCode"
  component={CopyableCode}
  category="Molecules/Information/Development"
  description="Legacy wrapper around Code with copy action enabled."
  {controls}
>
  {#snippet children(args: any)}
    <div class="p-4 rounded-xl bg-gray-50">
      <CopyableCode code={args.code} language={args.language} title={args.title} />
    </div>
  {/snippet}
</Story>



