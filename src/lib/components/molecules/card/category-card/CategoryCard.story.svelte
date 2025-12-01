<script lang="ts">
  import CategoryCard from './CategoryCard.svelte';

  let {
    variant = 'primary'
  } = $props();
</script>

<div id="molecules-category-card">
  <h1>CategoryCard</h1>
  <p>Card for component categories (for /stylist page)</p>

  <h2>Controls Category</h2>
  <div class="p-4 border rounded-lg max-w-sm">
    <CategoryCard
      title="Controls"
      icon="sliders"
      count={15}
      description="Buttons, Inputs, Toggles, Sliders"
      link="/stylist/controls"
      examples={['Button', 'Input', 'Switch']} />
  </div>

  <h2>Charts Category</h2>
  <div class="p-4 border rounded-lg max-w-sm">
    <CategoryCard
      title="Charts & Visualization"
      icon="bar-chart"
      count={23}
      description="Line, Bar, Pie, Donut, Heatmap"
      link="/stylist/charts"
      examples={['LineChart', 'BarChart', 'PieChart']} />
  </div>

  <h2>Tables Category</h2>
  <div class="p-4 border rounded-lg max-w-sm">
    <CategoryCard
      title="Tables & Data Display"
      icon="table"
      count={18}
      description="DataTable, TreeView, VirtualList"
      link="/stylist/tables"
      examples={['DataTable', 'TreeView', 'VirtualList']} />
  </div>
</div>