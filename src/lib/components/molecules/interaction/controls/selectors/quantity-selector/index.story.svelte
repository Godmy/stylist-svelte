<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';

  import QuantitySelector from './index.svelte';

  let {
    id = '',
    title = '',
    description = '',
    controls = [
      { name: 'value', type: 'number', defaultValue: 1 },
      { name: 'size', type: 'select', options: ['sm', 'md', 'lg'], defaultValue: 'md' },
      { name: 'variant', type: 'select', options: ['default', 'minimal', 'filled'], defaultValue: 'default' },
      { name: 'min', type: 'number', defaultValue: 1 },
      { name: 'max', type: 'number', defaultValue: 99 },
      { name: 'disabled', type: 'boolean', defaultValue: false },
      { name: 'showInput', type: 'boolean', defaultValue: true },
      { name: 'showButtons', type: 'boolean', defaultValue: true }
    ]
  } = $props<{
    id?: string;
    title?: string;
    description?: string;
    controls?: ControlConfig[]
  }>();

  function handleValueChange(newValue: number) {
    console.log('Value changed:', newValue);
  }
</script>

<Story
  {id}
  {title}
  {description}
  component={QuantitySelector}
  category="Molecules"
  controls={controls}
>
  {#snippet children(values: any)}
    <section class="sb-molecules-quantity-selector grid w-full gap-8 lg:grid-cols-[1fr_1fr]">
      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-primary] p-6 shadow-sm">
        <p class="text-sm font-semibold uppercase tracking-wide text-[--color-text-secondary]">
          Primary Quantity Selector Example
        </p>
        <p class="mt-1 text-[--color-text-primary]">Interactive quantity selector with customizable options.</p>

        <div class="mt-6">
          <QuantitySelector
            value={values.value}
            min={values.min}
            max={values.max}
            disabled={values.disabled}
            variant={values.variant}
            size={values.size}
            showInput={values.showInput}
            showButtons={values.showButtons}
            onValueChange={handleValueChange}
          />
        </div>
      </div>

      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-secondary] p-6 shadow-sm">
        <h3 class="text-base font-semibold text-[--color-text-primary]">Quantity Selector Variations</h3>
        <p class="text-sm text-[--color-text-secondary]">
          Different quantity selector configurations with various options.
        </p>

        <div class="mt-5 space-y-4">
          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">Small Size</p>
            <div>
              <QuantitySelector
                value={1}
                size="sm"
                variant="default"
                onValueChange={handleValueChange}
              />
            </div>
          </article>

          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">Large Size</p>
            <div>
              <QuantitySelector
                value={5}
                size="lg"
                variant="filled"
                onValueChange={handleValueChange}
              />
            </div>
          </article>

          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">Minimal Variant</p>
            <div>
              <QuantitySelector
                value={3}
                size="md"
                variant="minimal"
                onValueChange={handleValueChange}
              />
            </div>
          </article>
        </div>
      </div>
    </section>
  {/snippet}
</Story>
