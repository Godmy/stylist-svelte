<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';
  import FilterBar from './FilterBar.svelte';

  type FilterBarStoryProps = {
    showToggles: boolean;
    showTags: boolean;
    showRange: boolean;
  };

  const controls: ControlConfig[] = [
    { name: 'showToggles', type: 'boolean', defaultValue: true },
    { name: 'showTags', type: 'boolean', defaultValue: true },
    { name: 'showRange', type: 'boolean', defaultValue: true }
  ];

  const toggles = [
    { id: 'beta', label: 'Бета-функции', description: 'Показывать экспериментальные возможности', checked: true },
    { id: 'alerts', label: 'Только с алертами' },
    { id: 'owners', label: 'Только мои' }
  ];

  const tagFilters = [
    { id: 'design', label: 'Design', active: true },
    { id: 'web', label: 'Web' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'analytics', label: 'Analytics' }
  ];

  const rangeFilter = {
    id: 'priority',
    label: 'Приоритет',
    min: 0,
    max: 100,
    step: 5,
    value: 45,
    unit: 'баллов'
  };
</script>

<Story
  id="molecules-filter-bar"
  title="FilterBar"
  component={FilterBar}
  category="Molecules"
  description="Панель фильтров, объединяющая переключатели, теги и числовой диапазон."
  tags={['filters', 'toolbar']}
  controls={controls}
>
  {#snippet children(props: FilterBarStoryProps)}
    <FilterBar
      toggles={props.showToggles ? toggles : []}
      tags={props.showTags ? tagFilters : []}
      range={props.showRange ? rangeFilter : undefined}
    />
  {/snippet}
</Story>
