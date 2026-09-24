<script lang="ts">
  import AutumnLeaf from "../../atom/autumn-leaf/index.svelte";
  import BrushLabel from "../../atom/brush-label/index.svelte";
  import DoodleIcon from "../../atom/doodle-icon/index.svelte";
  import AutumnDecorLayer from "../../organism/autumn-decor-layer/index.svelte";
  import AutumnHero from "../../organism/autumn-hero/index.svelte";
  import AutumnInstructor from "../../organism/autumn-instructor/index.svelte";
  import AutumnProgram from "../../organism/autumn-program/index.svelte";
  import AutumnSchedule from "../../organism/autumn-schedule/index.svelte";
</script>

<main
  class="spanish-autumn-landing"
  aria-label="Тематический урок испанского языка Otoño"
>
  <AutumnDecorLayer />
  <div class="poster">
    <span class="paper-tape paper-tape--left" aria-hidden="true"></span>
    <span class="paper-tape paper-tape--right" aria-hidden="true"></span>
    <span class="paint-wash paint-wash--top" aria-hidden="true"></span>
    <span class="paint-wash paint-wash--middle" aria-hidden="true"></span>
    <AutumnHero />
    <section class="cta" aria-label="Предварительная запись обязательна">
      <DoodleIcon
        kind="rays"
        tone="orange"
        size={58}
        class="cta-rays cta-rays--left"
      />
      <BrushLabel
        text="Предварительная запись обязательна!"
        tone="orange"
        rotate={-4}
      />
      <AutumnLeaf
        variant="small"
        tone="amber"
        size={44}
        rotate={22}
        class="cta-leaf"
      />
      <DoodleIcon
        kind="rays"
        tone="orange"
        size={52}
        rotate={24}
        class="cta-rays cta-rays--right"
      />
    </section>
    <AutumnProgram />
    <div class="lower-grid">
      <AutumnInstructor />
      <AutumnSchedule />
    </div>
    <div class="closing-row">
      <span class="closing-line" aria-hidden="true"></span>
      <p class="closing">
        ¡Nos vemos<br />en otoño!
        <DoodleIcon kind="heart" tone="blue" size={24} rotate={12} />
      </p>
      <span class="closing-line closing-line--right" aria-hidden="true"></span>
    </div>
  </div>
</main>

<style>
  .spanish-autumn-landing {
    position: relative;
    box-sizing: border-box;
    min-width: 0;
    min-height: 100%;
    padding: clamp(1rem, 3vw, 2.5rem);
    container-type: inline-size;
    background:
      radial-gradient(
        circle at 50% -8%,
        rgb(255 207 102 / 0.38),
        transparent 20rem
      ),
      radial-gradient(
        circle at 74% 13%,
        rgb(211 238 255 / 0.78),
        transparent 15rem
      ),
      radial-gradient(
        circle at 20% 58%,
        rgb(255 231 164 / 0.42),
        transparent 14rem
      ),
      linear-gradient(135deg, rgb(255 255 255 / 0.45), transparent 32%), #fff8ec;
    color: #07518c;
    font-family: "Trebuchet MS", "Arial Rounded MT Bold", system-ui, sans-serif;
    overflow: hidden;
  }

  .poster {
    position: relative;
    z-index: 1;
    display: grid;
    gap: clamp(0.95rem, 2.1cqi, 1.45rem);
    width: min(100%, 853px);
    margin-inline: auto;
    padding: clamp(1rem, 3cqi, 2.15rem) clamp(0.85rem, 3.2cqi, 2.1rem)
      clamp(7.2rem, 16cqi, 10.8rem);
    border: 1px solid rgb(176 112 38 / 0.1);
    border-radius: 1.15rem 0.72rem 1.35rem 0.9rem / 0.9rem 1.35rem 0.8rem 1.2rem;
    background:
      radial-gradient(
        circle at 86% 14%,
        rgb(254 196 63 / 0.16),
        transparent 16rem
      ),
      radial-gradient(
        circle at 16% 76%,
        rgb(255 145 44 / 0.13),
        transparent 15rem
      ),
      linear-gradient(90deg, rgb(255 255 255 / 0.32) 1px, transparent 1px),
      linear-gradient(180deg, rgb(255 255 255 / 0.3) 1px, transparent 1px),
      #fff8ec;
    background-size: 4rem 4rem;
    box-shadow:
      0 2rem 4.8rem rgb(94 56 18 / 0.18),
      0 0.35rem 1rem rgb(166 96 28 / 0.08),
      inset 0 0 0 1px rgb(255 255 255 / 0.72);
    isolation: isolate;
    overflow: hidden;
  }

  .poster::before {
    position: absolute;
    inset: 0;
    z-index: -1;
    background-image:
      radial-gradient(circle, rgb(121 76 30 / 0.08) 0 1px, transparent 1.25px),
      linear-gradient(100deg, rgb(255 255 255 / 0.28), transparent 45%);
    background-position:
      0 0,
      0 0;
    background-size:
      1.6rem 1.6rem,
      auto;
    content: "";
    opacity: 0.45;
    mix-blend-mode: multiply;
  }

  .paper-tape {
    position: absolute;
    top: 0.65rem;
    z-index: 5;
    width: clamp(5rem, 14cqi, 8.5rem);
    height: clamp(1.05rem, 2.6cqi, 1.55rem);
    border-radius: 0.25rem;
    background:
      linear-gradient(
        90deg,
        transparent 0 8%,
        rgb(255 255 255 / 0.28) 8% 12%,
        transparent 12%
      ),
      #ffe2a0;
    box-shadow: 0 0.22rem 0.55rem rgb(132 83 21 / 0.12);
    opacity: 0.78;
    transform: rotate(-7deg);
  }

  .paper-tape--left {
    left: clamp(1rem, 5cqi, 2rem);
  }

  .paper-tape--right {
    right: clamp(1rem, 5cqi, 2rem);
    transform: rotate(8deg);
  }

  .paint-wash {
    position: absolute;
    z-index: -1;
    border-radius: 57% 43% 45% 55% / 52% 38% 62% 48%;
    pointer-events: none;
  }

  .paint-wash--top {
    top: 4.5rem;
    right: -4rem;
    width: clamp(18rem, 42cqi, 28rem);
    height: clamp(14rem, 31cqi, 20rem);
    background: radial-gradient(
      circle at 45% 35%,
      rgb(190 232 255 / 0.72),
      transparent 68%
    );
    transform: rotate(-10deg);
  }

  .paint-wash--middle {
    left: -5rem;
    top: 31rem;
    width: clamp(16rem, 40cqi, 25rem);
    height: clamp(10rem, 23cqi, 15rem);
    background: radial-gradient(
      circle at 48% 52%,
      rgb(255 224 128 / 0.4),
      transparent 69%
    );
    transform: rotate(8deg);
  }

  .cta {
    position: relative;
    z-index: 3;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: clamp(4.1rem, 8cqi, 5.5rem);
    margin-top: clamp(-4rem, -5.4cqi, -1.15rem);
    margin-bottom: clamp(-0.2rem, -0.6cqi, 0rem);
    pointer-events: none;
  }

  .cta::before {
    position: absolute;
    inset: 0.65rem 24% 0.45rem;
    border-radius: 50%;
    background: radial-gradient(
      ellipse,
      rgb(111 59 16 / 0.18),
      transparent 68%
    );
    content: "";
    filter: blur(0.15rem);
    transform: rotate(-4deg);
  }

  .cta :global(.brush) {
    max-width: min(28rem, 78%);
    filter: drop-shadow(0 0.55rem 0.65rem rgb(145 61 17 / 0.2));
    font-family: "Comic Sans MS", "Trebuchet MS", system-ui, sans-serif;
    font-size: clamp(1.05rem, 3.05cqi, 1.65rem);
    line-height: 1.08;
  }

  .cta :global(.brush)::before {
    border-radius: 57% 43% 54% 46% / 45% 58% 42% 55%;
  }

  .cta-rays,
  .cta-leaf {
    position: absolute;
  }

  .cta-rays--left {
    left: clamp(10%, 22cqi, 26%);
  }

  .cta-rays--right {
    right: clamp(9%, 19cqi, 24%);
  }

  .cta-leaf {
    right: clamp(19%, 25cqi, 30%);
    bottom: 0.2rem;
  }

  .lower-grid {
    position: relative;
    z-index: 2;
    display: grid;
    grid-template-columns: minmax(0, 1.4fr) minmax(16rem, 0.82fr);
    gap: clamp(1.2rem, 3.4cqi, 2.3rem);
    align-items: start;
    margin-top: clamp(0.65rem, 1.5cqi, 1rem);
  }

  .lower-grid::before {
    position: absolute;
    left: 8%;
    right: 9%;
    top: 54%;
    z-index: -1;
    height: 3rem;
    border-radius: 50%;
    background: radial-gradient(ellipse, rgb(69 83 87 / 0.11), transparent 72%);
    content: "";
    filter: blur(0.18rem);
  }

  .closing-row {
    position: relative;
    z-index: 2;
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr);
    align-items: center;
    gap: clamp(0.75rem, 2.4cqi, 1.4rem);
    width: min(26rem, 72%);
    justify-self: center;
    margin-top: clamp(0.4rem, 1.2cqi, 0.8rem);
  }

  .closing-line {
    height: 0.16rem;
    border-radius: 999px;
    background: linear-gradient(90deg, transparent, #07518c 38%, #f47a1f);
    opacity: 0.42;
    transform: rotate(-4deg);
  }

  .closing-line--right {
    background: linear-gradient(90deg, #f47a1f, #07518c 62%, transparent);
    transform: rotate(4deg);
  }

  .closing {
    position: relative;
    display: inline-flex;
    align-items: start;
    gap: 0.28rem;
    margin: 0;
    color: #07518c;
    font-family: "Comic Sans MS", "Trebuchet MS", system-ui, sans-serif;
    font-size: clamp(1.25rem, 3.2cqi, 2rem);
    font-weight: 900;
    line-height: 1.02;
    text-align: center;
    transform: rotate(-7deg);
  }

  .closing::after {
    position: absolute;
    left: 0.4rem;
    right: 1.6rem;
    bottom: -0.48rem;
    height: 0.16rem;
    border-radius: 999px;
    background: currentColor;
    content: "";
    transform: rotate(-2deg);
  }

  @container (max-width: 720px) {
    .poster {
      padding-bottom: clamp(12rem, 42cqi, 17rem);
    }

    .cta {
      margin-top: -0.7rem;
    }

    .lower-grid {
      grid-template-columns: 1fr;
    }

    .paper-tape {
      opacity: 0.5;
    }

    .closing-row {
      width: min(24rem, 86%);
      grid-template-columns: 1fr;
      justify-items: center;
    }

    .closing-line {
      display: none;
    }
  }
</style>
