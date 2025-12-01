<script lang="ts">
  import { atoms } from '$lib';

  const { ListItemMarker } = atoms;

  // More on args: https://storybook.js.org/docs/7.0/svelte/writing-stories/args
  const args: {
    type: 'bullet' | 'number' | 'icon';
    value: string;
    color: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'gray';
    size: 'sm' | 'md' | 'lg';
    class: string;
  } = {
    type: 'bullet',
    value: '',
    color: 'gray',
    size: 'md',
    class: '',
  };

  const controls = {
    type: {
      control: { type: 'select' },
      options: ['bullet', 'number', 'icon'],
    },
    value: { control: { type: 'text' } },
    color: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'success', 'warning', 'danger', 'info', 'gray'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    class: { control: { type: 'text' } },
  };
</script>

<!-- Default story -->
<div class="p-4 flex items-center">
  <ListItemMarker 
    type={args.type}
    value={args.value}
    color={args.color}
    size={args.size}
    class={args.class}
  />
</div>

<!-- Different marker types -->
<div class="p-4 space-y-4">
  <h3 class="text-lg font-medium">Bullet Marker</h3>
  <div class="flex items-center space-x-2">
    <ListItemMarker type="bullet" color="gray" size="sm" />
    <ListItemMarker type="bullet" color="gray" size="md" />
    <ListItemMarker type="bullet" color="gray" size="lg" />
  </div>
</div>

<div class="p-4 space-y-4">
  <h3 class="text-lg font-medium">Number Marker</h3>
  <div class="flex items-center space-x-2">
    <ListItemMarker type="number" value="1" color="primary" size="sm" />
    <ListItemMarker type="number" value="2" color="primary" size="md" />
    <ListItemMarker type="number" value="3" color="primary" size="lg" />
  </div>
</div>

<div class="p-4 space-y-4">
  <h3 class="text-lg font-medium">Icon Marker</h3>
  <div class="flex items-center space-x-2">
    <ListItemMarker type="icon" value="check" color="success" size="sm" />
    <ListItemMarker type="icon" value="check" color="success" size="md" />
    <ListItemMarker type="icon" value="check" color="success" size="lg" />
  </div>
</div>

<div class="p-4 space-y-4">
  <h3 class="text-lg font-medium">Color Variations</h3>
  <div class="flex items-center space-x-2">
    <ListItemMarker type="bullet" color="primary" size="md" />
    <ListItemMarker type="bullet" color="secondary" size="md" />
    <ListItemMarker type="bullet" color="success" size="md" />
    <ListItemMarker type="bullet" color="warning" size="md" />
    <ListItemMarker type="bullet" color="danger" size="md" />
    <ListItemMarker type="bullet" color="info" size="md" />
    <ListItemMarker type="bullet" color="gray" size="md" />
  </div>
</div>
