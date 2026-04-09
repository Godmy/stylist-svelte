<script lang="ts">
  import Transformable from '$stylist/animation/svelte/atom/motion/transformable/index.svelte';
  export { Transformable };
</script>

<!-- 
  Реэкспорт Transformable из animation домена
  для обратной совместимости
-->
<svelte:options accessors={true} />
