<script lang="ts">
  import Rating from './Rating.svelte';
  import { onMount } from 'svelte';

  let rating1 = 3;
  let rating2 = 0;
  let rating3 = 4.5;
</script>

<div class="p-4 space-y-6">
  <h1 class="text-xl font-bold mb-4">Rating Component</h1>
  
  <div class="space-y-4">
    <div>
      <h2 class="font-semibold mb-2">Interactive</h2>
      <Rating bind:rating={rating1} />
      <p class="mt-2">Выбрано: {rating1} звезд</p>
    </div>
    
    <div>
      <h2 class="font-semibold mb-2">Default (Unrated)</h2>
      <Rating bind:rating={rating2} />
      <p class="mt-2">Выбрано: {rating2} звезд</p>
    </div>
    
    <div>
      <h2 class="font-semibold mb-2">Readonly</h2>
      <Rating rating={4} readonly />
    </div>
    
    <div>
      <h2 class="font-semibold mb-2">Disabled</h2>
      <Rating rating={2} disabled />
    </div>
    
    <div>
      <h2 class="font-semibold mb-2">Small Size</h2>
      <Rating rating={3} size="sm" />
    </div>
    
    <div>
      <h2 class="font-semibold mb-2">Large Size</h2>
      <Rating rating={5} size="lg" />
    </div>
  </div>
</div>