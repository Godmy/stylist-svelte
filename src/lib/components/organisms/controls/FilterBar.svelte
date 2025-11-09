<script lang="ts">
  import Switch from '$lib/components/atoms/controls/toggles/Switch.svelte';
  import Tag from '$lib/components/atoms/typography/elements/Tag.svelte';
  import RangeSlider from '$lib/components/atoms/controls/sliders/RangeSlider.svelte';

  type ToggleFilter = {
    id: string;
    label: string;
    description?: string;
    checked?: boolean;
  };

  type TagFilter = {
    id: string;
    label: string;
    active?: boolean;
  };

  type RangeFilter = {
    id: string;
    label: string;
    min: number;
    max: number;
    step?: number;
    value?: number;
    unit?: string;
  };

  type Props = {
    toggles?: ToggleFilter[];
    tags?: TagFilter[];
    range?: RangeFilter;
    onClear?: () => void;
    class?: string;
  };

  let {
    toggles = [],
    tags = [],
    range,
    onClear,
    class: className = ''
  }: Props = $props();

  let toggleState = $state<Record<string, boolean>>(
    toggles.reduce((acc, current) => {
      acc[current.id] = !!current.checked;
      return acc;
    }, {} as Record<string, boolean>)
  );

  let activeTags = $state<Set<string>>(
    new Set(tags.filter((tag) => tag.active).map((tag) => tag.id))
  );

  let rangeValue = $state(range?.value ?? range?.min ?? 0);

  const hasActiveFilters = $derived(() => {
    const togglesActive = Object.values(toggleState).some(Boolean);
    const tagsActive = activeTags.size > 0;
    const rangeActive = range ? rangeValue !== range.min : false;
    return togglesActive || tagsActive || rangeActive;
  });

  function toggleTag(id: string) {
    const next = new Set(activeTags);
    if (next.has(id)) {
      next.delete(id);
    } else {
      next.add(id);
    }
    activeTags = next;
  }

  function clearFilters() {
    toggleState = Object.fromEntries(Object.keys(toggleState).map((key) => [key, false]));
    activeTags = new Set();
    if (range) {
      rangeValue = range.min;
    }
    onClear?.();
  }
</script>

<section class="rounded-xl border border-gray-200 bg-white p-4 shadow-sm {className}">
  <div class="flex flex-wrap items-center gap-2">
    <h3 class="text-sm font-semibold uppercase tracking-wide text-gray-500">
      Фильтры
    </h3>
    {#if hasActiveFilters()}
      <span class="rounded-full bg-indigo-50 px-2 py-0.5 text-xs font-medium text-indigo-600">
        Активно
      </span>
    {/if}
    <button
      type="button"
      class="ml-auto text-sm font-medium text-indigo-600 hover:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded"
      onclick={clearFilters}
    >
      Сбросить
    </button>
  </div>

  {#if toggles.length > 0}
    <div class="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {#each toggles as toggle (toggle.id)}
        <div class="rounded-lg border border-gray-200 px-3 py-2">
          <Switch
            id={`filter-toggle-${toggle.id}`}
            label={toggle.label}
            description={toggle.description}
            size="sm"
            bind:checked={toggleState[toggle.id]}
          />
        </div>
      {/each}
    </div>
  {/if}

  {#if tags.length > 0}
    <div class="mt-4 flex flex-wrap gap-2">
      {#each tags as tag (tag.id)}
        <Tag
          text={tag.label}
          variant={activeTags.has(tag.id) ? 'primary' : 'neutral'}
          closable={false}
          class="cursor-pointer"
          on:click={() => toggleTag(tag.id)}
        />
      {/each}
    </div>
  {/if}

  {#if range}
    <div class="mt-4">
      <RangeSlider
        id={`filter-range-${range.id}`}
        label={range.label}
        min={range.min}
        max={range.max}
        step={range.step ?? 1}
        bind:value={rangeValue}
        description={range.unit ? `Единицы измерения: ${range.unit}` : undefined}
      />
    </div>
  {/if}
</section>
