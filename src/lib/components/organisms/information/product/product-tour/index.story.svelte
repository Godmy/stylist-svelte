<script lang="ts">
  import { Story } from '$stylist/playground';
  import type { ControlConfig } from '$stylist/playground';

  import ProductTour from './index.svelte';

  let {
    id = '',
    title = '',
    description = '',
    controls = [
      { name: 'showTour', type: 'boolean', defaultValue: true },
      { name: 'currentStep', type: 'number', defaultValue: 0 }
    ]
  } = $props<{
    id?: string;
    title?: string;
    description?: string;
    controls?: ControlConfig[]
  }>();

  const steps = [
    { id: '1', title: 'Welcome', content: 'Welcome to our product!' },
    { id: '2', title: 'Features', content: 'Discover amazing features.' },
    { id: '3', title: 'Get Started', content: 'Let\'s get started!' }
  ];

  function handleStepChange(step: number) {
    console.log('Step changed:', step);
  }

  function handleComplete() {
    console.log('Tour completed!');
  }

  function handleSkip() {
    console.log('Tour skipped!');
  }
</script>

<Story
  {id}
  {title}
  {description}
  component={ProductTour}
  category="Organisms"
  controls={controls}
>
  {#snippet children(props)}
    <section class="sb-organisms-product-tour grid w-full gap-8 lg:grid-cols-[1fr_1fr]">
      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-primary] p-6 shadow-sm">
        <p class="text-sm font-semibold uppercase tracking-wide text-[--color-text-secondary]">
          Primary Product Tour Example
        </p>
        <p class="mt-1 text-[--color-text-primary]">Interactive product tour with customizable options.</p>

        <div class="mt-6">
          <ProductTour
            showTour={props.showTour}
            currentStep={props.currentStep}
            {steps}
            onStepChange={handleStepChange}
            onComplete={handleComplete}
            onSkip={handleSkip}
          />
        </div>
      </div>

      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-secondary] p-6 shadow-sm">
        <h3 class="text-base font-semibold text-[--color-text-primary]">Product Tour Variations</h3>
        <p class="text-sm text-[--color-text-secondary]">
          Different product tour configurations with various options.
        </p>

        <div class="mt-5 space-y-4">
          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">Hidden Tour</p>
            <div>
              <ProductTour
                showTour={false}
                {steps}
                onStepChange={handleStepChange}
              />
            </div>
          </article>

          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">Last Step</p>
            <div>
              <ProductTour
                showTour={true}
                currentStep={2}
                {steps}
                onStepChange={handleStepChange}
                onComplete={handleComplete}
                onSkip={handleSkip}
              />
            </div>
          </article>
        </div>
      </div>
    </section>
  {/snippet}
</Story>
