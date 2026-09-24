<script lang="ts">
  import Story from "$stylist/theme/component/molecule/story/index.svelte";
  import DoodleIcon from "./index.svelte";
</script>

<Story
  title="Spanish DoodleIcon"
  description="Рукописные иконки для осенней афиши."
>
  {#snippet children()}
    <div class="preview">
      <DoodleIcon kind="heart" tone="blue" size={44} />
      <DoodleIcon kind="rays" tone="orange" size={58} />
      <DoodleIcon kind="children" tone="blue" size={58} />
      <DoodleIcon kind="gamepad" tone="blue" size={58} />
      <DoodleIcon kind="music" tone="orange" size={58} />
      <DoodleIcon kind="scissors" tone="green" size={58} />
      <DoodleIcon kind="calendar" tone="blue" size={58} />
      <DoodleIcon kind="clock" tone="orange" size={58} />
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
