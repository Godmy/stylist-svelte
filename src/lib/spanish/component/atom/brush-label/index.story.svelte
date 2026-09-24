<script lang="ts">
  import Story from "$stylist/theme/component/molecule/story/index.svelte";
  import BrushLabel from "./index.svelte";
</script>

<Story
  title="Spanish BrushLabel"
  description="Органичная текстовая плашка-мазок."
>
  {#snippet children()}
    <div class="preview">
      <BrushLabel text="Тематический урок" rotate={-3} />
      <BrushLabel
        text="Предварительная запись обязательна!"
        tone="orange"
        rotate={-4}
      />
      <BrushLabel text="Только суббота" tone="blue" rotate={2} />
    </div>
  {/snippet}
</Story>

<style>
  .preview {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
  }
</style>
