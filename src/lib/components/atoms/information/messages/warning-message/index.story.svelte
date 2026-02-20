<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';

  import WarningMessage from './index.svelte';

  let show = $state(false);

  function triggerWarning() {
    show = false;
    setTimeout(() => (show = true), 50);
  }

  function handleClose() {
    show = false;
  }

  const controls: ControlConfig[] = [
    { name: 'title', type: 'text', defaultValue: 'Session Expiring' },
    { name: 'message', type: 'text', defaultValue: 'We have not detected activity. Save your progress or continue working to avoid losing data.' },
    { name: 'closable', type: 'boolean', defaultValue: true },
    { name: 'duration', type: 'select', options: ['0', '3000', '5000', '10000'], defaultValue: '5000' },
    { name: 'position', type: 'select', options: ['top-right', 'top-left', 'bottom-right', 'bottom-left', 'top-center', 'bottom-center'], defaultValue: 'top-right' }
  ];
</script>

<Story
  id="atoms-warning-message"
  title="Warning Message"
  component={WarningMessage}
  category="Atoms"
  description="Warning message component for displaying warnings and alerts."
  controls={controls}
>
  {#snippet children(values: any)}
    <section class="grid w-full gap-8 lg:grid-cols-[1fr_1fr]">
      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-primary] p-6 shadow-sm">
        <p class="text-sm font-semibold uppercase tracking-wide text-[--color-text-secondary]">
          Primary Warning Message Example
        </p>
        <p class="mt-1 text-[--color-text-primary]">Warning message component for displaying warnings and alerts.</p>

        <div class="mt-6">
          <div class="mt-4 flex flex-wrap gap-3">
            <button
              type="button"
              class="rounded-md bg-[--color-warning-500] px-4 py-2 text-sm font-semibold text-[--color-text-inverse] shadow hover:bg-[--color-warning-600]"
              onclick={triggerWarning}
            >
              Show Warning
            </button>
            <button
              type="button"
              class="rounded-md border border-[--color-border-primary] px-4 py-2 text-sm font-semibold text-[--color-text-primary] hover:border-[--color-border-secondary]"
              onclick={() => (show = false)}
            >
              Hide
            </button>
          </div>

          <div class="mt-6">
            <WarningMessage
              show={show}
              title={values.title}
              message={values.message}
              closable={values.closable}
              duration={parseInt(values.duration || '5000')}
              position={values.position}
              onClose={handleClose}
            />
          </div>
        </div>
      </div>

      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-secondary] p-6 shadow-sm">
        <h3 class="text-base font-semibold text-[--color-text-primary]">Message Variations</h3>
        <p class="text-sm text-[--color-text-secondary]">
          Different message configurations with various properties.
        </p>

        <div class="mt-5 space-y-4">
          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">Closable Warning</p>
            <WarningMessage
              show={true}
              title="Important Notice"
              message="This is an important warning message that can be dismissed."
              closable={true}
              duration={0}
              position="top-right"
              onClose={() => console.log('Closed')}
            />
          </article>

          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">Persistent Warning</p>
            <WarningMessage
              show={true}
              title="System Alert"
              message="This is a persistent warning that requires user action."
              closable={false}
              duration={0}
              position="top-right"
              onClose={() => console.log('Closed')}
            />
          </article>
        </div>
      </div>
    </section>
  {/snippet}
</Story>

