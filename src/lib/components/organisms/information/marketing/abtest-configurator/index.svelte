<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { TestTube, GitBranch, Users, Target, Play, Pause, Settings, BarChart3, Plus } from 'lucide-svelte';
  import type { IABTestConfiguratorProps, ABTest, ABTestVariant } from '$lib/design-system/props/abtest-configurator';
  import { ABTestConfiguratorStyleManager } from '$lib/design-system/styles/abtest-configurator';
  import { validateABTest, calculateTotalWeight, addABTestVariant, removeABTestVariant, updateABTestVariantWeight, toggleABTestVariantStatus } from '$lib/design-system/state/abtest-configurator';

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

<div class={`bg-white rounded-lg shadow border border-gray-200 overflow-hidden ${className}`}>
  <div class={`border-b px-6 py-5 ${headerClass}`}>
    <div class="flex items-center">
      <TestTube class="h-6 w-6 text-gray-500 mr-2" />
      <h3 class="text-lg font-medium text-gray-900">A/B Test Configurator</h3>
    </div>
    <p class="mt-1 text-sm text-gray-500">Configure and manage your A/B tests</p>
  </div>

  <div class={`p-6 ${formClass}`}>
    <div class="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
      <div class="sm:col-span-4">
        <label for="test-name" class="block text-sm font-medium text-gray-700">Test Name</label>
        <div class="mt-1">
          <input
            type="text"
            id="test-name"
            class={`block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm ${
              errors.name ? 'border-red-300' : ''
            }`}
            bind:value={test.name}
            placeholder="e.g., Button Color Impact"
          />
          {#if errors.name}
            <p class="mt-2 text-sm text-red-600">{errors.name}</p>
          {/if}
        </div>
      </div>

      <div class="sm:col-span-6">
        <label for="test-description" class="block text-sm font-medium text-gray-700">Description</label>
        <div class="mt-1">
          <textarea
            id="test-description"
            rows={3}
            class="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            bind:value={test.description}
            placeholder="Describe the purpose and expectations of this test..."
          ></textarea>
        </div>
      </div>

      <div class="sm:col-span-3">
        <label for="start-date" class="block text-sm font-medium text-gray-700">Start Date</label>
        <div class="mt-1">
          <input
            type="date"
            id="start-date"
            class="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            bind:value={startDateString}
            onchange={(e) => {
              startDateString = (e.target as HTMLInputElement).value;
            }}
          />
        </div>
      </div>

      <div class="sm:col-span-3">
        <label for="end-date" class="block text-sm font-medium text-gray-700">End Date (optional)</label>
        <div class="mt-1">
          <input
            type="date"
            id="end-date"
            class="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            bind:value={endDateString}
            onchange={(e) => {
              endDateString = (e.target as HTMLInputElement).value;
            }}
          />
        </div>
      </div>

      <div class="sm:col-span-6">
        <div class="flex items-center justify-between">
          <h4 class="text-sm font-medium text-gray-700">Variants</h4>
          <span class="text-xs text-gray-500">Total weight: {totalWeight}%</span>
        </div>

        {#if errors.weights}
          <p class="mt-2 text-sm text-red-600">{errors.weights}</p>
        {/if}

        <div class="mt-2 space-y-4">
          {#each test.variants as variant}
            <div class={`border rounded-lg p-4 ${variantClass}`}>
              <div class="flex items-start justify-between">
                <div class="flex items-center">
                  <GitBranch class="h-5 w-5 text-gray-400 mr-2" />
                  <div>
                    <h5 class="font-medium text-gray-900">{variant.name}</h5>
                    <p class="text-sm text-gray-500">{variant.description}</p>
                  </div>
                </div>

                <div class="flex items-center space-x-3">
                  <div class="text-right">
                    <label for="weight-{variant.id}" class="block text-xs text-gray-500 mb-1">Traffic %</label>
                    <input
                      type="number"
                      id="weight-{variant.id}"
                      min="0"
                      max="100"
                      class="w-20 text-xs border border-gray-300 rounded px-2 py-1"
                      bind:value={variant.weight}
                      oninput={(e) => updateVariantWeight(variant.id, parseInt((e.target as HTMLInputElement).value) || 0)}
                    />
                  </div>

                  <button
                    type="button"
                    class={`inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm focus:outline-none ${
                      variant.isActive
                        ? 'bg-green-100 text-green-800 hover:bg-green-200'
                        : 'bg-red-100 text-red-800 hover:bg-red-200'
                    }`}
                    onclick={() => toggleVariantStatus(variant.id)}
                  >
                    {variant.isActive ? 'Active' : 'Inactive'}
                  </button>

                  <button
                    type="button"
                    class="text-red-600 hover:text-red-900"
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

        <div class="mt-4 p-4 bg-gray-50 rounded-lg">
          <h5 class="text-sm font-medium text-gray-700 mb-3">Add New Variant</h5>
          <div class="grid grid-cols-1 md:grid-cols-12 gap-3">
            <div class="md:col-span-5">
              <input
                type="text"
                class="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                bind:value={newVariantName}
                placeholder="Variant name"
              />
            </div>
            <div class="md:col-span-4">
              <input
                type="number"
                min="0"
                max="100"
                class="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                bind:value={newVariantWeight}
                placeholder="% traffic"
              />
            </div>
            <div class="md:col-span-3">
              <button
                type="button"
                class="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
                onclick={addVariant}
              >
                <Plus class="h-4 w-4 mr-1" />
                Add
              </button>
            </div>
            <div class="md:col-span-12 mt-2">
              <input
                type="text"
                class="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                bind:value={newVariantDescription}
                placeholder="Variant description"
              />
            </div>
          </div>
          {#if errors.newVariant}
            <p class="mt-2 text-sm text-red-600">{errors.newVariant}</p>
          {/if}
        </div>
      </div>
    </div>
  </div>

  <div class={`border-t px-6 py-4 ${footerClass}`}>
    <div class="flex items-center justify-between">
      <div class="flex items-center">
        <span class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
          {test.status.charAt(0).toUpperCase() + test.status.slice(1)}
        </span>
        <span class="ml-3 text-sm text-gray-500">
          <Users class="h-4 w-4 inline mr-1" />
          Targeting: {test.targetAudience || 'All Users'}
        </span>
      </div>

      <div class="flex space-x-3">
        <button
          type="button"
          class="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"
          onclick={saveTest}
        >
          <Settings class="h-4 w-4 mr-1" />
          Save Draft
        </button>

        {#if test.status === 'draft' || test.status === 'paused'}
          <button
            type="button"
            class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none"
            onclick={startTest}
          >
            <Play class="h-4 w-4 mr-1" />
            Start Test
          </button>
        {/if}

        {#if test.status === 'running'}
          <button
            type="button"
            class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none"
            onclick={pauseTest}
          >
            <Pause class="h-4 w-4 mr-1" />
            Pause Test
          </button>
          <button
            type="button"
            class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
            onclick={completeTest}
          >
            <BarChart3 class="h-4 w-4 mr-1" />
            Complete Test
          </button>
        {/if}
      </div>
    </div>
  </div>
</div>
