<script lang="ts">
  import AutumnLeaf from "../../atom/autumn-leaf/index.svelte";
  import DoodleIcon from "../../atom/doodle-icon/index.svelte";
  import WatercolorPanel from "../../atom/watercolor-panel/index.svelte";

  const bullets = [
    "20 лет опыта преподавания испанского для взрослых и детей",
    "Основатель онлайн школы «Испанский для всей семьи»",
  ];
</script>

<WatercolorPanel tone="blue" class="instructor-card">
  <section aria-labelledby="spanish-autumn-instructor">
    <h2 id="spanish-autumn-instructor">Проводит:</h2>
    <div class="instructor-layout">
      <div
        class="portrait"
        aria-label="Портрет преподавателя Марины Паваренкиной"
      >
        <span class="portrait-hair"></span>
        <span class="portrait-face"></span>
        <span class="portrait-neck"></span>
        <span class="portrait-shirt"></span>
      </div>
      <div class="instructor-copy">
        <p class="name">
          Марина<br />Паваренкина
          <DoodleIcon kind="heart" tone="blue" size={28} rotate={8} />
        </p>
        <ul>
          {#each bullets as bullet}
            <li>
              <DoodleIcon kind="check" tone="orange" size={24} />
              <span>{bullet}</span>
            </li>
          {/each}
        </ul>
      </div>
    </div>
    <AutumnLeaf
      variant="small"
      tone="orange"
      size={35}
      rotate={25}
      class="decor decor--top"
    />
    <AutumnLeaf
      variant="oval"
      tone="amber"
      size={32}
      rotate={-18}
      class="decor decor--bottom"
    />
  </section>
</WatercolorPanel>

<style>
  .instructor-card {
    padding: clamp(1.1rem, 3cqi, 1.75rem);
    color: #07518c;
  }

  section {
    position: relative;
    display: grid;
    gap: clamp(0.8rem, 1.7cqi, 1.2rem);
  }

  h2 {
    position: relative;
    width: max-content;
    margin: 0;
    font-family: "Comic Sans MS", "Trebuchet MS", system-ui, sans-serif;
    font-size: clamp(1.35rem, 3.4cqi, 2.2rem);
    line-height: 1;
    transform: rotate(-8deg);
  }

  h2::after {
    position: absolute;
    left: 0.1rem;
    right: 0;
    bottom: -0.28rem;
    height: 0.16rem;
    border-radius: 999px;
    background: currentColor;
    content: "";
    transform: rotate(-4deg);
  }

  .instructor-layout {
    display: grid;
    grid-template-columns: minmax(7.5rem, 0.72fr) minmax(0, 1.28fr);
    gap: clamp(1rem, 2.5cqi, 1.7rem);
    align-items: center;
  }

  .portrait {
    position: relative;
    justify-self: center;
    width: min(100%, 10.4rem);
    aspect-ratio: 0.82;
    border: 0.42rem solid rgb(255 255 255 / 0.9);
    border-radius: 48% 52% 50% 50% / 42% 42% 58% 58%;
    background: linear-gradient(#f7f8f6, #e7eef2);
    overflow: hidden;
    box-shadow: 0 0.45rem 1rem rgb(13 69 112 / 0.14);
  }

  .portrait-hair,
  .portrait-face,
  .portrait-neck,
  .portrait-shirt {
    position: absolute;
    display: block;
  }

  .portrait-hair {
    left: 22%;
    top: 12%;
    width: 56%;
    height: 50%;
    border-radius: 50% 50% 48% 48%;
    background: #3e2b24;
  }

  .portrait-face {
    left: 28%;
    top: 19%;
    width: 44%;
    height: 44%;
    border-radius: 46% 54% 50% 50%;
    background:
      radial-gradient(circle at 34% 45%, #2d1b15 0 3%, transparent 4%),
      radial-gradient(circle at 66% 45%, #2d1b15 0 3%, transparent 4%),
      radial-gradient(
        circle at 35% 62%,
        rgb(215 112 88 / 0.32),
        transparent 12%
      ),
      radial-gradient(
        circle at 66% 62%,
        rgb(215 112 88 / 0.32),
        transparent 12%
      ),
      #d7a18b;
  }

  .portrait-neck {
    left: 42%;
    top: 59%;
    width: 16%;
    height: 14%;
    background: #c58a78;
  }

  .portrait-shirt {
    left: 14%;
    right: 14%;
    bottom: -10%;
    height: 42%;
    border-radius: 50% 50% 0 0;
    background: #142a52;
  }

  .instructor-copy {
    display: grid;
    gap: clamp(0.7rem, 1.6cqi, 1.05rem);
    min-width: 0;
  }

  .name {
    position: relative;
    display: inline-flex;
    align-items: start;
    gap: 0.3rem;
    width: max-content;
    max-width: 100%;
    margin: 0;
    font-family: "Comic Sans MS", "Trebuchet MS", system-ui, sans-serif;
    font-size: clamp(1.55rem, 4.1cqi, 2.45rem);
    font-weight: 900;
    line-height: 0.95;
  }

  .name::after {
    position: absolute;
    left: 0.4rem;
    right: 1.5rem;
    bottom: -0.4rem;
    height: 0.18rem;
    border-radius: 999px;
    background: #f47a1f;
    content: "";
    transform: rotate(-3deg);
  }

  ul {
    display: grid;
    gap: 0.72rem;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li {
    display: grid;
    grid-template-columns: auto minmax(0, 1fr);
    gap: 0.55rem;
    align-items: start;
    font-size: clamp(0.86rem, 1.9cqi, 1.05rem);
    font-weight: 700;
    line-height: 1.22;
  }

  .decor {
    position: absolute;
    pointer-events: none;
  }

  .decor--top {
    right: 12%;
    top: -1.4rem;
  }

  .decor--bottom {
    left: 38%;
    bottom: -1.3rem;
  }

  @container (max-width: 560px) {
    .instructor-layout {
      grid-template-columns: 1fr;
    }
  }
</style>
