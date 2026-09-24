<script lang="ts">
  import Story from "$stylist/theme/component/molecule/story/index.svelte";
  import AgeMetaPill from "./index.svelte";
</script>

<Story
  title="Spanish AgeMetaPill"
  description="Плашка возраста и уровня для осеннего урока."
>
  {#snippet children()}
    <AgeMetaPill />
  {/snippet}
</Story>
