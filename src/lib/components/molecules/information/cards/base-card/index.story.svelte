<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';

  import BaseCard from './index.svelte';

  export let id: string;
  export let title: string;
  export let description: string;
  export let controls: ControlConfig[] = [
    { name: 'title', type: 'text', defaultValue: 'Card Title' },
    { name: 'description', type: 'text', defaultValue: 'Card description' }
  ];

  // Sample content for the card
  const sampleCardContent = `
    This is sample content for the card. It can include various types of content
    like text, images, buttons, or any other Svelte components. The BaseCard
    component provides a flexible container for organizing content in a structured way.
  `;
</script>

<Story
  {id}
  {title}
  {description}
  component={BaseCard}
  category="Molecules"
  controls={controls}
>
  {#snippet children(props: { title?: string; description?: string })}
    <section class="grid w-full gap-8 lg:grid-cols-[1fr_1fr]">
      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-primary] p-6 shadow-sm">
        <p class="text-sm font-semibold uppercase tracking-wide text-[--color-text-secondary]">
          Primary Base Card Example
        </p>
        <p class="mt-1 text-[--color-text-primary]">Interactive base card with customizable content.</p>

        <div class="mt-6">
          <BaseCard
            title={props.title}
            description={props.description}
          >
            <div class="p-4">
              <p>{sampleCardContent}</p>
              <div class="mt-4 flex gap-2">
                <button class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Action 1</button>
                <button class="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300">Action 2</button>
              </div>
            </div>
          </BaseCard>
        </div>
      </div>

      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-secondary] p-6 shadow-sm">
        <h3 class="text-base font-semibold text-[--color-text-primary]">Card Variations</h3>
        <p class="text-sm text-[--color-text-secondary]">
          Different card configurations with various content types.
        </p>

        <div class="mt-5 space-y-4">
          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">Card with Title Only</p>
            <BaseCard title="Information Card">
              <div class="p-4">
                <p>This card has only a title and content area. No description is provided.</p>
              </div>
            </BaseCard>
          </article>

          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">Card with Description Only</p>
            <BaseCard description="This card has only a description and content area. No title is provided.">
              <div class="p-4">
                <p>Additional content can go here, providing more details about the card's purpose.</p>
              </div>
            </BaseCard>
          </article>

          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">Card with Rich Content</p>
            <BaseCard title="Product Card" description="Detailed product information">
              <div class="p-4">
                <div class="flex items-center gap-4">
                  <div class="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16"></div>
                  <div>
                    <h4 class="font-bold">Product Name</h4>
                    <p class="text-sm text-gray-600">Product details and description</p>
                  </div>
                </div>
                <div class="mt-4">
                  <p>Price: $99.99</p>
                  <button class="mt-2 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">
                    Add to Cart
                  </button>
                </div>
              </div>
            </BaseCard>
          </article>
        </div>
      </div>
    </section>
  {/snippet}
</Story>

