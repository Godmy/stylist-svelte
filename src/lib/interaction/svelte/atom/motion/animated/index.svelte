<script lang="ts">
  import Animated from '$stylist/animation/svelte/atom/motion/animated/index.svelte';
  export { Animated };
</script>

<!-- 
  Реэкспорт Animated из animation домена
  для обратной совместимости
-->
<svelte:options accessors={true} />
