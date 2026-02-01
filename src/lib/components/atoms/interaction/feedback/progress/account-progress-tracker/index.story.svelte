<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';
  import AccountProgressTracker from './account-progress-tracker/index.svelte';

  type Props = {
    steps?: string[];
    currentStep?: number;
    class?: string;
  };

  const controls: ControlConfig[] = [
    {
      name: 'currentStep',
      type: 'number',
      defaultValue: 0,
      min: 0,
      max: 3
    }
  ];
</script>

<Story
  id="molecules-account-progress-tracker"
  title="AccountProgressTracker"
  component={AccountProgressTracker}
  category="Molecules"
  description="Track account setup progress through multiple steps."
  controls={controls}
>
  {#snippet children(props: Props)}
    <div class="p-8 bg-gray-50 rounded-lg">
      <h2 class="text-xl font-bold mb-4">AccountProgressTracker Story</h2>
      <AccountProgressTracker
        {...props}
        steps={['Account Info', 'Verification', 'Preferences', 'Complete']}
      />
    </div>
  {/snippet}
</Story>
