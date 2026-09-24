<script lang="ts">
  import Story from "$stylist/theme/component/molecule/story/index.svelte";
  import HeroTitleGroup from "./index.svelte";
</script>

<Story
  title="Spanish HeroTitleGroup"
  description="Заголовочная группа Otoño / El otoño."
>
  {#snippet children()}
    <div class="preview">
      <HeroTitleGroup />
    </div>
  {/snippet}
</Story>

<style>
  .preview {
    container-type: inline-size;
    max-width: 32rem;
    padding: 1rem;
    background: #fff8ec;
  }
</style>
