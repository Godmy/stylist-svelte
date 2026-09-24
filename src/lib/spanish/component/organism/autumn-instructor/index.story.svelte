<script lang="ts">
  import Story from "$stylist/theme/component/molecule/story/index.svelte";
  import AutumnInstructor from "./index.svelte";
</script>

<Story
  title="Spanish AutumnInstructor"
  description="Карточка преподавателя осеннего урока."
>
  {#snippet children()}
    <div class="preview">
      <AutumnInstructor />
    </div>
  {/snippet}
</Story>

<style>
  .preview {
    container-type: inline-size;
    max-width: 34rem;
    padding: 1rem;
    background: #fff8ec;
  }
</style>
