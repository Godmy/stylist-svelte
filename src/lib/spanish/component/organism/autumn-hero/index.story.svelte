<script lang="ts">
  import Story from "$stylist/theme/component/molecule/story/index.svelte";
  import AutumnHero from "./index.svelte";
</script>

<Story
  title="Spanish AutumnHero"
  description="Верхняя hero-секция осеннего урока."
>
  {#snippet children()}
    <div class="preview">
      <AutumnHero />
    </div>
  {/snippet}
</Story>

<style>
  .preview {
    container-type: inline-size;
    padding: 1.5rem;
    background: #fff8ec;
  }
</style>
