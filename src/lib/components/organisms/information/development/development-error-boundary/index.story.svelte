<script lang="ts">
  import { Story } from '$stylist/playground';
  import type { ControlConfig } from '$stylist/playground';

  import DevelopmentErrorBoundary from './index.svelte';

  let {
    id = '',
    title = '',
    description = '',
    controls = [
      { name: 'showDetails', type: 'boolean', defaultValue: true }
    ]
  } = $props<{
    id?: string;
    title?: string;
    description?: string;
    controls?: ControlConfig[]
  }>();

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
  {id}
  {title}
  {description}
  component={DevelopmentErrorBoundary}
  category="Organisms"
  controls={controls}
>
  {#snippet children(values: any)}
    <section class="sb-organisms-development-error-boundary grid w-full gap-8 lg:grid-cols-[1fr_1fr]">
      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-primary] p-6 shadow-sm">
        <p class="text-sm font-semibold uppercase tracking-wide text-[--color-text-secondary]">
          Primary Error Boundary Example
        </p>
        <p class="mt-1 text-[--color-text-primary]">Interactive error boundary with customizable options.</p>

        <div class="mt-6">
          {#if shouldThrow}
            {@const _ = throwStoryError()}
          {/if}
          <DevelopmentErrorBoundary
            showDetails={values.showDetails}
          >
            <button
              class="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
              onclick={triggerCrash}
            >
              Trigger Error
            </button>
          </DevelopmentErrorBoundary>
        </div>
      </div>

      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-secondary] p-6 shadow-sm">
        <h3 class="text-base font-semibold text-[--color-text-primary]">Error Boundary Variations</h3>
        <p class="text-sm text-[--color-text-secondary]">
          Different error boundary configurations with various options.
        </p>

        <div class="mt-5 space-y-4">
          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">Without Details</p>
            <div>
              <DevelopmentErrorBoundary
                showDetails={false}
              >
                <button
                  class="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                  onclick={triggerCrash}
                >
                  Trigger Error
                </button>
              </DevelopmentErrorBoundary>
            </div>
          </article>
        </div>
      </div>
    </section>
  {/snippet}
</Story>

