<script lang="ts">
  import LegendItem from './LegendItem.svelte';
  import type { ILegendItemProps } from './types';

  let label = $state('Sample Legend Item');
  let type: ILegendItemProps['type'] = $state('object');
  let count = $state(5);
  let variant: ILegendItemProps['variant'] = $state('default');
  let active = $state(false);
  let hasClickHandler = $state(true);

  let handleClick = () => {
    console.log('Legend item clicked!');
  };
</script>

<div class="p-8">
  <h1>LegendItem Story</h1>

  <div class="mb-4 space-y-2">
    <div>
      <label class="block mb-1" for="label-input">Label:</label>
      <input
        id="label-input"
        type="text"
        bind:value={label}
        class="border rounded p-1 w-full"
      />
    </div>

    <div>
      <label class="block mb-1" for="type-select">Type:</label>
      <select
        id="type-select"
        bind:value={type}
        class="border rounded p-1 w-full"
      >
        <option value="object">Object</option>
        <option value="interface">Interface</option>
        <option value="union">Union</option>
        <option value="enum">Enum</option>
        <option value="scalar">Scalar</option>
        <option value="input">Input</option>
      </select>
    </div>

    <div>
      <label class="block mb-1" for="count-input">Count: {count}</label>
      <input
        id="count-input"
        type="number"
        bind:value={count}
        class="border rounded p-1 w-full"
        min="0"
      />
    </div>

    <div class="flex items-center gap-2">
      <input
        type="checkbox"
        bind:checked={active}
        id="active-toggle"
      />
      <label for="active-toggle">Active</label>
    </div>

    <div class="flex items-center gap-2">
      <input
        type="checkbox"
        bind:checked={hasClickHandler}
        id="click-handler-toggle"
      />
      <label for="click-handler-toggle">Has Click Handler</label>
    </div>

    <div>
      <label class="block mb-1" for="variant-select">Variant:</label>
      <select
        id="variant-select"
        bind:value={variant}
        class="border rounded p-1 w-full"
      >
        <option value="default">Default</option>
        <option value="primary">Primary</option>
        <option value="secondary">Secondary</option>
        <option value="success">Success</option>
        <option value="warning">Warning</option>
        <option value="danger">Danger</option>
      </select>
    </div>
  </div>

  <div class="space-y-2">
    <LegendItem
      {label}
      {type}
      {count}
      {variant}
      {active}
      onClick={hasClickHandler ? handleClick : undefined}
    />

    <!-- Examples of different types -->
    <LegendItem
      label="User Object"
      type="object"
      count={12}
      active={true}
    />
    <LegendItem
      label="API Interface"
      type="interface"
      count={3}
      variant="primary"
    />
    <LegendItem
      label="Union Type"
      type="union"
      variant="success"
    />
  </div>
</div>