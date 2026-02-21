<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
  import CTABanner from './index.svelte';

  let clicks = $state(0);
  let lastButton = $state('none');

  const controls: ControlConfig[] = [
    { name: 'title', type: 'text', defaultValue: 'Ready to launch faster?' },
    { name: 'backgroundVariant', type: 'select', options: ['gradient', 'solid', 'image'], defaultValue: 'gradient' }
  ];

  function createButtons() {
    return [
      { label: 'Get started', variant: 'primary' as const, onClick: () => { clicks += 1; lastButton = 'Get started'; } },
      { label: 'View docs', variant: 'outline' as const, onClick: () => { clicks += 1; lastButton = 'View docs'; } }
    ];
  }
</script>

<Story
  id="molecules-cta-banner"
  title="Molecules / Information / Marketing / CtaBanner"
  component={CTABanner}
  category="Molecules/Information/Marketing"
  description="Marketing call-to-action banner with multiple background variants."
  {controls}
>
  {#snippet children(args: any)}
    <div class="p-4 rounded-xl bg-gray-50 space-y-3">
      <CTABanner
        title={args.title}
        description="Install the library and ship production-ready UI blocks."
        buttons={createButtons()}
        backgroundVariant={args.backgroundVariant}
        backgroundImage="https://placehold.co/1200x320"
      />
      <p class="text-sm text-gray-600">Clicks: {clicks} | Last: {lastButton}</p>
    </div>
  {/snippet}
</Story>
