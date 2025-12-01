<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';

  import ToggleGroupItem from './ToggleGroupItem.svelte';
  import ToggleGroupRoot from '../toggle-group-root/ToggleGroupRoot.svelte';

  let {
    id = '',
    title = '',
    description = '',
    controls = [
      { name: 'disabled', type: 'boolean', defaultValue: false }
    ]
  }: {
    id: string;
    title: string;
    description: string;
    controls: ControlConfig[];
  } = $props();

  // State for tracking values
  let value: string | null = $state(null);
</script>

<Story
  {id}
  {title}
  {description}
  component={ToggleGroupItem}
  category="Molecules"
  controls={controls}
>
  {#snippet children(props: { disabled?: boolean })}
    <section class="grid w-full gap-8 lg:grid-cols-[1fr_1fr]">
      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-primary] p-6 shadow-sm">
        <p class="text-sm font-semibold uppercase tracking-wide text-[--color-text-secondary]">
          Primary Toggle Group Item Example
        </p>
        <p class="mt-1 text-[--color-text-primary]">Toggle group item that works within a root component.</p>

        <div class="mt-6 space-y-8">
          <!-- Single Selection Toggle Group -->
          <div>
            <p class="text-sm font-medium text-[--color-text-primary] mb-3">Within Toggle Group (Single Selection):</p>
            <ToggleGroupRoot
              type="single"
              onvalueChange={(e: CustomEvent<{ value: string | string[] | null }>) => value = Array.isArray(e.detail.value) ? e.detail.value[0] : e.detail.value}
            >
              <ToggleGroupItem value="option1" disabled={props.disabled}>
                Option 1
              </ToggleGroupItem>
              <ToggleGroupItem value="option2" disabled={props.disabled}>
                Option 2
              </ToggleGroupItem>
              <ToggleGroupItem value="option3" disabled={props.disabled}>
                Option 3
              </ToggleGroupItem>
            </ToggleGroupRoot>
            <p class="text-xs text-[--color-text-secondary] mt-2">Selected: {value || 'None'}</p>
          </div>

          <!-- Multiple Selection Toggle Group -->
          <div>
            <p class="text-sm font-medium text-[--color-text-primary] mb-3">Within Toggle Group (Multiple Selection):</p>
            <ToggleGroupRoot
              type="multiple"
              onvalueChange={(e: CustomEvent<{ value: string | string[] | null }>) => console.log('Multiple selection:', e.detail.value)}
            >
              <ToggleGroupItem value="multi1" disabled={props.disabled}>
                Multi 1
              </ToggleGroupItem>
              <ToggleGroupItem value="multi2" disabled={props.disabled}>
                Multi 2
              </ToggleGroupItem>
              <ToggleGroupItem value="multi3" disabled={props.disabled}>
                Multi 3
              </ToggleGroupItem>
            </ToggleGroupRoot>
          </div>
        </div>
      </div>

      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-secondary] p-6 shadow-sm">
        <h3 class="text-base font-semibold text-[--color-text-primary]">Toggle Group Item Variations</h3>
        <p class="text-sm text-[--color-text-secondary]">
          Different configurations and states for toggle group items.
        </p>

        <div class="mt-5 space-y-4">
          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">Disabled State</p>
            <ToggleGroupRoot type="single">
              <ToggleGroupItem value="disabled1" disabled={true}>
                Disabled 1
              </ToggleGroupItem>
              <ToggleGroupItem value="disabled2" disabled={true}>
                Disabled 2
              </ToggleGroupItem>
            </ToggleGroupRoot>
          </article>

          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">With Icon Content</p>
            <ToggleGroupRoot type="single">
              <ToggleGroupItem value="bold-icon">
                <span class="font-bold">B</span>
              </ToggleGroupItem>
              <ToggleGroupItem value="italic-icon">
                <span class="italic">I</span>
              </ToggleGroupItem>
              <ToggleGroupItem value="underline-icon">
                <span class="underline">U</span>
              </ToggleGroupItem>
            </ToggleGroupRoot>
          </article>

          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">Active State</p>
            <div class="flex flex-col gap-2">
              <p class="text-xs text-[--color-text-secondary]">Toggle Group Item is active when selected</p>
              <ToggleGroupRoot type="single" value="active">
                <ToggleGroupItem value="inactive">
                  Inactive
                </ToggleGroupItem>
                <ToggleGroupItem value="active">
                  Active
                </ToggleGroupItem>
              </ToggleGroupRoot>
            </div>
          </article>
        </div>
      </div>
    </section>
  {/snippet}
</Story>