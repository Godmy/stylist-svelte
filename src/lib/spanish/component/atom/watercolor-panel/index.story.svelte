<script lang="ts">
  import Story from "$stylist/theme/component/molecule/story/index.svelte";
  import WatercolorPanel from "./index.svelte";
</script>

<Story
  title="Spanish WatercolorPanel"
  description="Мягкая акварельная панель для блоков лендинга."
>
  {#snippet children()}
    <div class="preview">
      <WatercolorPanel tone="blue" class="panel">
        <p>Голубая панель</p>
      </WatercolorPanel>
      <WatercolorPanel tone="cream" class="panel">
        <p>Кремовая панель</p>
      </WatercolorPanel>
    </div>
  {/snippet}
</Story>

<style>
  .preview {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
    gap: 1rem;
    padding: 1rem;
  }

  .panel {
    padding: 1.25rem;
    color: #07518c;
    font-weight: 800;
  }

  p {
    margin: 0;
  }
</style>
