<script context="module">
  export const title = "Toast";
  export const category = "Molecules/Feedback";
</script>

<script lang="ts">
  import Toast from "./index.svelte";
  import type { IToastProps, ToastType } from '$stylist/design-system/props/toast';

  // Sample toast scenarios
  const defaultPrimaryScenario: IToastProps = {
    type: 'success',
    visible: true,
    duration: 5000
  };

  const variantScenariosData: IToastProps[] = [
    {
      type: 'info',
      visible: true,
      duration: 0
    },
    {
      type: 'warning',
      visible: true,
      duration: 0
    },
    {
      type: 'error',
      visible: true,
      duration: 0
    }
  ];

  // State variables
  let type: ToastType = 'info';
  let visible = true;
  let duration = 5000;

  // State to manage toast visibility for demo purposes
  let infoToastVisible = true;
  let successToastVisible = true;
  let warningToastVisible = true;
  let errorToastVisible = true;

  function handleToastClosed(event: CustomEvent, type: string) {
    if (type === 'info') infoToastVisible = false;
    if (type === 'success') successToastVisible = false;
    if (type === 'warning') warningToastVisible = false;
    if (type === 'error') errorToastVisible = false;
    console.log('Toast closed:', type);
  }
</script>

<div class="story-container">
  <h2>{title}</h2>
  <p>Interactive toast with customizable states.</p>

  <!-- Interactive Demo -->
  <div class="interactive-demo">
    <section class="grid w-full gap-8 lg:grid-cols-[1fr_1fr]">
      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-primary] p-6 shadow-sm">
        <p class="text-sm font-semibold uppercase tracking-wide text-[--color-text-secondary]">
          Primary Toast Example
        </p>
        <p class="mt-1 text-[--color-text-primary]">Interactive toast with customizable states.</p>

        <div class="mt-6 flex flex-wrap gap-4">
          <Toast
            type={type}
            visible={visible}
            duration={duration}
            ontoastClosed={(e) => handleToastClosed(e, type)}
          >
            {#snippet title()}
              Toast {type}
            {/snippet}
            {#snippet description()}
              This is a {type} toast notification.
            {/snippet}
          </Toast>
        </div>
      </div>

      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-secondary] p-6 shadow-sm">
        <h3 class="text-base font-semibold text-[--color-text-primary]">Toast Variations</h3>
        <p class="text-sm text-[--color-text-secondary]">
          Different types of toast notifications: info, success, warning, and error.
        </p>

        <div class="mt-5 space-y-3">
          <article class="flex items-center justify-between rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] px-4 py-3">
            <div>
              <p class="text-sm font-semibold text-[--color-text-primary]">Info Toast</p>
              <p class="text-xs text-[--color-text-secondary]">General information notification</p>
            </div>
            {#if infoToastVisible}
              <Toast
                type="info"
                visible={true}
                duration={0}
                ontoastClosed={(e) => handleToastClosed(e, 'info')}
              >
                {#snippet title()}
                  Information
                {/snippet}
                {#snippet description()}
                  This is an info toast notification.
                {/snippet}
              </Toast>
            {/if}
          </article>

          <article class="flex items-center justify-between rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] px-4 py-3">
            <div>
              <p class="text-sm font-semibold text-[--color-text-primary]">Success Toast</p>
              <p class="text-xs text-[--color-text-secondary]">Confirmation of successful action</p>
            </div>
            {#if successToastVisible}
              <Toast
                type="success"
                visible={true}
                duration={0}
                ontoastClosed={(e) => handleToastClosed(e, 'success')}
              >
                {#snippet title()}
                  Success
                {/snippet}
                {#snippet description()}
                  This is a success toast notification.
                {/snippet}
              </Toast>
            {/if}
          </article>

          <article class="flex items-center justify-between rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] px-4 py-3">
            <div>
              <p class="text-sm font-semibold text-[--color-text-primary]">Warning Toast</p>
              <p class="text-xs text-[--color-text-secondary]">Warning or caution notification</p>
            </div>
            {#if warningToastVisible}
              <Toast
                type="warning"
                visible={true}
                duration={0}
                ontoastClosed={(e) => handleToastClosed(e, 'warning')}
              >
                {#snippet title()}
                  Warning
                {/snippet}
                {#snippet description()}
                  This is a warning toast notification.
                {/snippet}
              </Toast>
            {/if}
          </article>

          <article class="flex items-center justify-between rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] px-4 py-3">
            <div>
              <p class="text-sm font-semibold text-[--color-text-primary]">Error Toast</p>
              <p class="text-xs text-[--color-text-secondary]">Error or failure notification</p>
            </div>
            {#if errorToastVisible}
              <Toast
                type="error"
                visible={true}
                duration={0}
                ontoastClosed={(e) => handleToastClosed(e, 'error')}
              >
                {#snippet title()}
                  Error
                {/snippet}
                {#snippet description()}
                  This is an error toast notification.
                {/snippet}
              </Toast>
            {/if}
          </article>
        </div>
      </div>
    </section>
  </div>

  <!-- Controls -->
  <div class="controls-demo">
    <h3>Controls</h3>
    <div class="grid gap-3 sm:grid-cols-2">
      <label class="flex flex-col gap-1 text-sm">
        Type:
        <select bind:value={type}>
          <option value="info">Info</option>
          <option value="success">Success</option>
          <option value="warning">Warning</option>
          <option value="error">Error</option>
        </select>
      </label>
      <label class="flex items-center gap-2 text-sm">
        <input type="checkbox" bind:checked={visible} />
        Visible
      </label>
      <label class="flex flex-col gap-1 text-sm">
        Duration (ms):
        <input type="number" bind:value={duration} min="0" max="10000" step="1000" />
      </label>
    </div>
  </div>

  <!-- Tags (optional) -->
  <div class="tags">
    <span class="tag">toast</span>
    <span class="tag">notification</span>
    <span class="tag">feedback</span>
    <span class="tag">ui</span>
  </div>
</div>

<style>
  .story-container {
    padding: 20px;
    max-width: 100%;
    font-family: sans-serif;
  }

  h2, h3 {
    margin-top: 2rem;
    margin-bottom: 0.5rem;
  }

  .interactive-demo {
    margin: 1.5rem 0;
  }

  .controls-demo {
    margin-top: 2rem;
  }

  .controls-demo .grid {
    display: grid;
    gap: 1rem;
    flex-wrap: wrap;
  }

  .controls-demo label {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .tags {
    margin-top: 1rem;
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
  }

  .tag {
    background: #f0f0f0;
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    font-size: 0.875rem;
  }
</style>
