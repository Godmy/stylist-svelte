<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';

  import Paragraph from './index.svelte';

  const controls: ControlConfig[] = [
    { name: 'variant', type: 'select', options: ['primary', 'secondary', 'success', 'warning', 'danger', 'ghost', 'link'], defaultValue: 'primary' },
    { name: 'size', type: 'select', options: ['sm', 'md', 'lg'], defaultValue: 'md' },
    { name: 'disabled', type: 'boolean', defaultValue: false },
    { name: 'block', type: 'boolean', defaultValue: false }
  ];
</script>

<Story
  id="atoms-paragraph"
  title="Paragraph"
  component={Paragraph}
  category="Atoms"
  description="A paragraph component for displaying text content."
  controls={controls}
>
  {#snippet children(props)}
    <section class="grid w-full gap-8 lg:grid-cols-[1fr_1fr]">
      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-primary] p-6 shadow-sm">
        <p class="text-sm font-semibold uppercase tracking-wide text-[--color-text-secondary]">
          Primary Paragraph Example
        </p>
        <p class="mt-1 text-[--color-text-primary]">A paragraph component for displaying text content.</p>

        <div class="mt-6">
          <Paragraph
            variant={props.variant}
            size={props.size}
            disabled={props.disabled}
            block={props.block}
          >
            Example Paragraph: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Paragraph>
        </div>
      </div>

      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-secondary] p-6 shadow-sm">
        <h3 class="text-base font-semibold text-[--color-text-primary]">Paragraph Variations</h3>
        <p class="text-sm text-[--color-text-secondary]">
          Different paragraph configurations with various properties.
        </p>

        <div class="mt-5 space-y-4">
          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">Paragraph Variants</p>
            <div class="flex flex-col space-y-2">
              <Paragraph variant="primary">
                Primary Paragraph: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Paragraph>
              <Paragraph variant="secondary">
                Secondary Paragraph: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Paragraph>
              <Paragraph variant="success">
                Success Paragraph: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Paragraph>
              <Paragraph variant="warning">
                Warning Paragraph: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Paragraph>
              <Paragraph variant="danger">
                Danger Paragraph: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Paragraph>
            </div>
          </article>

          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">Paragraph Sizes</p>
            <div class="flex flex-col space-y-2">
              <Paragraph size="sm">
                Small Paragraph: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Paragraph>
              <Paragraph size="md">
                Medium Paragraph: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Paragraph>
              <Paragraph size="lg">
                Large Paragraph: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Paragraph>
            </div>
          </article>
        </div>
      </div>
    </section>
  {/snippet}
</Story>

