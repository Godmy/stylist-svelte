<script lang="ts">
  import Story from "$stylist/theme/component/molecule/story/index.svelte";
  import ProgramItem from "./index.svelte";
</script>

<Story
  title="Spanish ProgramItem"
  description="Пункт программы урока с цветным кругом и иконкой."
>
  {#snippet children()}
    <ul class="preview">
      <ProgramItem icon="leaf" tone="yellow" label="Осенняя лексика" />
      <ProgramItem icon="gamepad" tone="blue" label="Игра" />
      <ProgramItem icon="music" tone="peach" label="Песенки" />
      <ProgramItem icon="scissors" tone="green" label="Поделка" />
    </ul>
  {/snippet}
</Story>

<style>
  .preview {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 1rem;
    container-type: inline-size;
    margin: 0;
    padding: 1rem;
    background: #fff8ec;
  }
</style>
