<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';
  import FilterBar from './index.svelte';

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
    { id: 'beta', label: 'Beta Features', description: 'Show experimental features', checked: true },
    { id: 'alerts', label: 'Alerts Only' },
    { id: 'owners', label: 'My Items' }
  ];

  const tagFilters = [
    { id: 'design', label: 'Design', active: true },
    { id: 'web', label: 'Web' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'analytics', label: 'Analytics' }
  ];

  const rangeFilter = {
    id: 'priority',
    label: 'Priority',
    min: 0,
    max: 100,
    step: 5,
    value: 45,
    unit: 'points'
  };
</script>

<Story
  id="organisms-filter-bar"
  title="Organisms / Interaction / Controls / FilterBar"
  component={FilterBar}
  category="Organisms/Interaction/Controls"
  description="Filter bar component combining switches, tags, and numeric range controls."
  tags={['filters', 'toolbar']}
  controls={controls}
>
  {#snippet children(values: any)}
    <div class="sb-organisms-filter-bar">
      <FilterBar
        toggles={values.showToggles ? toggles : []}
        tags={values.showTags ? tagFilters : []}
        range={values.showRange ? rangeFilter : undefined}
      />
    </div>
  {/snippet}
</Story>


