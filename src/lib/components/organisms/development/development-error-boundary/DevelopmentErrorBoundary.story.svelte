<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';

  import DevelopmentErrorBoundary from './DevelopmentErrorBoundary.svelte';

  type Props = {
    showDetails: boolean;
  };

  const controls: ControlConfig[] = [{ name: 'showDetails', type: 'boolean', defaultValue: true }];

  let shouldThrow = $state(false);

  function triggerCrash() {
    shouldThrow = true;
  }

  function resetCrash() {
    shouldThrow = false;
  }

  function throwStoryError() {
    throw new Error('Simulated component failure');
  }
</script>

<Story
  id="molecules-development-error-boundary"
  title="DevelopmentErrorBoundary"
  component={DevelopmentErrorBoundary}
  category="Molecules"
  description="Wrap preview components to capture runtime exceptions and display friendly diagnostics."
  controls={controls}
>
  {#snippet children(props: Props)}
    <section class="grid w-full gap-8 lg:grid-cols-[1.1fr_0.9fr]">
      <div class="rounded-[2.5rem] border border-[--color-border-primary] bg-[--color-background-primary] p-6 shadow-sm">
        <header class="flex items-center justify-between">
          <div>
            <p class="text-sm font-semibold uppercase tracking-wide text-[--color-text-secondary]">Sandbox preview</p>
            <p class="text-lg text-[--color-text-primary]">
              Click “Trigger crash” to see how the boundary renders fallback UI.
            </p>
          </div>
          <button
            class="rounded-full bg-[--color-primary-600] px-4 py-1 text-xs font-semibold text-[--color-text-inverse]"
            onclick={shouldThrow ? resetCrash : triggerCrash}
          >
            {shouldThrow ? 'Reset sample' : 'Trigger crash'}
          </button>
        </header>

        <div class="mt-6 rounded-2xl border border-[--color-border-primary] bg-[--color-background-secondary] p-4">
          <DevelopmentErrorBoundary showDetails={props.showDetails}>
            <div class="space-y-2 text-sm text-[--color-text-primary]">
              <p class="font-semibold">Settings panel</p>
              <p class="text-[--color-text-secondary]">
                This child intentionally explodes when you press the button above.
              </p>
              {#if shouldThrow}
                {@const _ = throwStoryError()}
              {/if}
            </div>
          </DevelopmentErrorBoundary>
        </div>
      </div>

      <div class="rounded-[2.5rem] border border-[--color-border-primary] bg-[--color-background-secondary] p-6 shadow-sm">
        <h3 class="text-base font-semibold text-[--color-text-primary]">Why it matters</h3>
        <ul class="mt-4 space-y-3 text-sm text-[--color-text-primary]">
          <li class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] px-4 py-3">
            Captures render-time exceptions and displays actionable stack traces for developers.
          </li>
          <li class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] px-4 py-3">
            Use `showDetails` to toggle stack visibility when handing builds to QA or PMs.
          </li>
          <li class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] px-4 py-3">
            Plug into logging backends by handling the `on:error` event inside the boundary.
          </li>
        </ul>
      </div>
    </section>
  {/snippet}
</Story>
