<script lang="ts">
  import BrushLabel from "../../atom/brush-label/index.svelte";
  import DoodleIcon from "../../atom/doodle-icon/index.svelte";
</script>

<div class="hero-title">
  <p class="brand">
    <span>Español para niños</span>
    <DoodleIcon kind="heart" tone="blue" size={22} rotate={-10} />
  </p>
  <BrushLabel text="Тематический урок" rotate={-3} class="topic" />
  <div class="main-title-wrap">
    <DoodleIcon
      kind="rays"
      tone="orange"
      size={72}
      class="title-rays title-rays--left"
    />
    <h1 id="spanish-autumn-title">Otoño</h1>
    <DoodleIcon
      kind="rays"
      tone="orange"
      size={70}
      rotate={35}
      class="title-rays title-rays--right"
    />
  </div>
  <p class="subtitle">El otoño</p>
  <p class="intro">Испанский язык через яркие образы, игру и творчество!</p>
</div>

<style>
  .hero-title {
    position: relative;
    display: grid;
    align-content: start;
    justify-items: start;
    gap: clamp(0.5rem, 1.4cqi, 0.95rem);
    min-width: 0;
    color: #07518c;
  }

  .brand {
    display: inline-flex;
    align-items: center;
    gap: 0.42rem;
    margin: 0 0 0.1rem;
    transform: rotate(-10deg);
    font-size: clamp(1rem, 2.65cqi, 1.5rem);
    font-weight: 850;
    line-height: 1;
  }

  .brand span {
    display: inline-block;
    border-bottom: 0.16rem solid #f47a1f;
    padding-bottom: 0.18rem;
  }

  .topic {
    margin-left: clamp(2.2rem, 6cqi, 4rem);
    font-size: clamp(0.95rem, 2.2cqi, 1.35rem);
  }

  .main-title-wrap {
    position: relative;
    min-width: 0;
  }

  h1 {
    position: relative;
    z-index: 1;
    margin: 0;
    color: #ff5a12;
    font-family: "Comic Sans MS", "Trebuchet MS", system-ui, sans-serif;
    font-size: clamp(4.2rem, 14.8cqi, 8.2rem);
    font-weight: 900;
    letter-spacing: 0;
    line-height: 0.84;
    text-shadow: 0 0.06em 0 rgb(255 184 93 / 0.2);
  }

  .subtitle {
    margin: -0.22em 0 0 clamp(0.45rem, 1.8cqi, 1.2rem);
    font-family: "Comic Sans MS", "Trebuchet MS", system-ui, sans-serif;
    font-size: clamp(2.95rem, 8.4cqi, 5.2rem);
    font-weight: 900;
    line-height: 0.9;
  }

  .intro {
    max-width: 21rem;
    margin: 0.12rem 0 0;
    overflow-wrap: anywhere;
    font-size: clamp(1rem, 2.45cqi, 1.36rem);
    font-weight: 750;
    line-height: 1.32;
  }

  .title-rays {
    position: absolute;
    z-index: 0;
    pointer-events: none;
  }

  .title-rays--left {
    top: 16%;
    left: -4.8rem;
  }

  .title-rays--right {
    top: 18%;
    right: -4.4rem;
  }

  @container (max-width: 620px) {
    .title-rays--left,
    .title-rays--right {
      display: none;
    }
  }
</style>
