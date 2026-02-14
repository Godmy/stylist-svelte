<script lang="ts">
  import KPIIndicator from './index.svelte';

  let {
    variant = 'primary'
  } = $props();
</script>

<div class="p-4">
  <h1 class="text-lg font-semibold mb-4">KPIIndicator Component</h1>

  <!-- Default KPI Indicator -->
  <div class="mb-6 p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">Default KPI Indicator</h2>
    <KPIIndicator
      title="Sales"
      currentValue={750}
      targetValue={1000}
      unit="$"
      status="on-track"
      trend="up"
      trendValue={12}
      size="md"
    />
  </div>

  <!-- Different Statuses -->
  <div class="mb-6 p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">Different Statuses</h2>
    <div class="flex flex-wrap gap-4">
      <div>
        <h3 class="text-sm font-medium mb-1">On Track</h3>
        <KPIIndicator
          title="Revenue"
          currentValue={850}
          targetValue={1000}
          unit="$"
          status="on-track"
          trend="up"
          trendValue={5}
          size="md"
        />
      </div>
      <div>
        <h3 class="text-sm font-medium mb-1">At Risk</h3>
        <KPIIndicator
          title="Users"
          currentValue={250}
          targetValue={1000}
          unit=""
          status="at-risk"
          trend="down"
          trendValue={10}
          size="md"
        />
      </div>
      <div>
        <h3 class="text-sm font-medium mb-1">Exceeded</h3>
        <KPIIndicator
          title="Goals"
          currentValue={1200}
          targetValue={1000}
          unit=""
          status="exceeded"
          trend="up"
          trendValue={20}
          size="md"
        />
      </div>
    </div>
  </div>

  <!-- Different Sizes -->
  <div class="mb-6 p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">Different Sizes</h2>
    <div class="flex items-end gap-6">
      <div>
        <h3 class="text-sm font-medium mb-1">Small</h3>
        <KPIIndicator
          title="Small"
          currentValue={50}
          targetValue={100}
          unit="%"
          status="on-track"
          trend="up"
          trendValue={3}
          size="sm"
        />
      </div>
      <div>
        <h3 class="text-sm font-medium mb-1">Medium</h3>
        <KPIIndicator
          title="Medium"
          currentValue={50}
          targetValue={100}
          unit="%"
          status="on-track"
          trend="up"
          trendValue={3}
          size="md"
        />
      </div>
      <div>
        <h3 class="text-sm font-medium mb-1">Large</h3>
        <KPIIndicator
          title="Large"
          currentValue={50}
          targetValue={100}
          unit="%"
          status="on-track"
          trend="up"
          trendValue={3}
          size="lg"
        />
      </div>
    </div>
  </div>
</div>
