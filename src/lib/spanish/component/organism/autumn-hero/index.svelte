<script lang="ts">
  import AutumnLeaf from "../../atom/autumn-leaf/index.svelte";
  import DoodleIcon from "../../atom/doodle-icon/index.svelte";
  import AgeMetaPill from "../../molecule/age-meta-pill/index.svelte";
  import DurationMeta from "../../molecule/duration-meta/index.svelte";
  import HeroTitleGroup from "../../molecule/hero-title-group/index.svelte";
</script>

<section class="hero" aria-labelledby="spanish-autumn-title">
  <div class="hero-copy">
    <HeroTitleGroup />
    <div class="meta-stack">
      <AgeMetaPill />
      <DurationMeta />
    </div>
  </div>
  <div class="hero-art" aria-hidden="true">
    <div class="sky"></div>
    <div class="sun-glow"></div>
    <div class="tree-branch"></div>
    <AutumnLeaf
      variant="maple"
      tone="orange"
      size={74}
      rotate={18}
      class="tree-leaf tree-leaf--one"
    />
    <AutumnLeaf
      variant="maple"
      tone="amber"
      size={64}
      rotate={-22}
      class="tree-leaf tree-leaf--two"
    />
    <AutumnLeaf
      variant="oval"
      tone="yellow"
      size={42}
      rotate={12}
      class="tree-leaf tree-leaf--three"
    />
    <div class="hello-note">
      <span>¡Hola,<br />otoño!</span>
      <DoodleIcon kind="heart" tone="blue" size={25} rotate={10} />
    </div>
    <div class="girl">
      <span class="girl-shadow"></span>
      <div class="hat"><span></span></div>
      <div class="hair hair--left"></div>
      <div class="hair hair--right"></div>
      <div class="face">
        <span class="eye eye--left"></span>
        <span class="eye eye--right"></span>
        <span class="nose"></span>
        <span class="smile"></span>
        <span class="cheek cheek--left"></span>
        <span class="cheek cheek--right"></span>
      </div>
      <div class="sleeve sleeve--left"></div>
      <div class="sleeve sleeve--right"></div>
      <div class="hand hand--left"></div>
      <div class="hand hand--right"></div>
      <div class="scarf"></div>
    </div>
    <div class="squirrel">
      <span class="squirrel-tail"></span>
      <span class="squirrel-body"></span>
      <span class="squirrel-head"></span>
      <span class="acorn"></span>
    </div>
    <div class="ground-shadow"></div>
    <div class="leaf-bed">
      <AutumnLeaf variant="maple" tone="russet" size={58} rotate={-58} />
      <AutumnLeaf variant="oval" tone="yellow" size={52} rotate={74} />
      <AutumnLeaf variant="small" tone="orange" size={42} rotate={18} />
    </div>
  </div>
</section>

<style>
  .hero {
    position: relative;
    z-index: 1;
    display: grid;
    grid-template-columns: minmax(0, 0.96fr) minmax(18rem, 1.04fr);
    gap: clamp(0.5rem, 2cqi, 1.6rem);
    align-items: start;
    min-width: 0;
  }

  .hero-copy {
    display: grid;
    gap: clamp(1rem, 2.5cqi, 1.65rem);
    padding-top: clamp(0.6rem, 2cqi, 1.1rem);
  }

  .hero-copy::before {
    position: absolute;
    left: -1.2rem;
    top: 5.4rem;
    z-index: -1;
    width: clamp(12rem, 32cqi, 18rem);
    height: clamp(9rem, 21cqi, 13rem);
    border-radius: 55% 45% 60% 40% / 42% 56% 44% 58%;
    background: radial-gradient(
      circle,
      rgb(255 230 150 / 0.28),
      transparent 68%
    );
    content: "";
    transform: rotate(-10deg);
  }

  .meta-stack {
    display: grid;
    justify-items: start;
    gap: clamp(0.75rem, 1.8cqi, 1.15rem);
  }

  .hero-art {
    position: relative;
    min-height: clamp(28rem, 59cqi, 39rem);
    overflow: visible;
  }

  .sky {
    position: absolute;
    inset: 2% 3% 26% 4%;
    border-radius: 55% 45% 52% 48% / 42% 58% 42% 58%;
    background:
      radial-gradient(
        circle at 62% 20%,
        rgb(255 255 255 / 0.82),
        transparent 20%
      ),
      linear-gradient(140deg, #d9f1ff, #fff2d1 78%);
    opacity: 0.88;
    transform: rotate(-4deg);
  }

  .sun-glow {
    position: absolute;
    right: 19%;
    top: 18%;
    width: clamp(7rem, 17cqi, 10.5rem);
    aspect-ratio: 1;
    border-radius: 50%;
    background: radial-gradient(
      circle,
      rgb(255 207 89 / 0.52),
      transparent 68%
    );
    filter: blur(0.08rem);
  }

  .tree-branch {
    position: absolute;
    top: -3.2rem;
    right: -1.4rem;
    width: 17rem;
    height: 3.6rem;
    border-radius: 999px;
    background:
      linear-gradient(90deg, rgb(255 255 255 / 0.13), transparent 38%),
      linear-gradient(90deg, #9b5424, #5f331c);
    transform: rotate(-24deg);
    transform-origin: right center;
  }

  .tree-leaf,
  .leaf-bed {
    position: absolute;
  }

  .tree-leaf--one {
    top: -0.25rem;
    right: 2rem;
  }

  .tree-leaf--two {
    top: 2.1rem;
    right: 8rem;
  }

  .tree-leaf--three {
    top: 4.4rem;
    right: 1.1rem;
  }

  .hello-note {
    position: absolute;
    top: 11%;
    left: 10%;
    display: flex;
    align-items: start;
    gap: 0.2rem;
    color: #075a98;
    font-family: "Comic Sans MS", "Trebuchet MS", system-ui, sans-serif;
    font-size: clamp(1.2rem, 3.4cqi, 2rem);
    font-weight: 900;
    line-height: 0.98;
    transform: rotate(-12deg);
    text-shadow: 0 0.12rem 0 rgb(255 255 255 / 0.55);
  }

  .hello-note::before,
  .hello-note::after {
    position: absolute;
    width: 1.3rem;
    height: 0.18rem;
    border-radius: 999px;
    background: #075a98;
    content: "";
  }

  .hello-note::before {
    left: -1.3rem;
    top: 1.2rem;
    transform: rotate(18deg);
  }

  .hello-note::after {
    right: -1.5rem;
    bottom: 0.7rem;
    transform: rotate(-20deg);
  }

  .girl {
    position: absolute;
    right: 9%;
    bottom: 13%;
    width: min(74%, 24.5rem);
    aspect-ratio: 0.9;
  }

  .girl-shadow {
    position: absolute;
    left: 12%;
    right: 8%;
    bottom: 2%;
    height: 16%;
    border-radius: 50%;
    background: radial-gradient(ellipse, rgb(92 50 21 / 0.18), transparent 72%);
    transform: rotate(-4deg);
  }

  .face {
    position: absolute;
    left: 18%;
    top: 25%;
    width: 64%;
    height: 53%;
    border-radius: 48% 52% 46% 54% / 46% 48% 52% 54%;
    background:
      radial-gradient(circle at 25% 66%, #f79b7e 0 8%, transparent 9%),
      radial-gradient(circle at 74% 66%, #f79b7e 0 8%, transparent 9%), #ffd2ae;
    box-shadow:
      inset 0 -0.6rem 1.2rem rgb(196 85 38 / 0.08),
      0 0.45rem 0.85rem rgb(117 54 22 / 0.08);
  }

  .face::before {
    position: absolute;
    left: 16%;
    right: 16%;
    top: 23%;
    height: 1.6rem;
    border-radius: 50%;
    background: radial-gradient(
      ellipse,
      rgb(255 255 255 / 0.24),
      transparent 68%
    );
    content: "";
  }

  .hat {
    position: absolute;
    left: 14%;
    top: 7%;
    z-index: 3;
    width: 68%;
    height: 30%;
    border-radius: 52% 48% 18% 18% / 76% 78% 22% 22%;
    background: repeating-linear-gradient(
      90deg,
      #e9a625 0 0.65rem,
      #ffc653 0.65rem 1.1rem
    );
    transform: rotate(-6deg);
    box-shadow:
      inset 0 -0.7rem 0 rgb(181 109 17 / 0.2),
      0 0.35rem 0.8rem rgb(102 54 16 / 0.14);
  }

  .hat span {
    position: absolute;
    right: 0.5rem;
    top: -1.9rem;
    width: 4.2rem;
    height: 4.2rem;
    border-radius: 50%;
    background: #eba92d;
    box-shadow:
      inset 0 0 0 0.45rem rgb(255 211 103 / 0.44),
      0 0.25rem 0.5rem rgb(92 54 14 / 0.14);
  }

  .hair {
    position: absolute;
    z-index: 1;
    background:
      radial-gradient(
        circle at 42% 28%,
        rgb(255 169 80 / 0.28),
        transparent 28%
      ),
      #9a481e;
  }

  .hair--left {
    left: 2%;
    top: 30%;
    width: 34%;
    height: 48%;
    border-radius: 58% 35% 60% 40%;
    transform: rotate(18deg);
  }

  .hair--right {
    right: 5%;
    top: 28%;
    width: 32%;
    height: 50%;
    border-radius: 42% 58% 38% 62%;
    transform: rotate(-14deg);
  }

  .eye {
    position: absolute;
    top: 37%;
    width: 16%;
    aspect-ratio: 1;
    border: 0.24rem solid #5b2b17;
    border-radius: 50%;
    background: radial-gradient(
      circle at 34% 30%,
      white 0 14%,
      #3b1e13 15% 42%,
      #16100c 43%
    );
  }

  .eye--left {
    left: 23%;
  }

  .eye--right {
    right: 23%;
  }

  .nose {
    position: absolute;
    left: 50%;
    top: 51%;
    width: 0.45rem;
    height: 0.32rem;
    border-radius: 50%;
    background: #d98262;
    transform: translateX(-50%);
  }

  .smile {
    position: absolute;
    left: 50%;
    top: 61%;
    width: 22%;
    height: 12%;
    border-bottom: 0.2rem solid #9b4a32;
    border-radius: 50%;
    transform: translateX(-50%);
  }

  .cheek {
    position: absolute;
    top: 59%;
    width: 14%;
    aspect-ratio: 1;
    border-radius: 50%;
    background: rgb(239 118 86 / 0.35);
  }

  .cheek--left {
    left: 14%;
  }

  .cheek--right {
    right: 14%;
  }

  .sleeve,
  .hand {
    position: absolute;
    z-index: 4;
  }

  .sleeve {
    bottom: 4%;
    width: 25%;
    height: 34%;
    border-radius: 999px;
    background: repeating-linear-gradient(
      90deg,
      #cb5521 0 0.38rem,
      #e46a26 0.38rem 0.8rem
    );
    box-shadow: inset 0 -0.55rem 0 rgb(118 48 17 / 0.14);
  }

  .sleeve--left {
    left: 17%;
    transform: rotate(16deg);
  }

  .sleeve--right {
    right: 17%;
    transform: rotate(-16deg);
  }

  .hand {
    bottom: 30%;
    width: 18%;
    aspect-ratio: 1;
    border-radius: 50%;
    background: #ffd2ae;
    box-shadow: inset 0 -0.25rem 0 rgb(201 110 74 / 0.15);
  }

  .scarf {
    position: absolute;
    left: 34%;
    right: 34%;
    bottom: 17%;
    z-index: 5;
    height: 9%;
    border-radius: 999px;
    background: #f48b24;
    box-shadow: inset 0 -0.22rem 0 rgb(143 66 16 / 0.16);
    transform: rotate(-3deg);
  }

  .scarf::after {
    position: absolute;
    right: -1.4rem;
    top: 45%;
    width: 2.1rem;
    height: 0.85rem;
    border-radius: 999px;
    background: #df6420;
    content: "";
    transform: rotate(21deg);
  }

  .hand--left {
    left: 21%;
  }

  .hand--right {
    right: 21%;
  }

  .squirrel {
    position: absolute;
    right: 0.3rem;
    bottom: 11%;
    width: 7.4rem;
    height: 9rem;
  }

  .squirrel-tail,
  .squirrel-body,
  .squirrel-head,
  .acorn {
    position: absolute;
    display: block;
  }

  .squirrel-tail {
    right: 0;
    top: 0;
    width: 5.2rem;
    height: 7rem;
    border-radius: 55% 45% 55% 45%;
    background:
      radial-gradient(circle at 54% 28%, #ffbf58, transparent 24%),
      radial-gradient(circle at 58% 35%, #f6a13a, #b95b22 72%);
    box-shadow: inset -0.25rem -0.4rem 0 rgb(99 46 18 / 0.12);
  }

  .squirrel-body {
    left: 1.2rem;
    bottom: 0.8rem;
    width: 3.8rem;
    height: 4.8rem;
    border-radius: 52% 48% 42% 58%;
    background: #d8782b;
    box-shadow: inset -0.3rem -0.35rem 0 rgb(119 54 20 / 0.14);
  }

  .squirrel-head {
    left: 0.6rem;
    top: 2.5rem;
    width: 3rem;
    height: 2.6rem;
    border-radius: 50%;
    background: #e58a37;
    box-shadow: inset -0.18rem -0.2rem 0 rgb(116 55 20 / 0.14);
  }

  .squirrel-head::before {
    position: absolute;
    left: 0.6rem;
    top: 0.72rem;
    width: 0.38rem;
    aspect-ratio: 1;
    border-radius: 50%;
    background: #24130d;
    content: "";
  }

  .acorn {
    left: 2.4rem;
    bottom: 2rem;
    width: 1.2rem;
    height: 1.45rem;
    border-radius: 48% 52% 58% 42%;
    background: #7b461c;
  }

  .acorn::before {
    position: absolute;
    left: -0.08rem;
    right: -0.08rem;
    top: -0.25rem;
    height: 0.48rem;
    border-radius: 999px;
    background: #a46a2d;
    content: "";
  }

  .ground-shadow {
    position: absolute;
    right: 1%;
    bottom: 7%;
    width: 86%;
    height: 16%;
    border-radius: 50%;
    background:
      radial-gradient(
        ellipse at 58% 50%,
        rgb(120 67 21 / 0.16),
        transparent 65%
      ),
      radial-gradient(
        ellipse at 34% 45%,
        rgb(241 157 41 / 0.2),
        transparent 62%
      );
    filter: blur(0.05rem);
    transform: rotate(-3deg);
  }

  .leaf-bed {
    right: 6%;
    bottom: 4%;
    display: flex;
    align-items: end;
    gap: -0.6rem;
  }

  @container (max-width: 720px) {
    .hero {
      grid-template-columns: 1fr;
    }

    .hero-art {
      min-height: 27rem;
    }
  }
</style>
