<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';

  type Feature = {
    id: string;
    name: string;
    description?: string;
  };

  type Product = {
    id: string;
    name: string;
    description?: string;
    features: {
      [featureId: string]: string | boolean | number; // Value for this product's feature
    };
    primary?: boolean;
  };

  type Props = {
    features: Feature[];
    products: Product[];
    showHeader?: boolean;
    showDescription?: boolean;
    class?: string;
    headerClass?: string;
    featureClass?: string;
    productClass?: string;
    valueClass?: string;
    primaryProductClass?: string;
  } & HTMLAttributes<HTMLDivElement>;

  let {
    features = [],
    products = [],
    showHeader = true,
    showDescription = false,
    class: className = '',
    headerClass = '',
    featureClass = '',
    productClass = '',
    valueClass = '',
    primaryProductClass = 'ring-2 ring-blue-500 ring-offset-2',
    ...restProps
  }: Props = $props();
</script>

<div class={`overflow-x-auto ${className}`} {...restProps}>
  <table class="min-w-full divide-y divide-gray-200">
    <thead class={`${headerClass} ${showHeader ? '' : 'sr-only'}`}>
      <tr>
        <th class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Features
        </th>
        {#each products as product}
          <th class={`px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider ${
            product.primary ? primaryProductClass : ''
          } ${productClass}`}>
            <div class="flex flex-col items-center">
              <span>{product.name}</span>
              {#if showDescription && product.description}
                <span class="text-xs text-gray-400 mt-1">{product.description}</span>
              {/if}
            </div>
          </th>
        {/each}
      </tr>
    </thead>
    <tbody class="bg-white divide-y divide-gray-200">
      {#each features as feature}
        <tr>
          <td class={`px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 ${featureClass}`}>
            <div>
              <div>{feature.name}</div>
              {#if showDescription && feature.description}
                <div class="text-xs text-gray-500">{feature.description}</div>
              {/if}
            </div>
          </td>
          {#each products as product}
            <td class={`px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center ${valueClass} ${
              product.primary ? primaryProductClass : ''
            } ${productClass}`}>
              {#if typeof product.features[feature.id] === 'boolean'}
                {#if product.features[feature.id]}
                  <span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-100 text-green-800">
                    ✓
                  </span>
                {:else}
                  <span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gray-100 text-gray-800">
                    ✗
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