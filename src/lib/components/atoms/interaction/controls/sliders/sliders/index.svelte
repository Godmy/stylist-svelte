<script lang="ts">
  import Tick from '../tick/index.svelte';
  let { class: className = '' }: { class?: string } = $props();
</script>

<Tick class={className} />



