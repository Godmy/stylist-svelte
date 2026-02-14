<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';
  import CTABanner from './index.svelte';

  type Props = { backgroundVariant: string };

  const controls: ControlConfig[] = [
    { name: 'backgroundVariant', type: 'select', options: ['gradient', 'solid', 'image'], defaultValue: 'gradient' }
  ];

  const buttons = [
    { label: 'Get Started', variant: 'primary' as const, onClick: () => {} },
    { label: 'View on NPM', variant: 'outline' as const, onClick: () => {} }
  ];
</script>

<Story
  id="molecules-cta-banner"
  title="Molecules / Information / Marketing / CtaBanner"
  component={CTABanner}
  category="Molecules/Information/Marketing"
  description="CTA banner component."
  controls={controls}
>
  {#snippet children(args: Props)}
    <div class="sb-molecules-cta-banner p-4">
      <CTABanner
        title="Ready to build with AI-verified components?"
        description="Install our package and start building today"
        buttons={buttons}
        backgroundVariant={args.backgroundVariant as 'gradient' | 'solid' | 'image'}
        backgroundImage="https://via.placeholder.com/1200x400"
      />
    </div>
  {/snippet}
</Story>
