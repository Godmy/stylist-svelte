<script lang="ts">
  import GradientBackground from './index.svelte';

  let {
    variant = 'static',
    colors = ['#667eea', '#764ba2'],
    speed = 10,
    direction = 'horizontal',
    class: className = ''
  } = $props();

  // Define prop objects for each example
  const dynamicDiagonalProps = {
    variant: 'dynamic' as const,
    colors: ['#ff6b6b', '#4ecdc4', '#45b7d1'],
    speed: 20,
    direction: 'diagonal' as const
  };

  const staticHorizontalProps = {
    variant: 'static' as const,
    colors: ['#667eea', '#764ba2'],
    direction: 'horizontal' as const
  };

  const staticRadialProps = {
    variant: 'static' as const,
    colors: ['#f093fb', '#f5576c'],
    direction: 'radial' as const
  };

  const withContentProps = {
    variant: 'dynamic' as const,
    colors: ['#43e97b', '#38f9d7'],
    speed: 30,
    direction: 'diagonal' as const
  };
</script>

<!-- Example 1: Dynamic Diagonal -->
<div class="h-64 relative mb-8">
  <h3 class="text-lg font-semibold mb-2">Dynamic Diagonal</h3>
  <GradientBackground {...dynamicDiagonalProps}>
    <div class="absolute inset-0 flex items-center justify-center">
      <p class="text-white font-semibold">Dynamic Diagonal Gradient</p>
    </div>
  </GradientBackground>
</div>

<!-- Example 2: Static Horizontal -->
<div class="h-64 relative mb-8">
  <h3 class="text-lg font-semibold mb-2">Static Horizontal</h3>
  <GradientBackground {...staticHorizontalProps}>
    <div class="absolute inset-0 flex items-center justify-center">
      <p class="text-white font-semibold">Static Horizontal Gradient</p>
    </div>
  </GradientBackground>
</div>

<!-- Example 3: Static Radial -->
<div class="h-64 relative mb-8">
  <h3 class="text-lg font-semibold mb-2">Static Radial</h3>
  <GradientBackground {...staticRadialProps}>
    <div class="absolute inset-0 flex items-center justify-center">
      <p class="text-white font-semibold">Static Radial Gradient</p>
    </div>
  </GradientBackground>
</div>

<!-- Example 4: With Content -->
<div class="h-64 relative">
  <h3 class="text-lg font-semibold mb-2">With Content</h3>
  <GradientBackground {...withContentProps}>
    <div class="p-8 text-center flex items-center justify-center h-full">
      <h2 class="text-3xl font-bold text-white">Content Over Gradient</h2>
    </div>
  </GradientBackground>
</div>