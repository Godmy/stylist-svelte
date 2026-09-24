<script lang="ts">
  import Story from "$stylist/theme/component/molecule/story/index.svelte";
  import AutumnProgram from "./index.svelte";
</script>

<Story
  title="Spanish AutumnProgram"
  description="Блок программы осеннего урока."
>
  {#snippet children()}
    <div class="preview">
      <AutumnProgram />
    </div>
  {/snippet}
</Story>

<style>
  .preview {
    container-type: inline-size;
    max-width: 48rem;
    padding: 1rem;
    background: #fff8ec;
  }
</style>
