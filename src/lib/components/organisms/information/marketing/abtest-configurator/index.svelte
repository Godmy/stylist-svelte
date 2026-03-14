<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { Icon as BaseIcon } from '$stylist/components/atoms';
const TestTube = 'test-tube';
const GitBranch = 'git-branch';
const Users = 'users';
const Target = 'target';
const Play = 'play';
const Pause = 'pause';
const Settings = 'settings';
const BarChart3 = 'bar-chart-3';
const Plus = 'plus';

  import type { IABTestConfiguratorProps } from '$lib/design-system/contracts/information/abtest-configurator';
  import type { ABTest, ABTestVariant } from '$lib/design-system/types/information/abtest-configurator';
  import { ABTestConfiguratorStyleManager } from '$lib/design-system/styles/information/abtest-configurator';
  import { validateABTest, calculateTotalWeight, addABTestVariant, removeABTestVariant, updateABTestVariantWeight, toggleABTestVariantStatus } from '$lib/utils/abtest';

  let {
    initialTest,
    onSave,
    onStart,
    onPause,
    onComplete,
    class: className = '',
    headerClass = '',
    formClass = '',
    variantClass = '',
    footerClass = '',
  }: IABTestConfiguratorProps & HTMLAttributes<HTMLDivElement> = $props();

  let test = $state<ABTest>({
    id: initialTest?.id || `test-${Date.now()}`,
    name: initialTest?.name || 'New A/B Test',
    description: initialTest?.description || '',
    variants: initialTest?.variants || [
      { id: 'a', name: 'Control', description: 'Current version', weight: 50, isActive: true },
      { id: 'b', name: 'Variant', description: 'Modified version', weight: 50, isActive: true }
    ],
    startDate: initialTest?.startDate || new Date(),
    endDate: initialTest?.endDate,
    status: initialTest?.status || 'draft',
    targetAudience: initialTest?.targetAudience || 'All Users',
    successMetrics: initialTest?.successMetrics || ['Conversion Rate', 'Engagement']
  });

  let startDateString = $state('');
  $effect(() => {
    startDateString = test.startDate.toISOString().split('T')[0];
  });
  $effect(() => {
    test.startDate = new Date(startDateString);
  });

  let endDateString = $state('');
  $effect(() => {
    endDateString = test.endDate ? test.endDate.toISOString().split('T')[0] : '';
  });
  $effect(() => {
    test.endDate = endDateString ? new Date(endDateString) : undefined;
  });

  let newVariantName = $state('');
  let newVariantDescription = $state('');
  let newVariantWeight = $state(0);
  let errors = $state<Record<string, string>>({});

  function saveTest() {
    const validationErrors = validateABTest(test);
    errors = validationErrors;
    if (Object.keys(validationErrors).length === 0 && onSave) {
      onSave(test);
    }
  }

  function addVariant() {
    if (!newVariantName.trim()) {
      errors.newVariant = 'Variant name is required';
      return;
    } else {
      errors.newVariant = ''; // Clear error if name is provided
    }

    test = addABTestVariant(test, newVariantName, newVariantDescription, newVariantWeight);
    newVariantName = '';
    newVariantDescription = '';
    newVariantWeight = 0;
  }

  function removeVariant(id: string) {
    test = removeABTestVariant(test, id);
  }

  function updateVariantWeight(id: string, weight: number) {
    test = updateABTestVariantWeight(test, id, weight);
  }

  function toggleVariantStatus(id: string) {
    test = toggleABTestVariantStatus(test, id);
  }

  function startTest() {
    const validationErrors = validateABTest(test);
    errors = validationErrors;
    if (Object.keys(validationErrors).length === 0 && onStart) {
      test.status = 'running';
      test.startDate = new Date();
      onStart(test.id);
    }
  }

  function pauseTest() {
    if (onPause) {
      test.status = 'paused';
      onPause(test.id);
    }
  }

  function completeTest() {
    if (onComplete) {
      test.status = 'completed';
      onComplete(test.id);
    }
  }

  // Calculate total weight - make it reactive with $derived
  const totalWeight = $derived(calculateTotalWeight(test.variants));
</script>

<div class={`bg-[var(--color-background-primary)] rounded-lg shadow border border-[var(--color-border-primary)] overflow-hidden ${className}`}>
  <div class={`border-b px-6 py-5 ${headerClass}`}>
    <div class="flex items-center">
      <BaseIcon name={TestTube} class="h-6 w-6 text-[var(--color-text-secondary)] mr-2" />
      <h3 class="text-lg font-medium text-[var(--color-text-primary)]">A/B Test Configurator</h3>
    </div>
    <p class="mt-1 text-sm text-[var(--color-text-secondary)]">Configure and manage your A/B tests</p>
  </div>

  <div class={`p-6 ${formClass}`}>
    <div class="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
      <div class="sm:col-span-4">
        <label for="test-name" class="block text-sm font-medium text-[var(--color-text-primary)]">Test Name</label>
        <div class="mt-1">
          <input
            type="text"
            id="test-name"
            class={`block w-full rounded-md border-[var(--color-border-primary)] shadow-sm focus:border-[var(--color-primary-500)] focus:ring-blue-500 sm:text-sm ${
              errors.name ? 'border-[var(--color-danger-300)]' : ''
            }`}
            bind:value={test.name}
            placeholder="e.g., Button Color Impact"
          />
          {#if errors.name}
            <p class="mt-2 text-sm text-[var(--color-danger-600)]">{errors.name}</p>
          {/if}
        </div>
      </div>

      <div class="sm:col-span-6">
        <label for="test-description" class="block text-sm font-medium text-[var(--color-text-primary)]">Description</label>
        <div class="mt-1">
          <textarea
            id="test-description"
            rows={3}
            class="block w-full rounded-md border-[var(--color-border-primary)] shadow-sm focus:border-[var(--color-primary-500)] focus:ring-blue-500 sm:text-sm"
            bind:value={test.description}
            placeholder="Describe the purpose and expectations of this test..."
          ></textarea>
        </div>
      </div>

      <div class="sm:col-span-3">
        <label for="start-date" class="block text-sm font-medium text-[var(--color-text-primary)]">Start Date</label>
        <div class="mt-1">
          <input
            type="date"
            id="start-date"
            class="block w-full rounded-md border-[var(--color-border-primary)] shadow-sm focus:border-[var(--color-primary-500)] focus:ring-blue-500 sm:text-sm"
            bind:value={startDateString}
            onchange={(e) => {
              startDateString = (e.target as HTMLInputElement).value;
            }}
          />
        </div>
      </div>

      <div class="sm:col-span-3">
        <label for="end-date" class="block text-sm font-medium text-[var(--color-text-primary)]">End Date (optional)</label>
        <div class="mt-1">
          <input
            type="date"
            id="end-date"
            class="block w-full rounded-md border-[var(--color-border-primary)] shadow-sm focus:border-[var(--color-primary-500)] focus:ring-blue-500 sm:text-sm"
            bind:value={endDateString}
            onchange={(e) => {
              endDateString = (e.target as HTMLInputElement).value;
            }}
          />
        </div>
      </div>

      <div class="sm:col-span-6">
        <div class="flex items-center justify-between">
          <h4 class="text-sm font-medium text-[var(--color-text-primary)]">Variants</h4>
          <span class="text-xs text-[var(--color-text-secondary)]">Total weight: {totalWeight}%</span>
        </div>

        {#if errors.weights}
          <p class="mt-2 text-sm text-[var(--color-danger-600)]">{errors.weights}</p>
        {/if}

        <div class="mt-2 space-y-4">
          {#each test.variants as variant}
            <div class={`border rounded-lg p-4 ${variantClass}`}>
              <div class="flex items-start justify-between">
                <div class="flex items-center">
                  <BaseIcon name={GitBranch} class="h-5 w-5 text-[var(--color-text-tertiary)] mr-2" />
                  <div>
                    <h5 class="font-medium text-[var(--color-text-primary)]">{variant.name}</h5>
                    <p class="text-sm text-[var(--color-text-secondary)]">{variant.description}</p>
                  </div>
                </div>

                <div class="flex items-center space-x-3">
                  <div class="text-right">
                    <label for="weight-{variant.id}" class="block text-xs text-[var(--color-text-secondary)] mb-1">Traffic %</label>
                    <input
                      type="number"
                      id="weight-{variant.id}"
                      min="0"
                      max="100"
                      class="w-20 text-xs border border-[var(--color-border-primary)] rounded px-2 py-1"
                      bind:value={variant.weight}
                      oninput={(e) => updateVariantWeight(variant.id, parseInt((e.target as HTMLInputElement).value) || 0)}
                    />
                  </div>

                  <button
                    type="button"
                    class={`inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm focus:outline-none ${
                      variant.isActive
                        ? 'bg-[var(--color-success-100)] text-[var(--color-success-800)] hover:bg-[var(--color-success-200)]'
                        : 'bg-[var(--color-danger-100)] text-[var(--color-danger-800)] hover:bg-[var(--color-danger-200)]'
                    }`}
                    onclick={() => toggleVariantStatus(variant.id)}
                  >
                    {variant.isActive ? 'Active' : 'Inactive'}
                  </button>

                  <button
                    type="button"
                    class="text-[var(--color-danger-600)] hover:text-[var(--color-danger-900)]"
                    onclick={() => removeVariant(variant.id)}
                    title="Remove variant"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          {/each}
        </div>

        <div class="mt-4 p-4 bg-[var(--color-background-secondary)] rounded-lg">
          <h5 class="text-sm font-medium text-[var(--color-text-primary)] mb-3">Add New Variant</h5>
          <div class="grid grid-cols-1 md:grid-cols-12 gap-3">
            <div class="md:col-span-5">
              <input
                type="text"
                class="block w-full rounded-md border-[var(--color-border-primary)] shadow-sm focus:border-[var(--color-primary-500)] focus:ring-blue-500 sm:text-sm"
                bind:value={newVariantName}
                placeholder="Variant name"
              />
            </div>
            <div class="md:col-span-4">
              <input
                type="number"
                min="0"
                max="100"
                class="block w-full rounded-md border-[var(--color-border-primary)] shadow-sm focus:border-[var(--color-primary-500)] focus:ring-blue-500 sm:text-sm"
                bind:value={newVariantWeight}
                placeholder="% traffic"
              />
            </div>
            <div class="md:col-span-3">
              <button
                type="button"
                class="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-[var(--color-text-inverse)] bg-[var(--color-primary-600)] hover:bg-[var(--color-primary-700)] focus:outline-none"
                onclick={addVariant}
              >
                <BaseIcon name={Plus} class="h-4 w-4 mr-1" />
                Add
              </button>
            </div>
            <div class="md:col-span-12 mt-2">
              <input
                type="text"
                class="block w-full rounded-md border-[var(--color-border-primary)] shadow-sm focus:border-[var(--color-primary-500)] focus:ring-blue-500 sm:text-sm"
                bind:value={newVariantDescription}
                placeholder="Variant description"
              />
            </div>
          </div>
          {#if errors.newVariant}
            <p class="mt-2 text-sm text-[var(--color-danger-600)]">{errors.newVariant}</p>
          {/if}
        </div>
      </div>
    </div>
  </div>

  <div class={`border-t px-6 py-4 ${footerClass}`}>
    <div class="flex items-center justify-between">
      <div class="flex items-center">
        <span class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-[var(--color-primary-100)] text-[var(--color-primary-800)]">
          {test.status.charAt(0).toUpperCase() + test.status.slice(1)}
        </span>
        <span class="ml-3 text-sm text-[var(--color-text-secondary)]">
          <BaseIcon name={Users} class="h-4 w-4 inline mr-1" />
          Targeting: {test.targetAudience || 'All Users'}
        </span>
      </div>

      <div class="flex space-x-3">
        <button
          type="button"
          class="inline-flex items-center px-4 py-2 border border-[var(--color-border-primary)] shadow-sm text-sm font-medium rounded-md text-[var(--color-text-primary)] bg-[var(--color-background-primary)] hover:bg-[var(--color-background-secondary)] focus:outline-none"
          onclick={saveTest}
        >
          <BaseIcon name={Settings} class="h-4 w-4 mr-1" />
          Save Draft
        </button>

        {#if test.status === 'draft' || test.status === 'paused'}
          <button
            type="button"
            class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-[var(--color-text-inverse)] bg-[var(--color-success-600)] hover:bg-[var(--color-success-700)] focus:outline-none"
            onclick={startTest}
          >
            <BaseIcon name={Play} class="h-4 w-4 mr-1" />
            Start Test
          </button>
        {/if}

        {#if test.status === 'running'}
          <button
            type="button"
            class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-[var(--color-text-inverse)] bg-yellow-600 hover:bg-yellow-700 focus:outline-none"
            onclick={pauseTest}
          >
            <BaseIcon name={Pause} class="h-4 w-4 mr-1" />
            Pause Test
          </button>
          <button
            type="button"
            class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-[var(--color-text-inverse)] bg-[var(--color-primary-600)] hover:bg-[var(--color-primary-700)] focus:outline-none"
            onclick={completeTest}
          >
            <BaseIcon name={BarChart3} class="h-4 w-4 mr-1" />
            Complete Test
          </button>
        {/if}
      </div>
    </div>
  </div>
</div>





