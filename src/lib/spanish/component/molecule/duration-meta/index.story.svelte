<script lang="ts">
  import Story from "$stylist/theme/component/molecule/story/index.svelte";
  import DurationMeta from "./index.svelte";
</script>

<Story title="Spanish DurationMeta" description="Строка длительности урока.">
  {#snippet children()}
    <DurationMeta />
  {/snippet}
</Story>
