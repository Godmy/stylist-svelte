<script lang="ts">
  import { Story } from '$stylist/interaction/playground';
  import type { InterfaceControllerSettings } from '$stylist/interaction/interface/controller-settings';
  import PlaygroundAnimatedBackground from './index.svelte';

  const controls: InterfaceControllerSettings[] = [];
</script>

<Story
  component={PlaygroundAnimatedBackground}
  title="Playground Animated Background"
  description="Animated gradient background for playground sections."
  {controls}
>
  {#snippet children()}
    <div style="position: relative; min-height: 320px; overflow: hidden; border-radius: 24px;">
      <PlaygroundAnimatedBackground>
        <div style="position: relative; z-index: 1; padding: 48px; color: white; font-weight: 700;">
          Ambient playground background
        </div>
      </PlaygroundAnimatedBackground>
    </div>
  {/snippet}
</Story>

