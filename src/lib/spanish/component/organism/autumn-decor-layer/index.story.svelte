<script lang="ts">
  import Story from "$stylist/theme/component/molecule/story/index.svelte";
  import AutumnDecorLayer from "./index.svelte";
</script>

<Story
  title="Spanish AutumnDecorLayer"
  description="Абсолютный декоративный слой с листьями, книгами и тыквой."
>
  {#snippet children()}
    <div class="preview">
      <AutumnDecorLayer />
    </div>
  {/snippet}
</Story>

<style>
  .preview {
    position: relative;
    container-type: inline-size;
    min-height: 28rem;
    border-radius: 0.5rem;
    background: #fff8ec;
    overflow: hidden;
  }
</style>
