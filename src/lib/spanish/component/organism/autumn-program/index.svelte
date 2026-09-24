<script lang="ts">
  import AutumnLeaf from "../../atom/autumn-leaf/index.svelte";
  import BrushLabel from "../../atom/brush-label/index.svelte";
  import DoodleIcon from "../../atom/doodle-icon/index.svelte";
  import WatercolorPanel from "../../atom/watercolor-panel/index.svelte";
  import ProgramItem from "../../molecule/program-item/index.svelte";

  const items = [
    { icon: "leaf", tone: "yellow", label: "Осенняя лексика" },
    { icon: "gamepad", tone: "blue", label: "Игра" },
    { icon: "music", tone: "peach", label: "Песенки" },
    { icon: "scissors", tone: "green", label: "Поделка" },
  ] as const;
</script>

<section class="program" aria-labelledby="spanish-autumn-program">
  <h2 id="spanish-autumn-program">
    <BrushLabel text="В программе:" rotate={-5} />
  </h2>
  <WatercolorPanel tone="cream" class="program-panel">
    <ul>
      {#each items as item}
        <ProgramItem icon={item.icon} tone={item.tone} label={item.label} />
      {/each}
    </ul>
    <AutumnLeaf
      variant="small"
      tone="orange"
      size={38}
      rotate={-34}
      class="program-leaf program-leaf--left"
    />
    <AutumnLeaf
      variant="oval"
      tone="amber"
      size={35}
      rotate={28}
      class="program-leaf program-leaf--right"
    />
    <DoodleIcon
      kind="heart"
      tone="orange"
      size={25}
      rotate={16}
      class="program-heart"
    />
  </WatercolorPanel>
</section>

<style>
  .program {
    position: relative;
    z-index: 2;
    display: grid;
    gap: 0.35rem;
  }

  h2 {
    margin: 0 0 -0.4rem clamp(1.2rem, 3cqi, 2.4rem);
    font-size: clamp(1.45rem, 3.7cqi, 2.35rem);
    line-height: 1;
  }

  .program-panel {
    position: relative;
    padding: clamp(1.35rem, 3.2cqi, 2.2rem) clamp(1.1rem, 4cqi, 2.5rem);
  }

  ul {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: clamp(0.7rem, 2.6cqi, 1.7rem);
    margin: 0;
    padding: 0;
  }

  .program-leaf,
  .program-heart {
    position: absolute;
    pointer-events: none;
  }

  .program-leaf--left {
    left: 0.9rem;
    bottom: 1.2rem;
  }

  .program-leaf--right {
    right: 0.8rem;
    top: -1.1rem;
  }

  .program-heart {
    right: 2.7rem;
    bottom: 2.2rem;
  }

  @container (max-width: 560px) {
    ul {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }
</style>
