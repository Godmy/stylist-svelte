<script lang="ts">
  import BrushLabel from "../../atom/brush-label/index.svelte";
  import DoodleIcon from "../../atom/doodle-icon/index.svelte";
  import WatercolorPanel from "../../atom/watercolor-panel/index.svelte";
</script>

<WatercolorPanel tone="blue" class="schedule-card">
  <section aria-labelledby="spanish-autumn-schedule">
    <header>
      <DoodleIcon kind="calendar" tone="blue" size={46} />
      <h2 id="spanish-autumn-schedule">Когда?</h2>
    </header>
    <BrushLabel text="Только суббота" rotate={-3} class="schedule-label" />
    <p>в 17:00 Мск</p>
    <DoodleIcon
      kind="heart"
      tone="orange"
      size={35}
      rotate={6}
      class="schedule-heart"
    />
  </section>
</WatercolorPanel>

<style>
  .schedule-card {
    padding: clamp(1.15rem, 3.3cqi, 1.9rem);
    color: #07518c;
  }

  section {
    display: grid;
    justify-items: center;
    gap: clamp(0.75rem, 2cqi, 1.15rem);
    text-align: center;
  }

  header {
    position: relative;
    display: inline-flex;
    align-items: center;
    gap: 0.55rem;
  }

  header::after {
    position: absolute;
    right: -1.2rem;
    top: 38%;
    width: 1.1rem;
    height: 0.18rem;
    border-radius: 999px;
    background: #f47a1f;
    content: "";
    transform: rotate(-20deg);
  }

  h2 {
    position: relative;
    margin: 0;
    font-family: "Comic Sans MS", "Trebuchet MS", system-ui, sans-serif;
    font-size: clamp(1.55rem, 3.9cqi, 2.3rem);
    font-weight: 900;
    line-height: 1;
  }

  h2::after {
    position: absolute;
    left: 0.1rem;
    right: 0;
    bottom: -0.32rem;
    height: 0.16rem;
    border-radius: 999px;
    background: #f47a1f;
    content: "";
    transform: rotate(-4deg);
  }

  .schedule-label {
    font-size: clamp(1rem, 2.25cqi, 1.32rem);
  }

  p {
    margin: 0;
    font-size: clamp(1.65rem, 4.2cqi, 2.55rem);
    font-weight: 900;
    line-height: 1.05;
  }

  .schedule-heart {
    margin-top: -0.2rem;
  }
</style>
