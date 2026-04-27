<script lang="ts">
  import type { ComparisonTableProps } from '$stylist/control/type/struct/comparison-table-props';
  import { createComparisonTableState } from '$stylist/control/function/state/comparison-table';

  let props: ComparisonTableProps = $props();
  const state = createComparisonTableState(props);

  const restProps = $derived.by(() => {
    const {
      class: _class,
      headerClass: _headerClass,
      featureClass: _featureClass,
      productClass: _productClass,
      valueClass: _valueClass,
      primaryProductClass: _primaryProductClass,
      showHeader: _showHeader,
      showDescription: _showDescription,
      features: _features,
      products: _products,
      ...rest
    } = props;
    return rest;
  });
</script>

<div class={state.containerClass} {...restProps}>
  <table class="min-w-full divide-y divide-gray-200">
    <thead class={state.headerClass}>
      <tr>
        <th class="px-6 py-3 bg-[var(--color-background-secondary)] text-left text-xs font-medium text-[var(--color-text-secondary)] uppercase tracking-wider">
          Features
        </th>
        {#each state.products as product}
          <th class={`px-6 py-3 bg-[var(--color-background-secondary)] text-center text-xs font-medium text-[var(--color-text-secondary)] uppercase tracking-wider ${
            product.primary ? state.primaryProductClass : ''
          } ${state.productClass}`}>
            <div class="flex flex-col items-center">
              <span>{product.name}</span>
              {#if state.showDescription && product.description}
                <span class="text-xs text-[var(--color-text-tertiary)] mt-1">{product.description}</span>
              {/if}
            </div>
          </th>
        {/each}
      </tr>
    </thead>
    <tbody class="bg-[var(--color-background-primary)] divide-y divide-gray-200">
      {#each state.features as feature}
        <tr>
          <td class={`px-6 py-4 whitespace-nowrap text-sm font-medium text-[var(--color-text-primary)] ${state.featureClass}`}>
            <div>
              <div>{feature.name}</div>
              {#if state.showDescription && feature.description}
                <div class="text-xs text-[var(--color-text-secondary)]">{feature.description}</div>
              {/if}
            </div>
          </td>
          {#each state.products as product}
            <td class={`px-6 py-4 whitespace-nowrap text-sm text-[var(--color-text-secondary)] text-center ${state.valueClass} ${
              product.primary ? state.primaryProductClass : ''
            } ${state.productClass}`}>
              {#if typeof product.features[feature.id] === 'boolean'}
                {#if product.features[feature.id]}
                  <span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[var(--color-success-100)] text-[var(--color-success-800)]">
                    ?
                  </span>
                {:else}
                  <span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[var(--color-background-secondary)] text-[var(--color-text-primary)]">
                    ?
                  </span>
                {/if}
              {:else if typeof product.features[feature.id] === 'string' || typeof product.features[feature.id] === 'number'}
                {product.features[feature.id]}
              {:else}
                -
              {/if}
            </td>
          {/each}
        </tr>
      {/each}
    </tbody>
  </table>
</div>




