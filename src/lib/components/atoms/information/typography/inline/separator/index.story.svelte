<script lang="ts">
  import Separator from './index.svelte';

  // More on args: https://storybook.js.org/docs/7.0/svelte/writing-stories/args
  const args: {
    orientation: 'horizontal' | 'vertical';
    decorative: boolean;
    class: string;
  } = {
    orientation: 'horizontal',
    decorative: false,
    class: '',
  };

  const controls = {
    orientation: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
    },
    decorative: { control: { type: 'boolean' } },
    class: { control: { type: 'text' } },
  };
</script>

<!-- Default story -->
<div class="p-4">
  <div class="space-y-4">
    <p>Content before separator</p>
    <Separator 
      orientation={args.orientation}
      decorative={args.decorative}
      class={args.class}
    />
    <p>Content after separator</p>
  </div>
</div>

<!-- Horizontal separator -->
<div class="p-4">
  <h3 class="text-lg font-medium mb-4">Horizontal Separator</h3>
  <div class="space-y-2">
    <p>Top section</p>
    <Separator orientation="horizontal" class="my-2" />
    <p>Bottom section</p>
  </div>
</div>

<!-- Vertical separator -->
<div class="p-4 flex">
  <h3 class="text-lg font-medium mr-4">Vertical Separator</h3>
  <div class="flex items-center space-x-4">
    <p>Left section</p>
    <Separator orientation="vertical" class="h-12" />
    <p>Right section</p>
  </div>
</div>

<!-- Decorative vs semantic -->
<div class="p-4 space-y-6">
  <h3 class="text-lg font-medium">Semantic Separator</h3>
  <p>Uses <code>&lt;hr&gt;</code> element</p>
  <Separator orientation="horizontal" decorative={false} />
  <p>After semantic separator</p>
  
  <h3 class="text-lg font-medium mt-6">Decorative Separator</h3>
  <p>Uses <code>&lt;div&gt;</code> element</p>
  <Separator orientation="horizontal" decorative={true} />
  <p>After decorative separator</p>
</div>

