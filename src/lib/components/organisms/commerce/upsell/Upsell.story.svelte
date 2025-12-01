<script lang="ts">
  import Upsell from './Upsell.svelte';

  type Product = {
    id: string;
    name: string;
    description: string;
    price: number;
    originalPrice?: number;
    discountPercent?: number;
    rating?: number;
    reviewCount?: number;
    tags?: string[];
  };

  let moduleTitle = 'Upgrade to Pro';
  let description = 'Current starter subscribers see curated premium bundles with contextual savings messaging.';
  let showSavings = true;
  let showReason = true;
  let maxProducts = 3;

  const currentPlan: Product = {
    id: 'plan-basic',
    name: 'Starter workspace',
    description: 'Includes 5 projects, standard analytics, and community support.',
    price: 12
  };

  const bundles: Product[] = [
    {
      id: 'plan-pro',
      name: 'Professional workspace',
      description: 'Unlimited projects, advanced reports, and CRM sync.',
      price: 32,
      originalPrice: 42,
      discountPercent: 25,
      rating: 4.8,
      reviewCount: 187,
      tags: ['Most popular', 'Save 20%']
    },
    {
      id: 'plan-scale',
      name: 'Scale workspace',
      description: 'Everything in Pro plus automation rules and premium support.',
      price: 58,
      originalPrice: 74,
      discountPercent: 18,
      tags: ['Automation', 'Teams']
    },
    {
      id: 'plan-ai',
      name: 'AI-enabled workspace',
      description: 'Predictive scoring and intent signals for GTM teams.',
      price: 86,
      originalPrice: 102,
      discountPercent: 15,
      tags: ['AI bundle']
    }
  ];

  const curatedSets = [
    {
      id: 'holiday',
      title: 'Seasonal promotion',
      description: 'Highlights limited bundles around sales events.',
      products: [
        {
          id: 'plan-holiday',
          name: 'Holiday boost',
          description: 'Short-term upgrade for campaign season.',
          price: 24,
          originalPrice: 36,
          discountPercent: 33,
          tags: ['Limited']
        },
        {
          id: 'plan-holiday-pro',
          name: 'Holiday pro boost',
          description: 'Adds automation and geo reports for 90 days.',
          price: 44,
          originalPrice: 60,
          discountPercent: 27
        }
      ]
    },
    {
      id: 'success',
      title: 'Success manager pick',
      description: 'Account teams can pin curated programs with recommended badges.',
      products: [
        {
          id: 'plan-success',
          name: 'Success Plus',
          description: 'Dedicated success manager and quarterly planning.',
          price: 68,
          originalPrice: 82,
          discountPercent: 17,
          tags: ['CS curated']
        }
      ]
    }
  ];
</script>

<div class="space-y-8 p-6">
  <section class="rounded-2xl border border-[--color-border-primary] bg-white p-6 shadow-sm">
    <div class="grid gap-6 lg:grid-cols-[320px_1fr]">
      <div class="space-y-4">
        <div>
          <label for="module-title" class="text-sm font-medium text-[--color-text-secondary]">Заголовок модуля</label>
          <input
            id="module-title"
            type="text"
            class="mt-1 w-full rounded-lg border border-[--color-border-primary] px-3 py-2 text-sm"
            bind:value={moduleTitle}
          />
        </div>

        <div>
          <label for="module-description" class="text-sm font-medium text-[--color-text-secondary]">Описание</label>
          <textarea
            id="module-description"
            class="mt-1 w-full rounded-lg border border-[--color-border-primary] px-3 py-2 text-sm"
            bind:value={description}
            rows="3"
          ></textarea>
        </div>

        <div>
          <label for="max-products" class="text-sm font-medium text-[--color-text-secondary]">
            Максимум карточек
          </label>
          <input
            id="max-products"
            type="range"
            min="1"
            max={bundles.length}
            bind:value={maxProducts}
            class="mt-1 w-full"
          />
          <p class="text-xs text-[--color-text-secondary]">Показывать: {maxProducts}</p>
        </div>

        <div class="space-y-2 text-sm text-[--color-text-secondary]">
          <label class="flex items-center gap-2">
            <input type="checkbox" bind:checked={showSavings} />
            Плашка экономии
          </label>
          <label class="flex items-center gap-2">
            <input type="checkbox" bind:checked={showReason} />
            Пояснение причины
          </label>
        </div>
      </div>

      <div class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-secondary] p-4">
        <p class="text-xs font-semibold uppercase tracking-wide text-[--color-text-secondary]">Live preview</p>
        <Upsell
          class="mt-4"
          currentProduct={currentPlan}
          upsellProducts={bundles}
          title={moduleTitle}
          {description}
          {showSavings}
          {showReason}
          maxProducts={+maxProducts}
        />
      </div>
    </div>
  </section>

  <section class="rounded-2xl border border-[--color-border-primary] bg-[--color-background-secondary] p-6">
    <h2 class="text-base font-semibold text-[--color-text-primary]">Кураторские подборки</h2>
    <p class="text-sm text-[--color-text-secondary]">
      Попробуйте разные наборы продуктов, чтобы увидеть, как меняется модуль upsell.
    </p>

    <div class="mt-6 grid gap-4 lg:grid-cols-2">
      {#each curatedSets as set}
        <div class="rounded-2xl border border-[--color-border-primary] bg-white p-4">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm font-semibold text-[--color-text-primary]">{set.title}</p>
              <p class="text-xs text-[--color-text-secondary]">{set.description}</p>
            </div>
            <span class="rounded-full bg-[--color-background-secondary] px-3 py-1 text-xs text-[--color-text-secondary]">
              {set.products.length} options
            </span>
          </div>

          <Upsell
            class="mt-4"
            currentProduct={currentPlan}
            upsellProducts={set.products}
            title={set.title}
            description={set.description}
            showSavings={true}
            showReason={false}
            maxProducts={set.products.length}
          />
        </div>
      {/each}
    </div>
  </section>
</div>
