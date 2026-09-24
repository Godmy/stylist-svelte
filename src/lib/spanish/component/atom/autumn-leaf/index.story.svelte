<script lang="ts">
  import Story from "$stylist/theme/component/molecule/story/index.svelte";
  import AutumnLeaf from "./index.svelte";
</script>

<Story
  title="Spanish AutumnLeaf"
  description="Декоративный SVG-лист для осеннего лендинга."
>
  {#snippet children()}
    <div class="preview">
      <AutumnLeaf variant="maple" tone="orange" size={72} rotate={-12} />
      <AutumnLeaf variant="oval" tone="yellow" size={64} rotate={18} />
      <AutumnLeaf variant="small" tone="russet" size={52} rotate={36} />
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
