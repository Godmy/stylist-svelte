<script lang="ts">
  import Story from "$stylist/theme/component/molecule/story/index.svelte";
  import AutumnSchedule from "./index.svelte";
</script>

<Story
  title="Spanish AutumnSchedule"
  description="Карточка расписания осеннего урока."
>
  {#snippet children()}
    <div class="preview">
      <AutumnSchedule />
    </div>
  {/snippet}
</Story>

<style>
  .preview {
    container-type: inline-size;
    max-width: 22rem;
    padding: 1rem;
    background: #fff8ec;
  }
</style>
