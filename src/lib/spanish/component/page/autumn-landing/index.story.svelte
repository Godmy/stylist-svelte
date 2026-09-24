<script lang="ts">
  import Story from "$stylist/theme/component/molecule/story/index.svelte";
  import AutumnLanding from "./index.svelte";
</script>

<Story
  title="Spanish Autumn Landing"
  description="Осенний постер-лендинг для детского тематического урока испанского языка."
  preview="fullscreen"
>
  {#snippet children()}
    <AutumnLanding />
  {/snippet}
</Story>
